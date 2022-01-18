<template>
  <Navbar />
  <router-view />
</template>

<style lang="scss">
@import "assets/variables";

body {
  padding: 0;
  margin: 0;
  background-color: $mid-grey;
}

#app {
  font-family: "JetBrains Mono", "Fira Code", Consolas, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $light-grey;
  background-color: $mid-grey;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
export default defineComponent({
  components: { Navbar },
});
</script>
