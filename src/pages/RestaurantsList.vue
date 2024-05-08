<script>
import { api, store } from "../store";
import axios from "axios";
import AppCard from "../components/AppCard.vue";

export default {
  data() {
    return {
      title: "Restaurants",
      store,
      restaurants: [],
      types: [],
      searchOn: false,
      activeTypes: [],
    };
  },

  components: { AppCard },
  methods: {
    fetchRestaurants() {
      axios.get(api.baseApiURI + "restaurants").then((response) => {
        this.restaurants = response.data.restaurants;
        this.types = response.data.types;
        console.log(response.data);
      });
    },

    filteredRestaurants(argument) {
      const argumentString = Array.isArray(argument)
        ? argument.join("&")
        : argument;

      axios
        .get(store.baseApiURI + "restaurants/search=" + argumentString)
        .then((response) => {
          this.restaurants = response.data.restaurants;
          this.types = response.data.types;
        });
    },

    search(name) {
      this.searchOn = true;
      this.activeTypes.push(name);
      console.log(this.activeTypes);
      this.filteredRestaurants(this.activeTypes);
    },
  },

  created() {
    this.fetchRestaurants();
  },

  mounted() {},
};
</script>

<template>
  <div id="mainContent">
    <h1 class="text-center">{{ title }}</h1>
    <!-- ROW -->
    <div class="row justify-content-between">
      <!-- Search column -->
      <div class="col-md-4 row justify-content-center">
        <div id="searchCard">
          <h5>Ricerca ristoranti</h5>
        </div>
        <!-- Type Badges for search -->
        <div>
          <div
            class="badge"
            v-for="badge in types"
            @click="search(badge.label)"
          >
            <div class="typeBadge">
              <div class="badgeImg">
                <img :src="badge.image" alt="" width="100%" />
              </div>
              <span class="piselon">{{ badge.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Results column -->
      <div class="col-md-8 row justify-content-center">
        <!-- Restaurant Card by component -->
        <app-card
          class="col-md-3 col-sm-12 me-3 mb-3"
          v-for="restaurant in restaurants"
          :restaurant="restaurant"
        ></app-card>

        <!-- Restaurant card -->
        <!--         <div
          v-for="restaurant in restaurants"
          class="myCard col-md-3 col-sm-12 me-3 mb-3"
        >
          <div class="coverImage">
            <img :src="restaurant.image" />
          </div>
          <h3 class="detailCap">{{ restaurant.name }}</h3>
          <p class="detailCap">{{ restaurant.address }}</p>
          <router-link
            :to="{ name: 'restaurants.show', params: { id: restaurant.slug } }"
          >
            <button type="button" class="btn btn-warning">Seleziona</button>
          </router-link>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// TYPE BADGES
.badge {
  display: inline-block;
  margin-right: 10px;

  .typeBadge {
    width: 100%;
    border-radius: 50px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 120px;
    object-fit: cover;

    span {
      z-index: 2;
      text-shadow: 0px 0px 20px black;
      font-size: 17px;
      letter-spacing: 2px;
      text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
        2px 2px 0 #000;
    }
    .badgeImg {
      position: absolute;
      width: 100%;
      filter: brightness(90%);
    }
  }
}
</style>
