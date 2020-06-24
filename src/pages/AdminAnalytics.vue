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
          <div class="col-12 col-md-8 col-xl-10">
            <h4>Аналитика</h4>
            <div class="row">
              <div class="col-4">
                <InputAdmin text="ID Frame" id="id-frame"/>
                <InputAdmin text="Домен" id="domen"/>
              </div>
              <div class="col-4">
                <InputAdmin text="Ссылка на товар" id="link-product"/>
                <InputAdmin text="Кол-во переходов" id="number-transitions"/>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <BtnBlue text="Поиск"/>
              </div>
            </div>
            <table class="table table-striped table-admin-analytics">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Домен</th>
                  <th scope="col">Дата</th>
                  <th scope="col">Ссылка на товар</th>
                  <th scope="col">Переход в магазин</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">VAG</th>
                  <td>VAG</td>
                  <td>18.03.2020</td>
                  <td>
                    <router-link to="/" class="link-website">
                      https://kasta.ua/market/aksessuary/
                    </router-link>
                  </td>
                  <td>2</td>
                </tr>
                <tr>
                  <th scope="row">VAG</th>
                  <td>VAG</td>
                  <td>18.03.2020</td>
                  <td>
                    <router-link to="/" class="link-website">
                      https://kasta.ua/market/aksessuary/
                    </router-link>
                  </td>
                  <td>3</td>
                </tr>
                <tr>
                  <th scope="row">VAG</th>
                  <td>VAG</td>
                  <td>18.03.2020</td>
                  <td>
                    <router-link to="/" class="link-website">
                      https://kasta.ua/market/aksessuary/
                    </router-link>
                  </td>
                  <td>18</td>
                </tr>
                <tr>
                  <th scope="row">VAG</th>
                  <td>VAG</td>
                  <td>18.03.2020</td>
                  <td>
                    <router-link to="/" class="link-website">
                      https://kasta.ua/market/aksessuary/
                    </router-link>
                  </td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">VAG</th>
                  <td>VAG</td>
                  <td>18.03.2020</td>
                  <td>
                    <router-link to="/" class="link-website">
                      https://kasta.ua/market/aksessuary/
                    </router-link>
                  </td>
                  <td>200</td>
                </tr>
                <tr>
                  <th scope="row">VAG</th>
                  <td>VAG</td>
                  <td>18.03.2020</td>
                  <td>
                    <router-link to="/" class="link-website">
                      https://kasta.ua/market/aksessuary/
                    </router-link>
                  </td>
                  <td>240</td>
                </tr>
              </tbody>
            </table>
            <div class="show-more">
              <BtnBlue text="Показать еще"/>
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
import InputAdmin from '@/components/layout/InputAdmin.vue'
import BtnBlue from '@/components/layout/BtnBlue.vue'

export default {
  name: 'AdminAnalytics',
  components: {
    Header,
    Footer,
    BreadCrumbs,
    MenuAdmin,
    InputAdmin,
    BtnBlue
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
      }
      .table-admin-analytics{
        margin-top: 40px;
        thead th{
          border: none;
          border-radius: 5px 5px 0 0;
          background-color: #f7f7f7;
          color: #676767;
          font-size: 16px;
          font-weight: 700;
          text-align: center;
          &:first-child{
            text-align: start;
          }
        }
        tbody tr td{
          color: #676767;
          font-size: 16px;
          font-weight: 400;
          border: none;
          text-align: center;
          .link-website{
            color: #00b9e5;
            font-size: 16px;
            font-weight: 400;
          }
        }
        tbody tr th{
          border: none;
          text-align: start;
          font-weight: 700;
          color: #676767;
        }
        .btn-edit{
          border: none;
          background: none;
          font-size: 14px;
          color: #00b9e5;
          &:focus{
            outline: none;
          }
          &:hover{
            transform: scale(1.1);
            color: #30626e;
            i{
              transform: scale(1.1);
              color: #30626e;
            }
          }
        }
      }
      .table-striped tbody tr:nth-of-type(odd) {
        background-color: white;
      }
      .table-striped tbody tr:nth-of-type(even) {
        background-color: #f7f7f7;
      }
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
  }
</style>
