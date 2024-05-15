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
  <!-- <nav class="headerNav navbar navbar-expand-lg">
    <div class="container-md d-flex">
      <ul class="navbar-ul">
        <li class="nav-item me-4">
          <router-link
            :to="{ name: 'home' }"
            class="nav-link text-white"
            aria-current="page"
          >
            <a class="navbar-brand"
              ><img src="../assets/img/boolivery_manager.svg" alt="" /></a
          ></router-link>
          <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
        </li>
        <li class="nav-item me-4">
          <router-link
            :to="{ name: 'home' }"
            class="nav-link text-white"
            aria-current="page"
            >Home</router-link
          >
        </li>
      </ul>
      <ul class="chart-icon">
        <li>
          <a href="#"><i class="fa-solid fa-cart-shopping chart-icon"></i></a>
        </li>
      </ul> -->

  <nav class="navbar navbar-expand-lg bg-white">
    <div class="container-sm">
      <router-link
        :to="{ name: 'home' }"
        class="nav-link navbar-brand"
        aria-current="page"
      >
        <img
          src="../assets/img/boolivery.svg"
          alt="boolivery logo"
          class="logo"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :to="{ name: 'home' }"
              class="nav-link text-white"
              aria-current="page"
              exact-active-class="active"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Ristoranti</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><i class="fa-solid fa-basket-shopping"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
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
              >Ristoranti</router-link
            >
          </li>
        </ul>
      </div> -->
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.navbar {
  height: $headerHeight;
  .container-sm {
    height: headerHeight;
  }
}
.logo {
  height: 40px;
  margin-right: 50px;
}

.active {
  color: $primary !important;
  box-shadow: inset 0 -15px 0 $primary;
}

li {
  font-size: 1.2rem;
  margin-right: 30px;
  line-height: $headerHeight;
}
</style>
