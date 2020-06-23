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
                <InputAdmin text="Производитель" id="proisvoditel"/>
              </div>
              <div class="col-4">
                <InputAdmin text="Название товара" id="name-products"/>
                <InputNumber text="В наличии" id="nalichie"/>
              </div>
              <div class="col-4">
                <InputAdmin text="Категория товара" id="categori -product"/>
                <div class="d-flex">
                  <InputNumber text="Цена" id="price-ot" placeholder="От" class="price-ot"/>
                  <InputNumber id="price-do" placeholder="До" class="price-do"/>
                  <div class="valuta">
                    <p>грн</p>
                  </div>
                </div>
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
import InputAdmin from '@/components/layout/InputAdmin.vue'
import InputNumber from '@/components/layout/InputNumber.vue'

export default {
  name: 'AbminProducts',
  components: {
    Header,
    Footer,
    BreadCrumbs,
    MenuAdmin,
    InputAdmin,
    InputNumber
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
      /deep/ .price-do{
        label.lebel-input-admin{
          display: none;
        }
        .input-admin{
          max-width: 130px;
          width: 100%;
          padding-left: 10px;
          &::placeholder{
            color: #676767;
            font-size: 16px;
            font-weight: 700;
          }
        }
      }
      /deep/ .price-ot{
        label.lebel-input-admin{
          max-width: 80px;
        }
        .input-admin{
          width: 100%;
          border-radius: 0;
          max-width: 130px;
          padding-left: 10px;
          &::placeholder{
            color: #676767;
            font-size: 16px;
            font-weight: 700;
          }
        }
      }
      /deep/ label.lebel-input-admin{
        max-width: 200px;
        width: 100%;
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
        max-width: 158px;
        width: 100%;
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
    }
  }
</style>
