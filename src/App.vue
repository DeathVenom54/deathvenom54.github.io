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

h1 {
  color: #eee9ef;
  font-size: 38px;
  font-weight: 500;
  margin-top: 60px;
}

p {
  font-size: 24px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
export default defineComponent({
  components: { Navbar },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Deathvenom's Website";

      to.meta.metaTags.forEach((tag: { name: string; content: string }) => {
        document
          .querySelector(`meta[name="${tag.name}"]`)
          ?.setAttribute("content", tag.content);
      });
    },
  },
});
</script>
