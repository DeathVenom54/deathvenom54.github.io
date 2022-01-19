<template>
  <a :href="url" class="social-link" target="_blank">
    <img :src="icon" :alt="text + ' logo'" class="icon" />
    <span>{{ text }}</span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialLink",
  props: {
    text: String,
    url: String,
    icon: String,
  },
});
</script>

<style lang="scss">
@import "src/assets/variables";

$icon-size: 40px;

.social-link {
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: $light-grey;
  cursor: pointer;
  padding: 5px 10px;

  display: inline-flex;
  align-items: center;

  img {
    width: $icon-size;
    height: $icon-size;
    margin-right: 10px;
  }

  span {
    font-size: 20px;
    color: $light-grey;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
}
</style>
