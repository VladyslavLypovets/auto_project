<template>
  <footer>
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
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
        font-weight: 400;
        margin: 0;
      }
    }
    .rasrabotka{
      p{
        color: #242424;
        font-size: 14px;
        font-weight: 400;
        margin: 0;
        a{
          color: #242424;
          font-size: 14px;
          font-weight: 400;
          text-decoration: none;
        }
      }
    }
    .number-phone{
      a{
        opacity: 0.77;
        color: #242424;
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
</style>
