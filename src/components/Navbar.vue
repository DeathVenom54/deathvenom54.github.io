<template>
  <nav>
    <div class="tabs">
      <NavbarTab name="home.html" to="/" />
      <NavbarTab name="projects.html" to="/projects" />
      <NavbarTab name="contact.html" to="/contact" />
    </div>
    <div class="links">
      <a href="https://github.com/DeathVenom54" target="_blank">
        <i class="fab fa-github fa-2x"></i>
      </a>

      <a href="https://discord.gg/qJnrRvt7wW" target="_blank">
        <i class="fab fa-discord fa-2x"></i>
      </a>

      <a href="https://twitter.com/dv_makes_stuff" target="_blank">
        <i class="fab fa-twitter fa-2x"></i>
      </a>

      <a href="https://dev.to/deathvenom54" target="_blank">
        <i class="fab fa-dev fa-2x"></i>
      </a>
    </div>
  </nav>
</template>

<style lang="scss">
@import "src/assets/variables";

nav {
  background-color: $dark-grey;
  padding: 10px 30px 0;
  display: flex;
  justify-content: space-between;

  .tabs {
    display: flex;
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    a {
      color: $light-grey;
      margin: 0 10px;

      svg:hover {
        transform: scale(1.1, 1.1);
        transition: 200ms ease-in-out;
      }

      &:hover {
        color: #fff;
        transition: 100ms ease-in-out;
      }
    }
  }
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
