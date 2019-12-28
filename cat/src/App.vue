<template>
  <div id="app">
    <header class="header">
      猫眼影院
    </header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <FooterBar/>
    </footer>
  </div>
</template>
<script>
import FooterBar from './components/FooterBar'
export default {
  components: {
    FooterBar
  }
}
</script>


<style lang="scss">
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
#app {
  width: 100vw;
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.header{
  width: 100vw;
  height: 45px;
  background: orangered;
  color: #fff;
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  line-height: 45px;
}
.main{
  width: 100vw;
  flex: 1;
  overflow: auto;
}

.footer{
  width: 100vw;
  height: 45px;
  background: #eaeaea;
  
}
</style>
