<template>
  <div class="dialog-wrap" id="dialogs">
    <div class="overllay"></div>
    <DailogsWorkSite />
  </div>
</template>

<script>
import DailogsWorkSite from '@/components/dialogs/DailogsWorkSite.vue'

export default {
  name: 'DialogsWrap',
  components: {
    DailogsWorkSite
  }
}
</script>

<style lang="scss" scoped>
  .dialog-wrap{
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    justify-content: center;
    align-items: center;
    .overllay{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background: rgba(0, 0, 0, 0.7);
      cursor: pointer;
    }
  }
</style>
