import Vue from 'vue'
import Vuex from 'vuex'

import config from '../url-config'
import movieBuff from './movie-buff'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    baseURL: config.webServerURL,
    movieBuff,  //  TODO replaced by the data provided by server
    userInfo: {
      isLogin: false
    }
  },
  mutations: {
    buffMovieInfo: (state, buff) => {
      state.movieBuff = buff
    },
    toggleLoginState: (state) => {
      state.userInfo.isLogin = !state.userInfo.isLogin
    },
    updateLoginState: (state, newLoginState) => {
      state.userInfo.isLogin = newLoginState
    }
  }
})
