const getDetfaultValues = () => {
  return {
    isEditMode: false,
    documentId: '',
    title: '',
    abstract: '',
    content: ''
  }
}
const addContent = {
  namespaced: true,
  state: () => getDetfaultValues(),
  mutations: {
    resetState(state, new_state) {
      state = getDetfaultValues()
    },
    setIsEditMode(state, new_state) {
      state.isEditMode = new_state
    },
    setDocumentId(state, new_state) {
      state.documentId = new_state
    },
    setTitle(state, new_state) {
      state.title = new_state
    },
    setAbstract(state, new_state) {
      state.abstract = new_state
    },
    setContent(state, new_state) {
      state.content = new_state
    }
  },
  getters: {
    getIsEditMode(state) {
      return state.isEditMode
    },
    getDocumentId(state) {
      return state.documentId
    },
    getTitle(state) {
      return state.title
    },
    getAbstract(state) {
      return state.abstract
    },
    getContent(state) {
      return state.content
    }
  },
  actions: {
    saveAllData(context, payload) {
      context.commit('setTitle', payload.title)
      context.commit('setAbstract', payload.abstract)
      context.commit('setContent', payload.content)
      context.commit('setDocumentId', payload.documentId)
    },
    updateEditMode(context, payload) {
      context.commit('setIsEditMode', payload)
    },
    resetAllData(context, payload) {
      context.commit('resetState')
    }
  }
}

export default addContent
