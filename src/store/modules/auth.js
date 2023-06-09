const getDetfaultValues = () => {
  return {
    userName: '',
    userId: '',
    isVerified: false,
    isLoggedIn: false,
    sessionId: ''
  }
}

const auth = {
  namespaced: true,
  state: () => getDetfaultValues(),
  mutations: {
    setUserName(state, new_state) {
      state.userName = new_state
    },
    setIsLoggedIn(state, new_state) {
      state.isLoggedIn = new_state
    },
    setIsVerified(state, new_state) {
      state.isVerified = new_state
    },
    setSessionId(state, new_state) {
      state.sessionId = new_state
    },
    setUserId(state, new_state) {
      state.userId = new_state
    }
  },
  getters: {
    getUserName(state) {
      return state.userName
    },
    getIsLoggedIn(state) {
      return state.isLoggedIn
    },
    getIsVerified(state) {
      return state.isVerified
    },
    getSessionId(state) {
      return state.sessionId
    },
    getUserId(state) {
      return state.userId
    }
  },
  actions: {
    saveSingupData(context, payload) {
      if (payload.uid) {
        context.commit('setUserId', payload.uid)
      }
      if (payload.isVerified) {
        context.commit('setIsVerified', payload.isVerified)
      }
    },
    saveLoginData(context, payload) {
      if (payload.sessionId) {
        context.commit('setSessionId', payload.sessionId)
      }
      if (payload.uid) {
        context.commit('setUserId', payload.uid)
      }
    },
    saveUserName(context, payload) {
      context.commit('setUserName', payload)
    },
    saveUserId(context, payload) {
      context.commit('setUserId', payload)
    }
  }
}

export default auth
