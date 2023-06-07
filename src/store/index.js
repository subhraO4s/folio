import { createStore } from 'vuex'
import auth from './modules/auth'
import addContent from './modules/addContent'
import portfolioSettings from './modules/portfolioSettings'
const store = createStore({
  modules: {
    auth,
    addContent,
    portfolioSettings
  }
})

export default store
