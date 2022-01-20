<template>
  <Navbar v-if="showSite" />
  <router-view v-if="showSite" />
  <div class="initial-loader" v-if="!showSite">
    <span class="terminal">
      <span class="prompt">$</span>
      <span class="message">Building assets: ({{ loaded }}/22)</span>
    </span>
  </div>
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

.initial-loader {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .terminal {
    font-size: 24px;
    margin-top: 30vh;

    .prompt {
      font-size: 30px;
      margin-right: 10px;
      color: white;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Navbar from "@/components/Navbar.vue";
export default defineComponent({
  components: { Navbar },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Deathvenom's Website";
    },
  },
  setup() {
    const showSite = ref<boolean>(false);
    const loaded = ref<number>(0);

    const wait = async (ms: number) => {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    };

    (async () => {
      for (let i = 0; i < 22; i++) {
        const interval = Math.random() * 200;
        await wait(interval);
        loaded.value++;
      }

      await wait(500);

      showSite.value = true;
    })();

    return { showSite, loaded };
  },
});
</script>
