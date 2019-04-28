<template lang="html">
  <div id="app">
      <router-view/>
      <FooterGuide v-show="$route.meta.footer"/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>