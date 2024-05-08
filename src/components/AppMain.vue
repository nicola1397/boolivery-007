<script>
export default {
  data() {
    return {};
  },

  components: {},
};
</script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.container {
  overflow: scroll;
  background: #3535ec;
  height: calc(100vh - 160px);
  padding: 30px 0;
}
</style>
