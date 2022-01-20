<template>
  <router-link
    v-if="url.startsWith('/')"
    :to="url"
    class="social-link"
    :target="newTab ? '_blank' : '_self'"
  >
    <img :src="icon" :alt="text + ' logo'" class="icon" />
    <span>{{ text }}</span>
  </router-link>
  <a
    v-else
    :href="url"
    class="social-link"
    :target="newTab ? '_blank' : '_self'"
  >
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
    newTab: Boolean,
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
  margin: 0 10px;
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  background-color: $dark-grey;

  img {
    width: $icon-size;
    height: $icon-size;
    margin-right: 10px;
  }

  span {
    font-size: 20px;
    color: $light-grey;
  }

  &:hover {
    text-decoration: none;
    border-color: white;
    background-color: $mid-grey;
    transition: 150ms ease-in-out;

    span {
      color: white;
      transition: 150ms ease-in-out;
    }
  }
}
</style>
