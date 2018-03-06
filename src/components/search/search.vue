<template>
  <div class="search">
    <div class="search_div">
      <input type="text" name="search" class="search_input">
      <!--<button type="button" class="search_btn"><router-link to="/searchPage">搜 索</router-link></button>-->
      <router-link to="/searchPage" class="search_btn">搜 索</router-link>
    </div>
    <ul class="search-recommend">
      <li>
        <el-tag   size="mini">java</el-tag>
      </li>
      <li>
        <el-tag type="success"  size="mini">php</el-tag>
      </li>
      <li>
        <el-tag type="warning"  size="mini">Android</el-tag>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'search'
    }
</script>

<style scoped>
  .search{
    width: 100%;
    height: 120px;
    background-color: ghostwhite;
    min-width: 1000px;
    margin-bottom: 30px;
  }

  .search_input{
    float: left;
    height: 30px;
    width: 350px;
    border: solid white 1px;
    padding-left: 10px;
  }

  .search_input:focus{
    border: 1px solid deepskyblue;
  }

  .search_btn{
    float: left;
    height: 28px;
    width: 100px;
    border: solid deepskyblue 1px;
    background-color: deepskyblue;
    font-size: large;
    padding-top: 4px;
    color: white;
    text-decoration: none;
  }

  .search_div{
    width: 470px;
    height: 35px;
    margin: 0 auto;
    position: relative;
    top: 30px;
  }

  .search-recommend{
    width: 470px;
    height: 25px;
    list-style: none;
    margin: 5px auto;
    padding: 0 0 0 0;
    position: relative;
    top: 30px;

  }

  .search-recommend>li{
    width: 100px;
    float: left;
  }
</style>
