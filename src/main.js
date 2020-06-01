import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/fonts/clearsans.css'
import '@/assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
