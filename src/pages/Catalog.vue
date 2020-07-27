<template>
  <div
    class="wrap"
    :class="{'no-scroll': filterOpen}"
  >
    <Header />
    <main
      class="home-main"
      :style="{
        'background-image': `url(${require('@/assets/img/bg-catalog.png')})`
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
            <div class="d-xl-block col-xl-3">
              <div class="filter" :class="{'open': filterOpen}">
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="d-block d-xl-none">Фильтр</h6>
                  <button class="btn-close d-block d-xl-none" @click="filterOpen = false">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="marka d-flex align-items-center">
                  <multiselect
                    v-model="marka"
                    :options="['BMW-1', 'BMW-2', 'BMW-3', 'BMW-4']"
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
                    v-model="model"
                    :options="['X7', 'X8', 'X9', 'X10']"
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
                    v-model="product"
                    :options="['BMW-1', 'BMW-2', 'BMW-3', 'BMW-4', 'BMW-5', 'BMW-6', 'BMW-7', 'BMW-8', 'BMW-9']"
                    placeholder="Вид продукции"
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
                    <div class="d-flex align-items-center" v-for="(item, index) in manufacturers" :key="index">
                      <input type="checkbox" :id="`choice-manufacturer-${index}`" class="form-control checkbox-manufacturer" v-model="manufacturers[index]" @change="changeFilter()">
                      <label :for="`choice-manufacturer-${index}`">Производитель {{index + 1}}</label>
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
                    <RangeSlider v-model="range" :useKeyboard="true"/>
                    <div class="d-flex justify-content-between">
                      <div class="form-group">
                        <input type="text" class="form-control from" v-model="range[0]">
                      </div>
                      <div class="form-group">
                        <input type="text" class="form-control to" v-model="range[1]">
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
                    <div class="d-flex align-items-center"  v-for="(item, index) in attr1" :key="index">
                      <input type="checkbox" :id="`choice-attribute-1-${index}`" class="form-control checkbox-attribute" v-model="attr1[index]"  @change="changeFilter()">
                      <label :for="`choice-attribute-1-${index}`">Атрибут 1</label>
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
                    <div class="d-flex align-items-center"  v-for="(item, index) in attr2" :key="index">
                      <input type="checkbox" :id="`choice-attribute-2-${index}`" class="form-control checkbox-attribute" v-model="attr2[index]"  @change="changeFilter()">
                      <label :for="`choice-attribute-2-${index}`">Атрибут 2</label>
                    </div>
                  </div>
                </div>
                <div class="d-flex d-xl-none justify-content-center block-fixed" v-if="filterEmpty">
                  <BtnBlue text="Назад" @click="filterOpen = false" v-if="filterEmpty"/>
                </div>
                <div class="d-flex d-xl-none justify-content-between block-fixed" v-else>
                  <BtnGrey text="Сбросить" @click="clearFilter" />
                  <BtnBlue text="Найти" @click="filterOpen = false"/>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-9 mt">
              <div class="d-flex">
                <button class="btn-filter-mob d-block d-xl-none" @click="filterOpen = !filterOpen">
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
                      :class="{ 'active': activeView === 1}"
                      @click="activeView = 1"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                      <button
                        class="blocks d-none d-md-block"
                        :class="{ 'active': activeView === 2}"
                        @click="activeView = 2"
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
                <div class="product-strings active" v-if="activeView === 1">
                  <ProductStrings
                    v-for="index in productCount"
                    :key="index"
                  />
                </div>
                <div class="product-blocks" v-if="activeView === 2">
                  <div class="row">
                    <div
                      class="col-12 col-md-4 mb-3"
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
                <button class="btn-repeat" @click="productCount = productCount.concat(new Array(newItems))">
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
import BtnGrey from '@/components/layout/BtnGrey.vue'
import ProductBlocks from '@/components/layout/ProductBlocks.vue'
import RangeSlider from '@/components/layout/RangeSlider.vue'

