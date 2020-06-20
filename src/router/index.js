import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'
import Error from '@/pages/Error.vue'
import AboutProduct from '@/pages/AboutProduct.vue'
import AdminAddPage from '@/pages/AdminAddPage.vue'
import AdminCreationPage from '@/pages/AdminCreationPage.vue'
import AdminRefresh from '@/pages/AdminRefresh.vue'
import AdminProductBasicInfo from '@/pages/AdminProductBasicInfo.vue'
import AdminNewUser from '@/pages/AdminNewUser.vue'
import AdminUserBasicData from '@/pages/AdminUserBasicData.vue'
import AdminUser from '@/pages/AdminUser.vue'

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
    path: '/about-product',
    name: 'AboutProduct',
    component: AboutProduct
  },
  {
    path: '/admin-add-page',
    name: 'AdminAddPage',
    component: AdminAddPage
  },
  {
    path: '/admin-creation-page',
    name: 'AdminCreationPage',
    component: AdminCreationPage
  },
  {
    path: '/admin-refresh',
    name: 'AdminRefresh',
    component: AdminRefresh
  },
  {
    path: '/admin-product-basic-info',
    name: 'AdminProductBasicInfo',
    component: AdminProductBasicInfo
  },
  {
    path: '/admin-new-user',
    name: 'AdminNewUser',
    component: AdminNewUser
  },
  {
    path: '/admin-user-basic-data',
    name: 'AdminUserBasicData',
    component: AdminUserBasicData
  },
  {
    path: '/admin-user',
    name: 'AdminUser',
    component: AdminUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
