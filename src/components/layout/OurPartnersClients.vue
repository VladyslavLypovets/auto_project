<template>
  <div class="our-partner-client container">
    <h4>Наши клиенты</h4>
    <div class="d-flex flex-wrap align-items-center justify-content-between">
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
  </div>
</template>

<script>
export default {
  name: 'OurPartnersClients'
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
  }
</style>
