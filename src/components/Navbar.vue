<template>
  <nav>
    <NavbarTab name="home.html" to="/" />
    <NavbarTab name="projects.html" to="/projects" />
    <NavbarTab name="contact.html" to="/contact" />
  </nav>
</template>

<style lang="scss">
@import "src/assets/variables";

nav {
  background-color: $dark-grey;
  padding: 10px 30px 0;
  display: flex;
}
</style>

<script lang="ts">
import NavbarTab from "@/components/NavbarTab.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  components: { NavbarTab },
});
</script>
