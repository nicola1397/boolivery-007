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
  <div id="restaurantList">
    <div class="container-md">
      <h1>{{ title }}</h1>

      <p v-for="restaurant in restaurants">
        {{ restaurant.name }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#restaurantList {
  box-shadow: 0 0 5px black;
  background: #3535ec;
  min-height: calc(100vh - 160px);
  height: 100%;
}
</style>
