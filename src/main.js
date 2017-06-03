// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Element & ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// Add axios support
import axios from 'axios'

// Add VueX support
import store from './store/index.js'

import App from './App'
import router from './router'

import config from './url-config'

Vue.prototype.$http = axios
axios.defaults.baseURL = config.webServerURL
// axios.defaults.baseURL = config.testUrl

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
