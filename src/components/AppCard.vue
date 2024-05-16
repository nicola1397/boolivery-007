<script>
// import { store } from "../store";

export default {
  data() {
    return {
      // store,
    };
  },
  props: { restaurant: Object, index: Number, types: Array },
  methods: {},
};
</script>

<template>
  <router-link
    :to="{
      name: 'restaurants.show',
      params: { slug: restaurant.slug },
    }"
    class="router-link"
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

      <!-- BADGE -->
      <div class="badgesContainer" :id="'list-' + this.index">
        <span v-for="badge in restaurant.types" class="badge mx-2">
          {{ badge.label }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;
.myCard {
  background-color: white;
  height: 100%;
  color: $secondary;
  border-radius: 5px;
  border: 1px solid $secondary;
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
    aspect-ratio: 16 / 9;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
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

.router-link {
  text-decoration: none;
}

.badgesContainer {
  position: absolute;
  border: 1px solid $secondary;
  background-color: white;
  display: none;
  flex-direction: column;
  z-index: 9999;
  margin: 0;

  .badge {
    color: $secondary;
    font-size: 17px;
  }
}

.rightColumn {
  padding: 0;
  // height: calc(100vh - $headerHeight - $footerHeight);
  overflow: auto;
  // background-color: $primary;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  align-content: flex-start;
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
