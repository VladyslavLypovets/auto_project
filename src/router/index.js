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
import Contacts from '@/pages/Contacts.vue'

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
    path: '/aboutproduct',
    name: 'AboutProduct',
    component: AboutProduct
  },
  {
    path: '/adminaddpage',
    name: 'AdminAddPage',
    component: AdminAddPage
  },
  {
    path: '/admincreationpage',
    name: 'AdminCreationPage',
    component: AdminCreationPage
  },
  {
    path: '/adminrefresh',
    name: 'AdminRefresh',
    component: AdminRefresh
  },
  {
    path: '/adminproductbasicinfo',
    name: 'AdminProductBasicInfo',
    component: AdminProductBasicInfo
  },
  {
    path: '/adminnewuser',
    name: 'AdminNewUser',
    component: AdminNewUser
  },
  {
    path: '/adminuserbasicdata',
    name: 'AdminUserBasicData',
    component: AdminUserBasicData
  },
  {
    path: '/adminuser',
    name: 'AdminUser',
    component: AdminUser
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
