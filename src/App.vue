<script>
// Global state store

// Import components
import AppHeader from "./components/AppHeader.vue";
import AppHome from "./pages/AppHome.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <app-header />
  <router-view></router-view>
  <app-footer />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
