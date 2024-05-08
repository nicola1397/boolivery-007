<script>
import axios from "axios";
import { api } from "../store";

import AppCard from "../components/AppCard.vue";

export default {
  data() {
    return {
      restaurant: {},
    };
  },

  components: { AppCard },

  methods: {
    fetchRestaurants() {
      const restaurantSlug = this.$route.params.slug;
      axios
        .get(api.baseApiURI + `restaurants/${restaurantSlug}`)
        .then((response) => {
          console.log(response.data);
          this.restaurant = response.data.restaurants;
          /* this.types = response.data.types; */
        });
    },
  },

  created() {
    this.fetchRestaurants();
  },
};
</script>

<template>
  <h1>
    Dettagli ristorante
    <!-- {{ route.params.slug }} -->
  </h1>
  <div class="row justify-content-between">
    <div class="d-flex justify-content-center">
      <app-card :restaurant="this.restaurant" class="col-4"></app-card>
      <div class="col-6">
        <h3>Menù</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
