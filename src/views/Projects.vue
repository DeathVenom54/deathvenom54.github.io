<template>
  <Template name="projects">
    <h1>Some of my projects:</h1>
    <div class="project-holder">
      <Project
        name="Affiliate Magnet"
        icon="fab fa-discord fa-2x"
        link="https://affiliate-magnet.deathvenom.me"
        color="#ad91ff"
        >A Discord bot that can replace any link in a server with an affiliate
        one, or the opposite</Project
      >
      <Project
        name="djs-marshal"
        icon="fab fa-npm fa-3x"
        link="https://npmjs.com/package/djs-marshal"
        color="#ff6161"
        >A simple slash command and message component handler for
        discord.js</Project
      >
      <Project
        name="djs-marshal-utils"
        icon="fab fa-npm fa-3x"
        link="https://npmjs.com/package/djs-marshal-utilss"
        color="#ff6161"
        >Utility methods for making bots more conveniently</Project
      >
      <Project
        name="itch-scraper"
        icon="fab fa-npm fa-3x"
        link="https://npmjs.com/package/djs-marshal-utilss"
        color="#ff6161"
        >Scrape data about games on itch.io</Project
      >
    </div>
  </Template>
</template>

<script>
import Template from "@/components/Template";
import Project from "@/components/Project";
export default {
  components: { Project, Template },
};
</script>

<style lang="scss">
.projects h1 {
  color: #eee9ef;
  font-size: 38px;
  font-weight: 500;
  margin-top: 60px;
}

.project-holder {
  margin-top: 40px;
  display: flex;
}
</style>
