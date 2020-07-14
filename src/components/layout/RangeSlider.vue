<template>
  <vue-range-slider
    ref="slider"
    :value="value"
    :max="900000"
    :height="2"
    @input="(val) => $emit('input', val)"
  />
</template>

<script>
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

export default {
  name: 'RangeSlider',
  components: {
    VueRangeSlider
  },
  props: {
    value: Array
  }
}
</script>

<style lang="scss" scoped>
  /deep/.slider-dot {
    height: 24px !important;
    width: 9px !important;
    border-radius: 4px !important;
    top: -11px !important;
    background-color: #00b9e5 !important;
    box-shadow: none !important;
    .slider-dot-handle {
      background: none !important;
      box-shadow: none !important;
    }
  }
  /deep/ .slider-process {
    background-color: #00b9e5 !important;
  }
  /deep/ .slider-tooltip-top {
    opacity: 0;
    pointer-events: none;
  }
</style>
