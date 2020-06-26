<template>
  <div class="menu-admin-wrap">
    <div class="container">
      <div class="d-flex justify-content-end d-md-none"
      @click="isMenuOpen = !isMenuOpen">
        <img src="@/assets/img/menu-white.png" alt="menu" v-if="!isMenuOpen">
        <img src="@/assets/img/close.png" alt="close" v-else>
      </div>
    </div>
    <nav class="menu-admin"
      :class="{ open: isMenuOpen }"
    >
      <h5 class="d-block d-md-none">Админ меню</h5>
      <ul class="list-menu">
        <li
          v-for="(item, index) in menuList"
          :key="index"
          :class="{
            'main-point': !item.subList.length,
            'main-point-additional': item.subList.length,
            'selected': item.current,
            'open': item.opened
          }"
        >
          <span
            class="link-menu"
            v-if="item.subList.length"
            @click="item.opened = !item.opened"
          >
            {{ item.title }}
          </span>
          <router-link class="link-menu" v-else :to="item.route">{{ item.title }}</router-link>
          <ul
            class="sub-menu-item"
            v-if="item.subList.length"
          >
            <li v-for="subItem in item.subList" :key="subItem.title">
              <router-link class="sub-link" :class="{ 'active' : subItem.current }" :to="subItem.route">{{ subItem.title }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MenuAdmin',
  data: () => ({
    isMenuOpen: false,
    menuList: [
      {
        title: 'Страницы',
        subList: [],
        opened: false,
        current: false,
        route: { name: 'AdminAddPage' }
      },
      {
        title: 'iFrame',
        opened: false,
        route: { name: 'Navigation' },
        current: false,
        subList: [
          {
            title: 'Партнеры',
            route: { name: 'AdminPartners' }
          },
          {
            title: 'Аналитика',
            route: { name: 'AdminAnalytics' }
          }
        ]
      },
      {
        title: 'Товары',
        subList: [],
        opened: false,
        route: { name: 'AbminProducts' }
      },
      {
        title: 'Пользователи',
        opened: false,
        route: { name: 'Navigation' },
        current: false,
        subList: [
          {
            title: 'Основные данные',
            route: { name: 'AdminUserBasicData' }
          },
          {
            title: 'Все пользователи',
            route: { name: 'AdminUser' }
          },
          {
            title: 'Создать нового',
            route: { name: 'AdminNewUser' }
          }
        ]
      }
    ]
  }),
  created () {
    const routeName = this.$route.name
    this.menuList = this.menuList.map(item => {
      if (item.route.name === routeName) {
        return { ...item, current: true }
      }
      if (item.subList.length && item.subList.find(subItem => subItem.route.name === routeName)) {
        return {
          ...item,
          opened: true,
          current: true,
          subList: item.subList.map(subItem => {
            if (subItem.route.name === routeName) {
              return { ...subItem, current: true }
            }
            return subItem
          })
        }
      }
      return item
    })
  }
}
</script>

<style lang="scss" scoped>
  .menu-admin{
    border-radius: 5px;
    border: 1px solid #dfdfdf;
    background-color: #f6f6f6;
    .list-menu{
      list-style: none;
      padding: 0;
      margin: 0;
      .main-point{
        padding: 15px 0 15px 25px;
        border-bottom: 1px solid #dfdfdf;
        padding-left: 25px;
        .link-menu{
          color: #242424;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          display: block;
        }
        &.selected{
          .link-menu{
            color: #00b9e5;
            position: relative;
            &::before{
              width: 2px;
              height: 28px;
              background-color: #00b9e5;
              position: absolute;
              left: -25px;
              top: 50%;
              content: '';
              transform: translateY(-50%);
            }
          }
        }
      }
      .main-point-additional{
        padding: 15px 0 15px 25px;
        border-bottom: 1px solid #dfdfdf;
        padding-left: 25px;
        .link-menu{
          width: 100%;
          color: #242424;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          display: block;
          text-decoration: none;
          cursor: pointer;
        }
        .sub-menu-item{
          list-style: none;
          overflow: hidden;
          text-align: center;
          margin-left: -25px;
          max-height: 0;
          transition: max-height .3s, padding .5s;
          padding: 0;
          li{
            text-align: left;
            padding-left: 40px;
            margin-bottom: 15px;
            &:last-child{
              margin-bottom: 0;
            }
            .sub-link{
              color: #242424;
              font-size: 14px;
              font-weight: 700;
              text-decoration: none;
              &.active {
                color: #00b9e5;
              }
            }
          }
          @media(max-width: 992px) {
            li{
              padding-left: 35px;
            }
          }
        }
        &:last-child{
          border: none;
        }
        &.selected{
          .link-menu{
            color: #00b9e5;
            position: relative;
            &::before{
              width: 2px;
              height: 28px;
              background-color: #00b9e5;
              position: absolute;
              left: -25px;
              top: 50%;
              content: '';
              transform: translateY(-50%);
            }
          }
        }
        &.open {
          .link-menu {
            margin-bottom: 15px;
          }
          .sub-menu-item {
            max-height: 150px;
            padding: 15px 0 0;
            border-top: 1px solid #dfdfdf;
          }
        }
      }
    }
  }
  @media(max-width: 767px) {
    .menu-admin-wrap {
      position: fixed;
      top: 50px;
      left: 0;
      width: 100%;
      background: #00b9e5;
      height: 36px;
      z-index: 1;
      display: flex;
      align-items: center;
      .menu-admin {
        max-height: 0;
        overflow: hidden;
        transition: all .3s;
        width: 100%;
        position: fixed;
        top: 86px;
        &.open {
          max-height: 500px;
        }
      }
    }
    .menu-admin{
      h5{
        color: #242424;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        margin: 25px 0 20px 15px;
      }
      .list-menu{
        .main-point{
          padding: 10px 25px;
          margin: 0 16px;
        }
        .main-point-additional{
          padding: 10px 40px;
          .link-menu{
            margin-bottom: 10px;
          }
          .sub-menu-item li{
            padding-left: 50px;
          }
          &.selected{
            &::before{
              left: 15px;
            }
          }
        }
      }
    }
  }
</style>
