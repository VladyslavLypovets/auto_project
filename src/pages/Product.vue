<template>
  <div>
    <Header />
    <main class="cart-tovar-main"
    :style="{
      'background-image': `url(${require('@/assets/img/bg-catalog.png')})`
    }"
    >
      <div class="container">
        <BreadCrumbs :routes="[{ title: 'Каталог', route: '/catalog' }, { title: 'Название запчасти обычно в две строки и не вмещается', route: '/' }]" />
        <div class="block-tovar">
          <div class="row">
            <div class="col-12 col-xl-5">
              <div class="block-img-tovar">
                <img src="@/assets/img/img-cart-tovar.png" alt="img-cart-tovar" class="img-cart-tovar">
                <button class="btn-loupe" @mouseup="open()">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="col-12 col-xl-7">
              <div class="block-info-tovar">
                <p class="mob-articul d-block d-md-none">Артикул: 4526358</p>
                <p class="name-tovar">
                  Название запчасти обычно в две строки и не вмещается
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <p class="price">3000-3250 <span>грн</span></p>
                    <p class="info-price">уточнение почему две цены </p>
                  </div>
                  <div class="artikul d-none d-md-flex">
                    <p>Артикул: 4526358</p>
                  </div>
                </div>
                <button class="btn-buy" @click="openNewTab()">
                  <AnimationImg />
                   Купить
                </button>
                <div class="block-description">
                  <div class="description">
                    <h6>Описание</h6>
                    <TextReadMore :text="text" :height="98"/>
                  </div>
                  <div class="block-dostavka">
                    <div class="dostavka" :class="{open: deliveryOpen}">
                      <div class="d-flex align-items-center position-relative">
                        <h5 @click="deliveryOpen = !deliveryOpen">
                          Доставка
                          <i class="fa fa-angle-down toggle d-md-none ml-2" aria-hidden="true"></i>
                        </h5>
                        <div class="dop-info">
                          <i class="fa fa-exclamation-circle fa-dop-info" aria-hidden="true"></i>
                        </div>
                        <div class="dop-info-text">
                          <h4>Информация о доставке </h4>
                          <p>На склад «Новой почты» по Украине Самовывоз в Харькове. На ваш адрес, в любой пункт</p>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <img src="@/assets/img/settings.png" alt="settings">
                          На склад «Новой почты» по Украине
                        </li>
                        <li>
                          <img src="@/assets/img/settings.png" alt="settings">
                          Самовывоз в Харькове
                        </li>
                        <li>
                          <img src="@/assets/img/settings.png" alt="settings">
                          На ваш адрес, в любой населенный пункт Украины «Новой почтой»
                        </li>
                      </ul>
                    </div>
                    <div class="pay" :class="{open: payOpen}">
                      <div class="d-flex align-items-center position-relative">
                        <h5 @click="payOpen = !payOpen">
                          Оплата
                          <i class="fa fa-angle-down toggle d-md-none ml-2" aria-hidden="true"></i>
                        </h5>
                        <div class="dop-info">
                          <i class="fa fa-exclamation-circle fa-dop-info" aria-hidden="true"></i>
                        </div>
                        <div class="dop-info-text">
                          <h4>Информация о доставке </h4>
                          <p>На склад «Новой почты» по Украине Самовывоз в Харькове. На ваш адрес, в любой пункт</p>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <img src="@/assets/img/settings.png" alt="settings">
                          Наличными. Безналичными. Visa / MasterCard
                        </li>
                      </ul>
                    </div>
                    <div class="guarantee" :class="{open: guaranteeOpen}">
                      <div class="d-flex align-items-center position-relative">
                        <h5 @click="guaranteeOpen = !guaranteeOpen">
                          Гарантия
                          <i class="fa fa-angle-down toggle d-md-none ml-2" aria-hidden="true"></i>
                        </h5>
                        <div class="dop-info">
                          <i class="fa fa-exclamation-circle fa-dop-info" aria-hidden="true"></i>
                        </div>
                        <div class="dop-info-text">
                          <h4>Информация о доставке </h4>
                          <p>На склад «Новой почты» по Украине Самовывоз в Харькове. На ваш адрес, в любой пункт</p>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <img src="@/assets/img/settings.png" alt="settings">
                          14 дней обмен / возврат
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-block">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="characteristic">
                <h6>Характеристики автозапчасти</h6>
                <table class="table table-striped table-characteristic mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Марка авто;</th>
                      <th scope="col">Марка авто;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Модель</th>
                      <td>Модель</td>
                    </tr>
                    <tr>
                      <th scope="row">Тип</th>
                      <td>Тип</td>
                    </tr>
                    <tr>
                      <th scope="row">Даты выпуска (от и до);</th>
                      <td>Даты выпуска (от и до);</td>
                    </tr>
                    <tr>
                      <th scope="row">Мощность (в кВт);</th>
                      <td>Мощность (в кВт);</td>
                    </tr>
                    <tr>
                      <th scope="row">Мощность (в Л.с.);</th>
                      <td>Мощность (в Л.с.);</td>
                    </tr>
                    <tr>
                      <th scope="row">Код двигателя;</th>
                      <td>Код двигателя;</td>
                    </tr>
                    <tr>
                      <th scope="row">Тип кузова.</th>
                      <td>Тип кузова.</td>
                    </tr>
                    <tr>
                      <th scope="row">Тип кузова.</th>
                      <td>Тип кузова.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="original-number">
                <h6>Оригинальные номера</h6>
                <multiselect
                  v-model="sorting"
                  :options="['VAG-1', 'VAG-2', 'VAG-3', 'VAG-4']"
                  :searchable="false"
                  :allowEmpty="false"
                  :showLabels="false"
                  class="multiselect-original-number"
                >
                  <i
                    class="fa fa-angle-down caret"
                    slot="caret"
                    slot-scope="{ toggle }"
                    aria-hidden="true"
                    @mousedown.prevent.stop="toggle"
                  />
                </multiselect>
                <table class="table table-striped table-original-number mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Оригинальный номер поставщика</th>
                      <th scope="col">Номер</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">VAG</th>
                      <td>1F0 129 620</td>
                    </tr>
                    <tr>
                      <th scope="row">VAG</th>
                      <td>1F0 129 620</td>
                    </tr>
                    <tr>
                      <th scope="row">VAG</th>
                      <td>1F0 129 620</td>
                    </tr>
                    <tr>
                      <th scope="row">VAG</th>
                      <td>1F0 129 620</td>
                    </tr>
                    <tr>
                      <th scope="row">VAG</th>
                      <td>1F0 129 620</td>
                    </tr>
                    <tr>
                      <th scope="row">VAG</th>
                      <td>1F0 129 620</td>
                    </tr>
                    <tr>
                      <th scope="row">VAG</th>
                      <td>1F0 129 620</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="applicability">
                <h6>Применяемость запчасти</h6>
                <table class="table table-striped table-applicability">
                  <thead>
                    <tr>
                      <th scope="col">Марка авто;</th>
                      <th scope="col">Марка авто;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Модель</th>
                      <td>Модель</td>
                    </tr>
                    <tr>
                      <th scope="row">Тип</th>
                      <td>Тип</td>
                    </tr>
                    <tr>
                      <th scope="row">Даты выпуска (от и до);</th>
                      <td>Даты выпуска (от и до);</td>
                    </tr>
                    <tr>
                      <th scope="row">Мощность (в кВт);</th>
                      <td>Мощность (в кВт);</td>
                    </tr>
                    <tr>
                      <th scope="row">Мощность (в Л.с.);</th>
                      <td>Мощность (в Л.с.);</td>
                    </tr>
                    <tr>
                      <th scope="row">Код двигателя;</th>
                      <td>Код двигателя;</td>
                    </tr>
                    <tr>
                      <th scope="row">Тип кузова.</th>
                      <td>Тип кузова.</td>
                    </tr>
                    <tr>
                      <th scope="row">Тип кузова.</th>
                      <td>Тип кузова.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
            <div class="col-12 col-md-6">
              <div class="analog-zapchasti">
                <h6>Аналоги запчасти</h6>
                <Carousel
                  :items="1"
                  class="carousel-analog-tovar"
                  :dots="false"
                  :navText="navText"
                >
                <div v-for="(line, i) in analogTovar" :key="i" class="items-wrap">
                  <div class="items" v-for="(tovar, index) in line" :key="index">
                    <router-link  to="/product" class="analog-tovar">
                      <div class="d-flex align-items-start align-items-xl-center">
                        <div class="img-tovar">
                          <img src="@/assets/img/img-product-catalog.png" alt="img-product-catalog">
                        </div>
                        <div class="block-name">
                          <div class="artikul">
                            <p>Артикул: 4526358</p>
                          </div>
                          <p class="name-tovar">Название запчасти обычно в две строки и не вмещается</p>
                        </div>
                      </div>
                      <div class="block-buy">
                        <p class="price">
                          3000-3250 грн
                        </p>
                        <button class="btn-buy" @click="openNewTab()">
                          <AnimationImg />
                           Купить
                        </button>
                      </div>
                    </router-link>
                  </div>
                </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fancy-box-wrap" :class="{'open': fancyOpen}">
        <div class="fancy-box" :class="{'open': fancyOpen}">
          <i class="fa fa-times" @click="fancyOpen = false"></i>
          <img src="@/assets/img/img-cart-tovar.png" alt="img-cart-tovar">
        </div>
        <div class="overlay" @click="fancyOpen = false"></div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import BreadCrumbs from '@/components/layout/BreadCrumbs.vue'
