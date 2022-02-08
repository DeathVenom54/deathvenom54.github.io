<template>
  <a
    :href="link"
    class="project"
    target="_blank"
    :style="{ borderColor: color }"
  >
    <div class="title">
      <i :class="icon" :style="{ color }"></i>
      <span>{{ name }}</span>
    </div>
    <p><slot /></p>
    <a :href="repository" class="repo" v-if="repository">
      <i class="fab fa-github"></i>
      <span>GitHub</span>
    </a>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Project",
  props: {
    name: String,
    icon: String,
    link: String,
    color: {
      type: String,
      default: "#fff",
    },
    repository: String,
  },
});
</script>

<style lang="scss">
@import "src/assets/variables";

.project {
  background-color: $dark-grey;
  display: inline-flex;
  margin: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 5px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  max-width: 350px;

  border-radius: 10px;
  border: solid 3px #fff;

  text-decoration: none;
  color: $light-grey;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    i,
    span {
      font-size: 26px;
      margin: 0 15px;
      font-weight: 600;
    }
  }

  .repo {
    color: $light-grey;
    text-decoration: none;
    font-size: 20px;
    border: solid 2px $light-grey;
    padding: 5px 10px;
    border-radius: 5px;
    justify-self: baseline;

    span {
      margin-left: 10px;
    }

    &:hover {
      background-color: $light-grey;
      transition: 200ms ease-in-out;

      span,
      svg {
        color: $dark-grey;
        transition: 200ms ease-in-out;
      }
    }
  }

  p {
    font-size: 20px;
    color: #a19ea2;
  }

  &:hover {
    border-color: $light-grey;
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 6px;
    transform: scale(1.02, 1.02);
    transition: 200ms ease-in-out;

    p {
      color: $light-grey;
      transition: 300ms ease-in-out;
    }
  }
}
</style>
