<template>
  <Template name="Contact">
    <h1>Contact</h1>
    <p>
      Looks like I haven't written this page yet. If you see this, remind me to
      stop slacking.
    </p>
  </Template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Template from "@/components/ViewTemplate.vue";

export default defineComponent({
  name: "ContactPage",
  components: { Template },
});
</script>

<style lang="scss">
.contact {
  h1 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
  }
}
</style>
