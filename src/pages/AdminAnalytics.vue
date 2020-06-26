<template>
  <div>
    <Header />
    <main class="admin-analytics-main"
    :style="{
      'background-image': `url(${require('@/assets/img/bg-error.png')})`
    }"
    >
    <div class="container">
      <BreadCrumbs />
      <div class="block-analytics">
        <div class="row">
          <div class=" d-block col-4 col-xl-2">
            <MenuAdmin />
          </div>
          <div class="col-12 col-md-8 col-xl-10 pt-0 pb-0 ">
            <h4>Аналитика</h4>
            <div class="row">
              <div class="col-12 col-xl-4 pt-0 pb-0 ">
                <InputAdmin text="ID Frame" id="id-frame"/>
                <InputAdmin text="Домен" id="domen"/>
              </div>
              <div class="col-12 col-xl-4 pt-0 pb-0 ">
                <InputAdmin text="Ссылка на товар" id="link-product"/>
                <InputAdmin text="Кол-во переходов" id="number-transitions"/>
              </div>
            </div>
            <div class="row align-items-start">
              <div class="order-2 order-xl-1 col-12 col-md-2 pt-0 pb-0 ">
                <BtnBlue text="Поиск"/>
              </div>
              <div class="pt-0 pb-0 order-1 oder-xl-2 col-12 col-xl-6 d-flex align-items-start justify-content-start justify-content-xl-end flex-wrap">
                <DatePicker
                  :value="moment(date1, 'DD.MM.YYYY').toDate()"
                  format="DD.MM.YYYY"
                  @input="(val) => date1 = moment(val).format('DD.MM.YYYY')"
                  class="date-picker-wrap"
                  :appendToBody="false"
                >
                  <div slot="input" class="date-picker">
                    <i class="fa fa-calendar" aria-hidden="true"></i> Дата с {{ date1 }}<span><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                  </div>
                </DatePicker>
                <DatePicker
                  :value="moment(date2, 'DD.MM.YYYY').toDate()"
                  format="DD.MM.YYYY"
                  @input="(val) => date2 = moment(val).format('DD.MM.YYYY')"
                  class="date-picker-wrap"
                  :appendToBody="false"
                >
                  <div slot="input" class="date-picker">
                    <i class="fa fa-calendar" aria-hidden="true"></i> Дата по {{ date2 }}<span><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                  </div>
                </DatePicker>
              </div>
            </div>
            <v-data-table
                :headers="headers"
                :items="items"
                class="elevation-1"
                :itemsPerPage="40"
              >
                <template v-slot:item.linkProduct>
                  <a href="https://kasta.ua/market/aksessuary/" class="link">https://kasta.ua/market/aksessuary/</a>
                </template>
            </v-data-table>
            <div class="show-more">
              <BtnBlue text="Показать еще" @click="showMore()"/>
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
import moment from 'moment'
import Footer from '@/components/layout/Footer.vue'
import BreadCrumbs from '@/components/layout/BreadCrumbs.vue'
import MenuAdmin from '@/components/layout/MenuAdmin.vue'
import InputAdmin from '@/components/layout/InputAdmin.vue'
import BtnBlue from '@/components/layout/BtnBlue.vue'
import DatePicker from 'vue2-datepicker'

export default {
  name: 'AdminAnalytics',
  components: {
    Header,
    Footer,
    BreadCrumbs,
    MenuAdmin,
    InputAdmin,
    BtnBlue,
    DatePicker
  },
  data: () => ({
    moment,
    date1: '24.03.2020',
    date2: '24.03.2020',
    headers: [
      {
        text: 'ID',
        value: 'idProduct',
        align: 'start'
      },
      { text: 'Домен', value: 'domen', align: 'center' },
      { text: 'Дата', value: 'date', align: 'center' },
      { text: 'Ссылка на товар', value: 'linkProduct', align: 'center' },
      { text: 'Переход в магазин', value: 'transitionStore', align: 'center' }
    ],
    items: [
      {
        idProduct: 'VAG',
        domen: 'VAG',
        date: '18.03.2020',
        linkProduct: '',
        transitionStore: '2'
      },
      {
        idProduct: 'VAG',
        domen: 'VAG',
        date: '18.03.2020',
        linkProduct: '',
        transitionStore: '2'
      },
      {
        idProduct: 'VAG',
        domen: 'VAG',
        date: '18.03.2020',
        linkProduct: '',
        transitionStore: '2'
      },
      {
        idProduct: 'VAG',
        domen: 'VAG',
        date: '18.03.2020',
        linkProduct: '',
        transitionStore: '2'
      },
      {
        idProduct: 'VAG',
        domen: 'VAG',
        date: '18.03.2020',
        linkProduct: '',
        transitionStore: '2'
      }
    ]
  }),
  methods: {
    showMore () {
      const arr = this.items.slice(0, 5)
      this.items = this.items.concat(arr)
    }
  }
}
</script>

<style  lang="scss" scoped>
  .admin-analytics-main{
    padding: 86px 0 55px;
    min-height: calc(100vh - 60px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    .block-analytics{
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
      .btn-blue{
        width: 141px;
        @media (max-width: 767px){
          width: 100%;
        }
      }
      /deep/ .date-picker-wrap .mx-datepicker-main.mx-datepicker-popup{
        bottom: 0!important;
        transform: translateY(103%)!important;
      }
      .date-picker{
        border-radius: 5px;
        background-color: #f7f7f7;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 240px;
        width: 100%;
        height: 43px;
        color: #676767;
        font-size: 16px;
        font-weight: 400;
        margin-right: 10px;
        i{
          color: #00b9e5;
          font-size: 15px;
          margin-right: 15px;
        }
        span{
          display: flex;
          align-items: center;
          i{
            color: #000;
            font-size: 10px;
            margin-left: 8px;
          }
        }
        @media (max-width: 767px){
          max-width: unset;
          margin-right: 0;
          margin-bottom: 20px;
        }
      }
      .mx-datepicker {
        max-width: 240px;
        width: 100%;
        margin-right: 10px;
        &:last-child{
          margin-right: 0;
        }
        @media (max-width: 767px){
          max-width: unset;
          margin-right: 0;
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
              @media (max-width: 1199px){
                font-size: 14px;
                white-space: nowrap;
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
            .link{
              color: #00b9e5;
              font-size: 16px;
              font-weight: 400;
              @media (max-width: 767px){
                font-size: 11px;
                padding-left: 10px;
              }
            }
            @media (max-width: 1199px){
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
      // .table-admin-analytics{
      //   margin-top: 40px;
      //   thead th{
      //     border: none;
      //     border-radius: 5px 5px 0 0;
      //     background-color: #f7f7f7;
      //     color: #676767;
      //     font-size: 16px;
      //     font-weight: 700;
      //     text-align: center;
      //     &:first-child{
      //       text-align: start;
      //     }
      //   }
      //   tbody tr td{
      //     color: #676767;
      //     font-size: 16px;
      //     font-weight: 400;
      //     border: none;
      //     text-align: center;
      //     .link-website{
      //       color: #00b9e5;
      //       font-size: 16px;
      //       font-weight: 400;
      //     }
      //   }
      //   tbody tr th{
      //     border: none;
      //     text-align: start;
      //     font-weight: 700;
      //     color: #676767;
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
      .show-more{
        margin-top: 25px;
        width: 100%;
        .btn-blue{
          width: 100%;
          box-shadow: none;
          text-transform: none;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
    .date-picker-wrap {
      /deep/ .mx-icon-calendar, /deep/ .mx-icon-clear{
        display: none;
      }
    }
  }
</style>
