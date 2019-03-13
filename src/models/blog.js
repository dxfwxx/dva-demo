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
    pagination: {
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: total => `共 ${total} 条`,
        current: 1,
        total: 0,
        size: 'default',
        pageSizeOptions: ['10', '20', '50', '100'],
    },
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
                        total: data.data.data.totalCount,
                        current: data.data.data.page,
                        showTotal: total => `共 ${data.data.data.pages} 条`,
                        size: data.data.data.pageSize,
                        pageSizeOptions: ['10', '20', '50', '100'],
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
              'pageSize': 1,
              'pageNum': 2
            }
        });
    },
  },

}
