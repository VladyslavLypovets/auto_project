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
                  <router-link to="/" class="link">https://share.mindmanager.com/#publish/</router-link>
                  <button class="btn-copy">
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
              <table class="table table-partners table-bordered">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col" >Домен</th>
                    <th scope="col">Ключ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">VAG</th>
                    <td>VAG</td>
                    <td>1F0 129 620</td>
                  </tr>
                  <tr>
                    <th scope="row">VAG</th>
                    <td>VAG</td>
                    <td>1F0 129 620</td>
                  </tr>
                  <tr>
                    <th scope="row">VAG</th>
                    <td>VAG</td>
                    <td>1F0 129 620</td>
                  </tr>
                  <tr>
                    <th scope="row">VAG</th>
                    <td>VAG</td>
                    <td>1F0 129 620</td>
                  </tr>
                  <tr>
                    <th scope="row">VAG</th>
                    <td>VAG</td>
                    <td>1F0 129 620</td>
                  </tr>
                  <tr>
                    <th scope="row">VAG</th>
                    <td>VAG</td>
                    <td>1F0 129 620</td>
                  </tr>
                  <tr>
                    <th scope="row">VAG</th>
                    <td>VAG</td>
                    <td>1F0 129 620</td>
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
  }
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
        line-height: 48px;
        text-transform: uppercase;
      }
      .block-form{
        /deep/ .lebel-input-admin{
          display: none;
        }
        /deep/ input#domen{
          width: 444px;
          margin-left: 0;
          flex: none;
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
        }
        .key{
          /deep/ .lebel-input-admin{
            display: none;
          }
          /deep/ input#key{
            width: 310px;
            margin-left: 0;
            flex: none;
          }
          .access-selection{
            /deep/ .form-group .checkbox + label{
              color: #242424;
              font-size: 14px;
              font-weight: 400;
              text-transform: none;
            }
          }
        }
      }
      .table-partners{
        margin-top: 30px;
        border: none;
        thead{
          tr{
            th{
              padding: 12px 0;
              color: #676767;
              font-size: 16px;
              font-weight: 700;
              border: none;
              background-color: #f7f7f7;
              text-align: center;
              &:first-child{
                text-align: start;
                padding: 12px 0 12px 30px;
              }
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
              text-align: center;
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
  }
</style>
