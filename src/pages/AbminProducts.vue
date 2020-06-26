<template>
  <div>
    <Header />
    <main class="admin-products-main"
    :style="{
      'background-image': `url(${require('@/assets/img/bg-error.png')})`
    }"
    >
    <div class="container">
      <BreadCrumbs />
      <div class="block-products">
        <div class="row">
          <div class=" d-block col-4 col-xl-2">
            <MenuAdmin />
          </div>
          <div class="col-12 col-md-8 col-xl-10">
            <h4>Товары</h4>
            <div class="row">
              <div class="pt-0 pb-0 col-12 col-xl-4">
                <InputAdmin text="Артикул товара" id="articul-product"/>
                <InputAdmin text="Производитель" id="generator"/>
              </div>
              <div class="pt-0 pb-0 col-12 col-xl-4">
                <InputAdmin text="Название товара" id="name-products"/>
                <InputNumber text="В наличии" id="in-stock"/>
              </div>
              <div class="pt-0 pb-0 col-12 col-xl-4">
                <InputAdmin text="Категория товара" id="category-product"/>
                <div class="d-flex">
                  <InputDoubleNumber text="Цена"/>
                  <div class="valuta">
                    <p>грн</p>
                  </div>
                </div>
              </div>
              <div class="pt-0 pb-0 col-12 col-md-8 col-xl-4">
                <InputAdmin text="Продавец" id="seller"/>
              </div>
              <div class="pt-0 pb-0 col-12 col-md-4 d-flex justify-content-center justify-content-md-end justify-content-xl-start">
                <BtnBlue text="Найти"/>
              </div>
              <div class="pt-0 pb-0 col-12 d-flex align-item-center flex-wrap justify-content-between justify-content-xl-start">
                <button class="btn-gray">Редактировать</button>
                <button class="btn-white">Удалить</button>
                <RadioAdmin text="Применить для выбранных" id="apply-selected" name="apply-selected" class="apply-selected"/>
              </div>
            </div>
            <v-data-table
                :headers="headers"
                :items="items"
                class="elevation-1"
              >
                <template v-slot:item.checbox="{ item }">
                  <RadioAdmin :id="`row-selection-${item.checbox}`" class="row-selection"/>
                </template>
                <template v-slot:item.change>
                  <button class="btn-edit">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                </template>
            </v-data-table>
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
import InputAdmin from '@/components/layout/InputAdmin.vue'
import InputNumber from '@/components/layout/InputNumber.vue'
import InputDoubleNumber from '@/components/layout/InputDoubleNumber.vue'
import BtnBlue from '@/components/layout/BtnBlue.vue'
import RadioAdmin from '@/components/layout/RadioAdmin.vue'

