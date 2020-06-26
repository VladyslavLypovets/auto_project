<template>
  <header>
    <div class="position-relative w-100">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center header-left">
            <router-link :to="{ name: 'Navigation' }" class="logo-block">
              <img src="@/assets/img/logo_Autonova_D.png" alt="logo">
            </router-link>
            <nav class="nav-decstop">
              <router-link to="/about-company" class="nav-link">О нас</router-link>
              <router-link to="/about-product" class="nav-link">О продукции</router-link>
              <router-link to="/contacts" class="nav-link">Контакты</router-link>
            </nav>
          </div>
          <div class="search-languages-block d-flex">
            <div class="search d-none d-xl-block">
              <form class="input-search" method="POST">
                <input type="text" class="form-control" name="search" placeholder="Поиск на сайте">
                <button class="btn-search">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <div class="mob-search d-flex align-items-center d-xl-none">
              <button class="btn-search" @click="mobileSearch = !mobileSearch">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
            <div class="lang d-flex align-items-center">
              <multiselect
                v-model="lang"
                :options="['УКР', 'РУ']"
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
              class="d-flex align-items-center d-md-none burger"
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
          <router-link to="/about-company" class="nav-link">О нас</router-link>
          <router-link to="/about-product" class="nav-link">О продукции</router-link>
          <router-link to="/contacts" class="nav-link">Контакты</router-link>
        </nav>
      </div>
      <div
        class="mobile-search"
        :class="{open: mobileSearch}"
      >
        <div class="container">
          <div class="search-wrap">
            <input type="text">
            <button class="btn-search">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    lang: 'РУ',
    isMenuOpen: false,
    mobileSearch: false
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
          .btn-search {
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
          i{
            font-size: 13px;
            line-height: 1;
            z-index: 3;
            color: #ffffff;
          }
          /deep/ .multiselect__tags {
            width: 62px;
            height: 34px;
            border-radius: 5px;
            background-color: #00b9e5;
            border: none;
            padding: 5px;
            display: flex;
            align-items: center;
            .multiselect__single {
              background-color: #00b9e5;
              color: #ffffff;
              font-size: 16px;
              font-weight: 700;
              text-transform: uppercase;
              margin: 0;
            }
          }
          /deep/ .multiselect__content-wrapper{
            width:  62px;
            .multiselect__element {
              max-width:  62px;
            }
            span.multiselect__option.multiselect__option--highlight {
              max-width:  62px;
              background: #fff;
              height: 34px;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.3s;
              span{
                color: #000;
                font-size: 16px;
                font-weight: 700;
                text-transform: uppercase;
                margin: 0;
                transition: all 0.3s;
              }
              &:hover{
                background: #00b9e5;
                span{
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
    .mobile-search {
      width: 100%;
      position: absolute;
      bottom: 0;
      transform: translateY(0);
      opacity: 0;
      pointer-events: none;
      transition: all .3s;
      z-index: 1;
      padding: 15px 0;
      background: #fff;
      width: 100%;
      box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.08);
      &.open {
        transform: translateY(calc(100% + 7px));
        opacity: 1;
        pointer-events: unset;
      }
      .search-wrap {
        position: relative;
        input{
          width: 100%;
          height: 35px;
          border: none;
          border-bottom: 1px solid #dcdcdc;
          padding-right: 30px;
          outline: none;
        }
        .btn-search {
          position: absolute;
          border: none;
          background: none;
          right: 5px;
          font-size: 17px;
          top: 50%;
          transform: translateY(-50%);
          color: #00b9e5;
        }
      }
    }
  }
  @media (max-width: 1599px){
    header .logo-block{
      margin-right: 40px;
    }
  }
  @media (max-width: 1199px){
    header{
      .search-languages-block{
        .mob-search{
          .btn-search {
            border: none;
            background: none;
            margin-right: 30px;
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
    }
  }
  @media (max-width: 992px){
    header{
      .header-left{
        width: 80%;
        .logo-block{
          display: block;
          margin-right: 20px;
          width: 220px;
          img{
            max-width: 100%;
          }
        }
      }
      .nav-decstop{
        .nav-link{
          font-size: 14px;
          padding: 0 11px;
        }
      }
      .search-languages-block{
        .mob-search .btn-search{
         margin-right: 20px;
        }
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
          margin-right: 0;
        }
      }
      .search-languages-block{
        align-items: center;
        justify-content: space-between;
        width: 50%;
        .lang{
          border: none;
          padding: 0;
          .multiselect{
            min-height: 26px;
            /deep/.multiselect__tags{
              width: 55px;
              height: 26px;
              min-height: 26px;
              .multiselect__single{
                font-size: 14px;
              }
            }
            /deep/ .multiselect__content-wrapper{
              width: 55px;
              .multiselect__element {
                max-width: 55;
              }
              span.multiselect__option.multiselect__option--highlight {
                max-width: 55;
              }
            }
          }
        }
        .mob-search .btn-search{
          margin: 0;
          padding-left: 15px;
          i{
            font-size: 16px;
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
  @media (max-width: 576px){
    header{
      display: flex;
      align-items: center;
    }
  }
</style>
