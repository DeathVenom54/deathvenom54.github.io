<template>
  <span class="cursor" v-if="visible">_</span>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Cursor",
  props: {
    blink: Boolean,
    interval: Number,
  },
  setup(props) {
    let visible = ref<boolean>(true);

    if (props.blink) {
      setInterval(
        () => (visible.value = !visible.value),
        props.interval || 500
      );
    }

    return { visible };
  },
});
</script>

<style lang="scss">
.cursor {
  font: inherit;
}
</style>
