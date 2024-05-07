<script>
export default {
  data() {
    return {
      titleComponent: "Home Page",
    };
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ titleComponent }}</h1>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

h1 {
  color: black;
}
</style>
