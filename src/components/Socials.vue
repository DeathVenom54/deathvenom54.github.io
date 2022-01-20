<template>
  <div class="socials">
    <SocialLink
      v-for="link in data"
      :key="link.name"
      :text="link.text"
      :url="link.url"
      :icon="link.icon"
      :new-tab="!!link.newTab"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SocialLink from "@/components/SocialLink.vue";

export default defineComponent({
  name: "Socials",
  components: { SocialLink },
  props: {
    data: Array,
  },
});
</script>

<style lang="scss">
@import "src/assets/variables";

.socials {
  padding: 30px 20px;
  display: flex;
  background-color: $mid-grey;
}
</style>
