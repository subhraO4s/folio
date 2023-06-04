const getDetfaultValues = () => {
  return {
    title: '',
    abstract: '',
    details: ''
  }
}
const addContent = {
  namespaced: true,
  state: () => getDetfaultValues(),
  mutations: {
    setTitle(state, new_state) {
      state.title = new_state
    },
    setAbstract(state, new_state) {
      state.abstract = new_state
    },
    setDetails(state, new_state) {
      state.details = new_state
    }
  },
  getters: {
    getTitle(state) {
      return state.title
    },
    getAbstract(state) {
      return state.abstract
    },
    getDetails(state) {
      return state.details
    }
  },
  actions: {
    saveAllData(context, payload) {
      context.commit('setTitle', payload.title)
      context.commit('setAbstract', payload.abstract)
      context.commit('setDetails', payload.details)
    }
  }
}

export default addContent
