import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// import config from '../url-config'
import cinemas from './cinemas'
import screenings from './screenings'
import orders from './orders'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    users: [],
    movies: [],
    cinemas,
    screenings,
    orders,
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
      for (let item of buff) {
        item.imageUrl = item.imageUrl.replace(/spst/, 'lpst')
      }
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
    },
    addOrder: (state, order) => {
      state.orders.push(order)
    }
  },
  actions: {
    async getMovieInfo ({ commit }) {
      let {data} = await axios.get('/movies')
      commit('buffMovieInfo', data)
    }
  }
})
