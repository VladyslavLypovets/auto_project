import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '@/pages/Catalog.vue'
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
import Navigation from '@/pages/Navigation.vue'
import Product from '@/pages/Product.vue'
import AdminPartners from '@/pages/AdminPartners.vue'
import AbminProducts from '@/pages/AbminProducts.vue'
import AdminAnalytics from '@/pages/AdminAnalytics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Navigation',
    component: Navigation
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
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
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/admin-partners',
    name: 'AdminPartners',
    component: AdminPartners
  },
  {
    path: '/abmin-products',
    name: 'AbminProducts',
    component: AbminProducts
  },
  {
    path: '/admin-analytics',
    name: 'AdminAnalytics',
    component: AdminAnalytics
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
