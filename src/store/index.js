import Vue from 'vue'
import Vuex from 'vuex'

import config from '../url-config'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    baseURL: config.webServerURL,
    movieInfo: [],
    userInfo: {
      isLogin: false
    }
  },
  mutations: {
    updateMovieInfo: (state, newInfo) => {
      state.movieInfo = newInfo
    }
  }
})
