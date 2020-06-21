<template>
  <div>
    <Header />
    <main class="cart-tovar-main"
    :style="{
      'background-image': `url(${require('@/assets/img/bg-contacrs.png')})`
    }"
    >
      <div class="container">
        <BreadCrumbs />
        <div class="block-tovar">
          <div class="row">
            <div class="col-5">
              <div class="block-img-tovar">
                <img src="@/assets/img/img-cart-tovar.png" alt="img-cart-tovar" class="img-cart-tovar">
                <button class="btn-loupe">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="col-7">
              <div class="block-info-tovar">
                <p class="name-tovar">
                  Название запчасти обычно в две строки и не вмещается
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <p class="price">3000-3250 <span>грн</span></p>
                    <p class="info-price">уточнение почему две цены </p>
                  </div>
                  <div class="artikul">
                    <p>Артикул: 4526358</p>
                  </div>
                </div>
                <button class="btn-buy">
                  <img src="@/assets/img/btn-img.png" alt="btn-img">
                   Купить
                </button>
                <div class="block-description">
                  <div class="description">
                    <h6>Описание</h6>
                    <p>Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий.</p>
                    <p>Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.</p>
                  </div>
                  <div class="block-dostavka">
                    <div class="dostavka">
                      <div class="d-flex align-items-center">
                        <h5>Доставка </h5>
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
                    <div class="pay">
                      <div class="d-flex align-items-center">
                        <h5>Оплата</h5>
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
                    <div class="guarantee">
                      <div class="d-flex align-items-center">
                        <h5>Гарантия</h5>
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
            <div class="col-6">
              <div class="characteristic">
                <h6>Характеристики автозапчасти</h6>
                <table class="table table-striped table-characteristic">
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
            <div class="col-6">
              <div class="original-number">
                <h6>Оригинальные номера</h6>
                <table class="table table-striped table-original-number">
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
            <div class="col-6">
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
            <div class="col-6">
              <div class="analog-zapchasti">
                <h6>Аналоги запчасти</h6>
                <Carousel
                  :items="1"
                  class="carousel-analog-tovar"
                  :dots="false"
                  :navText="navText"
                >
                  <div class="items" v-for="index in new Array(8)" :key="index">
                    <div class="analog-tovar">
                      <div class="d-flex align-items-center">
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
                        <button class="btn-buy">
                          <img src="@/assets/img/btn-img.png" alt="btn-img">
                           Купить
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="items" v-for="index in new Array(8)" :key="index">
                    <div class="analog-tovar">
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
                  </div> -->
                </Carousel>
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
import BreadCrumbs from '@/components/layout/BreadCrumbs.vue'

export default {
  name: 'Product',
  components: {
    Header,
    BreadCrumbs,
    Footer
  },
  data: () => ({
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"/>', '<i class="fa fa-angle-right" aria-hidden="true"/>']
  })
}
</script>

<style lang="scss" scoped>
  .cart-tovar-main{
    padding: 86px 0;
    min-height: calc(100vh - 60px);
    background-repeat: no-repeat;
    background-position-y: bottom;
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
        }
      }
      .block-info-tovar{
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
          width: 235px;
          height: 55px;
          box-shadow: 1px 2px 0 #068fb0;
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
            width: 50%;
            padding-right: 30px;
            h6{
              color: #242424;
              font-size: 20px;
              font-weight: 700;
              margin-bottom: 30px;
            }
            p{
              color: #676767;
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
            }
          }
          .block-dostavka{
            width: 50%;
            border-left: 1px solid #dfdfdf;
            padding-left: 30px;
            .dostavka,
            .pay,
            .guarantee{
              h5{
                color: #00b9e5;
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 15px;
              }
              .dop-info{
                .fa-dop-info{
                  color: #d7d7d7;
                  font-size: 16px;
                  margin-bottom: 16px;
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
                transform: translateY(-120%);
                bottom: 0;
                right: 9%;
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
              }
              ul{
                padding: 0;
                li{
                  list-style: none;
                  display: flex;
                  align-items: center;
                  img{
                    margin-right: 10px;
                  }
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
          .analog-tovar{
            box-shadow: 1px 2px 24px rgba(0, 0, 0, 0.11);
            border-radius: 5px;
            background-color: #ffffff;
            height: 130px;
            padding: 19px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px 2px;
            .img-tovar{
              max-width: 155px;
              border-radius: 5px;
              height: 85px;
              border: 1px solid #dfdfdf;
              background-color: #ffffff;
              margin: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              img{
                width: 60%;
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
              }
            }
            .block-buy{
              .price{
                color: #242424;
                font-size: 20px;
                font-weight: 700;
                margin-bottom: 15px;
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
                img{
                  margin-right: 15px;
                  width: 25px;
                  height: 25px;
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
          /deep/ .owl-prev{
            position: absolute;
            background: none;
            color: #00b9e5;
            right: 40px;
            font-size: 20px;
            top: -30px;
            transition: all 0.3s;
            &:hover{
              transform: scale(1.02);
              color: #1c697b;
            }
          }
          /deep/ .owl-next{
            position: absolute;
            background: none;
            color: #00b9e5;
            right: 0;
            font-size: 20px;
            top: -30px;
            transition: all 0.3s;
            &:hover{
              transform: scale(1.2);
              color: #1c697b;
            }
          }
        }
      }
    }
  }
</style>
