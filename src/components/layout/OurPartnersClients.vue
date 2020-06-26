<template>
  <div class="our-partner-client container">
    <h4>{{ text }}</h4>
    <div class="d-none d-xl-flex flex-wrap align-items-center justify-content-between">
      <router-link to="/"  class="client-partner">
        <img src="@/assets/img/logo-client-partner.png" alt="logo-client-partner" class="logo-client-partner">
      </router-link>
      <router-link to="/" class="client-partner">
        <img src="@/assets/img/logo-client-partner.png" alt="logo-client-partner" class="logo-client-partner">
      </router-link>
      <router-link to="/" class="client-partner">
        <img src="@/assets/img/logo-client-partner.png" alt="logo-client-partner" class="logo-client-partner">
      </router-link>
      <router-link to="/" class="client-partner">
        <img src="@/assets/img/logo-client-partner.png" alt="logo-client-partner" class="logo-client-partner">
      </router-link>
      <router-link to="/" class="client-partner">
        <img src="@/assets/img/logo-client-partner.png" alt="logo-client-partner" class="logo-client-partner">
      </router-link>
      <router-link to="/" class="client-partner">
        <img src="@/assets/img/logo-client-partner.png" alt="logo-client-partner" class="logo-client-partner">
      </router-link>
      <router-link to="/" class="client-partner">
        <img src="@/assets/img/logo-client-partner.png" alt="logo-client-partner" class="logo-client-partner">
      </router-link>
      <router-link to="/" class="client-partner">
        <img src="@/assets/img/logo-client-partner.png" alt="logo-client-partner" class="logo-client-partner">
      </router-link>
      <router-link to="/" class="client-partner">
        <img src="@/assets/img/logo-client-partner.png" alt="logo-client-partner" class="logo-client-partner">
      </router-link>
      <router-link to="/" class="client-partner">
        <img src="@/assets/img/logo-client-partner.png" alt="logo-client-partner" class="logo-client-partner">
      </router-link>
    </div>
    <Carousel
      :items="2"
      class="d-flex d-xl-none carousel-mob-clients"
      :dots="false"
      :navText="navText"
      :margin="20"
    >
    <div class="items" v-for="index in new Array(8)" :key="index">
      <router-link to="/"  class="client-partner">
        <img src="@/assets/img/logo-client-partner.png" alt="logo-client-partner" class="logo-client-partner">
      </router-link>
      <router-link to="/"  class="client-partner">
        <img src="@/assets/img/logo-client-partner.png" alt="logo-client-partner" class="logo-client-partner">
      </router-link>
    </div>
    </Carousel>
  </div>
</template>

<script>
export default {
  name: 'OurPartnersClients',
  data: () => ({
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"/>', '<i class="fa fa-angle-right" aria-hidden="true"/>']
  }),
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
  .our-partner-client{
    h4{
      color: #000000;
      font-size: 48px;
      font-weight: 700;
      line-height: 60px;
      text-transform: uppercase;
      margin-bottom: 50px;
      text-align: center;
    }
    .client-partner{
      width: 19%;
      height: 192px;
      background-color:rgba(45, 45, 45, 0.09);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      transition: all 0.3s;
      img.logo-client-partner{
        max-width: 200px;
      }
      &:hover{
        transform: scale(1.03);
      }
    }
    @media (max-width: 1599px){
      h4{
        font-size: 43px;
        margin-bottom: 25px;
      }
      .client-partner {
        height: 137px;
        img.logo-client-partner{
          max-width: 170px;
        }
      }
    }
    @media (max-width: 1199px){
      .carousel-mob-clients{
        position: relative;
        width: 60%;
        margin-left: 20%;
        align-items: center;
        justify-content: center;
        /deep/ .owl-prev{
          position: absolute;
          background: none;
          color: #c0c0c0;
          left: -20%;
          font-size: 32px;
          top: 50%;
          transform: translateY(-50%);
        }
        /deep/ .owl-next{
          position: absolute;
          background: none;
          color: #c0c0c0;
          right: -20%;
          font-size: 32px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .client-partner{
        width: 100%;
      }
    }
    @media (max-width: 767px){
      .carousel-mob-clients{
        width: 80%;
        margin-left: 10%;
      }
    }
    @media (max-width: 1199px){
      h4{
        font-size: 36px;
      }
    }
    @media (max-width: 767px){
      h4{
        font-size: 24px;
      }
      .carousel-mob-clients{
        /deep/ .owl-prev{
          left: -70px;
        }
        /deep/ .owl-next{
          right: -70px;
        }
      }
    }
  }
</style>
