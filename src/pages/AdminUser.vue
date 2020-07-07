<template>
  <div>
    <Header />
    <main class="admin-user-main"
    :style="{
      'background-image': `url(${require('@/assets/img/bg-admin.png')})`
    }"
    >
      <div class="container">
        <BreadCrumbs />
        <div class="block-user">
          <div class="row">
            <div class=" d-block col-4 col-xl-2 pr-4">
              <MenuAdmin />
            </div>
            <div class="col-12 col-md-8 col-xl-10 pl-md-4 pl-3">
              <h4>Пользователи</h4>
              <h6>Все пользователи</h6>
              <v-data-table
                :headers="headers"
                :items="items"
                class="elevation-1"
              >
                <template v-slot:item.change>
                  <button class="btn-edit">
                    Редактировать
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                </template>
                <template v-slot:item.delete="{ item }">
                  <button class="delete" @click="removeItem(item)">
                    <img src="@/assets/img/delete.png" alt="delete">
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

export default {
  name: 'AdminUser',
  components: {
    Header,
    Footer,
    BreadCrumbs,
    MenuAdmin
  },
  data: () => ({
    headers: [
      {
        text: 'Логин',
        value: 'login',
        align: 'start'
      },
      { text: 'Статус', value: 'state', align: 'center' },
      { text: 'Дата добавления', value: 'date', align: 'center' },
      { text: ' ', value: 'change', align: 'right' },
      { text: ' ', value: 'delete', align: 'right' }
    ],
    items: [
      {
        login: 'VAG-1',
        state: '19.03.20',
        date: '1F0 129 620',
        change: '',
        delete: ''
      },
      {
        login: 'VAG-2',
        state: '19.03.20',
        date: '1F0 129 620',
        change: '',
        delete: ''
      },
      {
        login: 'VAG-3',
        state: '19.03.20',
        date: '1F0 129 620',
        change: '',
        delete: ''
      },
      {
        login: 'VAG-4',
        state: '19.03.20',
        date: '1F0 129 620',
        change: '',
        delete: ''
      },
      {
        login: 'VAG-5',
        state: '19.03.20',
        date: '1F0 129 620',
        change: '',
        delete: ''
      }
    ]
  }),
  methods: {
    removeItem (item) {
      this.items = this.items.reduce((acc, cItem) => {
        if (item.login === cItem.login) {
          return acc
        }
        acc.push(cItem)
        return acc
      }, [])
    }
  }
}
</script>

<style lang="scss" scoped>
  .admin-user-main{
    padding: 83px 0 150px;
    min-height: calc(100vh - 60px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
    .block-user{
      margin-top: 50px;
      h4{
        color: #242424;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 44px;
        @media (max-width: 767px){
         margin-bottom: 25px;
         font-size: 24px;
        }
      }
      h6{
        color: #242424;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 25px;
        @media (max-width: 767px){
         font-size: 16px;
        }
      }
      // .table-user{
      //   text-align: center;
      //   thead{
      //     tr{
      //       background-color: #f7f7f7;
      //       th{
      //         color: #676767;
      //         font-size: 16px;
      //         font-weight: 700;
      //       }
      //     }
      //   }
      //   tbody tr td{
      //     color: #676767;
      //     font-size: 16px;
      //     font-weight: 700;
      //     &.date-added{
      //       font-weight: 400;
      //     }
      //     .btn-edit{
      //       border: none;
      //       background: none;
      //       color: #00b9e5;
      //       font-size: 16px;
      //       font-weight: 400;
      //       transition: all 0.3s;
      //       i{
      //         margin-left: 10px;
      //         font-size: 16px;
      //         color: #00b9e5;
      //       }
      //       &:hover{
      //         transform: scale(1.1);
      //         color: #30626e;
      //         i{
      //           transform: scale(1.1);
      //           color: #30626e;
      //         }
      //       }
      //       &:focus{
      //         outline: none;
      //       }
      //     }
      //     .delete{
      //       border: none;
      //       background: none;
      //       transition: all 0.3s;
      //       &:hover{
      //         transform: scale(1.1);
      //       }
      //       &:focus{
      //         outline: none;
      //       }
      //     }
      //   }
      //   tbody tr:nth-of-type(odd) {
      //     background-color: #fff;
      //   }
      //   tbody tr:nth-of-type(even) {
      //     background-color: #f7f7f7;
      //   }
      // }
      .elevation-1 {
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
            font-weight: 700;
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
      .theme--light.v-data-table .v-data-table-header th.sortable:hover {
        color: unset;
      }
    }
    @media (max-width: 993px){
      padding-bottom: 50px;
    }
  }
</style>
