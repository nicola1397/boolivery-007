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
    AppHome,
    AppFooter,
  },
};
</script>

<template>
  <div class="app">
    <app-header />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
.app {
  min-height: 100vh;
}
</style>
