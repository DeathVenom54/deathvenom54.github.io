<template>
  <Template name="projects" max-width="1300px">
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
        repository="https://github.com/DeathVenom54/djs-marshal"
        >A simple slash command and message component handler for
        discord.js</Project
      >
      <Project
        name="djs-marshal-utils"
        icon="fab fa-npm fa-3x"
        link="https://npmjs.com/package/djs-marshal-utilss"
        color="#ff6161"
        repository="https://github.com/DeathVenom54/djs-marshal-utils"
        >Utility methods for making bots more conveniently</Project
      >
      <Project
        name="itch-scraper"
        icon="fab fa-npm fa-3x"
        link="https://npmjs.com/package/djs-marshal-utilss"
        color="#ff6161"
        repository="https://github.com/DeathVenom54/itch-scraper"
        >Scrape data about games on itch.io</Project
      >
      <Project
        name="bot-poster"
        icon="fab fa-github fa-3x"
        link="https://github.com/DeathVenom54/bot-poster"
        color="#03b1fc"
        repository="https://github.com/DeathVenom54/bot-poster"
        >Easily post a message on Discord as a bot</Project
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
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
