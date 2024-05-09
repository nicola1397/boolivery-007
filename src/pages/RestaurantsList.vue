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
  <div class="containerApp">
    <!-- ROW -->
    <div class="row">
      <!-- Search column -->
      <div class="col-md-2 searchColumn d-flex flex-column py-4">
        <h3 class="mb-3 title">Cucina</h3>

        <!-- Type Badges for search -->
        <div class="badges-wrapper">
          <div class="badge" v-for="badge in types">
            <div class="form-check d-flex" @click="search(badge.label)">
              <input
                class="form-check-input big"
                type="checkbox"
                :value="badge.id"
                :id="badge.id"
                :name="badge.label"
              />
              <label class="form-check-label type ms-3 w-100" :for="badge.id">
                {{ badge.label }}
              </label>
            </div>
          </div>
        </div>

        <!-- <div
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
        </div> -->
      </div>

      <!-- <label
        for="filter_cuisine_option_6-sidebar"
        class="Input-d1881dbe6743b209"
        ><input
          id="filter_cuisine_option_6-sidebar"
          type="checkbox"
          class="Input-a1d53f8a950e40af Input-7bcc37def01a8db8"
          value="filter_cuisine_option_6-sidebar"
        /><span class="Input-c4208a4c6287f4a7"
          ><span>Americano </span></span
        ></label
      > -->

      <!-- Results column -->
      <div class="col result-column pe-5">
        <div class="row pe-5">
          <!-- <h3 class="mb-3 title">Ristoranti</h3> -->

          <div
            v-for="restaurant in restaurants"
            class="col-md-2 col-sm-12 p-2 mb-3 cardContainer"
          >
            <div class="myCard">
              <!-- Restaurant image -->
              <div class="coverImage">
                <img :src="restaurant.image" />
              </div>
              <!-- Restaurant details -->
              <div class="restaurantDetails">
                <h3 class="detailCap">{{ restaurant.name }}</h3>
                <p class="detailCap">{{ restaurant.address }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--  <div class="btn mb-5">
             <router-link
              :to="{
                name: 'restaurants.show',
                params: { slug: restaurant.slug },
              }"
              href="#"
              class="btn btn-danger"
              ><span class="guest">Vai al ristorante</span></router-link
            > 
            </div>-->
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
  border-right: 2px dashed $midblue;
  .badges-wrapper {
    margin: 10px 30px;
    .big {
      width: 25px;
      height: 25px;
      transform: translateY(-25%);
    }

    label {
      color: $darkblue;
      text-align: left;
      font-size: large;
      font-weight: 100;
    }
    .badge {
      // display: inline-block;
      // margin-right: 10px;
      display: block;

      // .typeBadge {
      //   border: 3px solid $midblue;
      //   width: 100%;

      //   border-radius: 50px;
      //   overflow: hidden;
      //   position: relative;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      //   height: 40px;
      //   width: 120px;
      //   object-fit: cover;

      //   span {
      //     z-index: 2;
      //     text-shadow: 0px 0px 20px black;
      //     font-size: 17px;
      //     letter-spacing: 2px;
      //     text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
      //       2px 2px 0 #000;
      //   }
      //   .badgeImg {
      //     position: absolute;
      //     width: 100%;
      //     filter: brightness(90%);
      //   }
      // }
    }
  }
}
// DEACTIVATED
// .off {
//   filter: brightness(50%);
// }

// RESTAURANT CARDS
.result-column {
  height: calc(100vh - $headerHeight - $footerHeight);
  overflow: auto;
  background-color: white;
  .cardContainer {
    display: flex;
    flex-direction: column;

    .myCard {
      background-color: white;
      height: 100%;
      color: $darkblue;
      border-radius: 5px;
      border: 1px solid $darkblue;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // overflow: hidden;
      // white-space: nowrap;

      .restaurantDetails {
        padding: 0px 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
      }
      &:hover {
        box-shadow: 0 0 7px black;
        transform: scale(1.02);
        transition: all 0.1s ease-in-out 0.1s;
      }

      .coverImage {
        width: 100%;
        overflow: hidden;
        // border-radius: 10px;
        margin-bottom: 15px;
        aspect-ratio: 1 / 1;

        img {
          height: 100%;
        }
      }
    }
  }
}
h3.detailCap {
  font-size: 25px;
}
.detailCap {
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
}
</style>
