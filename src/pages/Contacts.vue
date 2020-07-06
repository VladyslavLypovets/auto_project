<template>
  <div>
    <Header />
    <main class="contacts-main"
    :style="{
      'background-image': `url(${require('@/assets/img/bg-contacrs.png')})`
    }"
    >
      <div class="baner-contacts d-none d-md-block"
      :style="{
        'background-image': `url(${require('@/assets/img/bg-baner-contacts.png')})`
      }"
      >
        <div class="container">
          <div class="row">
            <div class="col-6 col-xl-7">
              <h3>Контакты</h3>
              <p>Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. </p>
            </div>
            <div class="col-6 col-xl-5">
              <img src="@/assets/img/car-contacts.png" alt="car-contascts">
            </div>
          </div>
        </div>
      </div>
      <div class="mob-baner d-flex d-md-none"
      :style="{
        'background-image': `url(${require('@/assets/img/mob-bg-contact-baner.png')})`
      }"
      >
        <div class="container">
          <h3>Контакты</h3>
        </div>
      </div>
      <div class="container">
        <BreadCrumbs :routes="[{ title: 'Контакты', route: '/' }]"/>
        <div class="block-info-form">
          <div class="row">
            <div class="col-12 col-xl-4">
              <div class="contact-info">
                <h4>Контактная информация</h4>
                <div class="info">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="18.031" viewBox="0 0 13 18.031">
                    <defs>
                      <filter id="filter" x="213" y="583" width="13" height="18.031" filterUnits="userSpaceOnUse">
                        <feFlood result="flood" flood-color="#00b9e5"/>
                        <feComposite result="composite" operator="in" in2="SourceGraphic"/>
                        <feBlend result="blend" in2="SourceGraphic"/>
                      </filter>
                    </defs>
                    <path id="pin" class="cls-1" d="M219.728,583A6.472,6.472,0,0,0,213,589.429c0,4.118,3.992,7.106,6.229,11.4a0.309,0.309,0,0,0,.545,0c2.024-3.868,5.483-6.461,6.125-10.186A6.547,6.547,0,0,0,219.728,583Zm-0.225,9.8a3.372,3.372,0,1,1,3.406-3.371A3.388,3.388,0,0,1,219.5,592.8Z" transform="translate(-213 -583)"/>
                  </svg>
                  <p>Проспект курортный 4/3, Коблево, 57453, Украина</p>
                </div>
                <div class="info">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="18" viewBox="0 0 10 18">
                    <defs>
                      <filter id="filter" x="214" y="632" width="10" height="18" filterUnits="userSpaceOnUse">
                        <feFlood result="flood" flood-color="#00b9e5"/>
                        <feComposite result="composite" operator="in" in2="SourceGraphic"/>
                        <feBlend result="blend" in2="SourceGraphic"/>
                      </filter>
                    </defs>
                    <path id="phone" class="cls-1" d="M222.841,632h-7.682A1.194,1.194,0,0,0,214,633.215v15.568A1.194,1.194,0,0,0,215.159,650h7.682a1.193,1.193,0,0,0,1.164-1.215V633.215A1.194,1.194,0,0,0,222.841,632Zm-5.07.877h2.458a0.147,0.147,0,0,1,0,.294h-2.458A0.147,0.147,0,0,1,217.771,632.876ZM219,649.392a0.609,0.609,0,1,1,.582-0.608A0.6,0.6,0,0,1,219,649.392Zm4.195-1.643h-8.39V633.927h8.39v13.822Z" transform="translate(-214 -632)"/>
                  </svg>
                  <router-link to="+380 67 24 245 39" class="link-contact">+380 67 24 245 39</router-link>
                </div>
                <div class="info">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                    <defs>
                      <filter id="filter" x="211" y="681" width="16" height="16" filterUnits="userSpaceOnUse">
                        <feFlood result="flood" flood-color="#00b9e5"/>
                        <feComposite result="composite" operator="in" in2="SourceGraphic"/>
                        <feBlend result="blend" in2="SourceGraphic"/>
                      </filter>
                    </defs>
                    <path id="mail" class="cls-1" d="M219,689.341L227,697H211ZM219,681l-8,6v8.615l5.472-5.238-4.058-3.187,6.586-4.94,6.586,4.94-4.058,3.188L227,695.616V687Z" transform="translate(-211 -681)"/>
                  </svg>
                  <router-link to="mailto: info@ppzht.ru" class="link-contact">info@ppzht.ru</router-link>
                </div>
                <div class="info">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                    <defs>
                      <filter id="filter" x="210" y="732" width="16" height="16" filterUnits="userSpaceOnUse">
                        <feFlood result="flood" flood-color="#00b9e5"/>
                        <feComposite result="composite" operator="in" in2="SourceGraphic"/>
                        <feBlend result="blend" in2="SourceGraphic"/>
                      </filter>
                    </defs>
                    <path id="clock" class="cls-1" d="M218,732a8,8,0,1,0,8,8A8.01,8.01,0,0,0,218,732Zm0,14.3a6.3,6.3,0,1,1,6.3-6.3A6.306,6.306,0,0,1,218,746.3Zm4.169-6.545h-3.595v-4.324a0.659,0.659,0,0,0-1.318,0v4.981a0.66,0.66,0,0,0,.659.66h4.254A0.659,0.659,0,1,0,222.169,739.752Z" transform="translate(-210 -732)"/>
                  </svg>
                  <p>
                    Режим работы офиса: <br />Пн - Пт с 9:00 до 18:00
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-8">
              <form class="form-contacts">
                <h4>Свяжитесь с нами заполнив форму:</h4>
                <div class="d-block d-xl-flex justify-content-between">
                  <div class="block-input">
                    <InputAdmin placeholder="Имя" id="name-contact"/>
                    <InputAdmin placeholder="Email" id="email-contact"/>
                  </div>
                  <div class="block-textarea">
                    <TextareaAdmin id="text-contact" placeholder="Сообщение"/>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <BtnBlue text="Отправить"/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="block-map">
          <h4>Мы на карте</h4>
          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.9525535135863!2d31.183788815115534!3d46.62769946307574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c66b1fd4e9ba27%3A0xd9d3bf549b662a73!2z0L_RgNC-0YHQv9C10LrRgiDQmtGD0YDQvtGA0YLQvdC40LksIDQsINCa0L7QsdC70LXQstC1LCDQnNC40LrQvtC70LDRl9Cy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDU3NDUz!5e0!3m2!1sru!2sua!4v1592315142763!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
