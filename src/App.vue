<template>
  <Navbar />
  <router-view />
</template>

<style lang="scss">
@import "src/assets/variables";

body {
  padding: 0;
  margin: 0;
  background: $back-gradient;
}

*::selection {
  background-color: #677a8b;
  color: white;
}

#app {
  font-family: "JetBrains Mono", "Fira Code", Consolas, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $light-grey;
  background: inherit;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

h1 {
  color: #eee9ef;
  font-size: 38px;
  font-weight: 500;
  margin-top: 60px;
}

#app {
  font-family: "JetBrains Mono", "Fira Code", Consolas, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $light-grey;
  background: inherit;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
