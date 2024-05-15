<script>
import { store, api } from "../store";
import axios from "axios";
import AppCard from "../components/AppCard.vue";
import Slider from "../components/Slider.vue";

export default {
  data() {
    return {
      titleComponent: "Home Page",
      title: "Ristoranti",
      store,
      restaurants: [],
      types: [],
      searchOn: false,
      activeTypes: [],
    };
  },
  components: { AppCard, Slider },
  methods: {
    sideToggler() {
      const sidebar = document.querySelector(".sidebar");
      const sidebarToggle = document.querySelector(".sidebar-toggle");
      const mainContent = document.querySelector(".main-content");
      sidebar.classList.toggle("collapsed");
      mainContent.classList.toggle("collapsed");
    },
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

    search(name, event) {
      if (!this.activeTypes.includes(name)) {
        this.activeTypes.push(name);
      } else {
        this.activeTypes = this.activeTypes.filter(
          (elemento) => elemento !== name
        );
      }
      let thisButton = document.getElementById(event);
      thisButton.classList.toggle("on");
      this.filteredRestaurants(this.activeTypes);
      if (this.activeTypes.length === 0) {
        this.fetchRestaurants();
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
  <!-- JUMBO -->
  <div class="row align-items-center justify-content-center" id="jumboTron">
    <div class="jumboTextContainer col-5">
      <h2 class="display-2 title text-center mt-3 text-nowrap">
        Ordina subito con
      </h2>
      <h1 class="display-1 fw-bold my-0 title text-center">Boolivery!</h1>
      <h2 class="display-1 title text-center mb-5">🛵🍝</h2>

      <div
        class="btn-restaurant mb-3 col-12 col-md-8"
        onclick="document.getElementById('searchSection').scrollIntoView();"
      >
        <div class="btn btn--action">
          <span class="guest">Vai alla ricerca</span>
        </div>
      </div>
      <span class="text-white text-center">oppure</span>

      <span class="text-white text-center fs-4">Sei un ristoratore?</span>

      <a href="http://127.0.0.1:8000/login"
        ><span class="text-white text-center text-decoration-underline"
          >Accedi al tuo ristorante</span
        ></a
      >
    </div>
  </div>

  <div id="categoriesSlider">
    <div id="waveBackground"></div>
    <div class="container">
      <Slider :types="types" />
    </div>
  </div>

  <div class="containerApp" id="searchSection">
    <!-- ROW -->
    <div class="row h-100">
      <!-- Search column -->
      <div class="col-2 col-md-2 searchColumn" id="search">
        <h3 class="my-3 title">Filtri</h3>

        <ul class="d-flex flex-column align-items-center">
          <li
            v-for="badge in types"
            class="badgeSelector"
            :id="badge.label"
            @click="search(badge.label, $event.target.id)"
          >
            {{ badge.label }}
          </li>
        </ul>
        <div class="sidebar-toggle" @click="sideToggler()">
          <span class="navbar-toggler-icon"></span>
        </div>
      </div>

      <!-- Results column -->
      <div class="col result-column px-3 py-4">
        <h3 class="mb-3 title text-center">I nostri ristoranti</h3>

        <div
          class="row pe-2 d-flex justify-content-center justify-content-md-start"
        >
          <div
            v-for="(restaurant, index) in this.restaurants"
            class="col-sm-5 col-md-4 col-xl-3 p-2 mb-3 cardContainer"
          >
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

#searchSection {
  height: 100vh;
}

li {
  position: relative;
  min-width: 140px;
  &.on {
    color: green !important;
    border: 3px solid green !important;
    &::before {
      position: absolute;
      content: "✔";
      left: 15px;
    }
  }
}

#jumboTron {
  max-height: 65vh;
  background-image: url(../assets/img/bg_hero-wide.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .jumboTextContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 60px 20px;
    border-radius: 3px;

    // BUTTONS
    .btn-restaurant {
      .btn--action {
        font-size: 1.5rem;
        display: block;
        padding: 1rem;
        border-radius: 100px;
        background-color: white;
        color: $primary;
        transition: all 0.5s ease 0s;
        box-shadow: 0 10px $secondary;
      }

      .btn--action span {
        display: inline-block;
        position: relative;
        transition: all 0.5s ease;
      }

      .btn--action span::before {
        display: inline-block;
        position: absolute;
        top: 50%;
        font-size: 2rem;
        transform: translate(-100%, -50%);
        left: 1.5rem;
        opacity: 0;
        transition: all 0.1s ease 0s;
      }
      .btn--action .guest::before {
        content: "🍔";
      }
      .btn--action .user::before {
        content: "🧑🏻‍🍳";
      }
      .btn--action:hover {
        background-color: $tertiary;
        color: white;
      }

      .btn--action:hover span {
        padding-left: 1.5rem;
      }

      .btn--action:hover span:before {
        left: 0;
        opacity: 1;
      }

      .btn--action:active {
        transform: translateY(5px);
      }
    }
    .title {
      color: $primary;
    }
  }
}

#categoriesSlider {
  position: relative;
  margin: 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/wave3.svg);
    background-repeat: no-repeat;
    background-size: cover;
    filter: invert(34%) sepia(52%) saturate(2509%) hue-rotate(215deg)
      brightness(97%) contrast(99%);
  }
  .container {
    position: relative;

    .thumbnail {
      width: 200px;
      img {
        width: 200px;
      }
    }
  }
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  color: $secondary;
}
.containerApp {
  min-height: 100vh;
  overflow: auto;
  overflow-x: hidden;
}

// TYPE BADGES

#search {
  min-width: 160px;
}

.searchColumn {
  background-color: white;
  text-align: center;
  border-right: 2px solid rgba($primary, 0.2);
  position: relative;

  .title {
    width: 30%;
    margin: 0 auto;
  }

  .badges-wrapper {
    display: flex;
    padding: 0 10%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .badge {
      display: block;
      width: 100%;
      margin: 10px 0;

      .badgeContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        .imgBadge {
          width: 100%;
          cursor: pointer;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        .label {
          color: $secondary;
          text-align: left;
          font-size: large;
          font-weight: 100;
          cursor: pointer;
        }
      }
    }
  }
}

.badgeSelector {
  cursor: pointer;
  color: $secondary;
  font-size: 1.3rem;
  text-align: center;
  width: 80%;
  margin: 7px 0;

  border: 2px solid $secondary;
  border-radius: 500px;
}

// RESTAURANT CARDS
.result-column {
  overflow: auto;
  background-color: white;
  .cardContainer {
    display: flex;
    flex-direction: column;
    // flex-wrap: wrap;
  }
}

// SIDEBAR

.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  transition: width 0.3s ease-in-out;
}

.sidebar.collapsed {
  width: 50px;
}

.sidebar.collapsed.sidebar-brand,
.sidebar.collapsed.sidebar-nav li {
  display: none;
}

.sidebar.collapsed.sidebar-brand.collapsed,
.sidebar.collapsed.sidebar-nav li.collapsed {
  display: block;
}

.sidebar-brand {
  padding: 1rem;
  text-align: center;
}

.sidebar-nav {
  list-style: none;
  padding: 0;
}

.sidebar-nav li a {
  display: block;
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
}

.sidebar-nav li a:hover {
  background-color: #ddd;
}

.sidebar-toggle {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  cursor: pointer;
}

.main-content {
  margin-left: 250px;
  padding: 1rem;
  transition: margin-left 0.3s ease-in-out;
}

.main-content.collapsed {
  margin-left: 50px;
}
</style>
