<template>
  <div class="home-header">
    <div class="text">
      <h2>Hello there,</h2>
      <h1>I'm Deathvenom</h1>
      <h3>Web developer with a knack for automation</h3>
    </div>
    <span class="avatar" />
  </div>
</template>

<style lang="scss">
@import "src/assets/variables";

.home-header {
  background-color: $mid-grey;
  margin: 100px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

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
    background: url("../assets/Avatar.jpg");
    border-radius: 38% 62% 28% 72% / 52% 36% 64% 48%;
  }
}
</style>
