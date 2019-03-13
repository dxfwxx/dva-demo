// import { message } from 'antd';
// import { routerRedux } from 'dva/router';
// import { getUserInfo, saveLocal } from '@utils';
import {login, logout} from '../services/login';

export default {
    namespace: 'login',  //表示在全局 state 上的 key
    state: [],
    state: {
        isLogin: false,
        winHeight: 600,
      },
    reducers: {
        logIn(state) {
            return { ...state, isLogin: true };
        },
        noLogin(state) {
            return { ...state, isLogin: false };
        },
        save(state, { data }) {
            // saveLocal('userInfo', data);
            return { ...state };
        },
        setWinHeight(state, { winHeight }) {
            return { ...state, winHeight };
        },
    },
    effects: {
        * login({ values }, { call, put }) {
          const { data } = yield call(login, { ...values });
          if (data.success) {
            yield put({
              type: 'save',
              data: data.data,
            });
            window.location.replace('/#/blogList');
          } 
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
            if (pathname === '/login') {
                const winHeight = (window.innerHeight || window.document.documentElement.height) - 115;
                dispatch({
                    type: 'setWinHeight',
                    winHeight,
                });
                // const userInfo = getUserInfo();
                // console.log(userInfo);
                // if (userInfo.userAccount) {
                // // alert('logIn1 => true');
                //     dispatch({ type: 'logIn' });
                // } else {
                // // alert('noLogin1 => false');
                //     dispatch({ type: 'noLogin' });
                // }
            }
            });
        },
    },
}