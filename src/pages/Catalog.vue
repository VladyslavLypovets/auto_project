<template>
  <div>
    <Header />
    <main class="home-main"
    :style="{
      'background-image': `url(${require('@/assets/img/bg-contacrs.png')})`
    }"
    >
      <div class="baner-home d-none d-md-block"
        :style="{
          'background-image': `url(${require('@/assets/img/baner-home.png')})`
        }"
        >
        <div class="container">
          <div class="row">
            <div class="col-8">
              <h3>Покупайте запчасти у нас</h3>
              <p>Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий.</p>
            </div>
            <div class="col-4">
            </div>
          </div>
        </div>
      </div>
      <div class="mob-baner d-block d-md-none"
        :style="{
          'background-image': `url(${require('@/assets/img/mob-baner.png')})`
        }"
      >
        <h4>Покупайте запчасти <br />у нас</h4>
      </div>
      <div class="container">
        <div class="catalog-produkt">
          <div class="row">
            <div class="d-none d-xl-block col-xl-3">
              <div class="filter">
                <div class="marka d-flex align-items-center">
                  <multiselect
                    v-model="marka"
                    :options="['BMW-1', 'BMW-2']"
                    :searchable="false"
                    :allowEmpty="false"
                    :hideSelected="true"
                    :showLabels="false"
                  >
                    <i
                      class="fa fa-angle-down caret"
                      slot="caret"
                      slot-scope="{ toggle }"
                      aria-hidden="true"
                      @mousedown.prevent.stop="toggle"
                    />
                  </multiselect>
                </div>
                <div class="marka d-flex align-items-center">
                  <multiselect
                    v-model="marka"
                    :options="['BMW-1', 'BMW-2']"
                    :searchable="false"
                    :allowEmpty="false"
                    :hideSelected="true"
                    :showLabels="false"
                  >
                    <i
                      class="fa fa-angle-down caret"
                      slot="caret"
                      slot-scope="{ toggle }"
                      aria-hidden="true"
                      @mousedown.prevent.stop="toggle"
                    />
                  </multiselect>
                </div>
                <div class="marka d-flex align-items-center">
                  <multiselect
                    v-model="marka"
                    :options="['BMW-1', 'BMW-2']"
                    :searchable="false"
                    :allowEmpty="false"
                    :hideSelected="true"
                    :showLabels="false"
                  >
                    <i
                      class="fa fa-angle-down caret"
                      slot="caret"
                      slot-scope="{ toggle }"
                      aria-hidden="true"
                      @mousedown.prevent.stop="toggle"
                    />
                  </multiselect>
                </div>
                <div
                  class="manufacturer collapse-section"
                  :class="{'open': collapsedMenu[0]}"
                >
                  <div
                    class="name-manufacturer d-flex align-items-center justify-content-between"
                    @click="collapsedMenu[0] = !collapsedMenu[0]"
                  >
                    <h6>Производитель</h6>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                  <div class="choice-manufacturer">
                    <div class="d-flex align-items-center">
                      <input type="checkbox" id="choice-manufacturer-1" class="form-control checkbox-manufacturer">
                      <label for="choice-manufacturer-1">Производитель 1</label>
                    </div>
                    <div class="d-flex align-items-center">
                      <input type="checkbox" id="choice-manufacturer-2" class="form-control checkbox-manufacturer">
                      <label for="choice-manufacturer-2">Производитель 2</label>
                    </div>
                    <div class="d-flex align-items-center">
                      <input type="checkbox" id="choice-manufacturer-3" class="form-control checkbox-manufacturer">
                      <label for="choice-manufacturer-3">Производитель 3</label>
                    </div>
                    <div class="d-flex align-items-center">
                      <input type="checkbox" id="choice-manufacturer-4" class="form-control checkbox-manufacturer">
                      <label for="choice-manufacturer-4">Производитель 4</label>
                    </div>
                  </div>
                </div>
                <div
                  class="price collapse-section"
                  :class="{'open': collapsedMenu[1]}"
                >
                  <div
                    class="name-price d-flex align-items-center justify-content-between"
                    @click="collapsedMenu[1] = !collapsedMenu[1]"
                  >
                    <h6>Цена</h6>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                  <div class="range-slider-wrap">
                    <input class="range-slider">
                    <div class="d-flex justify-content-between">
                      <div class="form-group">
                        <label>От</label>
                        <input type="text" class="form-control from">
                      </div>
                      <div class="form-group">
                        <label>До</label>
                        <input type="text" class="form-control to">
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="attribute collapse-section"
                  :class="{'open': collapsedMenu[2]}"
                >
                  <div
                    class="name-attribute d-flex align-items-center justify-content-between"
                    @click="collapsedMenu[2] = !collapsedMenu[2]"
                  >
                    <h6>Атрибут 1</h6>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                  <div class="choice-attribute">
                    <div class="d-flex align-items-center">
                      <input type="checkbox" id="choice-attribute-1" class="form-control checkbox-attribute">
                      <label for="choice-attribute-1">Атрибут 1</label>
                    </div>
                    <div class="d-flex align-items-center">
                      <input type="checkbox" id="choice-attribute-2" class="form-control checkbox-attribute">
                      <label for="choice-attribute-2">Атрибут 1</label>
                    </div>
                    <div class="d-flex align-items-center">
                      <input type="checkbox" id="choice-attribute-3" class="form-control checkbox-attribute">
                      <label for="choice-attribute-3">Атрибут 1</label>
                    </div>
                  </div>
                </div>
                <div
                  class="attribute collapse-section"
                  :class="{'open': collapsedMenu[3]}"
                >
                  <div
                    class="name-attribute d-flex align-items-center justify-content-between"
                    @click="collapsedMenu[3] = !collapsedMenu[3]"
                  >
                    <h6>Атрибут 2</h6>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                  <div class="choice-attribute">
                    <div class="d-flex align-items-center">
                      <input type="checkbox" id="choice-attribute-4" class="form-control checkbox-attribute">
                      <label for="choice-attribute-4">Атрибут 2</label>
                    </div>
                    <div class="d-flex align-items-center">
                      <input type="checkbox" id="choice-attribute-5" class="form-control checkbox-attribute">
                      <label for="choice-attribute-5">Атрибут 2</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-9">
              <div class="d-flex">
                <button class="btn-filter-mob d-block d-xl-none">
                  <img src="@/assets/img/big-filter.png" alt="big-filter">
                  <span>Фильтр</span>
                </button>
                <div class="display-filter w-100 d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <h6>Сортировать:</h6>
                    <div class="output-by">
                      <multiselect
                        v-model="sorting"
                        :options="['По цене', 'По рейтингу', 'Акционные', 'По новизне', 'По популярности', 'От дешевых к дорогим', 'От дорогих к дешевым']"
                        :searchable="false"
                        :allowEmpty="false"
                        :showLabels="false"
                        class="sorting"
                      >
                        <i
                          class="fa fa-angle-down caret"
                          slot="caret"
                          slot-scope="{ toggle }"
                          aria-hidden="true"
                          @mousedown.prevent.stop="toggle"
                        />
                      </multiselect>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <h6 class="d-none d-md-block">Вид:</h6>
                    <div class="page-view">
                      <button
                      class="strings d-none d-md-block"
                      :class="{ 'active': activePage === 1}"
                      @click="activePage = 1"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                      <button
                        class="blocks"
                        :class="{ 'active': activePage === 2}"
                        @click="activePage = 2"
                      >
                        <div class="d-flex justify-content-between mb-1">
                          <span></span>
                          <span></span>
                        </div>
                        <div class="d-flex justify-content-between">
                          <span></span>
                          <span></span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="produkts">
                <div class="product-strings active" v-if="activePage === 1">
                  <ProductStrings
                    v-for="index in productCount"
                    :key="index"
                  />
                </div>
                <div class="product-blocks" v-if="activePage === 2">
                  <div class="row">
                    <div
                      class="col-4"
                      v-for="index in productCount"
                      :key="index"
                    >
                      <ProductBlocks />
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between block-more-product">
                <div class="pages d-none d-md-flex">
                  <div class="left-right">
                    <BtnBlue text="Пред"/>
                  </div>
                  <button type="button" class="fl active" href="#">1</button>
                  <button type="button" class="fl" href="#">2</button>
                  <button type="button" class="fl" href="#">3</button>
                  <button type="button" class="fl d-none d-xl-block" href="#">4</button>
                  <button type="button" class="fl d-none d-xl-block" href="#">5</button>
                  <button type="button" class="fl" href="#">...</button>
                  <button type="button" class="fl" href="#">20</button>
                  <div class="left-right">
                    <BtnBlue text="След"/>
                  </div>
                </div>
                <button class="btn-repeat" @click="productCount = productCount.concat(new Array(9))">
                  <i class="fa fa-repeat" aria-hidden="true"></i>
                  Показать больше товаров
                </button>
              </div>
              <div class="block-info-text">
                <p>Разнообразный и богатый опыт укрепление и развитие структуры требуют от нас анализа модели развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации играет важную роль в формировании новых предложений. Таким образом новая модель организационной деятельности способствует подготовки и реализации соответствующий условий активизации. </p>
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
import ProductStrings from '@/components/layout/ProductStrings.vue'
import BtnBlue from '@/components/layout/BtnBlue.vue'
import ProductBlocks from '@/components/layout/ProductBlocks.vue'

