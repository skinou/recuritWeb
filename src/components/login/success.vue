<template>
    <div class="box">
      <h2 class="title">注册成功</h2>
      <router-link to="/"><el-button type="info" plain icon="el-icon-d-arrow-left"> 返 回 登 陆 </el-button></router-link>
    </div>
</template>

<script>
    export default {
        name: "success"
    }
</script>

<style scoped>
  .box{
    height: 300px;
    width: 550px;
    margin: 50px auto;
    position: relative;
    top: 150px;
    /*transform: translateY(-60%);*/
    background-color: whitesmoke;
  }
  .title{
    display: inline-block;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
  }
</style>
