import { message } from 'antd';
import { routerRedux } from 'dva/router';
// import { getUserInfo, saveLocal } from '@utils';
import {query} from '../services/blog';

export default {
  namespace: 'blogs',  //表示在全局 state 上的 key
  state: {
    dataSource: [],
    loading: false,
    searchWord: null,
    pagination: {},
  },
  reducers : {
      delete(state, {payload: id}) {
          return state.filter(item => item.id !== id);
      },
      create(state, {payload}) {
          return state.create(payload);
      },
      querySuccess(state, action) {
        return { ...state, ...action.payload };
      },
  },
  effects: {
      * query({payload}, {call, put}) {
          const data = yield call(query, {...payload});
          if (data.data && data.data.success) {
            yield put({
                type: 'querySuccess',
                payload: {
                    dataSource: data.data.data.list,
                    pagination: {
                        total: data.data.data.total,
                        current: data.data.data.pageNum,
                        showTotal: total => `共 ${total} 条`,
                        pageSize: data.data.data.pageSize,
                        pageSizeOptions: ['10', '20', '50', '100'],
                        showSizeChanger: true,
                        showQuickJumper: true,
                    }
                }
            })
          }
      }
  },
  subscriptions: {
    setup({ dispatch, history }) {
        dispatch({
            type: 'blogs/query',
            payload: {
              'pageSize': 10,
              'pageNum': 1
            }
        });
    },
  },

}
