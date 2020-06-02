import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'
import Error from '@/pages/Error.vue'
import OProdukte from '@/pages/OProdukte.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/error',
    name: 'Error',
    component: Error
  },
  {
    path: '/oprodukte',
    name: 'OProdukte',
    component: OProdukte
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
