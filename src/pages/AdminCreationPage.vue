<template>
  <div>
    <Header />
    <main class="admin-creationpage-main"
    :style="{
      'background-image': `url(${require('@/assets/img/bg-admin.png')})`
    }"
    >
    <div class="container">
      <BreadCrumbs />
      <div class="block-admin-creation">
        <div class="row">
          <div class=" d-block col-4 col-xl-2">
            <MenuAdmin />
          </div>
          <div class="d-none d-md-block col-12 col-md-3 col-xl-2">
            <PageAdminMenu />
          </div>
          <div class="d-block col-12 d-md-none">
            <h4>Страницы</h4>
          </div>
          <div class="col-12 col-xl-8">
            <div class="creation-page">
              <div class="language-switch d-flex">
                <button class="language active">UA</button>
                <button class="language">RU</button>
              </div>
              <InputAdmin text="Название страницы" id="page-name"/>
              <FileAdmin text="Изображение баннера" id="baner-img"/>
              <InputAdmin text="Заголовок баннера" id="baner-name"/>
              <TextareaAdmin text="Текстовая информация баннера" id="text-info-baner"/>
              <InputAdmin text="Заголовок первого блока" id="firs-block-name"/>
              <TextareaAdmin text="Текстовая информация первого блока" id="text-info-firs-baner"/>
              <InputAdmin text="Заголовок второго блока" id="second-block-name"/>
              <InputAdmin text="Заголовок первого поля второго блока" id="first-fiels-second-block-name"/>
              <FileAdmin text="Иконка первого поля второго блока" id="img-first-fiels-second-block"/>
              <TextareaAdmin text="Текстовая информация второго поля второго блока" id="text-info-second-fiels-second-block"/>
              <InputAdmin text="Заголовок второго поля второго блока" id="second-fiels-second-block-name"/>
              <FileAdmin text="Иконка второго поля второго блока" id="img-second-fiels-second-block"/>
              <TextareaAdmin text="Текстовая информация третего поля второго блока" id="text-info-third-fiels-second-block"/>
              <InputAdmin text="Заголовок третего блока" id="third-block-name"/>
              <FileAdmin text="Иконка третего поля второго блока" id="img-third-fiels-second-block"/>
              <BtnBlue text="Добавить изображение"/>
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
import PageAdminMenu from '@/components/layout/PageAdminMenu.vue'
import InputAdmin from '@/components/layout/InputAdmin.vue'
import FileAdmin from '@/components/layout/FileAdmin.vue'
import TextareaAdmin from '@/components/layout/TextareaAdmin.vue'
import BtnBlue from '@/components/layout/BtnBlue.vue'

export default {
  name: 'AdminCreationPage',
  components: {
    Header,
    Footer,
    BreadCrumbs,
    MenuAdmin,
    PageAdminMenu,
    InputAdmin,
    FileAdmin,
    TextareaAdmin,
    BtnBlue
  }
}
</script>

<style lang="scss" scoped>
  .admin-creationpage-main{
    padding: 86px 0 150px;
    min-height: calc(100vh - 60px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
    .block-admin-creation{
      margin-top: 50px;
      h4{
        color: #242424;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 0;
        font-size: 24px;
      }
      .creation-page{
        .language-switch{
          margin-bottom: 35px;
          margin-top: 55px;
          .language{
            width: 76px;
            height: 43px;
            border-radius: 5px;
            border: 1px solid #dfdfdf;
            background-color: #f6f6f6;
            color: #5c5c5c;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            margin-right: 12px;
            transition: all 0.3s;
            &.active{
              background-color: #00b9e5;
              box-shadow: 1px 2px 0 #068fb0;
              color: #ffffff;
            }
            &:hover{
              background-color: #00b9e5;
            }
          }
        }
        .btn-blue{
          margin-left: 22%;
        }
      }
    }
  }
  @media (max-width: 767px){
    .admin-creationpage-main{
      padding-bottom: 50px;
      .block-admin-creation{
        .creation-page{
          .btn-blue{
            width: 100%;
            margin-left: 0;
          }
          .language-switch{
            margin-top: 20px;
            margin-bottom: 30px;
            justify-content: space-around;
            .language{
              width: 100px;
            }
          }
        }
      }
    }
  }
</style>
