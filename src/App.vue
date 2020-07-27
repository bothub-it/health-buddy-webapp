<template>
  <div id="app">
    <Chat />
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Chat from './components/Chat';

export default {
  name: 'App',
  components: {
    Chat,
    Navbar,
    Footer,
  },
}
</script>

<style lang="scss">
@import '~@mdi/font/css/materialdesignicons.css';
@import '~@mdi/font/css/materialdesignicons.min.css';
@import "~bulma/css/bulma.css";
@import "assets/css/common";

html {
  scroll-behavior: smooth;
}
body.opened.mobile {
  #home, #how, #about, #video {
    display: none;
  }
}
button {
  cursor: pointer;
}

.group-message .message {
  background-color: inherit;
}
.conversation-container .message .response {
  height: inherit !important;
}
</style>
