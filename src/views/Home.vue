<template>
  <Template name="home">
    <HomeHeader />
  </Template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "@/components/HomeHeader.vue";
import Template from "@/components/Template.vue";

export default defineComponent({
  name: "Home",
  components: { Template, HomeHeader },
});
</script>
