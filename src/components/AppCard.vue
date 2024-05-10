<script>
// import { store } from "../store";

export default {
  data() {
    return {
      // store,
    };
  },
  props: { restaurant: Object, index: Number },
};
</script>

<template>
  <router-link
    :to="{
      name: 'restaurants.show',
      params: { slug: restaurant.slug },
    }"
    class="router-link">
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
  </router-link>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;
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
</style>
