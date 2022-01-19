<template>
  <SocialLink
    text="Github"
    url="https://github.com/DeathVenom54"
    icon="/icons/github.svg"
  />
  <SocialLink
    text="Discord"
    url="https://discord.gg/qJnrRvt7wW"
    icon="/icons/discord.svg"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SocialLink from "@/components/SocialLink.vue";

export default defineComponent({
  name: "Socials",
  components: { SocialLink },
});
</script>

<style lang="scss"></style>
