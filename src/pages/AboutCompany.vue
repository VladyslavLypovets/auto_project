<template>
  <div>
    <Header />
    <main
      class="oproducte-main"
      :class="{'scrolled': currentScrollPosition !== 0}"
      @mousewheel="scroll"
    >
      <div class="d-none d-md-flex home-o-produkte"
      :class="{'collapsed': currentScrollPosition !== 0}"
      :style="{
        'background-image': `url(${require('@/assets/img/bg-home-ocompany.png')})`
      }"
      >
        <div class="container d-flex flex-column align-items-center justify-content-center">
          <h2>БОЛЬШОЙ ЗАГОЛОВОК И НАЗВАНИЕ КОМПАНИИ</h2>
          <p>Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. </p>
          <div class="scroll">
            <div class="d-flex align-items-center justify-content-between">
              <h6>О компании</h6>
              <h6>Преимущества</h6>
              <h6>наши партнеры</h6>
            </div>
            <div class="block-scroll d-flex align-items-center justify-content-between">
              <div class="circle" :class="{active: currentScrollPosition >= 1}"></div>
              <div class="line" :class="{active: currentScrollPosition >= 2}"></div>
              <div class="circle" :class="{active: currentScrollPosition >= 2}"></div>
              <div class="line" :class="{active: currentScrollPosition >= 3}"></div>
              <div class="circle" :class="{active: currentScrollPosition === 3}"></div>
            </div>
          </div>
          <div class="mouse">
            <img src="@/assets/img/mouse.png" alt="mouse" class="img-mouse">
            <div class="vertical-line"></div>
          </div>
        </div>
      </div>
      <div class="mob-name-page d-flex d-md-none"
      :style="{
        'background-image': `url(${require('@/assets/img/mob-bg-company.png')})`
      }"
      >
        <div class="container">
          <h2>О нас</h2>
        </div>
      </div>
      <div
        class="scroller"
        :style="{'transform': `translateY(-${scrollHeight}px)`}"
      >
        <div class="produkt-quality">
          <div class="container">
            <img src="@/assets/img/bg-top-company.png" alt="bg-top-element" class="bg-top-company">
            <h4>О компании</h4>
            <div class="d-none d-md-flex align-items-center justify-content-between">
              <p class="text-quality">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, n</p>
              <p class="text-quality">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, n</p>
            </div>
            <TextReadMore :text="text" :height="288" class="d-block d-md-none"/>
            <img src="@/assets/img/bg-bottom-company.png" alt="bg-bottom-compan" class="bg-bottom-company">
          </div>
        </div>
        <div class="prof-consultanty">
          <div class="container">
            <img src="@/assets/img/bg-top-company.png" alt="bg-top-element" class="bg-top-company">
            <h4>Преимущества</h4>
            <div class="align-items-center justify-content-between d-none d-xl-flex">
              <div class="advantages" v-for="(consultant, index) in consultantsData" :key="index">
                <img :src="require(`@/assets/img/${consultant.img}.png`)" alt="advantages" class="img-advantages">
                <h6>{{ consultant.title }}</h6>
                <p>
                  {{ consultant.text }}
                </p>
              </div>
            </div>
            <Carousel
              :items="1"
              class="d-block d-xl-none carousel-mob-advantages"
              :dots="false"
              :navText="navText"
            >
              <div class="advantages" v-for="(consultant, index) in consultantsData" :key="index">
                <img :src="require(`@/assets/img/${consultant.img}.png`)" alt="advantages" class="img-advantages">
                <h6>{{ consultant.title }}</h6>
                <p>
                  {{ consultant.text }}
                </p>
              </div>
            </Carousel>
            <img src="@/assets/img/bg-bottom-company.png" alt="bg-bottom-company" class="bg-bottom-company">
          </div>
        </div>
        <div class="our-clients">
          <img src="@/assets/img/bg-top-company.png" alt="bg-top-company" class="bg-top-company">
          <OurPartnersClients text="Наши партнеры"/>
          <img src="@/assets/img/bg-bottom-company.png" alt="bg-bottom-company" class="bg-bottom-company">
        </div>
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import OurPartnersClients from '@/components/layout/OurPartnersClients.vue'
import TextReadMore from '@/components/layout/TextReadMore.vue'

