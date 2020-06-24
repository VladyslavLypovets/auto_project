<template>
  <div>
    <Header />
    <main class="oproducte-main" :class="{'scrolled': currentScrollPosition !== 0}">
      <div
        class="scroller"
        @mousewheel="scroll"
        @touchmove="touch"
      >
        <div class="home-o-produkte"
        :class="{'collapsed': currentScrollPosition !== 0}"
        :style="{
          'background-image': `url(${require('@/assets/img/bg-top-o-produkte.png')})`
        }"
        >
          <div class="container d-flex flex-column align-items-center justify-content-center">{
            <h2>О продукции</h2>
            <p>Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. </p>
            <div class="scroll">
              <div class="d-flex align-items-center justify-content-between">
                <h6>Качество продукции</h6>
                <h6>Профессиональные консультанты</h6>
                <h6>Наши клиенты</h6>
              </div>
              <div class="block-scroll d-flex align-items-center justify-content-between">
                <div class="circle active"></div>
                <div class="line active"></div>
                <div class="circle active"></div>
                <div class="line"></div>
                <div class="circle"></div>
              </div>
            </div>
            <div class="mouse">
              <img src="@/assets/img/mouse.png" alt="mouse" class="img-mouse">
              <div class="vertical-line"></div>
            </div>
          </div>
        </div>
        <div class="produkt-quality">
          <div class="container">
            <img src="@/assets/img/bg-top-element.png" alt="bg-top-element" class="bg-top-element">
            <h4>Качество продукции</h4>
            <div class="d-flex align-items-center justify-content-between">
              <p class="text-quality">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, n</p>
              <p class="text-quality">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, n</p>
            </div>
            <img src="@/assets/img/bg-bottom-element.png" alt="bg-bottom-element" class="bg-bottom-element">
          </div>
        </div>
        <div class="prof-consultanty">
          <div class="container">
            <img src="@/assets/img/bg-top-element.png" alt="bg-top-element" class="bg-top-element">
            <h4>Профессиональные консультанты</h4>
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
            <img src="@/assets/img/bg-bottom-element.png" alt="bg-bottom-element" class="bg-bottom-element">
          </div>
        </div>
        <div class="our-clients">
          <img src="@/assets/img/bg-top-element.png" alt="bg-top-element" class="bg-top-element">
          <OurPartnersClients />
          <img src="@/assets/img/bg-bottom-element.png" alt="bg-bottom-element" class="bg-bottom-element">
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

export default {
  name: 'AboutProduct',
  components: {
    Header,
    Footer,
    OurPartnersClients
  },
  data: () => ({
    consultantsData: [
      {
        img: 'advantages',
        title: 'Преимущества 1',
        text: 'Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании систем массового участия. Не следует, однако забывать, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.'
      },
      {
        img: 'advantages',
        title: 'Преимущества 2',
        text: 'Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании систем массового участия. Не следует, однако забывать, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.'
      },
      {
        img: 'advantages',
        title: 'Преимущества 3',
        text: 'Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании систем массового участия. Не следует, однако забывать, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.'
      }
    ],
    currentScrollPosition: 0,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"/>', '<i class="fa fa-angle-right" aria-hidden="true"/>']
  }),
  methods: {
    scroll (e) {
      if (e.deltaY > 0) {
        this.moveBottom()
      } else {
        this.moveTop()
      }
    },
    touch (e) {
      console.log(e)
    },
    moveBottom () {
      if (this.currentScrollPosition < 4) {
        this.currentScrollPosition += 1
      }
    },
    moveTop () {
      if (this.currentScrollPosition > 0) {
        this.currentScrollPosition -= 1
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.scroll)
  }
}
</script>

<style lang="scss" scoped>
  .oproducte-main{
    // padding: 218px 0 0;
    padding-top: 86px;
    max-height: 100vh;
    overflow: hidden;
    transition: all .3s;
    &.scrolled {
      padding-top: 218px;
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
      h2{
        color: #ffffff;
        font-size: 48px;
        font-weight: 700;
        line-height: 60px;
        text-transform: uppercase;
        margin-bottom: 30px;
        position: relative;
        padding-top: 40px;
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
      }
      .scroll{
        width: 778px;
        max-width: 778px;
        h6{
          color: #ffffff;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          text-transform: uppercase;
        }
        .block-scroll{
          width: 645px;
          max-width: 645px;
          margin: 0 auto;
          .circle{
            width: 20px;
            height: 20px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: 100%;
            &.active{
              border-color: #00b9e5;
              background: #00b9e5;;
            }
          }
          .line{
            height: 1px;
            background-color: rgba(255, 255, 255, 0.25);
            width: 45.5%;
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
        }
        p{
          opacity: 0;
          pointer-events: none;
          height: 0;
          margin: 0;
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
    .produkt-quality{
      position: relative;
      min-height: calc(100vh - 218px);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // padding: 200px 0;
      background-position-y: center;
      overflow: hidden;
      img.bg-top-element{
        position: absolute;
        right: -3%;
        top: 15%;
        z-index: -1;
      }
      img.bg-bottom-element{
        position: absolute;
        left: -3%;
        bottom: -4%;
        z-index: -1;
      }
      h4{
        color: #000000;
        font-size: 48px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 45px;
      }
      .text-quality{
        opacity: 0.84;
        color: #000000;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.8;
        width: 48%;
        letter-spacing: 0.54px;
        background: #fff;
        @media (max-width: 1599px){
          line-height: 1.6;
        }
      }
      @media (max-width: 1399px){
        h4{
          font-size: 43px;
          margin-bottom: 25px;
        }
        .text-quality{
          font-size: 15px;
        }
        // img.bg-bottom-element{
        //   bottom: 0;
        //   left: -7%;
        // }
      }
    }
    .prof-consultanty{
      position: relative;
      min-height: calc(100vh - 218px);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // padding: 200px 0;
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
        background-color: #00b9e5;
        padding: 0 30px;
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
          background-color: #0f9ec0;
        }
        &:hover{
          background-color: #79949a;
          transform: scale(1.02);
        }
      }
      img.bg-top-element{
        position: absolute;
        right: -3%;
        top: 8%;
        z-index: -1;
      }
      img.bg-bottom-element{
        position: absolute;
        left: -3%;
        bottom: -10%;
        z-index: -1;
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
        // img.bg-top-element{
        //   top: -18%;
        // }
        // img.bg-bottom-element{
        //   left: -7%;
        //   bottom: -30%;
        // }
      }
      @media (max-width: 1199px){
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
            left: 10%;
            font-size: 20px;
            transform: translateX(50%);
            bottom: 50%;
          }
          /deep/ .owl-next{
            position: absolute;
            background: none;
            color: #c0c0c0;
            right: 10%;
            font-size: 20px;
            transform: translateX(50%);
            bottom: 50%;
          }
        }
        .advantages{
          margin: 0 auto;
          width: 45%;
          height: 480px;
          img{
            width: unset;
          }
        }
      }
    }
    .our-clients{
      position: relative;
      min-height: calc(100vh - 218px);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // padding: 200px 0;
      background-position-y: center;
      img.bg-top-element{
        position: absolute;
        right: -3%;
        top: 8%;
        z-index: -1;
      }
       img.bg-bottom-element{
        display: none;
      }
      @media (max-width: 1599px){
        padding-bottom: 60px;
      }
    }
  }
</style>
