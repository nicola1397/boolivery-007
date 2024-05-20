<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      hoverTimeout: null,
    };
  },
  watch: {
    "store.myOrder": function (val) {},
  },
  computed: {},
  methods: {
    mouseover() {
      clearTimeout(this.hoverTimeout);

      this.hoverTimeout = setTimeout(() => {
        const hoverDiv = document.getElementById("cartHover");
        hoverDiv.style.display = "flex";
      }, 650);
    },
    mouseout() {
      clearTimeout(this.hoverTimeout);
      const hoverDiv = document.getElementById("cartHover");
      hoverDiv.style.display = "none";
    },
  },
  mounted() {},
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-white">
    <div class="container-sm flex-nowrap">
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

      <ul class="navbar-nav d-flex align-items-center flex-nowrap flex-row">
        <li class="nav-item">
          <router-link
            :to="{ name: 'home' }"
            class="nav-link"
            aria-current="page"
            exact-active-class="active"
            >Home</router-link
          >
        </li>

        <li class="nav-item" id="cartIcon">
          <router-link
            :to="{ name: 'restaurants.checkout' }"
            class="nav-link"
            aria-current="page"
            exact-active-class="active"
            @mouseover="mouseover()"
            @mouseout="mouseout()"
            ><i class="fa-solid fa-basket-shopping"></i
          ></router-link>
          <span class="cartAmount" v-if="store.quantity > 0">{{
            parseInt(store.quantity)
          }}</span>
          <div id="cartHover">
            <div class="cartContent">
              <div>
                <h5 class="text-center my-0">Il tuo carrello</h5>
              </div>
              <div
                class="cartItem"
                v-if="store.myOrder"
                v-for="item in store.myOrder.dishes"
              >
                <div class="image">
                  <img :src="item.image" :alt="item.name" />
                </div>
                <span class="name">{{ item.name }}</span>
                <span class="quantity">x {{ item.quantity }}</span>
              </div>
              <div class="cartItem" v-else>
                <span class="text-secondary text-center"
                  >Il tuo carrello è vuoto</span
                >
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

#cartIcon {
  position: relative;
  cursor: pointer;

  #cartIcon:hover + #cartHover,
  #cartIcon:hover {
    display: flex;
  }
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
    width: 300px;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(25%, 100%);
    display: none;
    color: $secondary;
    background-color: white;
    z-index: 5;
    padding: 15px 30px;
    border-radius: 15px;
    box-shadow: 0 0 5px 0 rgba(black, 0.2);

    .cartContent {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .cartItem {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba($primary, 0.2);

        .image {
          width: 60px;
          height: 60px;
          margin-right: 10px;
          overflow: hidden;
          border-radius: 500px;
          flex: 0 0 auto;
          object-fit: contain;
          display: flex;
          justify-content: center;
          .img {
            height: 100%;
            width: 100%;
          }
        }

        .name {
          font-size: 0.9rem;
          line-height: 0.9rem;
          text-align: left;
          width: 100%;
        }
        .quantity {
          margin-left: 10px;
          text-wrap: nowrap;
        }
      }
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
