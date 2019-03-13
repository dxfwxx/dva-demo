import React from 'react';
import { view } from '../services/blog';
import pathToRegexp from 'path-to-regexp';

export default {
  namespace: 'desc',
  state: {
    id: '',
    title: '', 
    author: '',
    date: '',
    content: '',
    tags: '',
    readSize: 0,
  },

  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    },
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
  },

  effects: {
    * queryBlogById({payload}, {call, put, select }) {
        const {id} = yield select(state => state.desc);
        const data = yield call(view, {id});
        if(data && data.code === 200) {
          yield put({
            type: 'querySuccess',
            payload: {
              id: data.data.data.id,
              title: data.data.data.title,
              content: data.data.data.content,
              date: data.data.data.createTime,
              tags: data.data.data.tags,
              readSize: data.data.data.readSize,
            }
          })
        }
    },
    * init({payload}, {put, select}) {
        const {id} = yield select(state => state.routing.locationBeforeTransitions.state);
        yield put({
          type: 'updateState',
          payload: {
            id,
          }
        })
    }
  },

  subscirptions: {
    setup({dispatch, history}) {
      console.log('111111111');
      history.listen((location) => {
        if (location.pathname.indexOf('/blog/desc') >= 0) {
          dispatch({
            type: 'init',
          });
          dispatch({
            type: 'queryBlogById',
          })
        }
      })
    }
  }

}