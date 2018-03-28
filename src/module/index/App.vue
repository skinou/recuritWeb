<template>
  <div id="app">
    <!--<a href="/home.html">123</a>-->
    <!--<router-view/>-->

    <!--<div class="header">-->
    <!--</div>-->
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*background-color: dodgerblue;*/
  width: 100%;
  height: 100%;
}


/*.body{*/
  /*height: 250px;*/
  /*width: 100%;*/
/*}*/

/*.header{*/
  /*height: 250px;*/
  /*width: 100%;*/
  /*background-color: #31b0d5;*/
/*}*/
</style>
