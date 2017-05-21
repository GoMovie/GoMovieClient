import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
