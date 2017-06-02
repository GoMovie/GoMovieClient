import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// import config from '../url-config'
import cinemas from './cinemas'
import screenings from './screenings'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    movies: [],
    cinemas,
    screenings,
    userInfo: {
      isLogin: false
    }
  },
  mutations: {
    updateMenuFocus: (state, focus) => {
      state.isMenuFocus = focus
    },
    buffMovieInfo: (state, buff) => {
      state.movies = buff
    },
    toggleLoginState: (state) => {
      state.userInfo.isLogin = !state.userInfo.isLogin
    },
    updateLoginState: (state, newLoginState) => {
      state.userInfo.isLogin = newLoginState
    }
  },
  actions: {
    async getMovieInfo ({ commit }) {
      let {data} = await axios.get('/movies')
      commit('buffMovieInfo', data)
    }
  }
})
