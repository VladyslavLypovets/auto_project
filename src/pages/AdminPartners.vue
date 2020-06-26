<template>
  <div>
    <Header />
    <main class="admin-partners-main"
    :style="{
      'background-image': `url(${require('@/assets/img/bg-admin.png')})`
    }"
    >
      <div class="container">
        <BreadCrumbs />
        <div class="block-partners">
          <div class="row">
            <div class=" d-block col-4 col-xl-2">
              <MenuAdmin />
            </div>
            <div class="col-12 col-md-8 col-xl-10">
              <h4>Партнеры</h4>
              <div class="block-form">
                <InputAdmin  id="domen" placeholder="Укажите домен"/>
                <div class="copy-link">
                  <a :href="link" target="_blank" class="link">{{ link }}</a>
                  <button class="btn-copy" v-clipboard:copy="link">
                      <img src="@/assets/img/copy.png" alt="copy" class="img-btn-copy">
                    </button>
                </div>
                <div class="key d-flex align-item-start">
                  <InputAdmin  id="key" placeholder="Тут будет ключ"/>
                  <div class="access-selection">
                    <RadioAdmin text="доступна для всех" id="for-all" name="access"/>
                    <RadioAdmin text="по разрешению" id="by-permission" name="access"/>
                  </div>
                </div>
              </div>
              <v-data-table
                :headers="headers"
                :items="items"
                class="elevation-1"
              >
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
import RadioAdmin from '@/components/layout/RadioAdmin.vue'

export default {
  name: 'AdminPartners',
  components: {
    Header,
    Footer,
    BreadCrumbs,
    MenuAdmin,
    InputAdmin,
    RadioAdmin
  },
  data: () => ({
    headers: [
      {
        text: 'ID',
        value: 'id',
        align: 'start'
      },
      { text: 'Домен', value: 'domen', align: 'center' },
      { text: 'Ключ', value: 'kay', align: 'center' }
    ],
    items: [
      {
        id: 'VAG-1',
        domen: 'VAG',
        kay: '1F0 129 620'
      },
      {
        id: 'VAG-2',
        domen: 'VAG',
        kay: '1F0 129 620'
      },
      {
        id: 'VAG-3',
        domen: 'VAG',
        kay: '1F0 129 620'
      },
      {
        id: 'VAG-4',
        domen: 'VAG',
        kay: '1F0 129 620'
      },
      {
        id: 'VAG-5',
        domen: 'VAG',
        kay: '1F0 129 620'
      }
    ],
    link: 'https://share.mindmanager.com/#publish/'
  })
}
</script>

<style lang="scss" scoped>
  .admin-partners-main{
    padding: 86px 0 150px;
    min-height: calc(100vh - 60px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
    .block-partners{
      margin-top: 50px;
      h4{
        color: #242424;
        margin-bottom: 50px;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        line-height: 1;
        @media (max-width: 993px){
          margin-bottom: 40px;
        }
        @media (max-width: 767px){
          margin-bottom: 25px;
          font-size: 24px;
        }
      }
      .block-form{
        /deep/ .lebel-input-admin{
          display: none;
        }
        /deep/ input#domen{
          width: 444px;
          margin-left: 0;
          flex: none;
          @media (max-width: 767px){
            width: 100%;
            padding: 0 10px;
          }
        }
        .copy-link{
          margin-bottom: 15px;
          width: 444px;
          height: 45px;
          border-radius: 5px;
          border: 1px solid #e8e8e8;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          .link{
            color: #00b9e5;
            font-size: 14px;
            font-weight: 400;
            text-decoration: underline;
          }
          .btn-copy{
            border: none;
            background: none;
            margin-left: 10px;
          }
          @media (max-width: 767px){
            width: 100%;
            padding: 0 10px;
            .link{
              font-size: 12px;
            }
          }
        }
        .key{
          /deep/ .lebel-input-admin{
            display: none;
          }
          /deep/ input#key{
            width: 310px;
            margin-left: 0;
            flex: none;
            @media (max-width: 993px){
              max-width: 250px;
            }
          }
          .access-selection{
            /deep/ .form-group .checkbox + label{
              color: #242424;
              font-size: 14px;
              font-weight: 400;
              text-transform: none;
              @media (max-width: 993px){
                font-size: 13px;
              }
            }
          }
          @media (max-width: 767px){
            flex-wrap: wrap;
            /deep/.form-group{
              width: 100%;
              margin-bottom: 10px;
              margin-left: 0;
              input#key{
                width: 100%;
                max-width: unset;
                padding: 0 10px;
              }
            }
            .access-selection{
              /deep/ .form-group .checkbox + label{
                font-size: 14px;
              }
            }
          }
        }
      }
      // .table-partners{
      //   margin-top: 30px;
      //   border: none;
      //   thead{
      //     tr{
      //       th{
      //         padding: 12px 0;
      //         color: #676767;
      //         font-size: 16px;
      //         font-weight: 700;
      //         border: none;
      //         background-color: #f7f7f7;
      //         text-align: center;
      //         &:first-child{
      //           text-align: start;
      //           padding: 12px 0 12px 30px;
      //         }
      //       }
      //     }
      //   }
      //   tbody{
      //     tr{
      //       th{
      //         padding: 12px 0 12px 30px;
      //         border: none;
      //         color: #676767;
      //         font-size: 16px;
      //         font-weight: 700;
      //       }
      //       td{
      //         border: none;
      //         color: #676767;
      //         font-size: 16px;
      //         font-weight: 400;
      //         text-align: center;
      //       }
      //     }
      //   }
      //   tbody tr:nth-of-type(odd) {
      //     background-color: white;
      //   }
      //   tbody tr:nth-of-type(even) {
      //     background-color: #f7f7f7;
      //   }
      // }
      .elevation-1 {
        margin-top: 30px;
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
            &:first-child{
              font-weight: 700;
            }
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
        @media(max-width: 767px) {
          /deep/ tr td:last-child {
            border-bottom: thin solid rgba(0,0,0,.12) !important;
          }
        }
      }
      .theme--light.v-data-table .v-data-table-header th.sortable:hover {
        color: unset;
      }
    }
    @media (max-width: 993px){
      padding-bottom: 50px;
    }
  }
</style>
