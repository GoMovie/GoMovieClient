import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

console.log(routes)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
