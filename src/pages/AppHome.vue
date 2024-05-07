<script>
export default {
  data() {
    return {
      titleComponent: "Home Page",
    };
  },

  created() {},
};
</script>

<template>
  <div id="mainContent">
    <div class="container">
      <h1>{{ titleComponent }}</h1>
    </div>
    <div class="test text-center"><span class="text">TEST</span></div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

h1 {
  color: black;
}

.test {
  height: 300px;
  width: 400px;
}
</style>