import TextReadMore from '@/components/layout/TextReadMore.vue'
import AnimationImg from '@/components/layout/AnimationImg.vue'

export default {
  name: 'Product',
  components: {
    Header,
    BreadCrumbs,
    Footer,
    TextReadMore,
    AnimationImg
  },
  data: () => ({
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"/>', '<i class="fa fa-angle-right" aria-hidden="true"/>'],
    fancyOpen: false,
    sorting: 'VAG',
    text: ' <p>Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий.</p><p>Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.</p>',
    deliveryOpen: false,
    payOpen: false,
    guaranteeOpen: false,
    analogTovar: [new Array(3), new Array(3), new Array(3)]
  }),
  created () {
    this.resize()
    window.addEventListener('resize', this.resize)
    if (window.innerWidth <= 1199 && window.innerWidth > 767) {
      this.analogTovar = [new Array(2), new Array(2), new Array(2)]
    } else if (window.innerWidth <= 767) {
      this.analogTovar = [new Array(1), new Array(1), new Array(1)]
    }
  },
  methods: {
    resize () {
      if (window.innerWidth > 1199) {
        this.itemsInColumn = new Array(3)
      } else if (window.innerWidth <= 1199) {
        this.itemsInColumn = new Array(2)
      }
    },
    open () {
      this.fancyOpen = true
    },
    openNewTab () {
      window.open('https://google.com')
    }
  }
}
</script>

