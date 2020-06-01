<template>
  <div>
    <Header />
    <main class="container">
      Error
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'Error',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
