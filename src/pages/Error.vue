<template>
  <div>
    <Header />
    <main class="container error-main">
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
    // background: url(../img/bg-error.png);
    min-height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .text-error{
      text-align: center;
      h6{
        color: #323232;
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 29px;
      }
      p{
        color: #323232;
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 0;
        a{
          color: #00b9e5;
          text-decoration: underline;
        }
      }
    }
  }
</style>
