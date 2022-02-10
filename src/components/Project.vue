<template>
  <div class="project" :style="{ borderColor: color }">
    <div class="title">
      <i :class="icon" :style="{ color }"></i>
      <span>{{ name }}</span>
    </div>
    <p><slot /></p>

    <div class="buttons">
      <a :href="website" class="website" v-if="website" target="_blank">
        <i class="fas fa-globe-americas"></i>
        <span>Website</span>
      </a>

      <a :href="npm" class="npm" v-if="npm" target="_blank">
        <i class="fab fa-npm fa-lg"></i>
        <span>Package</span>
      </a>

      <a :href="repository" class="repo" v-if="repository" target="_blank">
        <i class="fab fa-github"></i>
        <span>Repository</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Project",
  props: {
    name: String,
    icon: String,
    color: {
      type: String,
      default: "#fff",
    },
    repository: String,
    npm: String,
    website: String,
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
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  max-width: 400px;

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

  .buttons {
    display: flex;

    a {
      color: $light-grey;
      text-decoration: none;
      font-size: 20px;
      border: solid 2px $light-grey;
      padding: 5px 10px;
      margin: 0 5px 5px;
      border-radius: 5px;
      justify-self: baseline;

      span {
        margin-left: 10px;
      }

      &.website {
        $color: #66baff;
        border-color: $color;
        color: $color;

        &:hover {
          background-color: $color;
        }
      }

      &.npm {
        $color: #ff6161;
        border-color: $color;
        color: $color;

        &:hover {
          background-color: $color;
        }
      }

      &:hover {
        background-color: $light-grey;
        transition: 200ms ease-in-out;

        span,
        svg {
          color: $dark-grey;
          font-weight: 700;
          transition: 200ms ease-in-out;
        }
      }
    }
  }

  p {
    font-size: 20px;
    color: #a19ea2;
    text-align: center;
    margin: 10px 0 15px;
  }

  &:hover {
    border-color: $light-grey;
    box-shadow: none;
    transform: scale(1.02, 1.02);
    transition: 200ms ease-in-out;

    p {
      color: $light-grey;
      transition: 300ms ease-in-out;
    }
  }
}
</style>
