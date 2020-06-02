<template>
<div>
  <Header />
  <main class="oproducte-main">
    <div class="home-o-produkte collapsed"
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
        <div class="d-flex align-items-center justify-content-between">
          <div class="advantages">
            <img src="@/assets/img/advantages.png" alt="advantages" class="img-advantages">
            <h6>Преимущества 1</h6>
            <p>Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании систем массового участия. Не следует, однако забывать, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. </p>
          </div>
          <div class="advantages">
            <img src="@/assets/img/advantages.png" alt="advantages" class="img-advantages">
            <h6>Преимущества 1</h6>
            <p>Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании систем массового участия. Не следует, однако забывать, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. </p>
          </div>
          <div class="advantages">
            <img src="@/assets/img/advantages.png" alt="advantages" class="img-advantages">
            <h6>Преимущества 1</h6>
            <p>Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании систем массового участия. Не следует, однако забывать, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. </p>
          </div>
        </div>
        <img src="@/assets/img/bg-bottom-element.png" alt="bg-bottom-element" class="bg-bottom-element">
      </div>
    </div>
    <div class="our-clients">
      <img src="@/assets/img/bg-top-element.png" alt="bg-top-element" class="bg-top-element">
      <OurPartnersClients />
      <img src="@/assets/img/bg-bottom-element.png" alt="bg-bottom-element" class="bg-bottom-element">
    </div>
  </main>
  <Footer />
</div>

</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import OurPartnersClients from '@/components/layout/OurPartnersClients.vue'

export default {
  name: 'OProdukte',
  components: {
    Header,
    Footer,
    OurPartnersClients
  }
}
</script>

<style lang="scss" scoped>
  .oproducte-main{
    padding: 218px 0 0;
    overflow: hidden;
    .home-o-produkte{
      min-height: calc(100vh - 86px);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      h2{
        color: #ffffff;
        font-size: 48px;
        font-weight: 700;
        line-height: 60px;
        text-transform: uppercase;
        margin-bottom: 30px;
        position: relative;
        padding-top: 40px;
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
      }
      .mouse{
        margin-top: 110px;
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
          display: none;
        }
        p{
          display: none;
        }
        .mouse{
          display: none;
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
      padding: 200px 0;
      background-position-y: center;
      img.bg-top-element{
        position: absolute;
        right: -28%;
        top: -25%;
      }
       img.bg-bottom-element{
        position: absolute;
        left: -25%;
        bottom: -30%;
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
      padding: 200px 0;
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
        }
        p{
          color: #ffffff;
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          margin: 0;
          text-align: center;
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
        right: -28%;
        top: -25%;
      }
       img.bg-bottom-element{
        position: absolute;
        left: -25%;
        bottom: -35%;
      }
    }
    .our-clients{
      position: relative;
      height: calc(100vh - 218px);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 200px 0;
      background-position-y: center;
      img.bg-top-element{
        position: absolute;
        right: -28%;
        top: -25%;
      }
       img.bg-bottom-element{
        display: none;
      }
    }
  }
</style>