<style lang="scss" scoped>
  .cart-tovar-main{
    padding: 83px 0;
    min-height: calc(100vh - 60px);
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: center;
    @media(max-width: 1199px) {
      padding-bottom: 50px;
    }
    .block-tovar{
      margin-top: 49px;
      .block-img-tovar{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        border: 1px solid #dfdfdf;
        background-color: #ffffff;
        padding: 25px;
        position: relative;
        height: 100%;
        img{
          width: 100%;
        }
        .btn-loupe{
          width: 46px;
          height: 42px;
          border: none;
          border-radius: 5px;
          background-color: #f7f7f7;
          position: absolute;
          right: 25px;
          bottom: 25px;
          i{
            color: #6a6a6a;
            font-size: 20px;
            transition: all 0.3s;
          }
          &:hover{
            i{
              color: #007bff;;
            }
          }
          &:focus{
            outline: none;
          }
        }
      }
      .block-info-tovar{
        .mob-articul{
          color: #424242;
          font-size: 14px;
          font-weight: 400;
          margin: 20px 0 10px;
        }
        .name-tovar{
          color: #242424;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .price{
          color: #242424;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 10px;
          span{
            font-size: 24px;
          }
        }
        .info-price{
          color: #979797;
          letter-spacing: 0.54px;
        }
        .artikul{
          border-radius: 5px;
          border: 1px solid #dfdfdf;
          background-color: #f6f6f6;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 195px;
          height: 55px;
          p{
            color: #424242;
            font-size: 14px;
            font-weight: 400;
            margin: 0;
          }
        }
        .btn-buy{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 235px;
          height: 55px;
          border-radius: 5px;
          background-color: #068fb0;
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          border: none;
          transition: all 0.3s;
          img{
            margin-right: 15px;
          }
          &:hover{
            background-color: #234e58;
          }
          &:focus{
            outline: none;
          }
        }
        .block-description{
          margin-top: 35px;
          display: flex;
          .description{
            width: 55%;
            padding-right: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media (max-width: 1199px){
              justify-content: unset;
              padding-right: 17px;
            }
            h6{
              color: #242424;
              font-size: 20px;
              font-weight: 700;
              margin-bottom: 30px;
            }
            /deep/ p{
              letter-spacing: 0.48px;
              color: #676767;
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              @media (max-width: 1199px){
                font-size: 14px;
                line-height: 23px;
              }
            }
          }
          .block-dostavka{
            width: 45%;
            border-left: 1px solid #dfdfdf;
            padding-left: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .dostavka,
            .pay,
            .guarantee{
              margin-bottom: 10px;
              &:last-child{
                margin-bottom: 0;
              }
              h5{
                color: #00b9e5;
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 5px;
                letter-spacing: 0.54px;
                i {
                  font-size: 16px;
                  transition: all .3s;
                }
              }
              @media(max-width: 767px) {
                ul {
                  max-height: 0;
                  overflow: hidden;
                  transition: all .3s;
                }
                &.open {
                  ul {
                    max-height: 300px;
                  }
                  h5 i {
                    transform: rotate(180deg);
                  }
                }
              }
              .dop-info{
                display: flex;
                align-items: center;
                @media (max-width: 767px){
                  display: none;
                }
                .fa-dop-info{
                  color: #d7d7d7;
                  font-size: 16px;
                  margin-bottom: 5px;
                  margin-left: 15px;
                  transition: all 0.3s;
                }
                &:hover{
                  .fa-dop-info{
                    color: #00b9e5;
                  }
                  &+ .dop-info-text{
                    display: block;
                  }
                }
              }
              .dop-info-text{
                position: absolute;
                display: none;
                width: 280px;
                padding: 18px;
                background-color: #ffffff;
                color: #120d09;
                z-index: 3;
                box-shadow: 0 0 14px 1px rgba(117, 117, 117, 0.18);
                border-radius: 7px;
                h4{
                  color: #00b9e5;
                  font-weight: 700;
                  font-size: 14px;
                  margin-bottom: 10px;
                }
                p{
                  color: #676767;
                  font-size: 14px;
                  font-weight: 400;
                  margin: 0;
                }
                &:before {
                  content: '';
                  position: absolute;
                  border: 16px solid transparent;
                  top: -9px;
                  left: 25px;
                  background: #fff;
                  transform: rotate(45deg);
                  z-index: -2;
                }
                @media (max-width: 1499px){
                  max-width: 215px;
                  padding: 10px;
                  p{
                    font-size: 13px;
                  }
                }
              }
              ul{
                padding: 0;
                margin-bottom: 0;
                li{
                  letter-spacing: 0.48px;
                  list-style: none;
                  display: flex;
                  align-items: center;
                  color: #676767;
                  font-size: 16px;
                  font-weight: 400;
                  margin-bottom: 5px;
                  img{
                    margin-right: 10px;
                  }
                }
              }
            }
            .dostavka{
              .dop-info-text{
                bottom: -134px;
                left: 66px;
              }
            }
            .pay{
              .dop-info-text{
                bottom: -135px;
                left: 47px;
              }
            }
            .guarantee{
              .dop-info-text{
                bottom: -135px;
                left: 64px;
              }
            }
            @media (max-width: 1499px){
              .dostavka,
              .pay,
              .guarantee{
                .dop-info-text{
                  bottom: -113px;
                }
              }
            }
            @media (max-width: 1199px){
              .dop-info-text{
                max-width: 260px;
                padding: 10px;
              }
              .dostavka{
                .dop-info-text{
                  left: 62px;
                }
              }
              .pay{
                .dop-info-text{
                  left: 43px;
                }
              }
              .guarantee{
                .dop-info-text{
                  left: 58px;
                }
              }
            }
          }
        }
      }
      @media (max-width: 1199px){
        margin-top: 30px;
        .block-info-tovar{
          .price{
            margin-bottom: 0;
          }
          .name-tovar{
            margin-bottom: 10px;
          }
          .info-price{
            margin-bottom: 20px;
          }
          .block-description{
            .description p{
              font-size: 14px;
              line-height: 25px;
            }
            .block-dostavka{
              .dostavka,
              .pay,
              .guarantee{
                ul li{
                  font-size: 15px;
                }
              }
            }
          }
        }
      }
      @media (max-width: 767px){
        margin-top: 20px;
        .btn-loupe{
          display: none;
        }
        .block-info-tovar{
          .price{
            font-size: 24px;
          }
          .name-tovar{
            font-size: 18px;
          }
          .info-price{
            font-size: 14px;
          }
          .btn-buy{
            margin: 0 auto;
            display: flex;
          }
          .block-description{
            margin-top: 30px;
            flex-wrap: wrap;
            .description{
              width: 100%;
              padding: 0;
              h6{
                font-size: 18px;
                margin-bottom: 20px;
              }
            }
            .block-dostavka{
              border: none;
              padding: 0;
              width: 100%;
              margin-top: 30px;
              .dop-info{
                display: none;
              }
              .dostavka,
              .pay,
              .guarantee{
                ul li{
                  margin-bottom: 8px;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
    .table-block{
      margin-top: 50px;
      .characteristic,
      .applicability{
        h6{
          color: #242424;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 30px;
        }
        .table-characteristic,
        .table-applicability{
          border-radius: 5px;
          border: 1px solid #00b9e5;
          th{
            padding: 12px 0 12px 30px;
            color: #676767;
            font-size: 16px;
            font-weight: 700;
            border: none;
            &:last-child{
              padding-left: 0.75rem;
            }
            @media(max-width: 1199px) {
              padding: 13px 0 13px 30px;
            }
          }
          td{
            border: none;
            color: #676767;
            font-size: 16px;
            font-weight: 400;
          }
          thead th {
            background-color: #f0fbfe;
            border: none;
          }
          tbody tr:nth-of-type(odd) {
            background-color: white;
            border: none;
          }
          tbody tr:nth-of-type(even) {
            background-color: #f0fbfe;
          }
        }
      }
      .original-number{
        .multiselect{
          width: unset;
        }
        .multiselect-original-number {
          min-height: unset;
          height: 46px;
          border-radius: 5px 5px 0 0;
          border: 1px solid #e8e8e8;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          @media(max-width: 1199px) {
            height: 43px;
          }
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
            padding: 0;
            border: none;
            background: none;
            min-height: unset;
            @media (max-width: 767px){
              padding-right: 20px;
            }
            .multiselect__single {
              color: #333333;
              font-size: 14px;
              font-weight: 400;
              text-transform: uppercase;
              background: none;
              margin-bottom: 0;
              border-radius: 0;
              padding-left: 30px;
              @media (max-width: 993px){
                padding-left: 13px;
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
          }
        }
        h6{
          color: #242424;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 30px;
        }
        .table-original-number{
          border-radius: 0 0 5px 5px;
          border: 1px solid #e8e8e8;
          thead{
            tr{
              th{
                padding: 12px 0 12px 30px;
                color: #676767;
                font-size: 16px;
                font-weight: 700;
                border: none;
                background-color: #f7f7f7;
              }
            }
          }
          tbody{
            tr{
              th{
                padding: 12px 0 12px 30px;
                border: none;
                color: #676767;
                font-size: 16px;
                font-weight: 700;
              }
              td{
                border: none;
                color: #676767;
                font-size: 16px;
                font-weight: 400;
              }
            }
          }
          tbody tr:nth-of-type(odd) {
            background-color: white;
          }
          tbody tr:nth-of-type(even) {
            background-color: #f7f7f7;
          }
        }
      }
      .applicability{
        margin-top: 40px;
      }
      .analog-zapchasti{
        margin-top: 40px;
        h6{
          color: #242424;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .carousel-analog-tovar{
          position: relative;
          .items-wrap {
            padding: 10px 5px;
            .items{
              margin-bottom: 21px;
              &:last-child {
                margin-bottom: 0;
              }
            }
            .analog-tovar{
              box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.11);
              border-radius: 5px;
              background-color: #ffffff;
              height: 130px;
              padding: 19px 27px 19px 19px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              @media(max-width: 1599px) {
                padding: 19px;
              }
              @media(max-width: 1199px) {
                padding: 12px;
              }
              .img-tovar{
                padding: 12px 0;
                max-width: 155px;
                border-radius: 5px;
                border: 1px solid #dfdfdf;
                background-color: #ffffff;
                margin-right: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                border-radius: 5px;
                img{
                  width: 60%;
                }
                @media(max-width: 1599px) {
                  margin-right: 10px;
                }
              }
              .block-name{
                .artikul{
                  max-width: 160px;
                  border-radius: 5px;
                  border: 1px solid #dfdfdf;
                  background-color: #f6f6f6;
                  padding: 7px 10px;
                  margin-bottom: 7px;
                  @media(max-width: 1199px) {
                    margin-bottom: 14px;
                  }
                  p{
                    color: #424242;
                    font-size: 14px;
                    font-weight: 400;
                    margin: 0;
                    line-height: 1;
                    text-align: center;
                  }
                }
                .name-tovar{
                  color: #242424;
                  font-size: 16px;
                  font-weight: 700;
                  margin: 0;
                  max-width: 270px;
                  @media (max-width: 1599px){
                    font-size: 14px;
                  }
                }
              }
              .block-buy{
                .price{
                  color: #242424;
                  font-size: 20px;
                  font-weight: 700;
                  margin-bottom: 15px;
                  @media (max-width: 1599px){
                    font-size: 15px;
                  }
                }
                .btn-buy{
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border: none;
                  width: 100%;
                  height: 43px;
                  box-shadow: 1px 2px 0 #068fb0;
                  border-radius: 5px;
                  background-color: #00b9e5;
                  color: #ffffff;
                  font-size: 16px;
                  font-weight: 700;
                  text-transform: uppercase;
                  transition: all 0.3s;
                  @media (max-width: 1599px){
                    font-size: 14px;
                  }
                  img{
                    margin-right: 15px;
                    width: 25px;
                    height: 25px;
                  @media (max-width: 1599px){
                    width: 22px;
                    height: 22px;
                  }
                  }
                  &:hover{
                    background-color: #1f7a90;
                  }
                  &:focus{
                    outline: none;
                  }
                }
              }
            }
          }
          /deep/ .owl-prev{
            position: absolute;
            background: none;
            color: #00b9e5;
            right: 40px;
            font-size: 30px;
            top: -62px;
            transition: all 0.3s;
            &:hover{
              i{
                transform: scale(1.2);
                color: #1c697b;
              }
            }
          }
          /deep/ .owl-next{
            position: absolute;
            background: none;
            color: #00b9e5;
            right: 0;
            font-size: 30px;
            top: -62px;
            transition: all 0.3s;
            &:hover{
              i{
                transform: scale(1.2);
                color: #1c697b;
              }
            }
            &::before{
              width: 1px;
              height: 35px;
              background-color: #dfdfdf;
              content: '';
              position: absolute;
              left: -9px;
              top: 10px;
            }
          }
        }
      }
      @media (max-width: 1199px){
        .characteristic,
        .applicability,
        .original-number,
        .analog-zapchasti{
          h6{
            font-size: 18px;
            margin-bottom: 25px;
          }
          .table-characteristic{
            th,
            td{
              font-size: 13px;
            }
          }
          .table-original-number,
          .table-applicability{
            thead{
              tr th{
                font-size: 14px;
                line-height: 1;
                &:last-child{
                  padding-left: 0;
                }
              }
            }
            tbody tr{
              th, td{
                font-size: 15px;
              }
              td{
                padding-left: 0;
              }
            }
          }
        }
        .analog-zapchasti{
          h6{
            margin-bottom: 17px;
          }
          .carousel-analog-tovar .items-wrap .analog-tovar{
            flex-wrap: wrap;
            height: 196px;
            .img-tovar{
              max-width: 90px;
              height: 105px;
            }
            .block-buy{
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .price{
                font-size: 18px;
                white-space: nowrap;
                margin-right: 25px;
                margin-bottom: 0;
              }
              .btn-buy{
                max-width: 145px;
              }
            }
          }
        }
      }
      @media (max-width: 993px){
        .characteristic,
        .applicability,
        .original-number,
        .analog-zapchasti{
          .table-characteristic{
            th,
            td{
              font-size: 13px;
              padding-left: 12px;
            }
          }
          .table-original-number,
          .table-applicability{
            thead{
              tr th{
                font-size: 13px;
                padding-left: 12px;
                line-height: 1;
                &:last-child{
                  padding-left: 0;
                }
              }
            }
            tbody tr{
              th, td{
                font-size: 13px;
                padding: 12px 12px;
                white-space: nowrap;
              }
              td{
                padding-left: 0;
              }
            }
          }
        }
      }
      @media (max-width: 767px){
        margin-top: 30px;
        .characteristic,
        .original-number{
          margin-bottom: 30px;
        }
        .applicability{
          margin: 0 0 30px;
        }
        .analog-zapchasti{
          margin: 0;
          .carousel-analog-tovar{
            /deep/.owl-prev {
              top: -54px;
            }
            /deep/ .owl-next{
              top: -54px;
            }
            .items-wrap .analog-tovar{
              padding: 10px;
              .img-tovar{
                max-width: 100px;
                width: 100px;
                height: 93px;
                margin-right: 15px;
              }
              .block-name{
                .artikul{
                  background: none;
                  border: none;
                  padding: 0;
                  p{
                    text-align: start;
                  }
                }
                .name-tovar{
                  font-size: 15px;
                }
              }
              .block-buy .btn-buy{
                font-size: 14px;
                img{
                  margin-right: 8px;
                  width: 20px;
                  height: 20px;
                }
              }
            }
          }
        }
        .characteristic,
        .applicability,
        .original-number,
        .analog-zapchasti{
          .table-characteristic{
            th,
            td{
              font-size: 12px;
              padding-left: 10px;
            }
          }
          .table-original-number{
            thead{
              tr th{
                font-size: 12px;
                padding-left: 10px;
                &:last-child{
                  padding-left: 0;
                }
              }
            }
            tbody tr{
              th, td{
                font-size: 12px;
                padding: 10px;
              }
              td{
                padding-left: 0;
              }
            }
          }
          .table-applicability{
            thead{
              tr th{
                font-size: 12px;
                padding-left: 10px;
                &:last-child{
                  padding-left: 0;
                }
              }
            }
            tbody tr{
              th, td{
                font-size: 12px;
                padding: 10px;
              }
              td{
                padding-left: 0;
              }
            }
          }
        }
      }
    }
    .fancy-box-wrap {
      .fancy-box {
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
        padding: 15px;
        position: fixed;
        top: 50px;
        left: 5%;
        width: 90%;
        height: calc(100vh - 100px);
        opacity: 0;
        pointer-events: none;
        transition: opacity .3s;
        z-index: 5;
        background: #fff;
        border-radius: 10px;
        img {
          width: 80%;
          height: 100%;
          object-fit: contain;
        }
        i {
          position: absolute;
          color: #000;
          opacity: 0.6;
          right: 20px;
          top: 20px;
          font-size: 20px;
          cursor: pointer;
          transition: all .3s;
          &:hover {
            opacity: 1;
          }
        }
        &.open{
          opacity: 1;
          pointer-events: unset;
        }
      }
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, 0.5);
        z-index: 4;
        opacity: 0;
        pointer-events: none;
        transition: opacity .3s;
      }
      &.open .overlay{
        opacity: 1;
        pointer-events: unset;
      }
    }
    @media (max-width: 767px){
      padding: 50px 0;
    }
  }
</style>
