<template>
  <div>
    <Header />
    <main
     class="admin-refresh-main"
      :style="{
        'background-image': `url(${require('@/assets/img/bg-admin.png')})`
      }"
    >
      <div class="container">
        <BreadCrumbs />
        <div class="block-admin-refresh">
          <div class="row">
            <div class="d-block col-4 col-xl-2 pr-4">
              <MenuAdmin />
            </div>
            <div class="col-md-8 col-xl-10 pl-md-4 pl-3">
              <div class="row">
                <div class="col-12 d-block d-md-none">
                  <h4>Партнеры</h4>
                </div>
                <div class="col-12 col-xl-4 d-flex flex-column">
                  <BtnBlue text="Обновить остатки и цены 1С"/>
                  <BtnBlue text="Обновить товары на 1С"/>
                </div>
                <div class="col-12 col-xl-8">
                  <div class="link-price d-flex flex-wrap align-items-center">
                    <p>Ссылка на прайс XLS:</p>
                    <div class="d-flex align-items-center overflow-hidden">
                      <router-link to="/" class="price-link">{{ link }}</router-link>
                      <button class="btn-copy d-block d-md-none" v-clipboard:copy="link">
                        <img src="@/assets/img/copy.png" alt="copy" class="img-btn-copy">
                     </button>
                    </div>
                  </div>
                  <BtnBorderBlue text="Обновить остатки и цены 1С"/>
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
import BtnBlue from '@/components/layout/BtnBlue.vue'
import BtnBorderBlue from '@/components/layout/BtnBorderBlue.vue'

export default {
  name: 'AdminRefresh',
  components: {
    Header,
    Footer,
    BreadCrumbs,
    MenuAdmin,
    BtnBlue,
    BtnBorderBlue
  },
  data: () => ({
    link: 'https://share.mindmanager.com/#publish/7mwlSBVow1IsmN4ibiyYto_WGbhoRsT0ZgaynupG'
  })
}
</script>

<style lang="scss" scoped>
  .admin-refresh-main{
    padding: 83px 0 150px;
    min-height: calc(100vh - 60px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
    .block-admin-refresh{
      margin-top: 50px;
      h4{
        color: #242424;
        margin-bottom: 25px;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
      }
      .btn-blue{
        width: 95%;
        margin-bottom: 20px;
        @media (max-width: 1599px){
          font-size: 14px;
        }
        @media (max-width: 1199px){
          width: 80%;
        }
        @media (max-width: 767px){
          width: 100%;
        }
      }
      .link-price{
        height: 43px;
        margin-bottom: 20px;
        p{
          color: #333333;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0;
        }
        .price-link{
          color: #00b9e5;
          font-size: 14px;
          font-weight: 400;
          text-decoration: underline;
          margin-left: 15px;
          word-wrap: break-word;
          display: block;
          width: 100%;
          @media (max-width: 1599px){
            margin-left: 0;
          }
          @media (max-width: 767px){
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: unset;
          }
        }
        .btn-copy{
          border: none;
          background: none;
          margin-left: 10px;
        }
        @media (max-width: 1199px){
          height: unset;
        }
      }
      .btn-border-blue{
        width: 40%;
         @media (max-width: 1599px){
          font-size: 14px;
        }
        @media (max-width: 1199px){
          width: 55%;
        }
        @media (max-width: 767px){
          width: 100%;
        }

      }
    }
    @media (max-width: 993px){
      padding-bottom: 50px;
    }
  }
</style>
