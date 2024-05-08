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
      types: [],
      searchOn: false,
      activeTypes: [],
    };
  },

  components: { AppCard },
  methods: {
    fetchTypes() {
      axios.get(store.baseApiURI + "restaurants").then((response) => {
        this.types = response.data.types;
      });
    },
    fetchRestaurants() {
      axios.get(store.baseApiURI + "restaurants").then((response) => {
        this.restaurants = response.data.restaurants;
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
        });
    },

    // 1 TUTTI I BOTTONI SONO ATTIVI
    // 2 QUANDO SEARCH DIVENTA ON , TUTTI I BOTTONI DIVENTANO INATTIVI TRANNE QUELLI CLICCATI
    // 3 QUANDO CLICCO UN ALTRO BOTTONE, GLI ALTRI ATTIVI NON DEVONO SPEGNERSI
    // 4 SE RICLICCO UN BOTTONE, DEVE FARE TOGGLE LA CLASSE -> RIMUOVERSI DALLA STRINGA PER LA CALL AXIOS

    // 1 - TUTTI BADGE CLASSE OFF - AL CLICK, AGGIUNGI LABEL IN ACTIVETYPE -  SE BUTTON INNERTEXT SI TROVA IN ACTIVETYPES, CLASSE OFF VIENE RIMOSSA

    search(name) {
      if (!this.activeTypes.includes(name)) {
        this.activeTypes.push(name);
        console.log("non c'era " + this.activeTypes);
      } else {
        this.activeTypes = this.activeTypes.filter(
          (elemento) => elemento !== name
        );
        console.log("c'era " + this.activeTypes);
      }
      let buttons = document.querySelectorAll(".badge");

      buttons.forEach((button) => {
        button.classList.add("off");
        if (this.activeTypes.includes(button.innerText)) {
          button.classList.toggle("off");
        }
      });

      this.filteredRestaurants(this.activeTypes);
      if (this.activeTypes.length == 0) {
        console.log("è vuotoooooooo");
        this.fetchRestaurants();
        buttons.forEach((button) => {
          button.classList.remove("off");
        });
      }
    },
  },

  created() {
    this.fetchRestaurants();
    this.fetchTypes();
  },

  mounted() {},
};
</script>

<template>
  <div class="container">
    <h1 class="text-center mb-3">{{ title }}</h1>

    <!-- ROW -->
    <div class="row justify-content-between">
      <!-- Search column -->
      <div class="col-md-3 searchColumn d-flex flex-column py-4">
        <h3 class="mb-3 title">Tipologia</h3>

        <!-- Type Badges for search -->
        <div class="badges-wrapper">
          <div
            class="badge"
            v-for="badge in types"
            @click="search(badge.label)"
          >
            <div class="typeBadge">
              <div class="badgeImg">
                <img :src="badge.image" alt="" width="100%" />
              </div>
              <span>{{ badge.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Results column -->
      <div class="col-md-9 row result-column">
        <div
          v-for="restaurant in restaurants"
          class="myCard col-md-3 col-sm-12 me-3 mb-3"
        >
          <!-- Restaurant image -->
          <div class="coverImage">
            <img :src="restaurant.image" />
          </div>
          <h3 class="detailCap">{{ restaurant.name }}</h3>
          <p class="detailCap">{{ restaurant.address }}</p>
          <div class="btn mb-5">
            <!-- <router-link
              :to="{
                name: 'restaurants.show',
                params: { slug: restaurant.slug },
              }"
              href="#"
              class="btn btn-danger"
              ><span class="guest">Vai al ristorante</span></router-link
            > -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.title {
  color: $darkblue;
}
// TYPE BADGES

.searchColumn {
  background-color: white;
  border-radius: 5px;
  text-align: center;
  height: fit-content;
  .badges-wrapper {
    margin-top: 10px;

    .badge {
      display: inline-block;
      margin-right: 10px;

      .typeBadge {
        border: 3px solid $midblue;
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
  }
}
// DEACTIVATED

.off {
  filter: brightness(50%);
}

// RESTAURANT CARDS
.result-column {
  .myCard {
    background-color: $midblue;
    padding-top: 10px;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      box-shadow: 0 0 7px black;
      transform: scale(1.02);
      transition: all 0.1s ease-in-out 0.1s;
    }

    .coverImage {
      width: 100%;
      overflow: hidden;
      border-radius: 10px;
      margin-bottom: 15px;
      aspect-ratio: 1 / 1;

      img {
        height: 100%;
      }
    }
  }
}

.detailCap {
  text-transform: capitalize;
}
</style>
