<script>
import { store } from "../store";
import axios from "axios";

import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      title: "Restaurants",
      store,
      restaurants: [],
    };
  },

  components: { AppCard },

  methods: {
    fetchRestaurants() {
      axios.get(store.baseApiURI + "restaurants").then((response) => {
        this.restaurants = response.data.restaurants;
      });
    },
  },

  created() {
    this.fetchRestaurants();
  },
};
</script>

<template>
  <h1>{{ title }}</h1>

  <p v-for="restaurant in restaurants">
    {{ restaurant.name }}
  </p>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;
</style>
