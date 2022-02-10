<template>
  <router-link :to="to" :class="['big-button', color]"
    ><i :class="icon"></i>{{ label }}</router-link
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BigButton",
  props: {
    label: String,
    to: String,
    icon: String,
    color: String,
  },
});
</script>

<style lang="scss">
@import "src/assets/variables";

.big-button {
  border: solid 3px $light-grey;
  border-radius: 10px;
  color: $light-grey;
  font-size: 26px;
  padding: 10px 15px;
  margin: 5px 10px;
  text-decoration: none;
  background-color: $darkish-grey;

  display: inline-flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }

  &.blue {
    $color: #539eed;
    border-color: $color;
    svg {
      color: $color;
    }

    &:hover {
      color: $darkish-grey;
      background-color: $color;
      font-weight: 700;
      svg {
        color: $darkish-grey;
        transition: 150ms ease-in-out;
      }
      transition: 150ms ease-in-out;
    }
  }

  &.green {
    $color: #69c753;
    border-color: $color;
    svg {
      color: $color;
    }

    &:hover {
      color: $darkish-grey;
      background-color: $color;
      font-weight: 700;
      svg {
        color: $darkish-grey;
        transition: 150ms ease-in-out;
      }
      transition: 150ms ease-in-out;
    }
  }
}
</style>
