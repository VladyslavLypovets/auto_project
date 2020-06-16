<template>
  <div>
    <Header />
    <main class="admin-user-main"
    :style="{
      'background-image': `url(${require('@/assets/img/bg-admin.png')})`
    }"
    >
      <div class="container">
        <BreadCrumbs />
        <div class="block-user">
          <div class="row">
          <div class=" d-block col-4 col-xl-2">
            <MenuAdmin />
          </div>
          <div class="col-12 col-md-8 col-xl-10">
            <h4>Пользователи</h4>
            <h6>Все пользователи</h6>
          </div>
        </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import BreadCrumbs from '@/components/layout/BreadCrumbs.vue'
import MenuAdmin from '@/components/layout/MenuAdmin.vue'

export default {
  name: 'AdminUser',
  components: {
    Header,
    Footer,
    BreadCrumbs,
    MenuAdmin
  }
}
</script>

<style lang="scss" scoped>
  .admin-user-main{
    padding: 86px 0 150px;
    min-height: calc(100vh - 60px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
    .block-user{
      margin-top: 50px;
      h4{
        color: #242424;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 44px;
        @media (max-width: 767px){
         margin-bottom: 25px;
        }
      }
      h6{
        color: #242424;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 25px;
        @media (max-width: 767px){
         font-size: 16px;
        }
      }
    }
  }
</style>
