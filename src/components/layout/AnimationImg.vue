<template>
  <div class="gears-wrap">
    <img src="@/assets/img/gearBig.png" class="big" alt="gear">
    <img src="@/assets/img/gearSmall.png"  class="small" alt="gear">
  </div>
</template>

<script>
export default {
  name: 'AnimationImg'
}
</script>

<style lang="scss">
  .gears-wrap.rotate {
    .big {
      animation: spin 3s linear infinite;
    }
    .small {
      animation: spin2 3s linear infinite;
    }
  }

  .btn-buy:hover  {
    .gears-wrap {
      .big {
        animation: spin 3s linear infinite;
      }
      .small {
        animation: spin2 3s linear infinite;
      }
    }
  }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
  @keyframes spin2 { 100% { transform:rotate(-360deg); } }
</style>
<style lang="scss" scoped>
  .gears-wrap {
      width: 25px;
      height: 25px;
      position: relative;
      margin-right: 15px;
      .big {
        width: 17px;
        height: 17px;
        position: absolute;
        top: 0;
        left: 0;
      }
      .small {
        width: 13px;
        height: 13px;
        position: absolute;
        bottom: 0;
        right: 0;
      }
  }
</style>
