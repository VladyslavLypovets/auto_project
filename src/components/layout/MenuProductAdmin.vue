<template>
  <div>
    <div class="d-none d-xl-flex align-items-center menu-product-admin">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="btn-product-admin"
        :class="{ active: active === index }"
        @click="$emit('change', index)"
      >
        {{ item }}
      </button>
    </div>
    <div class="d-flex d-xl-none align-items-center">
     <multiselect
        v-model="activeSelect"
        class="multiselect"
        :options="items"
        :searchable="false"
        :allowEmpty="false"
        :hideSelected="true"
        :showLabels="false"
        @input="val => $emit('change', items.findIndex(item => item === val))"
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
  </div>
</template>

<script>
export default {
  name: 'MenuProductAdmin',
  props: {
    active: Number
  },
  data: () => ({
    lang: 'РУ',
    items: [
      'Основные данные',
      'Оригинальные номера',
      'Применяемость',
      'Аналоги'
    ],
    activeSelect: 'Основные данные'
  })
}
</script>

<style lang="scss" scoped>
  .menu-product-admin{
    height: 59px;
    border-radius: 5px;
    border: 1px solid #dfdfdf;
    background-color: #f6f6f6;
    padding: 0 35px;
    .btn-product-admin{
      border: none;
      color: #242424;
      font-size: 14px;
      font-weight: 500;
      line-height: 48px;
      text-transform: uppercase;
      margin-right: 60px;
      background: none;
      &.active{
        color: #00b9e5;
      }
      &:focus{
        outline: none;
      }
    }
  }
  .multiselect {
    position: relative;
    .caret {
      position: absolute;
      right: 15px;
      top: 50%;
      font-size: 18px;
      transform: translateY(-50%) rotate(0);
      transition: all .3s;
      color: #00b9e5;
    }
    &--active .caret{
      transform: translateY(-50%) rotate(180deg);
    }
    /deep/ .multiselect__tags {
      background-color: #f6f6f6;
    }
    /deep/ .multiselect__single {
      color: #00b9e5;
      background-color: #f6f6f6;
    }
    /deep/ .multiselect__option--highlight {
      background: #00b9e5;
    }
  }
</style>
