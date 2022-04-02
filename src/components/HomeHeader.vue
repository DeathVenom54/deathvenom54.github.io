<template>
  <div class="home-header">
    <div class="text">
      <h2>Hello there,</h2>
      <h1>I'm {{ name }}<Cursor blink :interval="1000" /></h1>
      <h3>Web developer with a knack for automation</h3>
    </div>
    <span class="avatar" />
  </div>
  <div class="hh-buttons">
    <BigButton to="/projects" label="My Projects" color="blue" />
    <BigButton to="/contact" label="Contact Me" color="green" />
  </div>
</template>

<style lang="scss">
@import "src/assets/variables";
@import "include-media";

.home-header {
  background-size: 100% 100%;
  background-color: rgba(0, 0, 0, 0.3);
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  .text {
    h2 {
      font-size: 32px;
      font-weight: 300;
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 56px;
      font-weight: 400;
      margin: 0;
      padding: 0;
      color: #fff;
    }

    h3 {
      font-size: 28px;
      margin: 20px 0 0;
      padding: 0;
      font-weight: 300;
    }
  }

  $avatar-size: 200px;
  .avatar {
    width: $avatar-size;
    height: $avatar-size;
    background-size: $avatar-size;
    background: url("../assets/Avatar.jpg");
    border-radius: 38% 62% 28% 72% / 52% 36% 64% 48%;
  }
}

@include media(">phone", "<tablet") {
  .home-header {
    flex-direction: column;
    $avatar-size: 150px;
    .avatar {
      margin-top: 40px;
      width: $avatar-size;
      height: $avatar-size;
      background-size: $avatar-size;
    }
    .text h2 {
      font-size: 26px;
    }
    .text h1 {
      font-size: 36px;
    }
    .text h3 {
      font-size: 24px;
    }
  }
}
.hh-buttons {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>
<script lang="ts">
import Cursor from "@/components/AnimatedCursor.vue";
import { defineComponent, ref } from "vue";
import BigButton from "@/components/BigButton.vue";

export default defineComponent({
  components: { Cursor, BigButton },
  setup() {
    const names = ["Deathvenom", "Dave"];
    const name = ref<string>(names[0]);

    const wait = async (ms: number) => {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    };

    const erase = async (ms: number) => {
      while (name.value.length) {
        await wait(ms);
        name.value = name.value.slice(0, -1);
      }
    };

    const type = async (text: string, ms: number) => {
      const chars = text.split("");
      for (const char of chars) {
        const interval = Math.random() * ms;
        await wait(interval);
        name.value += char;
      }
    };

    const main = async () => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const nextName = name.value === names[0] ? names[1] : names[0];
        await wait(6000);
        await erase(100);
        await wait(1000);
        await type(nextName, 300);
      }
    };

    void main();

    return { name };
  },
});
</script>
