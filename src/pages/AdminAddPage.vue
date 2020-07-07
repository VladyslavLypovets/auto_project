<template>
  <div>
    <Header />
    <main class="admin-addpage-main"
    :style="{
      'background-image': `url(${require('@/assets/img/bg-error.png')})`
    }"
    >
    <div class="container">
      <BreadCrumbs />
      <div class="menu-admin-page">
        <div class="row">
          <div class=" d-block col-4 col-xl-2 pr-4">
            <MenuAdmin />
          </div>
          <div class="col-12 col-md-3 col-xl-2 pl-md-4 pl-3">
            <PageAdminMenu />
          </div>
          <div class="col-12 col-md-5 col-xl-8 pl-md-4 pl-3">
            <div class="add-page">
              <BtnBlue text="Добавить страницу" @click="$router.push({ name: 'AdminCreationPage' })"/>
              <p>Шаблон страницы о нас</p>
            </div>
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
import PageAdminMenu from '@/components/layout/PageAdminMenu.vue'
import BtnBlue from '@/components/layout/BtnBlue.vue'

export default {
  name: 'AdminAddPage',
  components: {
    Header,
    Footer,
    BreadCrumbs,
    MenuAdmin,
    PageAdminMenu,
    BtnBlue
  }
}
</script>

<style lang="scss" scoped>
  .admin-addpage-main{
    padding: 83px 0 55px;
    min-height: calc(100vh - 60px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    .menu-admin-page{
      margin-top: 50px;
      .add-page{
        margin-top: 75px;
        .btn-blue{
          width: 262px;
          height: 43px;
          box-shadow: 1px 2px 0 #068fb0;
          border-radius: 5px;
          background-color: #00b9e5;
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          border: none;
          transition: all 0.3s;
          border: 1px solid #00b9e5;
          &:focus{
            outline: none;
          }
          &:hover{
            background-color: #fff;
            color: #00b9e5;
          }
        }
        p{
          color: #242424;
          margin: 20px 0 0;
          font-size: 14px;
          font-weight: 400;
        }
        @media (max-width: 767px){
          margin-top: 35px;
          .btn-blue{
            width: 100%;
          }
        }
      }
    }
  }
</style>
