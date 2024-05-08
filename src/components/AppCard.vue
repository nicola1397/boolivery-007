<script>
export default {
  props: { restaurant: Object },
};
</script>

<template>
  <div class="myCard m-5">
    <span>{{ restaurant }}</span>
    <div class="coverImage">
      <img :src="restaurant.image" />
    </div>
    <h3 class="detailCap">{{ restaurant.name }}</h3>
    <p class="detailCap">{{ restaurant.address }}</p>
    <router-link
      :to="{
        name: 'restaurants.show',
        params: { slug: restaurant.slug },
      }"
    >
      <button type="button" class="btn btn-warning">Seleziona</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.myCard {
  background-color: #2929b9;
  padding-top: 10px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 0 7px black;
    transform: scale(1.02);
    transition: all 0.1s ease-in-out 0.1s;
  }

  .coverImage {
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 15px;
    aspect-ratio: 1 / 1;

    img {
      height: 100%;
    }
  }
}
</style>
