<template>
    <div class="box">
      <h2 class="title">注册成功</h2>
      <router-link to="/"><el-button type="primary" class="ret" plain > 登 陆 </el-button></router-link>
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
    width: 300px;
    margin: 50px auto;
    position: relative;
    top: 150px;
    border-radius: 20px;
    box-shadow: 0 0 5px 2px whitesmoke;
    /*transform: translateY(-60%);*/
    background-color: white;
  }
  .title{
    display: inline-block;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
  }
  .el-button{
    width: 100px;
    height: 100px;
    border-radius: 90px;
    font-size: large;

  }

  .ret:hover{
    animation: scal 1.5s infinite;
  }

  @keyframes scal {
    0%{
      transform: scale(1);
    }
    50%{
      transform: scale(1.2);
    }
    100%{
      transform: scale(1);
    }
  }
</style>
