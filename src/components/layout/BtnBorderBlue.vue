<template>
  <button class=" btn-border-blue">{{ text }}</button>
</template>

<script>
export default {
  name: 'BtnBorderBlue',
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
  .btn-border-blue{
    width: 276px;
    height: 43.5px;
    border-radius: 5px;
    border: 1px solid #00b9e5;
    background-color: #fff;
    color: #00b9e5;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.3s;
    &:focus{
      outline: none;
    }
    &:hover{
      background-color: #00b9e5;
      color: #fff;
    }
  }
</style>
