import Vue from 'vue'
import App from './App'
import router from './router'
import './common/styles/index.styl'
import 'element-ui/lib/theme-default/index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
