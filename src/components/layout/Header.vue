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
              <form class="input-search">
                <input type="text" class="form-control" name="search" v-model="search" placeholder="Поиск на сайте">
                <button class="btn-search">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23" height="23" viewBox="0 0 23 23">
                    <image id="search" width="23" height="23" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAB9ElEQVRIia3VS4iPURjH8c9ojAUSTWoyRU0klxRjJ00UU6RkFhZI2FAWLimzk5SShRUbSSIrWZBI2EgRo1ByV265JGIzrp08f729nf/M/53mtznPuX3f532e55zT5OJrGbViE5ZjDsbgF57iCo7hZm5jUWV4E7ZjD0YPsvcsNuNdI/AWnMKqwvxjXMYbjEUnFqI55tPmbtzPwZsL9uEC+Dm24nxmz2QcjLWTcAHz8L68cES0K7Ah7DuYXwec9BI92Bv99nCsblgeYAa+YBZe1QGXdQYrY2wu+sqedwZY/G6j4KQd+B32+vJkgncV+icqgEVuroe9KAefGvZnvKgIT7obbUcOPirs70MAJ32NdmQO/jHsibkFDag9lnzIwWsZbokDUkXpRC+O9X05+CX8jP62ivCegufncvD0OyejvwxrGwS34VDYn3KVVjuhvVEtSUexbhBwR9yObdHfiW/14OliWo0fkdTjcWd0F6pJHLb9uIfpMdaP2zkPylfuEpzG+MLYnwjduNKHinobxfAk53lNKbkzIzT9/x34V6ZF8I042bujn8JzDVMG8ryo5P1SzMaEiOkzXMXDwrp9kTPxUnXV7qeB4FV0IJKa9AgLUijLYRmqduFI7J0WldQ6XPCU9C1RZUnpTegtPnPD8YGNcb+vwa2/wX1ozTq6KRUAAAAASUVORK5CYII="/>
                  </svg>
                </button>
              </form>
            </div>
            <div class="mob-search d-flex align-items-center d-xl-none">
              <button class="btn-search" @click="mobileSearch = !mobileSearch">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23" height="23" viewBox="0 0 23 23">
                  <image id="search" width="23" height="23" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAB9ElEQVRIia3VS4iPURjH8c9ojAUSTWoyRU0klxRjJ00UU6RkFhZI2FAWLimzk5SShRUbSSIrWZBI2EgRo1ByV265JGIzrp08f729nf/M/53mtznPuX3f532e55zT5OJrGbViE5ZjDsbgF57iCo7hZm5jUWV4E7ZjD0YPsvcsNuNdI/AWnMKqwvxjXMYbjEUnFqI55tPmbtzPwZsL9uEC+Dm24nxmz2QcjLWTcAHz8L68cES0K7Ah7DuYXwec9BI92Bv99nCsblgeYAa+YBZe1QGXdQYrY2wu+sqedwZY/G6j4KQd+B32+vJkgncV+icqgEVuroe9KAefGvZnvKgIT7obbUcOPirs70MAJ32NdmQO/jHsibkFDag9lnzIwWsZbokDUkXpRC+O9X05+CX8jP62ivCegufncvD0OyejvwxrGwS34VDYn3KVVjuhvVEtSUexbhBwR9yObdHfiW/14OliWo0fkdTjcWd0F6pJHLb9uIfpMdaP2zkPylfuEpzG+MLYnwjduNKHinobxfAk53lNKbkzIzT9/x34V6ZF8I042bujn8JzDVMG8ryo5P1SzMaEiOkzXMXDwrp9kTPxUnXV7qeB4FV0IJKa9AgLUijLYRmqduFI7J0WldQ6XPCU9C1RZUnpTegtPnPD8YGNcb+vwa2/wX1ozTq6KRUAAAAASUVORK5CYII="/>
                </svg>
              </button>
            </div>
            <div class="lang d-flex align-items-center">
              <multiselect
                v-model="lang"
                :options="['УКР', 'РУ']"
                :searchable="false"
                :hideSelected="true"
                :allowEmpty="false"
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
            <input type="text" v-model="search">
            <button class="btn-search">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23" height="23" viewBox="0 0 23 23">
                <image id="search" width="23" height="23" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAB9ElEQVRIia3VS4iPURjH8c9ojAUSTWoyRU0klxRjJ00UU6RkFhZI2FAWLimzk5SShRUbSSIrWZBI2EgRo1ByV265JGIzrp08f729nf/M/53mtznPuX3f532e55zT5OJrGbViE5ZjDsbgF57iCo7hZm5jUWV4E7ZjD0YPsvcsNuNdI/AWnMKqwvxjXMYbjEUnFqI55tPmbtzPwZsL9uEC+Dm24nxmz2QcjLWTcAHz8L68cES0K7Ah7DuYXwec9BI92Bv99nCsblgeYAa+YBZe1QGXdQYrY2wu+sqedwZY/G6j4KQd+B32+vJkgncV+icqgEVuroe9KAefGvZnvKgIT7obbUcOPirs70MAJ32NdmQO/jHsibkFDag9lnzIwWsZbokDUkXpRC+O9X05+CX8jP62ivCegufncvD0OyejvwxrGwS34VDYn3KVVjuhvVEtSUexbhBwR9yObdHfiW/14OliWo0fkdTjcWd0F6pJHLb9uIfpMdaP2zkPylfuEpzG+MLYnwjduNKHinobxfAk53lNKbkzIzT9/x34V6ZF8I042bujn8JzDVMG8ryo5P1SzMaEiOkzXMXDwrp9kTPxUnXV7qeB4FV0IJKa9AgLUijLYRmqduFI7J0WldQ6XPCU9C1RZUnpTegtPnPD8YGNcb+vwa2/wX1ozTq6KRUAAAAASUVORK5CYII="/>
              </svg>
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
    mobileSearch: false,
    search: ''
  })
}
</script>

