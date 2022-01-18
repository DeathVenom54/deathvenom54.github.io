<template>
  <router-link class="navbar-tab" :to="to">
    <span class="navbar-tab-link">{{ name }}</span>
    <span class="navbar-tab-circle"></span>
  </router-link>
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
  background-color: $dark-grey;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-left: $mid-grey solid 3px;

  .navbar-tab-link {
    color: $light-grey;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  }

  .navbar-tab-circle {
    height: $circle-dimensions;
    width: $circle-dimensions;
    background-color: transparent;
    border-radius: 50%;
    display: inline-block;

    margin-left: 5px;
  }

  &:active {
    text-decoration: none;
  }

  &.router-link-active {
    background-color: $mid-grey;

    .navbar-tab-circle {
      background-color: $light-grey;
    }
  }
}
</style>
