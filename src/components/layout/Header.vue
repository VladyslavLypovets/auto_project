<template>
  <header>
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center header-left">
          <router-link :to="{ name: 'Home' }" class="logo-block">
            <img src="@/assets/img/logo_Autonova_D.png" alt="logo">
          </router-link>
          <nav class="nav-decstop">
            <router-link to="/" class="nav-link">О нас</router-link>
            <router-link to="/" class="nav-link">О продукции</router-link>
            <router-link to="/" class="nav-link">Контакты</router-link>
          </nav>
        </div>
        <div class="search-languages-block d-flex">
          <div class="search">
            <form class="input-search" method="POST">
              <input type="text" class="form-control" name="search" placeholder="Поиск на сайте">
              <button class="btn-zero">
                  <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
          <div class="lang">
            <multiselect
              v-model="lang"
              :options="['ua', 'ru']"
              :searchable="false"
              :allowEmpty="false"
              :hideSelected="true"
              :showLabels="false"
            >
              <i
                class="fa fa-angle-down caret"
                slot="caret"
                slot-scope="{ toggle }"
                aria-hidden="true"
                @mousedown.prevent.stop="toggle"
              />
            </multiselect>
          </div>
          <div
            class="d-block d-md-block burger"
            @click="isMenuOpen = !isMenuOpen"
          >
            <img src="@/assets/img/menu.png" alt="menu" v-if="!isMenuOpen">
            <img src="@/assets/img/close.png" alt="close" v-else>
          </div>
        </div>
      </div>
      <nav
        class="menu d-flex d-md-none"
        :class="{ open: isMenuOpen }"
      >
        <router-link to="/" class="nav-link">О нас</router-link>
        <router-link to="/" class="nav-link">О продукции</router-link>
        <router-link to="/" class="nav-link">Контакты</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    lang: 'ru',
    isMenuOpen: false
  })
}
</script>

<style lang="scss" scoped>
  header{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 86px;
    box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.19);
    background-color: #ffffff;
    z-index: 2;
    .logo-block{
      margin-right: 140px;
    }
    .nav-decstop{
      display: flex;
      .nav-link{
        color: #242424;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        border-bottom: 4px solid #fff;
        height: 86px;
        display: flex;
        align-items: center;
        transition: all 0.3s;
        &:hover{
          color: #00b9e5;
          border-color: #00b9e5;
        }
      }
    }
    .search-languages-block{
      .search{
        .input-search{
          background: #fff;
          width: 330px;
          height: 100%;
          display: flex;
          align-items: center;
          input {
            width: 100%;
            border-radius: 0;
            border: unset;
            border-bottom: 1px solid #dcdcdc;
            background: none;
            transition: all .3s;
            background: #fff;
            margin-right: 25px;
            padding-left: 0;
            &:focus{
              box-shadow: unset;
            }
            &::placeholder{
              color: #242424;
              font-size: 16px;
              font-weight: 400;
            }
          }
          button {
            border: none;
            background: none;
            margin-right: 40px;
            &:focus{
              box-shadow: unset;
              outline: none;
            }
            i{
              font-size: 23px;
              color: #00b9e5;;
            }
          }
        }
      }
      .lang{
        border-left: 1px solid #dcdcdc;
        height: 34px;
        padding-left: 25px;
        width: 98px;
        .multiselect {
          .caret {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            transition: all .3s;
            cursor: pointer;
          }
          &--active {
            .caret {
              transform: translateY(-50%) rotate(180deg);
            }
          }
        }
      }
    }
  }
  @media (max-width: 1199px){
    header{
      .search-languages-block .search{
        display: none;
      }
    }
  }
  @media (max-width: 767px){
    header{
      height: 50px;
      .nav-decstop{
        display: none;
      }
      .header-left{
        width: 50%;
        .logo-block{
          display: block;
          margin-right: 0;
          img{
            max-width: 100%;
          }
        }
      }
      .menu{
        position: fixed;
        top: 50px;
        left: 0;
        width: 100%;
        background: #000;
        background-color: #fff;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding: 0;
        z-index: 100;
        height: 0;
        transition: all .6s;
        overflow: hidden;
        a{
          color: #242424;
          font-size: 14px;
          font-weight: 700;
          line-height: 60px;
          text-transform: uppercase;
          margin-bottom: 0;
          transition: all 0.3s;
          border-bottom: 2px solid #fff;
          &:hover{
            color: #00b9e5;
            border-color: #00b9e5;
          }
        }
        &.open{
          height: calc(100vh - 50px);
        }
      }
    }
  }
</style>
