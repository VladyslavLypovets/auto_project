<template>
  <div class="page-admin-menu">
    <h4>Страницы</h4>
    <nav class="nav-page-admin">
      <ul class="point-menu">
        <li class="main-point-menu"><span>Перечень страниц</span>
          <ul class="sub-point-menu">
            <li><router-link class="link-sub-point" to="/">Главная</router-link></li>
            <li><router-link class="link-sub-point" to="/contacts">Контакты</router-link></li>
          </ul>
        </li>
        <li class="main-point-menu"><span>Шаблоны</span>
          <ul class="sub-point-menu">
            <li><router-link class="link-sub-point" to="/about-company">О нас</router-link></li>
            <li><router-link class="link-sub-point" to="/about-product">О продукции</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PageAdminMenu'
}
</script>

<style lang="scss" scoped>
 .page-admin-menu{
    h4{
      color: #242424;
      font-size: 30px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 20px;
      @media (max-width: 767px){
        font-size: 25px;
      }
    }
    .nav-page-admin{
      border-radius: 5px;
      border: 1px solid #dfdfdf;
      background-color: #f6f6f6;
      padding: 10px 20px 0;
      .point-menu{
        list-style: none;
        padding: 0;
        .main-point-menu{
          border-bottom: 2px solid #dfdfdf;
          margin: 0 -20px;
          &:last-child{
            border: none;
          }
          span{
            color: #242424;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 0 20px;
            display: block;
            margin-bottom: 10px;
            margin-top: 10px;
            @media (max-width: 1599px){
              padding: 0 10px;
              font-size: 13px;
            }
            @media (max-width: 767px){
              font-size: 14px;
              padding: 0 20px;
            }
          }
          .sub-point-menu{
            list-style: none;
            padding-left: 25px;
            .link-sub-point{
              color: #242424;
              font-size: 14px;
              font-weight: 500;
              text-decoration: none;
              display: block;
              margin-bottom: 10px;
            }
            @media (max-width: 767px){
              padding-left: 30px;
              .link-sub-point{
                margin-bottom: 18px;
              }
            }
          }
        }
      }
    }
  }
</style>
