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
@font-face {
  font-family: 'iconfont';  /* project id 588199 */
  src: url('//at.alicdn.com/t/font_588199_7wtt45l9nssdzpvi.eot');
  src: url('//at.alicdn.com/t/font_588199_7wtt45l9nssdzpvi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_588199_7wtt45l9nssdzpvi.woff') format('woff'),
  url('//at.alicdn.com/t/font_588199_7wtt45l9nssdzpvi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_588199_7wtt45l9nssdzpvi.svg#iconfont') format('svg');
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
