<template>
  <button class=" btn-blue" @click="$emit('click')">{{ text }}</button>
</template>

<script>
export default {
  name: 'BtnBlue',
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
  .btn-blue{
    width: 262px;
    height: 43px;
    box-shadow: 1px 2px 0 #068fb0;
    border-radius: 5px;
    background-color: #00b9e5;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    transition: all 0.3s;
    border: 1px solid #00b9e5;
    &:focus{
      outline: none;
    }
    &:hover{
      background-color: #fff;
      color: #00b9e5;
    }
  }
</style>
