<template>
  <Template name="home">
    <HomeHeader />
  </Template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "@/components/HomeHeader.vue";
import Template from "@/components/ViewTemplate.vue";

export default defineComponent({
  name: "HomePage",
  components: { Template, HomeHeader },
});
</script>
