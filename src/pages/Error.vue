<template>
  <div>
    <Header />
    <main
      class="error-main"
      :style="{
        'background-image': `url(${require('@/assets/img/bg-error.png')})`
      }"
    >
    <div class="container">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <div class="error-number">
          <img src="@/assets/img/404-error.png" alt="error">
        </div>
        <div class="text-error">
          <h6>На сайте нет такой страницы!</h6>
          <p>Возможно не верная ссылка
            <router-link :to="{ name: 'Home' }" class="logo-block">
              перейти в главную.
            </router-link>
          </p>
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

export default {
  name: 'Error',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  .error-main{
    padding: 20px 0;
    min-height: calc(100vh - 60px);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position-y: center;
    @media (max-width: 1199px){
      min-height: calc(100vh - 142px);
    }
    @media (max-width: 767px){
      min-height: calc(100vh - 180px);
    }
    .error-number img{
      width: 100%;
      max-width: 45vw;
      @media (max-width: 767px){
        max-width: 285px;
      }
    }
    .text-error{
      text-align: center;
      h6{
        color: #323232;
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 29px;
        margin-top: 50px;
        @media (max-width: 1199px){
          font-size: 29px;
          margin-bottom: 20px;
        }
        @media (max-width: 767px){
          font-size: 18px;
          margin-top: 35px;
        }
      }
      p{
        color: #323232;
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 0;
        a{
          color: #00b9e5;
          text-decoration: underline;
          transition: all 0.3s;
          &:hover{
            color: #044184;
          }
        }
        @media (max-width: 1199px){
         font-size: 22px;
        }
        @media (max-width: 767px){
          font-size: 14px;
        }
      }
    }
  }

</style>