export default {
  name: 'Catalog',
  components: {
    Header,
    Footer,
    ProductStrings,
    BtnBlue,
    BtnGrey,
    ProductBlocks,
    RangeSlider
  },
  data: () => ({
    marka: 'BMW-1',
    model: 'X7',
    product: '',
    isMenuOpen: true,
    activeView: 1,
    sorting: 'По цене',
    productCount: new Array(9),
    collapsedMenu: {
      0: true,
      1: true,
      2: false,
      3: false
    },
    range: [0, 500000],
    filterOpen: false,
    newItems: 9,
    filterEmpty: true,
    attr2: [false, false],
    attr1: [false, false, false],
    manufacturers: [false, false, false, false]
  }),
  created () {
    this.watchMobile()
    window.addEventListener('resize', this.watchMobile)
    document.removeEventListener('keydown', () => {}, true)
  },
  methods: {
    watchMobile () {
      if (window.innerWidth < 767) {
        this.activeView = 2
        this.newItems = 5
        this.productCount = new Array(this.newItems)
      }
    },
    changeFilter () {
      this.filterEmpty = false
    },
    clearFilter () {
      this.manufacturers = this.manufacturers.map(() => false)
      this.attr1 = this.attr1.map(() => false)
      this.attr2 = this.attr2.map(() => false)
      this.range = [0, 500000]
      this.marka = 'BMW-1'
      this.model = 'X7'
      this.product = ''
      this.filterEmpty = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap.no-scroll {
      max-height: 100vh;
      overflow: hidden;
    }
  .home-main{
    padding: 83px 0;
    min-height: calc(100vh - 60px);
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: center;
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
        letter-spacing: 0.48px;
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
        /deep/ .multiselect__placeholder {
          margin-bottom: 0;
        }
        .marka{
          margin-bottom: 19px;
          .multiselect {
            border: 1px solid transparent;
            transition: all .3s;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
              border-color: #00b9e5;
              .caret {
                color: #00b9e5;
              }
            }
            .caret {
              position: absolute;
              right: 10px;
              top: 50%;
              transform: translateY(-50%);
              transition: all .3s;
              cursor: pointer;
            }
            &--active {
              /deep/ .multiselect__content-wrapper {
                border: 1px solid #00b9e5;
                border-radius: 5px;
              }
              .caret {
                transform: translateY(-50%) rotate(180deg);
                color: #00b9e5;
              }
            }
            i{
              font-size: 21px;
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
              .multiselect__single {
                margin-bottom: 0;
              }
            }
            /deep/ .multiselect__option--highlight {
              color: #242424;
            }
            /deep/ .multiselect__content-wrapper{
              width:  100%;
              .multiselect__element {
                max-width:  100%;
                span.multiselect__option {
                  max-width:  100%;
                  background: #fff;
                  height: 34px;
                  display: flex;
                  align-items: center;
                  position: relative;
                  &:before {
                    border-top: 1px solid #e8e8e8;
                    position: absolute;
                    content: '';
                    width: calc(100% - 24px);
                    top: 0;
                    left: 12px;
                  }
                  &:hover{
                    span{
                      color: #00b9e5;
                    }
                  }
                }
                &:first-child span.multiselect__option:before{
                  border-top: none;
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
              letter-spacing: 0.48px;
              color: #242424;
              font-size: 16px;
              font-weight: 700;
              text-transform: uppercase;
              margin: 0;
            }
            i{
              font-size: 21px;
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
              letter-spacing: 0.42px;
            }
            label{
              color: #242424;
              font-size: 14px;
              font-weight: 400;
              margin-bottom: 20px;
            }
          }
        }
        .price{
          position: relative;
          margin-top: 10px;
          padding-top: 15px;
          &:before {
            border-top: 1px solid rgba(40, 40, 40, 0.25);
            position: absolute;
            width: calc(100% - 30px);
            left: 15px;
            top: 0;
            content: '';
          }
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
              font-size: 21px;
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
              input.form-control {
                margin-top: 25px;
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
          position: relative;
          margin-top: 10px;
          padding-top: 15px;
          &:before {
            border-top: 1px solid rgba(40, 40, 40, 0.25);
            position: absolute;
            width: calc(100% - 30px);
            left: 15px;
            top: 0;
            content: '';
          }
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
              font-size: 21px;
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
              margin-bottom: 20px;
            }
          }
        }
        @media (max-width: 1199px){
          opacity: 0;
          pointer-events: none;
          height: 0;
          padding: 0;
          h6{
            color: #242424;
            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 30px;
          }
          .btn-close{
            background: none;
            border: none;
            opacity: 0.25;
            margin-bottom: 30px;
            i{
              color: #000;
              font-size: 21px;
            }
          }
          .btn-blue{
            margin-top: 60px;
            max-width: 47%;
            width: 47%;
          }
          &.open{
            padding: 35px 30px;
            display: block;
            position: fixed;
            left: 0;
            top: 0;
            width: 40vw;
            height: 100vh;
            overflow: auto;
            z-index: 10;
            cursor: pointer;
            z-index: 5;
            pointer-events: unset;
            opacity: 1;
            transition: opacity 0.3s;
            @media (max-width: 767px){
              width: 100vw;
              height: 100%;
              padding-bottom: 80px !important;
            }
          }
        }
        @media (max-width: 767px){
          .block-fixed {
            position: fixed;
            left: 0;
            padding: 0 15px 10px;
            bottom: 0;
            width: 100%;
            background-color: #f7f7f7;
            z-index: 6;
          }
          &.open {
            padding: 25px 15px;
          }
          h6{
            margin-bottom: 15px;
          }
          .btn-close{
            margin-bottom: 15px;
          }
          .marka {
            margin-bottom: 10px;
            max-height: 50px;
          }
          .manufacturer .name-manufacturer,
          .price .name-price,
          .attribute .name-attribute{
            margin-bottom: 14px;
          }
          .btn-blue{
            margin-top: 25px;
            width: 180px;
          }
          .price .range-slider-wrap .form-group{
            margin-bottom: 5px;
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
        &:focus{
          outline: none;
        }
        @media (max-width: 767px){
          max-width: 45px;
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
          letter-spacing: 0.48px;
          @media (max-width: 767px){
            font-size: 12px;
          }
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
              @media (max-width: 767px){
                right: 5px;
              }
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
              @media (max-width: 767px){
                padding-right: 20px;
              }
              .multiselect__single {
                background: none;
                margin-bottom: 0;
                color: #00b9e5;
                border-radius: 0;
                padding-left: 0;
                border-bottom: 1px dashed #00b9e5;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                @media (max-width: 767px){
                  font-size: 12px;
                  max-width: 80px;
                }
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
              @media (max-width: 767px){
                left: -80px;
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
            position: relative;
            span{
              display: block;
              width: 9px;
              height: 9px;
              background-color: rgba(36, 36, 36, 0.49);
              margin-right: 6px;
              transition: all 0.3s;
              @media (max-width: 767px){
                width: 7px;
                height: 7px;
                margin-right: 4px;
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
            &::before{
              position: absolute;
              content: '';
              left: -23px;
              top: -16px;
              width: 2px;
              background-color: #fff;
              height: 54px;
              @media (max-width: 767px){
                display: none;
              }
            }
          }
        }
        @media (max-width: 767px){
          height: 46px;
          padding: 10px;
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
              letter-spacing: 0.48px;
              width: 77px;
              height: 45px;
              box-shadow: 1px 2px 0 #068fb0;
              text-transform: none;
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
            letter-spacing: 0.48px;
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
          letter-spacing: 0.48px;
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
          margin-top: 30px;
        }
      }
      .block-info-text{
        margin-top: 50px;
        p{
          letter-spacing: 0.42px;
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
    padding: 0 25px 0 15px;
    margin: 0 -15px;
    .fa-angle-down {
      transform: rotate(0);
      transition: all .3s;
    }
    &.open {
      max-height: 500px;
      .fa-angle-down {
        transform: rotate(180deg);
      }
    }
  }
  input[type="checkbox"] {
    display: none;
    & + label {
      padding-left: 40px;
      position: relative;
      cursor: pointer;
      &:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        border: 1px solid rgba(40, 40, 40, 0.5);
        background: #fff;
        border-radius: 5px;
        content: '\f00c';
        font-family: 'FontAwesome';
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        color: #fff;
        transition: all .3s;
      }
    }
    &:checked + label:before {
      color: #00b9e5;
    }
  }
</style>
