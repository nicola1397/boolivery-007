<script>
// import { store } from "../store";

import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      title: "Restaurants",
    };
  },

  components: { AppCard },

  methods: {},
};
</script>

<template>
  <h1>{{ title }}</h1>

  <app-card />
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;
</style>
