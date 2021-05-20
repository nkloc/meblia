<template>
  <div id="app">
    <div id="nav">
      <Header />
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <router-view />
      </transition>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="stylus">
@import 'css/main'

#app
  font-family $font-content
  font-size 16px
  line-height 24px
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
