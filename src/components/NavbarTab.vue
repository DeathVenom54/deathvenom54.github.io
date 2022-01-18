<template>
  <div class="navbar-tab">
    <router-link class="navbar-tab-link" :to="to">{{ name }}</router-link>
    <span class="navbar-tab-circle"></span>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarTab",
  props: {
    name: String,
    to: String,
  },
});
</script>

<style lang="scss">
@import "src/assets/variables";

$circle-dimensions: 10px;

.navbar-tab {
  background-color: $mid-grey;
  padding: 10px 15px;
  display: flex;
  align-items: center;

  .navbar-tab-link {
    color: $light-grey;
    font-size: 20px;
    text-decoration: none;
  }

  .navbar-tab-circle {
    height: $circle-dimensions;
    width: $circle-dimensions;
    background-color: $light-grey;
    border-radius: 50%;
    display: inline-block;

    margin-left: 5px;
  }
}
</style>
