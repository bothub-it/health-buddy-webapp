<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style lang="scss">
  @import '~@mdi/font/css/materialdesignicons.css';
  @import '~@mdi/font/css/materialdesignicons.min.css';
  @import "~bulma/css/bulma.css"
</style>
