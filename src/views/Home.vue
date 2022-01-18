<template>
  <div class="home">
    <HomeHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "@/components/HomeHeader.vue";

export default defineComponent({
  name: "Home",
  components: { HomeHeader },
});
</script>

<style lang="scss">
@import "src/assets/variables";

.home {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
  background-color: $dark-grey;
}
</style>
