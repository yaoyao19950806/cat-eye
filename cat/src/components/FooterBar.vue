<template>
  <div class="app-footer">
    <router-link to="/">首页</router-link>
    <router-link to="/movie">影院</router-link>
    <router-link to="/mine">我的</router-link>
  </div>
</template>
<style lang="scss">
.app-footer {
  width: 100vw;
  height: 45px;
  display: flex;
  a {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    &.router-link-exact-active {
      color: orangered;
    }
  }
}
</style>