import { message } from 'antd';
import { routerRedux } from 'dva/router';
// import { getUserInfo, saveLocal } from '@utils';
import {query} from '../services/blog';

export default {
    namespace: 'blogs',  //表示在全局 state 上的 key
    state: {
        list: [{
            content: 'blog',
            msg: 'java',
            tags: 'react',
            desc: 'java+react',
        }],
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
        'delete'(state, {payload: id}) {
            return state.filter(item => item.id !== id);
        },
        'create'(state, {payload}) {
            return state.create(payload);
        }
    },
    effects: {
        * query({payload}, {call, put}) {
            const data = yield call(query, {...payload});
            if (data.data && data.data.success) {
                yield put({
                    type: 'querySuccess',
                    payload: {
                        list: data.data.data.page.data,
                        pagination: {
                            total: data.data.data.page.totalCount,
                            current: data.data.data.page.page,
                            showTotal: total => `共 ${total} 条`,
                            size: data.data.data.page.limit,
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
                payload: {}
            });
        },
      },

}