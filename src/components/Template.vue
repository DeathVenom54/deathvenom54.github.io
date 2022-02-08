<template>
  <div :class="[name, 'template']">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Template",
  props: {
    name: String,
  },
});
</script>

<style lang="scss">
@import "src/assets/variables";
@import "include-media";

.template {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
  background-color: $mid-grey;
}
</style>
