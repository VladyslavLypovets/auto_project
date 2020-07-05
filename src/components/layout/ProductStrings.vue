<template>
  <div class="product-strings">
    <div class="row">
      <router-link to="/product" class="col-2 d-flex align-items-center">
        <img src="@/assets/img/img-product-catalog.png" alt="img-product-catalog" class="img-product">
      </router-link>
      <div class="col-7 d-flex flex-column">
        <router-link to="/product" class="name-product">
          Название запчасти обычно в две строки и не вмещается
        </router-link>
        <p class="marka">
          BMW<span>4526358</span>
        </p>
        <div class="info-tovar">
          <div class="info">
            <p>принадлежность к авто</p>
            <p>модель</p>
          </div>
          <div>
            <p>марка</p>
            <p>основная категория</p>
          </div>
        </div>
      </div>
      <div class="col-3 d-flex flex-column">
        <div class="block-price-buy">
          <div class="block-price-quantity d-flex justify-content-between">
            <div class="price">
              <p>Цена от</p>
            </div>
            <div class="quantity">
              <p>Кол. во. 64</p>
            </div>
          </div>
          <div class="suma">
            <p>3000-3250 грн</p>
          </div>
          <button class="btn-buy">
            <img src="@/assets/img/btn-img.png" alt="btn-img">
            Купить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductStrings'
}
</script>

<style lang="scss" scoped>
  .product-strings{
    box-shadow: 1px 2px 24px rgba(0, 0, 0, 0.11);
    border-radius: 5px;
    background-color: #ffffff;
    padding: 10px 20px;
    margin-bottom: 20px;
    max-height: 185px;
    height: 185px;
    display: flex;
    text-decoration: none;
    transition: all 0.3s;
    align-items: center;
    @media(max-width: 1199px) {
      height: 167px;
    }
    &:hover {
      transform: scale(1.005);
    }
    .img-product{
      width: 100%;
    }
    .name-product{
      color: #242424;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
      @media (max-width: 1199px){
        font-size: 16px;
      }
    }
    .marka{
      color: #242424;
      font-weight: 700;
      font-size: 16px;
      text-transform: uppercase;
      margin-bottom: 10px;
      // margin-bottom: 25px;
      span{
        color: #939393;
        font-weight: 400;
        margin-left: 15px;
      }
    }
    .info-tovar{
      display: flex;
      align-items: center;
      p{
        color: #676767;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 5px;
        @media (max-width: 1199px){
          font-size: 14px;
        }
      }
      .info{
        margin-right: 40px;
      }
    }
    .block-price-buy{
      border-left: 1px solid #c9c9c9;
      padding-left: 20px;
      .block-price-quantity{
        .price{
          color: #242424;
          font-size: 18px;
          font-weight: 400;
          margin: 0;
          @media (max-width: 1199px){
            font-size: 14px;
          }
        }
        .quantity{
          margin: 0;
          color: #242424;
          font-size: 16px;
          font-weight: 400;
          @media (max-width: 1199px){
            font-size: 14px;
          }
        }
      }
      @media (max-width: 993px){
        padding-left: 10px;
        .block-price-quantity{
          .price,
          .quantity{
            font-size: 13px;
          }
        }
      }
    }
    .suma p{
      color: #242424;
      font-size: 20px;
      font-weight: 700;
      line-height: 1;
      // margin-bottom: 15px;
      @media (max-width: 993px){
        font-size: 17px;
      }
    }
    .btn-buy{
      width: 141px;
      height: 43px;
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
        box-shadow: 1px 2px 0 #234e58;
      }
      img{
        margin-right: 15px;
      }
      &:focus{
        outline: none;
      }
    }
  }
</style>
