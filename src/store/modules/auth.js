const getDetfaultValues = () => {
  return {
    userEmail: '',
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
    setUserEmail(state, new_state) {
      state.userEmail = new_state
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
    getUserEmail(state) {
      return state.userEmail
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
      context.commit('setUserEmail', payload.email)
      context.commit('setUserId', payload.uid)
      context.commit('setIsVerified', payload.isVerified)
    },
    saveLoginData(context, payload) {
      context.commit('setIsLoggedIn', payload.isLoggedIn)
      context.commit('setSessionId', payload.sessionId)
    },
    saveIsLogin(context, payload) {
      context.commit('setIsLoggedIn', payload)
    },
    saveIsVerified(context, payload) {
      context.commit('setIsVerified', payload)
    }
  }
}

export default auth
