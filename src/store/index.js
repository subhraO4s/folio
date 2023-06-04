import { createStore } from 'vuex'
import auth from './modules/auth'
import addContent from './modules/addContent'
const store = createStore({
  modules: {
    auth,
    addContent
  }
})

export default store
