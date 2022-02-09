<template>
  <Template name="home">
    <HomeHeader />
    <Socials
      :data="[
        {
          text: 'Projects',
          url: '/projects',
          icon: 'fas fa-code fa-2x',
        },
        {
          text: 'Contact me',
          url: '/contact',
          icon: 'fas fa-comment-dots fa-2x',
        },
      ]"
    />
  </Template>
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
import Template from "@/components/Template.vue";

export default defineComponent({
  name: "Home",
  components: { Template, Socials, HomeHeader },
});
</script>
