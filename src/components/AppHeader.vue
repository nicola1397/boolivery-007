<script>
// import { store } from "../store";
export default {
  data() {
    return {
      // store,
    };
  },

  methods: {},
};
</script>

<template>
  <nav class="headerNav navbar navbar-expand-lg">
    <div class="container-md">
      <a class="navbar-brand" href="#"
        ><img src="../assets/img/boolivery.svg" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              :to="{ name: 'home' }"
              class="nav-link text-white"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'restaurants.index' }"
              class="nav-link text-white"
              href="#"
              >Restaurants</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.headerNav {
  height: 80px;
  box-shadow: 0 0 5px black;
  background: #2929b9;

  img {
    height: 50px;
  }

  a:hover {
    transform: scale(1.1);
    transition: all 0.1s ease 0.1s;
  }
}
</style>
