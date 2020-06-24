<template>
  <div>
    <div class="d-none d-xl-flex align-items-center menu-product-admin">
      <button class="btn-product-admin active" @click="$emit('change', 1)">Основные данные</button>
      <button class="btn-product-admin" @click="$emit('change', 2)">Оригинальные номера</button>
      <button class="btn-product-admin" @click="$emit('change', 3)">Применяемость</button>
      <button class="btn-product-admin" @click="$emit('change', 4)">Аналоги</button>
    </div>
    <div class="d-flex d-xl-none align-items-center">
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
  </div>
</template>

<script>
export default {
  name: 'MenuProductAdmin',
  data: () => ({
    lang: 'РУ'
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
</style>