export default {
  name: 'Catalog',
  components: {
    Header,
    Footer,
    ProductStrings,
    BtnBlue,
    ProductBlocks
  },
  data: () => ({
    marka: 'BMW',
    isMenuOpen: true,
    activePage: 1,
    sorting: 'По цене',
    productCount: new Array(9),
    collapsedMenu: {
      0: true,
      1: true,
      2: false,
      3: false
    }
  })
  // $('.range-slider').parents('.range-slider-wrap').find('.from').val(2500 + ' грн');
  // $('.range-slider').parents('.range-slider-wrap').find('.to').val(25000 + ' грн');
  // $('.range-slider').change(function() {
  //   var arr = $(this).val().split(';');
  //   var from = arr[0];
  //   var to = arr[1];
  //   $(this).parents('.').find('.from').val(from + ' грн');
  //   $(this).parents('.').find('.to').val(to + ' грн');
  // })
}
</script>

<style lang="scss" scoped>
  .home-main{
    padding: 86px 0;
    min-height: calc(100vh - 60px);
    background-repeat: no-repeat;
    background-position-y: bottom;
    .baner-home{
      background-size: cover;
      padding: 70px 0 40px;
      background-position-y: bottom;
      h3{
        color: #ffffff;
        font-size: 48px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 35px;
        position: relative;
        &::before{
          position: absolute;
          content: '';
          width: 106px;
          height: 6px;
          background-color: #00b9e5;
          left: 0;
          top: -15px;
        }
        @media (max-width: 1199px){
          font-size: 36px;
          margin-bottom: 15px;
          &::before{
            top: -20px;
          }
        }
      }
      p{
        color: #ffffff;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        max-width: 655px;
        margin: 0;
        @media (max-width: 1199px){
          max-width: 500px;
          font-size: 14px;
        }
      }
      @media (max-width: 993px){
        background-position-x: 57%;
        h3{
          font-size: 30px;
        }
        p{
          font-size: 13px;
        }
      }
    }
    .mob-baner{
      background-size: cover;
      padding: 60px 0 50px;
      h4{
        color: #ffffff;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        text-transform: uppercase;
        text-align: center;
        position: relative;
        margin: 0;
        &::before{
          position: absolute;
          content: '';
          width: 106px;
          height: 4px;
          background-color: #00b9e5;
          left: 50%;
          transform: translateX(-50%);
          top: -25px;
        }
      }
    }
    .catalog-produkt{
      margin-top: 30px;
      .filter{
        border-radius: 5px;
        background-color: #f7f7f7;
        padding: 20px 17px;
        .marka{
          border-left: 1px solid #dcdcdc;
          margin-bottom: 19px;
          .multiselect {
            .caret {
              position: absolute;
              right: 10px;
              top: 50%;
              transform: translateY(-50%);
              transition: all .3s;
              cursor: pointer;
            }
            &--active {
              border: 1px solid #00b9e5;
              .caret {
                transform: translateY(-50%) rotate(180deg);
              }
            }
            i{
              font-size: 13px;
              line-height: 1;
              z-index: 3;
              color: #000;
            }
            /deep/ .multiselect__tags {
              height: 50px;
              border-radius: 5px;
              background-color: #fff;
              box-shadow: 1px 2px 24px rgba(0, 0, 0, 0.11);
              border: none;
              padding: 10px;
              display: flex;
              align-items: center;
              // .multiselect__spinner {
              //   display: block;
              //   background-color: #fff;
              //   color: #000;
              //   font-size: 16px;
              //   font-weight: 700;
              //   text-transform: uppercase;
              //   margin: 0;
              // }
            }
            /deep/ .multiselect__content-wrapper{
              width:  100%;
              .multiselect__element {
                max-width:  100%;
              }
              span.multiselect__option.multiselect__option--highlight {
                max-width:  100%;
                background: #fff;
                height: 34px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #e8e8e8;
                span{
                  color: #242424;
                  font-size: 16px;
                  font-weight: 400;
                  text-transform: uppercase;
                  transition: all 0.3s;
                  .multiselect__option {
                    border-bottom: 1px solid #e8e8e8;
                  }
                }
                &:hover{
                  span{
                    color: #00b9e5;
                  }
                }
              }
            }
          }
        }
        .manufacturer{
          padding-top: 15px;
          .name-manufacturer{
            margin-bottom: 25px;
            cursor: pointer;
            h6{
              color: #242424;
              font-size: 16px;
              font-weight: 700;
              text-transform: uppercase;
              margin: 0;
            }
            i{
              font-size: 13px;
              line-height: 1;
              z-index: 3;
              color: #000;
            }
          }
          .choice-manufacturer{
            .checkbox-manufacturer{
              width: 20px;
              height: 19px;
              border-radius: 5px;
              border: 1px solid #282828;
              opacity: 0.49;
              margin-bottom: 20px;
            }
            label{
              color: #242424;
              font-size: 14px;
              font-weight: 400;
              margin: 0 0 20px 20px;
            }
          }
        }
        .price{
          border-top: 1px solid rgba(40, 40, 40, 0.25);
          margin-top: 10px;
          padding-top: 15px;
          .name-price{
            margin-bottom: 25px;
            cursor: pointer;
            h6{
              color: #242424;
              font-size: 16px;
              font-weight: 700;
              text-transform: uppercase;
              margin: 0;
            }
            i{
              font-size: 13px;
              line-height: 1;
              z-index: 3;
              color: #000;
            }
          }
          .range-slider-wrap {
            .irs-min,
            .irs-max,
            .irs-from,
            .irs-to {
              display: none;
            }
            .irs-line{
              height: 2px;
            }
            .irs-bar{
              height: 2px;
              background-color: #92c03e;
            }
            .irs-handle{
              height: 12px;
              top: 20px;
              cursor: pointer;

              i:first-child {
                width: 4px;
                background-color: #92c03e  !important;
              }
            }
            .form-group{
              width: calc(50% - 10px);
              label {
                font-size: 12px;
                color: #313131;
                margin-bottom: 7px;
              }
              input.form-control {
                border: 1px solid #dce1d4;
                border-radius: 0;
                color: rgba(49, 49, 49, 0.6);
                font-size: 12px;
                text-align: center;
              }
            }
          }
        }
        .attribute{
          border-top: 1px solid rgba(40, 40, 40, 0.25);
          margin-top: 10px;
          padding-top: 15px;
          .name-attribute{
            margin-bottom: 25px;
            cursor: pointer;
            h6{
              color: #242424;
              font-size: 16px;
              font-weight: 700;
              text-transform: uppercase;
              margin: 0;
            }
            i{
              font-size: 13px;
              line-height: 1;
              z-index: 3;
              color: #000;
            }
          }
          .choice-attribute{
            .checkbox-attribute{
              width: 20px;
              height: 19px;
              border-radius: 5px;
              border: 1px solid #282828;
              opacity: 0.49;
              margin-bottom: 20px;
            }
            label{
              color: #242424;
              font-size: 14px;
              font-weight: 400;
              margin: 0 0 20px 20px;
            }
          }
        }
      }
      .btn-filter-mob{
        width: 150px;
        height: 54px;
        box-shadow: 1px 2px 0 #068fb0;
        border-radius: 5px;
        background-color: #00b9e5;
        border: none;
        margin-right: 9px;
        color: #ffffff;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        img{
          margin-right: 15px;
        }
        @media (max-width: 767px){
          width: 45px;
          height: 45px;
          img{
            margin: 0;
          }
          span{
            display: none;
          }
        }
      }
      .display-filter {
        border-radius: 5px;
        background-color: #f6f6f6;
        padding: 15px 20px;
        h6{
          color: #242424;
          font-size: 16px;
          font-weight: 400;
          margin: 0;
          line-height: 1.4;
        }
        .output-by{
          .sorting {
            min-height: unset;
            .caret {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              transition: all .3s;
              color: #00b9e5;
            }
            &.multiselect--active {
              .caret {
                transform: translateY(-50%) rotate(180deg);
              }
            }
            /deep/ .multiselect__tags {
              padding-top: 0;
              border: none;
              background: none;
              min-height: unset;
              .multiselect__single {
                background: none;
                margin-bottom: 0;
                color: #00b9e5;
                border-radius: 0;
                padding-left: 0;
                border-bottom: 1px dashed #00b9e5;
              }
            }
            /deep/ .multiselect__content-wrapper {
              min-width: 230px;
              .multiselect__option--highlight {
                background: #00b9e5;
              }
              .multiselect__option--selected {
                background: #fff;
                color: #000;
              }
            }
          }
        }
        .page-view{
          display: flex;
          align-items: center;
          .strings{
            border: none;
            background: none;
            width: 26px;
            height: 23px;
            margin-right: 50px;
            margin-left: 20px;
            span{
              display: block;
              width: 26px;
              height: 6px;
              background-color: rgba(36, 36, 36, 0.49);
              margin-bottom: 2px;
              transition: all 0.3s;
              &:last-child{
                margin-bottom: 0;
              }
            }
            &:hover{
              span{
                background-color: #00b9e5;
              }
            }
            &:focus{
              outline: none;
            }
            &.active {
              span {
                background-color: #00b9e5;
              }
            }
          }
          .blocks{
            border: none;
            background: none;
            span{
              display: block;
              width: 9px;
              height: 9px;
              background-color: rgba(36, 36, 36, 0.49);
              margin-right: 6px;
              transition: all 0.3s;
            }
            &:hover{
              span{
                background-color: #00b9e5;
              }
            }
            &:focus{
              outline: none;
            }
            &.active {
              span {
                background-color: #00b9e5;
              }
            }
          }
        }
        @media (max-width: 767px){
          height: 46px;
        }
      }
      .produkts{
        margin-top: 30px;
      }
      .block-more-product{
        margin-top: 65px;
        border-top: 2px solid #e8e8e8;
        padding-top: 35px;
        .pages{
          .left-right{
            .btn-blue{
              width: 77px;
              height: 45px;
              box-shadow: 1px 2px 0 #068fb0;
              &:hover{
                background-color: #1c7d94;
                color: #fff;
              }
              @media (max-width: 993px){
                width: 70px;
                font-size: 14px;
              }
            }
          }
          button.fl{
            border: none;
            width: 35px;
            height: 45px;
            border-radius: 5px;
            background-color: #f7f7f7;
            margin: 0 5px;
            color: #242424;
            font-size: 16px;
            font-weight: 700;
            &.active{
              background-color: #00b9e5;
              color: #fff;
            }
            @media (max-width: 993px){
              width: 29px;
              font-size: 14px;
            }
          }
        }
        .btn-repeat{
          width: 314px;
          height: 45px;
          border-radius: 5px;
          border: 1px solid #00b9e5;
          color: #00b9e5;
          background: #fff;
          font-size: 16px;
          font-weight: 700;
          transition: all 0.3s;
          i{
            margin-right: 16px;
          }
          &:hover{
            background: #00b9e5;
            color: #fff;
          }
          @media (max-width: 993px){
            width: 290px;
          }
          @media (max-width: 767px){
            width: 100%;
          }
        }
        @media (max-width: 767px){
          border: none;
          padding: 0;
          margin-top: 50px;
        }
      }
      .block-info-text{
        margin-top: 50px;
        p{
          color: #242424;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          opacity: 0.64;
        }
      }
    }
    @media (max-width: 993px){
      padding-bottom: 50px;
    }
    @media (max-width: 767px){
      padding-top: 50px;
    }
  }
  .collapse-section {
    max-height: 40px;
    overflow: hidden;
    transition: all .3s;
    .fa-angle-down {
      transform: rotate(180deg);
      transition: all .3s;
    }
    &.open {
      max-height: 500px;
      .fa-angle-down {
        transform: rotate(0);
      }
    }
  }
</style>