export default {
  name: 'AbminProducts',
  components: {
    Header,
    Footer,
    BreadCrumbs,
    MenuAdmin,
    InputAdmin,
    InputNumber,
    InputDoubleNumber,
    BtnBlue,
    RadioAdmin
  },
  data: () => ({
    headers: [
      {
        select: '',
        value: 'checbox',
        align: 'start'
      },
      { text: 'Артикул товара', value: 'articulProduct', align: 'center' },
      { text: 'Название товара', value: 'nameProduct', align: 'center' },
      { text: 'Цена', value: 'price', align: 'center' },
      { text: 'Производитель', value: 'manufacture', align: 'center' },
      { text: 'Категория товара', value: 'categoriProduct', align: 'center' },
      { text: 'Наличие товар', value: 'availbility', align: 'center' },
      { text: ' ', value: 'change', align: 'right' }
    ],
    items: [
      {
        checbox: '1',
        articulProduct: 'VAG',
        nameProduct: 'VAG',
        price: 'VAG',
        manufacture: 'VAG',
        categoriProduct: 'VAG',
        availbility: 'VAG',
        change: ''
      },
      {
        checbox: '2',
        articulProduct: 'VAG',
        nameProduct: 'VAG',
        price: 'VAG',
        manufacture: 'VAG',
        categoriProduct: 'VAG',
        availbility: 'VAG',
        change: ''
      },
      {
        checbox: '3',
        articulProduct: 'VAG',
        nameProduct: 'VAG',
        price: 'VAG',
        manufacture: 'VAG',
        categoriProduct: 'VAG',
        availbility: 'VAG',
        change: ''
      },
      {
        checbox: '4',
        articulProduct: 'VAG',
        nameProduct: 'VAG',
        price: 'VAG',
        manufacture: 'VAG',
        categoriProduct: 'VAG',
        availbility: 'VAG',
        change: ''
      },
      {
        checbox: '5',
        articulProduct: 'VAG',
        nameProduct: 'VAG',
        price: 'VAG',
        manufacture: 'VAG',
        categoriProduct: 'VAG',
        availbility: 'VAG',
        change: ''
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
  .admin-products-main{
    padding: 86px 0 55px;
    min-height: calc(100vh - 60px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    .block-products{
      margin-top: 50px;
      h4{
        color: #242424;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 40px;
        @media (max-width: 767px){
         margin-bottom: 25px;
         font-size: 24px;
        }
      }
      /deep/.form-group{
        align-items: start;
      }
      /deep/ .double-imput-number-group{
        .input-admin{
          width: 100%;
        }
        @media (max-width: 1599px){
          label{
           font-size: 14px;
          }
        }
      }
      /deep/ label.lebel-input-admin{
        width: 50%;
        height: 45px;
        border-radius: 5px 0 0 5px;
        background-color: #f6f6f6;
        color: #676767;
        font-size: 16px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 1599px){
          font-size: 14px;
        }
      }
      /deep/ .input-admin{
        width: 50%;
        height: 45px;
        border-radius: 0 5px 5px 0;
        border: 1px solid #e8e8e8;
        background-color: #ffffff;
        margin: 0;
      }
      .valuta{
        max-width: 71px;
        width: 100%;
        height: 45px;
        border-radius: 5px;
        background-color: #f6f6f6;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        p{
          color: #676767;
          font-size: 16px;
          font-weight: 700;
          margin: 0;
        }
        @media (max-width: 1599px){
          max-width: 35px;
          p{
            font-size: 14px;
          }
        }
        @media (max-width: 1199px){
          max-width: 70px;
          p{
            font-size: 14px;
          }
        }
      }
      .btn-blue{
        width: 141px;
      }
      .btn-gray{
        width: 233px;
        height: 43px;
        box-shadow: 1px 2px 0 #5a5959;
        border-radius: 5px;
        background-color: #888888;
        color: #ffffff;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        margin-right: 25px;
        border: none;
        transition: all 0.3s;
        &:hover{
          background-color: #00b9e5;
          box-shadow: 1px 2px 0 #00b9e5;
        }
        @media (max-width: 1199px){
          max-width: 200px;
          margin-right: 0;
        }
        @media (max-width: 767px){
          max-width: unset;
          width: 48%;
          margin-top: 20px;
        }
      }
      .btn-white{
        color: #00b9e5;
        background: #fff;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        width: 160px;
        height: 43px;
        border-radius: 5px;
        border: 1px solid #00b9e5;
        margin-right: 35px;
        transition: all 0.3s;
        &:hover{
          background-color: #00b9e5;
          color: #fff;
        }
        @media (max-width: 1199px){
           margin-right: 0;
        }
        @media (max-width: 767px){
          max-width: unset;
          width: 48%;
          margin-top: 20px;
        }
      }
      /deep/ .apply-selected{
        margin: 0;
        display: flex;
        align-items: center;
        .checkbox + label{
          color: #676767;
          font-size: 16px;
          font-weight: 400;
          margin: 0;
          text-transform: none;
        }
        @media (max-width: 1199px){
          margin-top: 15px;
        }
      }
      .elevation-1 {
        margin-top: 40px;
        /deep/ .v-data-table-header tr {
          background-color: #f7f7f7;
          border-radius: 5px 5px 0 0;
          th {
            border-bottom: none !important;
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
            font-size: 16px;
            border-bottom: none !important;
            color: #676767;
            font-weight: 400;
            @media (max-width: 993px){
              font-size: 14px;
              white-space: nowrap;
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
        .btn-edit {
          color: #00b9e5;
          transition: all 0.3s;
          i {
            margin-left: 1.5vw;
          }
          &:hover{
            color: #286573;
            transform: scale(1.05);
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
        }
      }
      // .table-admin-products{
      //   margin-top: 40px;
      //   thead th{
      //     border: none;
      //     border-radius: 5px 5px 0 0;
      //     background-color: #f7f7f7;
      //     color: #676767;
      //     font-size: 16px;
      //     font-weight: 700;
      //     text-align: center;
      //     &:nth-child(2){
      //       text-align: start;
      //     }
      //   }
      //   tbody tr td{
      //     color: #676767;
      //     font-size: 16px;
      //     font-weight: 400;
      //     border: none;
      //     text-align: center;
      //     &:nth-child(2){
      //       font-weight: 700;
      //       text-align: start;
      //     }
      //   }
      //   tbody tr th{
      //     border: none;
      //   }
      //   .btn-edit{
      //     border: none;
      //     background: none;
      //     font-size: 14px;
      //     color: #00b9e5;
      //     &:focus{
      //       outline: none;
      //     }
      //     &:hover{
      //       transform: scale(1.1);
      //       color: #30626e;
      //       i{
      //         transform: scale(1.1);
      //         color: #30626e;
      //       }
      //     }
      //   }
      // }
      // .table-striped tbody tr:nth-of-type(odd) {
      //   background-color: white;
      // }
      // .table-striped tbody tr:nth-of-type(even) {
      //   background-color: #f7f7f7;
      // }
    }
  }
</style>
