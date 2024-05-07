<script>
// import { store } from "../store";

export default {
  data() {
    return {
      // store,
    };
  },
};
</script>

<template>
  <footer>
    <div class="container-fluid">
      <div class="row align-items-center justify-content-center">
        <p>Team 6</p>
        <span>
          Di Nicola Teora, Alberto Cavani, Demetrio Padre, Graziano Paladino,
          Nicola Pio Gallo
        </span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;
footer div {
  height: 80px;
  box-shadow: 0 0 5px black;
  background: #2929b9;
}
</style>
