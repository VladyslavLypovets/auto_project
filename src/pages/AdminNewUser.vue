<template>
  <div>
    <Header />
    <main class="admin-new-user-main"
    :style="{
      'background-image': `url(${require('@/assets/img/bg-admin.png')})`
    }"
    >
    <div class="container">
      <BreadCrumbs />
      <div class="block-new-user">
        <div class="row">
          <div class=" d-block col-4 col-xl-2">
            <MenuAdmin />
          </div>
          <div class="col-12 col-md-8 col-xl-10">
            <h4>Пользователи</h4>
            <h6>Создать нового</h6>
            <InputAdmin text="Логин" id="login"/>
            <InputAdmin text="Пароль" id="password" type="password"/>
            <InputAdmin text="Подтвердить пароль" type="password" id="confirm-password"/>
            <InputAdmin text="Статус" id="status"/>
            <BtnBlue text="Создать"/>
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
import InputAdmin from '@/components/layout/InputAdmin.vue'
import BtnBlue from '@/components/layout/BtnBlue.vue'

export default {
  name: 'AdminNewUser',
  components: {
    Header,
    Footer,
    BreadCrumbs,
    MenuAdmin,
    InputAdmin,
    BtnBlue
  }
}
</script>

<style lang="scss" scoped>
  .admin-new-user-main{
    padding: 86px 0 150px;
    min-height: calc(100vh - 60px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
    .block-new-user{
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
      /deep/ .lebel-input-admin{
        color: #242424;
        font-size: 14px;
        font-weight: 500;
        width: 15%;
        @media (max-width: 1199px){
          width: 35%;
        }
        @media (max-width: 767px){
         width: 100%;
        }
      }
      /deep/.input-admin{
        margin-left: 10px;
        flex: none;
        width: 30%;
        @media (max-width: 1199px){
          width: 65%;
        }
        @media (max-width: 767px){
          width: 100%;
          margin-left: 0;
        }
      }
      .btn-blue{
        margin-top: 30px;
        @media (max-width: 767px){
         width: 100%;
        }
      }
    }
    @media (max-width: 767px){
      padding-bottom: 50px;
    }
  }
</style>
