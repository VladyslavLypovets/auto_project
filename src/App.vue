<template>
  <div id="app">
    <router-view/>
    <DialogsWrap />
  </div>
</template>

<script>
import DialogsWrap from '@/components/dialogs/DialogsWrap.vue'

export default {
  name: 'App',
  components: {
    DialogsWrap
  }
}
</script>
<style lang="scss">
</style>
