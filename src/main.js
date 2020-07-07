import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Multiselect from 'vue-multiselect'
import Vuetify from 'vuetify'
import Carousel from 'vue-owl-carousel2'
import VueClipboard from 'vue-clipboard2'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue2-datepicker/index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import '@/assets/fonts/clearsans.css'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import '@/assets/css/global.css'

Vue.use(PerfectScrollbar)
Vue.use(VueClipboard)
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.component('multiselect', Multiselect)
Vue.component('Carousel', Carousel)

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
