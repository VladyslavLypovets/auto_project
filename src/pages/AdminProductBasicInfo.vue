<template>
  <div>
    <Header />
    <main class="admin-product-basicinfo-main"
    :style="{
      'background-image': `url(${require('@/assets/img/bg-admin.png')})`
    }"
    >
    <div class="container">
      <BreadCrumbs />
      <div class="block-product-basicinfo">
        <div class="row">
          <div class=" d-block col-4 col-xl-2 pr-4">
            <MenuAdmin />
          </div>
          <div class="col-12 col-md-8 col-xl-10 pl-md-4 pl-3">
            <div class="d-flex align-items-center justify-content-between name-page">
              <h4>Товар</h4>
              <BtnBlue text="Сохранить"/>
            </div>
            <MenuProductAdmin :active="activePage" @change="val => activePage = val"/>
            <div class="basic-info" v-if="activePage === 0">
              <h4>Основные данные</h4>
              <div class="block-info">
                <InputAdmin text="Идентификатор" id="identifier-1" placeholder="test"/>
                <InputAdmin text="Кат номер" id="kat-number"/>
                <InputAdmin text="Идентификатор из TecDok" id="identifier-tecdok"/>
                <InputAdmin text="Имя" id="name"/>
                <InputAdmin text="Короткое имя" id="short-name"/>
                <InputAdmin text="Значение" id="value"/>
                <InputAdmin text="Единица измерения" id="until"/>
                <InputAdmin text="Производитель ID" id="manufacturer-id"/>
                <InputAdmin text="Производитель ТесDocld" id="manufacturer-tecdocld"/>
                <InputAdmin text="Производитель Название" id="manufacturer-name"/>
                <InputAdmin text="Цена от" id="price-from"/>
                <InputAdmin text="Цена до" id="price-up"/>
                <InputAdmin text="Наличие" id="availability"/>
                <div class="d-flex align-item-center mt-2 justify-content-between justify-content-md-start">
                  <p>Акция</p>
                  <RadioAdmin text="Да" id="stock-yes" name="stock"/>
                  <RadioAdmin text="Нет" id="stock-no" name="stock"/>
                </div>
                <InputAdmin text="Цена акции" id="share-price"/>
                <InputAdmin text="Индетификатор" id="identifier-2"/>
                <div class="d-flex align-item-center flex-wrap">
                  <p>Фото</p>
                  <div class="block-link-photo">
                    <div class="link-photo">
                      <router-link to="/" class="link">https://docs.google.com/spreadsheets</router-link>
                    </div>
                    <div class="link-photo">
                      <router-link to="/" class="link">https://docs.google.com/spreadsheets</router-link>
                    </div>
                    <div class="link-photo">
                      <router-link to="/" class="link">https://docs.google.com/spreadsheets</router-link>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-item-center mt-2 justify-content-between justify-content-md-start">
                  <p>Рекомендуемый</p>
                  <RadioAdmin text="Да" id="recommended-yes" name="recommended"/>
                  <RadioAdmin text="Нет" id="recommended-no" name="recommended"/>
                </div>
                <InputAdmin text="Категория ID" id="category-id"/>
                <InputAdmin text="Категория название" id="category-title"/>
                <InputAdmin text="Подкатегория ID" id="subcategory-id"/>
                <InputAdmin text="Подкатегория название" id="subcategory-title"/>
                <DoubleInputAdmin text="Характеристики" id="characteristics-1"/>
                <DoubleInputAdmin id="characteristics-2"/>
                <DoubleInputAdmin id="characteristics-3"/>
                <DoubleInputAdmin id="characteristics-4"/>
                <div class="d-flex justify-content-center justify-content-md-end">
                 <BtnBlue text="Добавить"/>
                </div>
              </div>
            </div>
            <div class="original-numbers" v-if="activePage === 1">
              <div class="row">
                <div class="col-12 col-xl-3">
                  <div class="vendor-cod">
                    <InputAdmin text="Код поставщика" id="vendor-cod"/>
                  </div>
                </div>
                <div class="col-12 col-xl-9">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Магазины номера</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">245678</th>
                      </tr>
                      <tr>
                        <th scope="row">245678</th>
                      </tr>
                      <tr>
                        <th scope="row">245678</th>
                      </tr>
                       <tr>
                        <th scope="row">245678</th>
                      </tr>
                       <tr>
                        <th scope="row">245678</th>
                      </tr>
                       <tr>
                        <th scope="row">245678</th>
                      </tr>
                       <tr>
                        <th scope="row">245678</th>
                      </tr>
                    </tbody>
                  </table>
                  <div class="d-flex justify-content-center justify-content-xl-end">
                    <BtnBlue text="Добавить код"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="applicability" v-if="activePage === 2">
              <h4>Перечень авто</h4>
              <div class="block-applicability">
                <v-data-table
                  :headers="headers"
                  :items="items"
                  class="elevation-3"
                >
                  <template v-slot:item.delete>
                    <button class="delete">
                      <img src="@/assets/img/delete.png" alt="delete">
                    </button>
                  </template>
                </v-data-table>
              </div>
              <div class="add-avto">
                <h4>Добавить авто</h4>
                <InputAdmin placeholder="Введите ID или название автомобиля"/>
                <BtnBlue text="Добавить"/>
              </div>
            </div>
            <div class="analogs" v-if="activePage === 3">
              <h4>пЕРЕЧЕНЬ АНАЛОГов</h4>
              <div class="block-analog">
              <v-data-table
                :headers="headers2"
                :items="items2"
                class="elevation-4"
              >
                <template v-slot:item.name>
                  <router-link to="/product" class="link-admin" target="_blank">
                    Подшипник 15*42*13 63022RS
                  </router-link>
                </template>
                <template v-slot:item.delete>
                  <button class="delete">
                    <img src="@/assets/img/delete.png" alt="delete">
                  </button>
                </template>
              </v-data-table>
              </div>
              <div class="add-analog">
                <h4>Добавить аналог</h4>
                <InputAdmin placeholder="Введите ID или название товара"/>
                <BtnBlue text="Добавить"/>
              </div>
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
import MenuAdmin from '@/components/layout/MenuAdmin.vue'
import MenuProductAdmin from '@/components/layout/MenuProductAdmin.vue'
import InputAdmin from '@/components/layout/InputAdmin.vue'
import RadioAdmin from '@/components/layout/RadioAdmin.vue'
import DoubleInputAdmin from '@/components/layout/DoubleInputAdmin.vue'
import BtnBlue from '@/components/layout/BtnBlue.vue'

