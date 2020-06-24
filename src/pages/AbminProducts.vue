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
              <div class="col-4">
                <InputAdmin text="Артикул товара" id="articul-product"/>
                <InputAdmin text="Производитель" id="generator"/>
              </div>
              <div class="col-4">
                <InputAdmin text="Название товара" id="name-products"/>
                <InputNumber text="В наличии" id="in-stock"/>
              </div>
              <div class="col-4">
                <InputAdmin text="Категория товара" id="category-product"/>
                <div class="d-flex">
                  <InputDoubleNumber text="Цена"/>
                  <div class="valuta">
                    <p>грн</p>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <InputAdmin text="Продавец" id="seller"/>
              </div>
              <div class="col-4">
                <BtnBlue text="Найти"/>
              </div>
              <div class="col-12 d-flex align-item-center">
                <button class="btn-gray">Редактировать</button>
                <button class="btn-white">Удалить</button>
                <RadioAdmin text="Применить для выбранных" id="apply-selected" name="apply-selected" class="apply-selected"/>
              </div>
            </div>
            <table class="table table-striped table-admin-products">
              <thead>
                <tr>
                  <th scope="col"><RadioAdmin id="row-selection-1" class="row-selection"/></th>
                  <th scope="col">Артикул товара</th>
                  <th scope="col">Название товара</th>
                  <th scope="col">Цена</th>
                  <th scope="col">Производитель</th>
                  <th scope="col">Категория товара</th>
                  <th scope="col">Наличие товар</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><RadioAdmin id="row-selection-2" class="row-selection"/></th>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>
                    <button class="btn-edit">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><RadioAdmin id="row-selection-3" class="row-selection"/></th>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>
                    <button class="btn-edit">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><RadioAdmin id="row-selection-4" class="row-selection"/></th>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>
                    <button class="btn-edit">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><RadioAdmin id="row-selection-5" class="row-selection"/></th>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>
                    <button class="btn-edit">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><RadioAdmin id="row-selection-6" class="row-selection"/></th>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>
                    <button class="btn-edit">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><RadioAdmin id="row-selection-7" class="row-selection"/></th>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>VAG</td>
                  <td>
                    <button class="btn-edit">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
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
  }
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
      }
      /deep/.form-group{
        align-items: start;
      }
      /deep/ .double-imput-number-group{
        .input-admin{
          width: 100%;
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
      }
      .table-admin-products{
        margin-top: 40px;
        thead th{
          border: none;
          border-radius: 5px 5px 0 0;
          background-color: #f7f7f7;
          color: #676767;
          font-size: 16px;
          font-weight: 700;
          text-align: center;
          &:nth-child(2){
            text-align: start;
          }
        }
        tbody tr td{
          color: #676767;
          font-size: 16px;
          font-weight: 400;
          border: none;
          text-align: center;
          &:nth-child(2){
            font-weight: 700;
            text-align: start;
          }
        }
        tbody tr th{
          border: none;
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
    }
  }
</style>
