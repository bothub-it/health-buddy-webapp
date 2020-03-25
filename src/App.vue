<template>
  <div id="app">
    <Home />
    <Footer />
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Home,
    Footer,
  }
}
</script>

<style lang="scss">
  @import "~bulma/css/bulma.css"
</style>
