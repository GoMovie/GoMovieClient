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
    users: [],
    movies: [],
    cinemas,
    screenings,
    userInfo: {
      username: '',
      password: '',
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
    login: (state, user) => {
      state.userInfo.isLogin = true
      state.userInfo.username = user.username
      state.userInfo.password = user.password
    },
    logout: (state) => {
      state.userInfo.isLogin = false
      state.userInfo.username = ''
      state.userInfo.password = ''
    },
    addUser: (state, user) => {
      state.users.push(user)
    }
  },
  actions: {
    async getMovieInfo ({ commit }) {
      let {data} = await axios.get('/movies')
      commit('buffMovieInfo', data)
    }
  }
})
