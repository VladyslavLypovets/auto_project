<template>
  <div class="bread-crumbs d-none d-md-flex align-items-center">
    <div class="block-home">
      <router-link to="/" class="link-home">
        <img src="@/assets/img/home-run.png" alt="home-run">
      </router-link>
      <img src="@/assets/img/bread-crumbs-arrow.png" alt="bread-crumbs-arrow">
    </div>
    <div class="block-admin">
      <router-link to="/" class="link-admin">
        Админ
      </router-link>
      <img src="@/assets/img/bread-crumbs-arrow.png" alt="bread-crumbs-arrow">
    </div>
    <div class="block-current-page">
      <p>Страницы</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbs'
}
</script>

<style lang="scss" scoped>
  .bread-crumbs{
    margin-top: 30px;
    width: 100%;
    height: 59px;
    border-radius: 5px;
    border: 1px solid #dfdfdf;
    background-color: #f6f6f6;
    .block-home{
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .link-home{
        margin-right: 10px;
      }
    }
    .block-admin{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .link-admin{
        color: #00b9e5;
        font-size: 16px;
        font-weight: 400;
        margin-right: 10px;
        text-decoration: none;
        padding-left: 30px;
      }
    }
    .block-current-page{
      p{
        margin: 0;
        color: #737373;
        font-size: 16px;
        font-weight: 400;
        padding-left: 30px;
      }
    }
  }
</style>
