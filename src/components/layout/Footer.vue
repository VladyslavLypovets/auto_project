<template>
  <footer>
    <div class="container">
      <div class="align-items-center justify-content-between d-none d-xl-flex">
        <div class="copirait">
          <p>Копирайт 2020 Автонова Д</p>
        </div>
        <div class="rasrabotka">
          <p>Разработано <a href="https://fairtech-marketing.com.ua/" target="_blank">Fairtech Marketing</a></p>
        </div>
        <div class="number-phone">
          <a href="tel:044 999 99 999"><i class="fa fa-phone" aria-hidden="true"></i>044 999 99 999</a>
          <a href="tel:044 999 99 999"><i class="fa fa-phone" aria-hidden="true"></i>044 999 99 999</a>
        </div>
      </div>
      <div class="d-flex flex-column d-xl-none">
        <div class="d-flex align-items-center justify-content-between flex-column flex-md-row">
          <div class="copirait">
            <p>Копирайт 2020 Автонова Д</p>
          </div>
          <div class="number-phone">
            <a href="tel:044 999 99 999"><i class="fa fa-phone" aria-hidden="true"></i>044 999 99 999</a>
            <a href="tel:044 999 99 999"><i class="fa fa-phone" aria-hidden="true"></i>044 999 99 999</a>
          </div>
        </div>
        <div class="rasrabotka">
          <p>Разработано <a href="https://fairtech-marketing.com.ua/" target="_blank">Fairtech Marketing</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  footer{
    height: 60px;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    .copirait{
      p{
        color: #242424;
        font-size: 14px;
        font-weight: 500;
        margin: 0;
      }
    }
    .rasrabotka{
      p{
        color: #242424;
        font-size: 14px;
        font-weight: 500;
        margin: 0;
        a{
          color: #242424;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all .3s;
          &:hover {
            color: #00b9e5;
          }
        }
      }
    }
    .number-phone{
      a{
        color: rgba(36, 36, 36, 0.77);
        font-size: 16px;
        font-weight: 700;
        text-decoration: none;
        i{
          font-size: 12px;
          color: #00b9e5;
          margin-right: 12px;
        }
        &:last-child{
          margin-left: 100px;
        }
      }
    }
  }
  @media (max-width: 1199px){
    footer{
      height: 100%;
      padding: 25px 0 20px;
      .number-phone{
        a{
          font-size: 18px;
          i{
            font-size: 17px;
          }
          &:last-child{
            margin-left: 40px;
          }
        }
      }
      .rasrabotka{
        margin-top: 25px;
        text-align: center;
        border-top: 1px solid rgba(195, 195, 195, 0.75);
        padding-top: 23px;
      }
    }
  }
  @media (max-width: 767px){
    footer{
      padding: 20px 0 15px;
      .copirait{
        text-align: center;
        order: 2;
      }
      .number-phone{
        order: 1;
        a{
          font-size: 16px;
          display: block;
          i{
            margin-right: 7px;
            font-size: 11px;
          }
          &:last-child {
            margin-left: 0;
            margin-bottom: 15px;
          }
        }
      }
      .rasrabotka{
        padding-top: 19px;
        margin-top: 20px;
      }
    }
  }
</style>