export default {
  name: 'AboutCompany',
  components: {
    Header,
    Footer,
    OurPartnersClients,
    TextReadMore
  },
  data: () => ({
    consultantsData: [
      {
        img: 'brake',
        title: 'Преимущества 1',
        text: 'Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании систем массового участия. Не следует, однако забывать, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.'
      },
      {
        img: 'brake',
        title: 'Преимущества 2',
        text: 'Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании систем массового участия. Не следует, однако забывать, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.'
      },
      {
        img: 'brake',
        title: 'Преимущества 3',
        text: 'Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании систем массового участия. Не следует, однако забывать, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.'
      }
    ],
    currentScrollPosition: 0,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"/>', '<i class="fa fa-angle-right" aria-hidden="true"/>'],
    animationdebounce: false,
    text: '<p class="text-quality">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, n</p><p class="text-quality">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, n</p>'
  }),
  methods: {
    scroll (e) {
      if (!this.animationdebounce && window.innerWidth > 1199) {
        this.animationdebounce = true
        if (e.deltaY > 0) {
          this.moveBottom()
        } else {
          this.moveTop()
        }
        setTimeout(() => { this.animationdebounce = false }, 400)
      }
    },
    moveBottom () {
      if (this.currentScrollPosition < 3) {
        this.currentScrollPosition += 1
      }
    },
    moveTop () {
      if (this.currentScrollPosition > 0) {
        this.currentScrollPosition -= 1
      }
    }
  },
  computed: {
    scrollHeight () {
      return (window.innerHeight - 218) * (this.currentScrollPosition - 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .oproducte-main{
    padding-top: 83px;
    max-height: 100vh;
    overflow: hidden;
    transition: all .3s;
    @media(max-width: 1199px) {
      overflow: auto;
      max-height: unset;
    }
    @media (max-width: 767px){
      padding-top: 50px;
      justify-content: start;
    }
    &.scrolled {
      padding-top: 218px;
    }
    .scroller {
      transition: all .3s;
    }
    .home-o-produkte{
      min-height: calc(100vh - 86px);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      transition: all .5s;
      @media (max-width: 1199px){
        background-position: 13%;
      }
      h2{
        color: #ffffff;
        font-size: 48px;
        font-weight: 700;
        line-height: 60px;
        text-transform: uppercase;
        margin-bottom: 30px;
        position: relative;
        padding-top: 80px;
        opacity: 1;
        pointer-events: unset;
        transition: all .4s;
        text-align: center;
        &::after{
          position: absolute;
          content: '';
          top: 37px;
          left: 50%;
          width: 106px;
          height: 6px;
          background-color: #00b9e5;
          transform: translateX(-50%);
        }
        @media (max-width: 1199px){
          font-size: 35px;
        }
      }
      p{
        color: #ffffff;
        font-family: "Clear Sans";
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        max-width: 655px;
        text-align: center;
        margin-bottom: 100px;
        opacity: 1;
        pointer-events: unset;
        transition: all .4s;
        @media (max-width: 1199px){
          margin-bottom: 80px;
        }
      }
      .scroll{
        width: 535px;
        max-width: 535px;
        h6{
          color: #ffffff;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          text-transform: uppercase;
        }
        .block-scroll{
          width: 415px;
          max-width: 415px;
          margin: 0 auto;
          .circle{
            width: 20px;
            height: 20px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: 100%;
            transition: all .3s;
            &.active{
              border-color: #00b9e5;
              background: #00b9e5;;
            }
          }
          .line{
            height: 1px;
            background-color: rgba(255, 255, 255, 0.25);
            width: 45.5%;
            transition: all .3s;
            &.active{
              border-color: #00b9e5;
              background: #00b9e5;;
            }
          }
        }
        @media (max-width: 1599px){
          h6{
            font-size: 14px;
            line-height: 1;
          }
        }
        @media (max-width: 1199px){
          max-width: 700px;
          h6{
            text-align: center;
          }
        }
      }
      .mouse{
        margin-top: 110px;
        opacity: 1;
        pointer-events: unset;
        transition: all .4s;
        .vertical-line{
          width: 1px;
          height: 71px;
          background-color: #ffffff;
          opacity: 0.5;
          margin: 0 auto;
        }
        .img-mouse{
          margin-bottom: 15px;
        }
        @media (max-width: 1199px){
          display: none;
        }
      }
      &.collapsed{
        position: fixed;
        left: 0;
        top: 86px;
        width: 100%;
        min-height: 132px;
        z-index: 2;
        h2{
          opacity: 0;
          pointer-events: none;
          height: 0;
          margin: 0;
          padding: 0;
        }
        p{
          opacity: 0;
          pointer-events: none;
          height: 0;
          margin: 0;
          padding: 0;
        }
        .mouse{
          opacity: 0;
          pointer-events: none;
          height: 0;
          margin: 0;
        }
        @media (max-width: 1599px){
          min-height: 100px;
        }
      }
    }
    .mob-name-page{
      padding: 50px 0;
      max-height: 150px;
      align-items: center;
      justify-content: center;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      h2{
        padding: 30px 0 0;
        text-align: center;
        color: #ffffff;
        font-size: 25px;
        font-weight: 700;
        text-transform: uppercase;
        position: relative;
        opacity: 1;
        pointer-events: unset;
        transition: all .4s;
        &::after{
          position: absolute;
          content: '';
          top: 0;
          left: 50%;
          width: 106px;
          height: 6px;
          background-color: #00b9e5;
          transform: translateX(-50%);
        }
      }
    }
    .produkt-quality{
      position: relative;
      height: calc(100vh - 218px);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // padding: 200px 0;
      background-position-y: center;
      overflow: hidden;
      img.bg-top-company{
        position: absolute;
        right: -6%;
        top: 0;
        z-index: -1;
        @media (max-width: 1199px){
          width: 20%;
          top: 0;
        }
      }
      img.bg-bottom-company{
        position: absolute;
        left: -3%;
        bottom: -4%;
        z-index: -1;
        @media (max-width: 1199px){
          width: 20%;
          bottom: 0;
        }
      }
      h4{
        color: #000000;
        font-size: 48px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 45px;
      }
      p.text-quality{
        opacity: 0.84;
        color: #000000;
        font-size: 18px;
        font-weight: 400;
        line-height: 39px;
        width: 48%;
        letter-spacing: 0.54px;
        @media (max-width: 1599px){
          line-height: 1.5;
          font-size: 16px;
        }
      }
      @media (max-width: 1399px){
        h4{
          font-size: 36px;
          margin-bottom: 25px;
        }
        .text-quality{
          font-size: 15px;
        }
        // img.bg-bottom-company{
        //   bottom: 0;
        //   left: -7%;
        // }
      }
      @media (max-width: 1199px){
        height: unset;
        padding: 55px 0 0;
        h4{
          font-size: 36px;
        }
      }
      @media (max-width: 767px){
        h4{
          font-size: 24px;
          text-align: center;
        }
        img.bg-top-company{
          top: 0;
          opacity: 0.4;
          width: 30%;
        }
        img.bg-bottom-company{
          opacity: 0.4;
        }
        /deep/ p{
          font-size: 14px;
          line-height: 24px;
        }
        /deep/ button.btn-read-more{
          margin-top: 25px;
        }
        .text-wrap{
          margin-bottom: 55px;
          .btn-read-more{
            margin-top: 25px;
          }
        }
      }
    }
    .prof-consultanty{
      position: relative;
      height: calc(100vh - 218px);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-position-y: center;
      h4{
        color: #000000;
        font-size: 48px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 55px;
        text-align: center;
      }
      .advantages{
        width: 32%;
        height: 390px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #2d2d2d;
        padding: 30px;
        transition: all 0.3s;
        h6{
          color: #ffffff;
          font-size: 24px;
          font-weight: 400;
          margin: 30px 0;
          text-transform: uppercase;
          @media (max-width: 1599px){
            margin: 20px 0;
          }
        }
        p{
          color: #ffffff;
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          margin: 0;
          text-align: center;
          @media (max-width: 1599px){
           line-height: 22px;
          }
        }
        &:nth-child(2){
          background-color: rgba(45, 45, 45, 0.48);
        }
        &:hover{
          background-color: #00b9e5;
          transform: scale(1.02);
        }
        // @media (max-width: 767px){
        //   width: 100%;
        // }
      }
      img.bg-top-company{
        position: absolute;
        right: -6%;
        top: 0;
        z-index: -1;
        @media (max-width: 1199px){
          width: 20%;
          top: 0;
        }
        @media (max-width: 767px){
          opacity: 0.4;
        }
      }
      img.bg-bottom-company{
        position: absolute;
        left: -3%;
        bottom: -10%;
        z-index: -1;
        @media (max-width: 1199px){
          width: 20%;
          bottom: 0;
        }
        @media (max-width: 767px){
          opacity: 0.4;
        }
      }
      @media (max-width: 1399px){
        padding: 0;
        h4{
          font-size: 43px;
          margin-bottom: 25px;
        }
        .advantages{
          height: 290px;
          img{
            max-width: 50px;
          }
          h6{
            margin: 10px 0;
            font-size: 20px;
          }
          p{
            line-height: 20px;
            font-size: 13px;
          }
        }
        // img.bg-top-company{
        //   top: -18%;
        // }
        // img.bg-bottom-company{
        //   left: -7%;
        //   bottom: -30%;
        // }
      }
      @media (max-width: 1199px){
        height: unset;
        padding: 50px 0;
        h4{
          font-size: 36px;
          margin-bottom: 38px;
        }
        .carousel-mob-advantages{
          position: relative;
          /deep/ .owl-prev{
            position: absolute;
            background: none;
            color: #c0c0c0;
            left: 8%;
            font-size: 32px;
            bottom: 50%;
          }
          /deep/ .owl-next{
            position: absolute;
            background: none;
            color: #c0c0c0;
            right: 8%;
            font-size: 32px;
            bottom: 50%;
          }
        }
        .advantages{
          margin: 0 auto;
          width: 52%;
          height: 480px;
          img{
            width: unset;
          }
        }
      }
      @media (max-width: 767px){
        h4{
          font-size: 24px;
        }
        .carousel-mob-advantages{
          margin: 0 -15px;
          /deep/ .owl-prev{
            color: #fff;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          /deep/ .owl-next{
            color: #fff;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        .advantages{
          width: 100%;
          margin: 0 auto;
        }
        img.bg-top-company{
          display: none;
        }
        /deep/ p{
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
    .our-clients{
      position: relative;
      height: calc(100vh - 278px);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // padding: 200px 0;
      background-position-y: center;
      img.bg-top-company{
        position: absolute;
        right: -6%;
        top: 0;
        z-index: -1;
        @media (max-width: 1199px){
          width: 20%;
          top: 5%;
        }
        @media (max-width: 767px){
          opacity: 0.4;
          top: 0;
          width: 33%;
        }
      }
       img.bg-bottom-company{
        display: none;
        @media (max-width: 1199px){
          position: absolute;
          width: 20%;
          bottom: 0;
          display: block;
          left: -3%;
        }
        @media (max-width: 767px){
          opacity: 0.4;
        }
      }
      @media (max-width: 1599px){
        padding-bottom: 60px;
      }
      @media (max-width: 1199px){
        height: unset;
        padding: 50px 0;
      }
    }
  }
</style>
