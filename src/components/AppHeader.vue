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
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              :to="{ name: 'home' }"
              class="nav-link"
              aria-current="page"
              exact-active-class="active"
              >Home</router-link
            >
          </li>
          <!-- <li class="nav-item">
            <router-link
              :to="{ name: 'restaurants' }"
              class="nav-link"
              aria-current="page"
              exact-active-class="active"
              >Ristoranti</router-link
            >
          </li> -->
          <li class="nav-item">
            <router-link
              :to="{ name: 'restaurants.checkout' }"
              class="nav-link"
              aria-current="page"
              exact-active-class="active"
              ><i class="fa-solid fa-basket-shopping"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.navbar {
  height: $headerHeight;

  .nav-link {
    padding: 0 5px;
  }
}
.logo {
  height: 40px;
  margin-right: 50px;
}

.active {
  color: $primary !important;
  box-shadow: inset 0 -7px 0 $primary;
}

ul {
  width: 100%;
  li {
    font-size: 1.2rem;
    margin-right: 30px;
    line-height: $headerHeight;

    &:last-of-type {
      margin-left: auto;
    }
  }
}
</style>
