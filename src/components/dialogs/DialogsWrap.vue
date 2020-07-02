<template>
  <div class="dialog-wrap" :class="{ open: activeDialog }" id="dialogs">
    <div class="overllay"></div>
    <component
      :is="activeDialog"
    />
  </div>
</template>

<script>
import DailogsWorkSite from '@/components/dialogs/DailogsWorkSite.vue'

export default {
  name: 'DialogsWrap',
  data: () => ({
    activeDialog: ''
  }),
  created () {
    this.$root.$on('openDialog', name => {
      this.activeDialog = name
    })
    this.$root.$on('closeDialog', name => {
      this.activeDialog = ''
      this.$router.push({ ...this.$route, query: {} })
    })
    if (this.$route.query.activeDialog) {
      this.activeDialog = this.$route.query.activeDialog
    }
  },
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
    &.open {
      display: flex;
    }
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