export default {
  name: 'AdminProductBasicInfo',
  components: {
    Header,
    Footer,
    BreadCrumbs,
    MenuAdmin,
    MenuProductAdmin,
    InputAdmin,
    RadioAdmin,
    DoubleInputAdmin,
    BtnBlue
  },
  data: () => ({
    activePage: 0,
    headers: [
      {
        text: 'ID товаров',
        value: 'id',
        align: 'center'
      },
      { text: 'Марка', value: 'marka', align: 'center' },
      { text: 'Год с', value: 'yearFrom', align: 'center' },
      { text: 'Год по', value: 'yearBefore', align: 'center' },
      { text: 'Идентификатор', value: 'identifier', align: 'center' },
      { text: 'Тип конструкции', value: 'typeConstruction', align: 'center' },
      { text: 'Тип топлива', value: 'typeFuel', align: 'center' },
      { text: 'Идентификатор производителя', value: 'identifierGenerator', align: 'center' },
      { text: 'Название производителя', value: 'nameGenerator', align: 'center' },
      { text: 'Идентификатор модели', value: 'identifierModelka', align: 'center' },
      { text: 'Модель', value: 'model', align: 'center' },
      { text: 'Модификация', value: 'modification', align: 'center' },
      { text: '', value: 'delete', align: 'right' }
    ],
    items: [
      {
        id: '123',
        marka: 'BMW',
        yearFrom: '1990',
        yearBefore: '2005',
        identifier: '2005',
        typeConstruction: '2005',
        typeFuel: '2005',
        identifierGenerator: '2005',
        nameGenerator: '2005',
        identifierModelka: '2005',
        model: 'X5',
        modification: 'M series',
        delete: ''
      },
      {
        id: '123',
        marka: 'BMW',
        yearFrom: '1990',
        yearBefore: '2005',
        identifier: '2005',
        typeConstruction: '2005',
        typeFuel: '2005',
        identifierGenerator: '2005',
        nameGenerator: '2005',
        identifierModelka: '2005',
        model: 'X5',
        modification: 'M series',
        delete: ''
      },
      {
        id: '123',
        marka: 'BMW',
        yearFrom: '1990',
        yearBefore: '2005',
        identifier: '2005',
        typeConstruction: '2005',
        typeFuel: '2005',
        identifierGenerator: '2005',
        nameGenerator: '2005',
        identifierModelka: '2005',
        model: 'X5',
        modification: 'M series',
        delete: ''
      },
      {
        id: '123',
        marka: 'BMW',
        yearFrom: '1990',
        yearBefore: '2005',
        identifier: '2005',
        typeConstruction: '2005',
        typeFuel: '2005',
        identifierGenerator: '2005',
        nameGenerator: '2005',
        identifierModelka: '2005',
        model: 'X5',
        modification: 'M series',
        delete: ''
      },
      {
        id: '123',
        marka: 'BMW',
        yearFrom: '1990',
        yearBefore: '2005',
        identifier: '2005',
        typeConstruction: '2005',
        typeFuel: '2005',
        identifierGenerator: '2005',
        nameGenerator: '2005',
        identifierModelka: '2005',
        model: 'X5',
        modification: 'M series',
        delete: ''
      }
    ],
    headers2: [
      {
        text: 'ID товаров',
        value: 'id',
        align: 'center'
      },
      { text: 'Название', value: 'name', align: 'center' },
      { text: ' ', value: 'delete', align: 'right' }
    ],
    items2: [
      {
        id: '123',
        name: '',
        delete: ''
      },
      {
        id: '123',
        name: '',
        delete: ''
      },
      {
        id: '123',
        name: '',
        delete: ''
      },
      {
        id: '123',
        name: '',
        delete: ''
      },
      {
        id: '123',
        name: '',
        delete: ''
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
  .admin-product-basicinfo-main{
    padding: 83px 0 50px;
    min-height: calc(100vh - 60px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
    .block-product-basicinfo{
      margin-top: 50px;
      .name-page{
        margin-bottom: 40px;
        h4{
          color: #242424;
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 0;
          text-transform: uppercase;
          @media (max-width: 767px){
          margin-bottom: 25px;
          font-size: 24px;
          }
        }
      }
      .basic-info{
        margin-top: 45px;
        @media (max-width: 767px){
          margin-top: 25px;
        }
        h4{
          color: #242424;
          font-size: 24px;
          font-weight: 700;
          line-height: 48px;
          text-transform: uppercase;
          margin-bottom: 30px;
          @media (max-width: 767px){
            margin-bottom: 20px;
          }
        }
        .block-info{
          p{
            color: #676767;
            font-size: 16px;
            font-weight: 700;
            width: 20%;
            @media (max-width: 1199px){
              width: 35%;
            }
            @media (max-width: 767px){
              width: 100%;
            }
          }
          .block-link-photo{
            flex: 1;
            margin-left: 10px;
            margin-bottom: 15px;
            .link-photo{
              border-radius: 5px;
              border: 1px solid #e8e8e8;
              background-color: #ffffff;
              margin-bottom: 12px;
              height: 45px;
              display: flex;
              align-items: center;
              padding-left: 15px;
              .link{
                color: #00b9e5;
                font-size: 16px;
                font-weight: 400;
              }
            }
            @media (max-width: 767px){
              flex: unset;
              margin-left: 0;
              width: 100%;
              .link-photo .link{
                font-size: 13px;
              }
            }
          }
          /deep/ .lebel-input-admin{
            color: #676767;
            font-size: 16px;
            font-weight: 700;
            @media (max-width: 1199px){
              width: 35%;
            }
             @media (max-width: 767px){
              width: 100%;
            }
          }
          /deep/.input-admin{
            margin-left: 10px;
             @media (max-width: 767px){
              margin-left: 0;
            }
          }
          /deep/ .form-group-double-input{
            .double-input-admin{
              margin-left: 10px;
            }
            @media (max-width: 1199px){
              align-items: flex-start;
              .double-input-admin{
                width: 100%;
                margin-bottom: 16px;
              }
            }
            @media (max-width: 767px){
              .double-input-admin{
                margin-left: 0;
              }
            }
          }
          .btn-blue{
            width: 216px;
          }
        }
      }
      .applicability{
        h4{
          color: #242424;
          font-size: 24px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 25px;
          margin-top: 45px;
          @media (max-width: 767px){
            margin: 25px 0;
            font-size: 24px;
          }
        }
        .block-applicability{
          .elevation-3 {
            /deep/ .v-data-table-header tr {
              background-color: #f6f6f6;
              border-radius: 5px 5px 0 0;
              border: 1px solid #dfdfdf;
              th {
                border: 1px solid #dfdfdf;
                padding: 0 10px;
                span{
                  color: #676767;
                  font-size: 16px;
                  font-weight: 700;
                  @media (max-width: 993px){
                    font-size: 14px;
                  }
                }
              }
              &:hover {
                background: #f7f7f7 !important;
              }
            }
            /deep/ tr {
              td {
                background-color: #f6f6f6;
                border: 1px solid #dfdfdf;
                color: #676767;
                font-size: 16px;
                font-weight: 400;
                @media (max-width: 993px){
                  font-size: 14px;
                  white-space: nowrap;
                }
                &:last-child{
                  border-left: none;
                }
                &:nth-child(2){
                  border-right: none;
                }
                .link-admin{
                  color: #00b9e5;
                  font-size: 16px;
                  font-weight: 400;
                  text-decoration: underline;
                }
              }
              &:hover {
                background: #fff !important;
              }
              &:nth-child(2n) {
                background-color: #f7f7f7 !important;
                border-radius: 5px 5px 0 0;
              }
            }
            .delete{
              transition: all 0.3s;
              &:hover{
                transform: scale(1.09);
              }
            }
            @media(max-width: 767px) {
              /deep/ tr td:last-child {
                border-bottom: thin solid rgba(0,0,0,.12) !important;
              }
              /deep/ .v-data-table-header tr {
                border: none;
                th {
                  border: none;
                }
              }
              /deep/ tr td{
                border: none;
                .link-admin{
                  font-size: 12px;
                }
              }
            }
          }
          .table-bordered {
            border: 1px solid #dfdfdf;
          }
          .table{
            background-color: #f6f6f6;
            border-radius: 5px;
            text-align: center;
            thead th{
              text-align: center;
              color: #676767;
              font-size: 16px;
              font-weight: 700;
            }
            tbody{
              th{
                color: #676767;
                font-size: 16px;
                font-weight: 400;
              }
              td{
                color: #676767;
                font-size: 16px;
                font-weight: 400;
              }
              .delete-produkt{
                .delete{
                  border: none;
                  background: none;
                  transition: all 0.3s;
                  &:hover{
                    transform: scale(1.1);
                  }
                  &:focus{
                    outline: none;
                  }
                }
              }
            }
          }
        }
        .add-avto{
          /deep/ .form-group .input-admin{
            height: 59px;
            border-radius: 5px;
            border: 7px solid rgba(223, 223, 223, 0.54);
            background-color: #fff;
            width: 100%;
            flex: none;
            margin: 0 0 15px;
             @media (max-width: 767px){
              &::placeholder{
                font-size: 13px;
              }
            }
          }
          .btn-blue{
            width: 210px;
          }
          @media (max-width: 767px){
            .btn-blue{
              width: 100%;
            }
            /deep/ .form-group .input-admin{
              margin: 0;
            }
          }
        }
      }
      .analogs{
        h4{
          color: #242424;
          font-size: 24px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 25px;
          margin-top: 45px;
          @media (max-width: 767px){
            margin: 25px 0;
            font-size: 24px;
          }
        }
        .block-analog{
          .elevation-4 {
            /deep/ .v-data-table-header tr {
              background-color: #f6f6f6;
              border-radius: 5px 5px 0 0;
              border: 1px solid #dfdfdf;
              th {
                border: 1px solid #dfdfdf;
                span{
                  color: #676767;
                  font-size: 16px;
                  font-weight: 700;
                  @media (max-width: 993px){
                    font-size: 14px;
                  }
                }
                &:last-child{
                  border-left: none;
                }
                &:nth-child(2){
                  border-right: none;
                }
              }
              &:hover {
                background: #f7f7f7 !important;
              }
            }
            /deep/ tr {
              td {
                background-color: #f6f6f6;
                border: 1px solid #dfdfdf;
                color: #676767;
                font-size: 16px;
                font-weight: 400;
                @media (max-width: 993px){
                  font-size: 14px;
                  white-space: nowrap;
                }
                &:last-child{
                  border-left: none;
                }
                &:nth-child(2){
                  border-right: none;
                }
                .link-admin{
                  color: #00b9e5;
                  font-size: 16px;
                  font-weight: 400;
                  text-decoration: underline;
                }
              }
              &:hover {
                background: #fff !important;
              }
              &:nth-child(2n) {
                background-color: #f7f7f7 !important;
                border-radius: 5px 5px 0 0;
              }
            }
            .delete{
              transition: all 0.3s;
              &:hover{
                transform: scale(1.09);
              }
            }
            @media(max-width: 767px) {
              /deep/ tr td:last-child {
                border-bottom: thin solid rgba(0,0,0,.12) !important;
              }
              /deep/ .v-data-table-header tr {
                border: none;
                th {
                  border: none;
                }
              }
              /deep/ tr td{
                border: none;
                .link-admin{
                  font-size: 12px;
                }
              }
            }
          }
          // .table-bordered {
          //   border: 1px solid #dfdfdf;
          //   .delete-produkt{
          //     border-left: none;
          //   }
          //   .name-tovar{
          //     border-right: none;
          //   }
          //   .delete-th{
          //     border-left: none;
          //   }
          //   th{
          //     border-right: none;
          //   }
          // }
          // .table{
          //   background-color: #f6f6f6;
          //   border-radius: 5px;
          //   thead th{
          //     text-align: center;
          //     color: #676767;
          //     font-size: 16px;
          //     font-weight: 700;
          //   }
          //   tbody{
          //     .id-tovar{
          //       color: #676767;
          //       font-size: 16px;
          //       font-weight: 400;
          //       text-align: center;
          //     }
          //     .name-tovar{
          //       .name{
          //         color: #00b9e5;
          //         font-size: 16px;
          //         font-weight: 400;
          //         text-decoration: underline;
          //         margin: 0;
          //       }
          //     }
          //     .delete-produkt{
          //       .delete{
          //         border: none;
          //         background: none;
          //         transition: all 0.3s;
          //         &:hover{
          //           transform: scale(1.1);
          //         }
          //         &:focus{
          //           outline: none;
          //         }
          //       }
          //     }
          //   }
          // }
        }
        .add-analog{
          /deep/ .lebel-input-admin{
            display: none;
          }
          /deep/ .form-group .input-admin{
            height: 59px;
            border-radius: 5px;
            border: 7px solid rgba(223, 223, 223, 0.54);
            background-color: #fff;
            width: 100%;
            flex: none;
            margin: 0 0 15px;
          }
          .btn-blue{
            width: 210px;
          }
          @media (max-width: 767px){
            .btn-blue{
              width: 100%;
            }
            /deep/ .form-group .input-admin{
              margin: 0;
            }
          }
        }
      }
    }
    .original-numbers{
      margin-top: 35px;
      /deep/ .form-group{
        flex-wrap: wrap;
        /deep/ .lebel-input-admin {
        color: #676767;
          font-size: 16px;
          font-weight: 700;
          width: 100%;
        }
        /deep/ .input-admin{
          width: 100%;
          margin: 0;
        }
      }
      .table{
        margin-top: 32px;
        text-align: center;
        border-radius: 0 0 5px 5px;
        border: 1px solid #e8e8e8;
        thead th {
          background-color: #f7f7f7;
          border: none;
          color: #676767;
          font-size: 16px;
          font-weight: 700;
        }
        @media (max-width: 1199px){
          margin-top: 0;
        }
      }
      .btn-blue{
        margin-top: 30px;
      }
      .table th, .table td {
        border-top: none;
        color: #676767;
        font-size: 16px;
        font-weight: 400;
      }
      .table-striped tbody tr:nth-of-type(odd) {
        background-color: white;
      }
      .table-striped tbody tr:nth-of-type(even) {
        background-color: #f7f7f7;
      }
    }
  }
</style>
