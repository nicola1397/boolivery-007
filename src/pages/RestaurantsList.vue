<script>
import { store, api } from "../store";

import axios from "axios";
import AppCard from "../components/AppCard.vue";

export default {
  data() {
    return {
      title: "Ristoranti",
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
      });
    },

    filteredRestaurants(argument) {
      const argumentString = Array.isArray(argument)
        ? argument.join("&")
        : argument;

      axios
        .get(api.baseApiURI + "restaurants/search=" + argumentString)
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
      console.log(
        "ho cliccato: " + name + " " + "Tipi attivi ora: " + this.activeTypes
      );
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
  },

  mounted() {},
};
</script>

<template>
  <div class="containerApp">
    <!-- ROW -->
    <div class="row">
      <!-- Search column -->
      <div class="col-2 col-md-3 searchColumn d-flex flex-column py-4 px-0">
        <h3 class="mb-3 title">Cucina</h3>

        <!-- Type Badges for search -->
        <div class="badges-wrapper">
          <div class="badge" v-for="badge in types">
            <div class="form-check checkboxContainer">
              <input
                class="form-check-input big"
                type="checkbox"
                :value="badge.id"
                :id="badge.id"
                @click="search(badge.label)" />
              <label class="form-check-label h-100 w-100" :for="badge.id">
                {{ badge.label }}
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Results column -->
      <div class="col result-column px-5 py-4">
        <h3 class="mb-3 title text-center">I nostri ristoranti</h3>

        <div class="row pe-5">
          <div
            v-for="(restaurant, index) in this.restaurants"
            class="col-sm-5 col-md-4 col-xl-3 p-2 mb-3 cardContainer">
            <app-card :restaurant="restaurant" :index="index" class="h-100" />
          </div>

          <div v-if="this.restaurants.length == 0">
            <p class="text-center text-secondary">
              Nessun risultato corrispondente. 😓
            </p>
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
.containerApp {
  min-height: calc(100vh - $headerHeight - $footerHeight);
  overflow: auto;
  overflow-x: hidden;
}

// TYPE BADGES

.searchColumn {
  background-color: white;
  text-align: center;
  height: calc(100vh - $headerHeight - $footerHeight);
  border-right: 2px solid rgba($midblue, 0.2);

  .badges-wrapper {
    display: flex;
    padding: 0 40px;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    overflow: auto;
    .badge {
      display: block;

      margin: 10px 0;
      .checkboxContainer {
        display: flex;
        justify-content: center;
        align-items: start;
        .big {
          // width: 25px;
          // height: 25px;

          transform: scale(2);
        }

        label {
          color: $darkblue;
          text-align: left;
          font-size: large;
          font-weight: 100;
          line-height: 24px;
          margin-left: 30px;
        }
      }
    }
  }
}

// RESTAURANT CARDS
.result-column {
  height: calc(100vh - $headerHeight - $footerHeight);
  overflow: auto;
  background-color: white;
  .cardContainer {
    display: flex;
    flex-direction: column;
    // flex-wrap: wrap;
  }
}
</style>
