<template>
  <header>
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <router-link :to="{ name: 'Home' }" class="logo-block">
            <img src="@/assets/img/logo_Autonova_D.png" alt="logo">
          </router-link>
          <nav class="d-flex">
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
            <select>
              <option value="ua" selected>ua</option>
              <option value="ru">ru</option>
              <option value="en">en</option>
            </select >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  header{
    height: 86px;
    box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.19);
    background-color: #ffffff;
    .logo-block{
      margin-right: 140px;
    }
    nav{
      .nav-link{
        color: #242424;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        border-bottom: 4px solid #fff;
        height: 86px;
        display: flex;
        align-items: center;
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
        height: 37px;
        padding-left: 25px;
      }
    }
  }
</style>
