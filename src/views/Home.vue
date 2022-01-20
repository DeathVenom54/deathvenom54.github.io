<template>
  <div class="home">
    <HomeHeader />
    <Socials
      :data="[
        {
          text: 'Projects',
          url: '/projects',
          icon: '/icons/project.svg',
        },
        {
          text: 'Contact me',
          url: '/contact',
          icon: '/icons/contact.svg',
        },
      ]"
    />
  </div>
</template>
<!--<SocialLink text="Projects" url="/projects" icon="/icons/project.svg" />-->
<!--<SocialLink-->
<!--    text="Discord"-->
<!--    url="https://discord.gg/qJnrRvt7wW"-->
<!--    icon="/icons/discord.svg"-->
<!--    new-tab-->
<!--/>-->

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "@/components/HomeHeader.vue";
import Socials from "@/components/Socials.vue";

export default defineComponent({
  name: "Home",
  components: { Socials, HomeHeader },
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
