<script>
    import { store } from "../store";
import axios from "axios";

import AppCard from "../components/AppCard.vue";

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
    <div class="container">
    <h1>{{ title }}</h1>

    <p v-for="restaurant in restaurants">
      {{ restaurant.name }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
</style>