<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      quantity: 0,
    };
  },
  computed: {},
  methods: {
    onStorageChange(event) {
      console.log("EEEEEEE", event);
      if (event.key === "myOrder") {
        console.log("l'ordine è cambiato");
        this.myOrder = JSON.parse(event.newValue);
        this.quantity = this.myOrder.dishes.reduce(
          (total, dish) => total + dish.quantity,
          0
        );
      }
    },
    initialOrder() {
      console.log("initial order");

      const storedOrder = localStorage.getItem("myOrder");
      return storedOrder ? JSON.parse(storedOrder) : { dishes: [] };
    },
    beforeDestroy() {
      window.removeEventListener("storage", onStorageChange());
    },
  },
  mounted() {},
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
        <ul class="navbar-nav d-flex align-items-center">
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
          <li class="nav-item" id="cartIcon">
            <router-link
              :to="{ name: 'restaurants.checkout' }"
              class="nav-link"
              aria-current="page"
              exact-active-class="active"
              ><i class="fa-solid fa-basket-shopping"></i
            ></router-link>
            <span class="cartAmount" v-if="this.quantity > 0">{{
              quantity
            }}</span>
            <div id="cartHover">
              <div class="cartContent">
                <div>
                  <h5>Il tuo carrello</h5>
                </div>
                <div
                  class="cartItem"
                  v-if="store.myOrder"
                  v-for="item in myOrder"
                ></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

#cartIcon {
  position: relative;
  cursor: pointer;
  .cartAmount {
    position: absolute;
    top: 35%;
    left: 0;
    transform: translate(-25%, -50%);
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50px;
    font-size: 10px;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 10px;
  }
  #cartHover {
    position: absolute;
    top: 0;
    left: 0;
    // display: none;
    .cartContent {
      display: none;
    }
  }
}

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
