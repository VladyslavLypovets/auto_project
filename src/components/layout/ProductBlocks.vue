<template>
  <div class="product-blocks">
    <div class="quantity">
      <p>Кол. во. 64</p>
    </div>
    <router-link to="/product" class="d-flex align-items-center">
      <img src="@/assets/img/img-product-catalog.png" alt="img-product-catalog" class="img-product">
    </router-link>
    <router-link to="/product" class="name-product d-block">
      Название запчасти обычно в две строки и не вмещается
    </router-link>
    <div class="block-marka d-flex justify-content-between">
      <p class="marka">BMW</p>
      <span>4526358</span>
    </div>
    <div class="block-price-buy d-flex align-items-center justify-content-between">
      <div class="suma">
        <p>3000-3250 грн</p>
      </div>
      <button class="btn-buy">
        <img src="@/assets/img/btn-img.png" alt="btn-img">
        Купить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductBlocks'
}
</script>

<style lang="scss" scoped>
  .product-blocks{
    max-height: 480px;
    box-shadow: 1px 2px 24px rgba(0, 0, 0, 0.11);
    border-radius: 5px;
    background-color: #ffffff;
    padding: 20px;
    margin-bottom: 20px;
    transition: all 0.3s;
    display: block;
    text-decoration: none;
    @media(max-width: 767px) {
      max-height: unset;
    }
    .quantity p{
      color: #242424;
      font-size: 16px;
      font-weight: 400;
      margin: 0;
    }
    .img-product{
      width: 100%;
    }
    .name-product{
      color: #242424;
      font-size: 18px;
      font-weight: 700;
      margin-top: 10px;
      @media (max-width: 1599px){
        font-size: 16px;
      }
      @media (max-width: 767px){
        font-size: 16px;
      }
    }
    .block-marka{
      .marka{
      color: #242424;
      font-weight: 700;
      font-size: 16px;
      text-transform: uppercase;
      }
      span{
        color: #939393;
        font-weight: 400;
        margin-left: 15px;
        font-size: 16px;
      }
    }
    .block-price-buy{
      border-top: 1px solid #c9c9c9;
      padding: 15px 0 0;
      .btn-buy{
        width: 141px;
        height: 43px;
        box-shadow: 1px 2px 0 #068fb0;
        border-radius: 5px;
        border: none;
        background-color: #00b9e5;
        color: #ffffff;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        transition: all .3s;
        &:hover {
          background: #234e58;
        }
        img{
          margin-right: 15px;
          width: 25px;
          height: 25px;
        }
        @media (max-width: 1599px){
          width: 100px;
          font-size: 14px;
          img{
            margin-right: 8px;
            width: 20px;
            height: 20px;
          }
        }
        &:focus{
          outline: none;
        }
      }
      .suma p{
        color: #242424;
        font-size: 20px;
        font-weight: 700;
        margin: 0;
        @media (max-width: 1599px){
          font-size: 15px;
        }
      }
      @media (max-width: 1199px){
        flex-wrap: wrap;
        .suma{
          margin-bottom: 20px;
          width: 100%;
          p{
            text-align: center;
            font-size: 20px;
          }
        }
        .btn-buy{
          margin: 0 auto;
          width: 135px;
          font-size: 16px;
        }
      }
      @media (max-width: 767px){
        .suma{
          margin-bottom: 15px;
        }
      }
    }
    &:hover{
      transform: scale(1.005);
    }
  }
</style>
