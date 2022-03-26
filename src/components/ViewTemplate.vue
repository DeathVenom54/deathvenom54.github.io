<template>
  <div class="template-outer">
    <div :class="[name, 'template']" :style="{ maxWidth }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ViewTemplate",
  props: {
    name: String,
    maxWidth: {
      type: String,
      default: "1000px",
    },
  },
});
</script>

<style lang="scss">
@import "src/assets/variables";
@import "include-media";

.template-outer {
  margin: 10px 20px;
}

.template {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
  background: transparent;
}
</style>
