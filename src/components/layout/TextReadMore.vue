<template>
  <div class="text-wrap">
    <div class="text-read-more" :class="{'open': readMore}" v-html="text" :style="'max-height: ' + height + 'px;'"/>
    <button class="btn-read-more" @click="readMore = !readMore">Читать дальше</button>
  </div>
</template>

<script>
export default {
  name: 'TextReadMore',
  props: {
    text: String,
    height: Number
  },
  data: () => ({
    readMore: false
  })
}
</script>

<style lang="scss" scoped>
  @media (min-width: 767px){
    .text-read-more{
      max-height: unset !important;
    }
    .btn-read-more{
      display: none;
    }
  }
  @media (max-width: 767px){
    .text-read-more{
      overflow: hidden;
      transition: all 0.3s;
      &.open{
        max-height: 500px !important;
      }
    }
    .btn-read-more{
      display: block;
      color: #00b9e5;
      font-size: 14px;
      font-weight: 400;
      text-decoration: underline;
      background: none;
      border: none;
      padding: 0;
    }
  }
</style>