import BtnBlue from '@/components/layout/BtnBlue.vue'
import InputAdmin from '@/components/layout/InputAdmin.vue'
import TextareaAdmin from '@/components/layout/TextareaAdmin.vue'

export default {
  name: 'Contacts',
  components: {
    Header,
    Footer,
    BreadCrumbs,
    InputAdmin,
    TextareaAdmin,
    BtnBlue
  }
}
</script>

<style lang="scss" scoped>
  .contacts-main{
    padding: 83px 0 150px;
    min-height: calc(100vh - 60px);
    background-repeat: no-repeat;
    background-position-y: bottom;
    .baner-contacts{
      background-size: cover;
      padding: 60px 0 27px;
      background-position-y: bottom;
      h3{
        color: #ffffff;
        font-size: 48px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 35px;
        position: relative;
        &::before{
          position: absolute;
          content: '';
          width: 106px;
          height: 6px;
          background-color: #00b9e5;
          left: 0;
          top: -25px;
        }
        @media (max-width: 1199px){
          font-size: 36px;
          margin-bottom: 15px;
          &::before{
            top: -20px;
          }
        }
      }
      p{
        color: #ffffff;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        max-width: 655px;
        margin: 0;
        @media (max-width: 1199px){
          max-width: 430px;
          font-size: 14px;
        }
      }
      img{
        width: 100%;
      }
    }
    .mob-baner{
      background-size: cover;
      padding: 60px 0 30px;
      h3{
        color: #ffffff;
        font-size: 28px;
        font-weight: 700;
        text-transform: uppercase;
        position: relative;
        text-align: center;
        &::before{
          position: absolute;
          content: '';
          width: 106px;
          height: 3px;
          background-color: #00b9e5;
          left: 50%;
          transform: translateX(-50%);
          top: -25px;
        }
      }
    }
    .block-info-form{
      margin-top: 65px;
      .contact-info{
        h4{
          color: #3b3b3b;
          font-size: 28px;
          font-weight: 400;
          text-transform: uppercase;
          margin-bottom: 60px;
          position: relative;
          &::before{
            position: absolute;
            content: '';
            width: 69px;
            height: 2px;
            background-color: #00b9e5;
            left: 0;
            bottom: -27px;
          }
          @media (max-width: 1599px){
            font-size: 25px;
          }
          @media (max-width: 1199px){
            font-size: 28px;
          }
          @media (max-width: 767px){
            font-size: 24px;
            margin-bottom: 50px;
            text-align: center;
            &::before{
              bottom: -23px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }
        .info{
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          svg{
            fill: #00b9e5;
            margin-right: 15px;
          }
          p,
          .link-contact{
            color: #8fa1ab;
            font-size: 16px;
            font-weight: 400;
            margin: 0;
          }
        }
        @media (max-width: 767px){
          max-width: 195px;
          margin: 0 auto;
          .info{
            margin-bottom: 15px;
            i{
              margin-right: 10px;
            }
            p,
            .link-contact{
              font-size: 14px;
            }
          }
        }
      }
      .form-contacts{
        border-radius: 5px;
        border: 2px solid rgba(1, 95, 137, 0.25);
        padding: 40px 35px;
        h4{
          text-align: center;
          color: #3b3b3b;
          font-size: 28px;
          font-weight: 400;
          text-transform: uppercase;
          margin-bottom: 25px;
        }
        .block-input{
          width: 40%;
        }
        .block-textarea{
          width: 60%;
        }
        /deep/ .form-group{
          label.lebel-input-admin{
            display: none;
          }
          input#name-contact,
          input#email-contact{
            border-radius: 5px;
            border: 1px solid #bfd7e1;
            height: 55px;
            margin-bottom: 25px;
            margin-left: 0;
            &::placeholder{
              opacity: 0.3;
              color: #333333;
              font-size: 16px;
              font-weight: 400;
            }
          }
        }
        /deep/ .form-group{
          textarea#text-contact{
            border-radius: 5px;
            border: 1px solid #bfd7e1;
            &::placeholder{
              opacity: 0.3;
              color: #333333;
              font-size: 16px;
              font-weight: 400;
              padding: 10px;
            }
          }
        }
        @media (max-width: 1199px){
          margin-top: 30px;
          .block-input{
            display: flex;
            width: 100%;
            justify-content: space-between;
            /deep/ .form-group{
              width: 48%;
            }
          }
          .block-textarea{
            width: 100%;
            /deep/ .form-group textarea#text-contact{
              margin-left: 0;
            }
          }
        }
        @media (max-width: 767px){
          padding: 25px 20px;
          h4{
            font-size: 24px;
          }
          .block-input{
            flex-wrap: wrap;
            /deep/ .form-group{
              width: 100%;
              input#name-contact,
              input#email-contact{
                margin-bottom: 15px;
              }
            }
          }
          .btn-blue{
            width: 100%;
          }
        }
      }
      @media (max-width: 767px){
        margin-top: 50px;
      }
    }
    .block-map{
      margin-top: 50px;
      h4{
        color: #3b3b3b;
        font-size: 35px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 55px;
        text-align: center;
      }
      .map{
        border-top: 2px solid #00b9e5;
        padding-top: 10px;
        iframe{
          width: 100%;
          height: 450px;
          filter: grayscale(100%);
        }
      }
      @media (max-width: 1199px){
        margin-top: 70px;
        h4{
          font-size: 28px;
          margin-bottom: 40px;
        }
      }
      @media (max-width: 767px){
        margin-top: 50px;
        h4{
          font-size: 24px;
          margin-bottom: 25px;
        }
      }
    }
    @media (max-width: 1199px){
      padding-bottom: 55px;
    }
    @media (max-width: 767px){
      padding: 50px 0;
    }
  }
</style>
