<template>
  <div class="home">
    <div class="home-header">
      <router-link to="/tab1">正在热映</router-link>
      <router-link to="/tab2">即将上映</router-link>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script>

components: {

}
</script>

<style lang="scss">
.home {
  width: 100vw;
  display: flex;
  flex-direction: column;
  hr {
    border: 1px solid lavender;
  }
}
.home-header {
  width: 100vw;
  height: 30px;
  display: flex;
  align-items: center;
justify-content: space-around;
  a {
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    &.router-link-exact-active {
      color: orangered; 
      flex-wrap: 800;
      border-bottom: 4px solid orangered;
    }
  }
}
</style>
