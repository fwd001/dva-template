
const post = (url, params) => {
  console.log(url, params);
  return {success: 'ok', list: [2,2,2,2,2]}
}

export default {

  namespace: 'example',

  state: {
    list: [1,2,3,4,5],
    moduleName: 'example'
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    * add({payload}, {call, put , select}) {
      const response = yield call(post, 'url', payload)
      if(response.success && response.list) {
        yield put ({
          type: 'revese',
          payload: {list: response.list}
        })
      }


    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    revese(state, action) {
      return {...state, ...action.payload}
    }
  },

};
