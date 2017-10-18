import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import './common/styles/index.styl'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