<style lang="scss" scoped>
  header{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 83px;
    box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.19);
    background-color: #ffffff;
    z-index: 3;
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
        letter-spacing: 0.48px;
        height: 83px;
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
          width: 400px;
          height: 100%;
          display: flex;
          align-items: flex-end;
          @media (max-width: 1599px){
            width: 330px;
          }
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
            caret-color: #00b9e5;
            &:focus{
              box-shadow: unset;
            }
            &::placeholder{
              color: #242424;
              font-size: 16px;
              font-weight: 400;
              letter-spacing: 0.48px;
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
          min-height: unset;
          cursor: pointer;
          .caret {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            transition: all .3s;
            cursor: pointer;
          }
          /deep/ .multiselect__tags {
            width: 62px;
            min-height: 34px;
            border-radius: 5px;
            background-color: #00b9e5;
            border: none;
            padding: 5px;
            display: flex;
            align-items: center;
              transition: all .3s;
            .multiselect__single {
              background-color: #00b9e5;
              color: #ffffff;
              font-size: 16px;
              font-weight: 700;
              text-transform: uppercase;
              margin: 0;
              transition: all .3s;
            }
          }
          &--active {
            .caret {
              transform: translateY(-50%) rotate(180deg);
              color: #000;
            }
            /deep/ .multiselect__tags {
              background-color: #fff;
              border: 1px solid #e8e8e8;
              border-bottom: none;
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
              .multiselect__single {
                background-color: #fff;
                color: #000;
              }
            }
          }
          i{
            font-size: 13px;
            line-height: 1;
            z-index: 3;
            color: #ffffff;
          }
          /deep/ .multiselect__content-wrapper{
            width:  62px;
            top: 100%;
            z-index: 5;
            .multiselect__element {
              max-width:  62px;
            }
            span.multiselect__option.multiselect__option--highlight {
              max-width:  62px;
              background: #fff;
              min-height: unset;
              display: flex;
              align-items: center;
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
          caret-color: #00b9e5;
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
