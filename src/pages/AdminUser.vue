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
            <div class=" d-block col-4 col-xl-2">
              <MenuAdmin />
            </div>
            <div class="col-12 col-md-8 col-xl-10">
              <h4>Пользователи</h4>
              <h6>Все пользователи</h6>
              <table class="table table-striped table-user">
                <thead>
                  <tr>
                    <th scope="col">Логин</th>
                    <th scope="col">Статус</th>
                    <th scope="col">Дата добавления</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">VAG</th>
                    <td>19.03.20</td>
                    <td class="date-added">1F0 129 620</td>
                    <td>
                      <button class="btn-edit">
                        Редактировать
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </button>
                    </td>
                    <td class="d-flex justify-content-end delete-produkt">
                      <button class="delete">
                        <img src="@/assets/img/delete.png" alt="delete">
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">VAG</th>
                    <td>19.03.20</td>
                    <td class="date-added">1F0 129 620</td>
                    <td>
                      <button class="btn-edit">
                        Редактировать
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </button>
                    </td>
                    <td class="d-flex justify-content-end delete-produkt">
                      <button class="delete">
                        <img src="@/assets/img/delete.png" alt="delete">
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">VAG</th>
                    <td>19.03.20</td>
                    <td class="date-added">1F0 129 620</td>
                    <td>
                      <button class="btn-edit">
                        Редактировать
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </button>
                    </td>
                    <td class="d-flex justify-content-end delete-produkt">
                      <button class="delete">
                        <img src="@/assets/img/delete.png" alt="delete">
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">VAG</th>
                    <td>19.03.20</td>
                    <td class="date-added">1F0 129 620</td>
                    <td>
                      <button class="btn-edit">
                        Редактировать
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </button>
                    </td>
                    <td class="d-flex justify-content-end delete-produkt">
                      <button class="delete">
                        <img src="@/assets/img/delete.png" alt="delete">
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">VAG</th>
                    <td>19.03.20</td>
                    <td class="date-added">1F0 129 620</td>
                    <td>
                      <button class="btn-edit">
                        Редактировать
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </button>
                    </td>
                    <td class="d-flex justify-content-end delete-produkt">
                      <button class="delete">
                        <img src="@/assets/img/delete.png" alt="delete">
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">VAG</th>
                    <td>19.03.20</td>
                    <td class="date-added">1F0 129 620</td>
                    <td>
                      <button class="btn-edit">
                        Редактировать
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </button>
                    </td>
                    <td class="d-flex justify-content-end delete-produkt">
                      <button class="delete">
                        <img src="@/assets/img/delete.png" alt="delete">
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
  }
}
</script>

<style lang="scss" scoped>
  .admin-user-main{
    padding: 86px 0 150px;
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
      .table-user{
        text-align: center;
        thead{
          tr{
            background-color: #f7f7f7;
            th{
              color: #676767;
              font-size: 16px;
              font-weight: 700;
            }
          }
        }
        tbody tr td{
          color: #676767;
          font-size: 16px;
          font-weight: 700;
          &.date-added{
            font-weight: 400;
          }
          .btn-edit{
            border: none;
            background: none;
            color: #00b9e5;
            font-size: 16px;
            font-weight: 400;
            transition: all 0.3s;
            i{
              margin-left: 10px;
              font-size: 16px;
              color: #00b9e5;
            }
            &:hover{
              transform: scale(1.1);
              color: #30626e;
              i{
                transform: scale(1.1);
                color: #30626e;
              }
            }
            &:focus{
              outline: none;
            }
          }
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
        tbody tr:nth-of-type(odd) {
          background-color: #fff;
        }
        tbody tr:nth-of-type(even) {
          background-color: #f7f7f7;
        }

      }
    }
  }
</style>
