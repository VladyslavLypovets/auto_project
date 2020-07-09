<template>
  <button class=" btn-blue" @click="$emit('click')">{{ text }}</button>
</template>

<script>
export default {
  name: 'BtnGrey',
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
  .btn-blue{
    width: 262px;
    height: 43px;
    box-shadow: 1px 2px 0 #b8b8b8;
    border-radius: 5px;
    background-color: #b8b8b8;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    transition: all 0.3s;
    border: 1px solid #b8b8b8;
    &:focus{
      outline: none;
    }
  }
</style>
