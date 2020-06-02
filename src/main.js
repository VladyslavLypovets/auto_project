import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Multiselect from 'vue-multiselect'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import Carousel from 'vue-owl-carousel2'
import '@/assets/fonts/clearsans.css'
import '@/assets/css/global.css'

Vue.config.productionTip = false
Vue.component('multiselect', Multiselect)
Vue.component('Carousel', Carousel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
