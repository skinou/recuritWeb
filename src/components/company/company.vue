<template>
<div>

  <div class="head">
    <div class="head_content">
      <div class="head_company">
        <img src="@/assets/img2.jpg" class="head_img"/>
        <h2 class="head_name">广州米矿信息科技有限公司</h2>
        <span class="sentence">1111111111111111111111</span>
        <div class="block">
          <span class="number">200+</span>
          <span class="block_item">面试评价</span>
        </div>
        <div class="block">
          <span class="number">4</span>
          <span class="block_item">在招职位</span>
        </div>
        <div class="block">
          <span class="number">100%</span>
          <span class="block_item">简历处理率</span>
        </div>
      </div>
      <el-menu default-active="companyHome" :router="true" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="companyHome">公司首页</el-menu-item>
        <el-menu-item index="companyJob">在招职位</el-menu-item>
      </el-menu>
    </div>
  </div>

  <div>
    <router-view></router-view>
  </div>


</div>
</template>

<script>
    export default {
        name: "company"
    }
</script>

<style scoped>
  .head{
    width: 100%;
    min-width: 1000px;
    height: 300px;
    background-color: ghostwhite;
    border: ghostwhite solid 2px;
  }
  .head_content{
    width: 900px;
    height: 300px;
    background-color: white;
    margin: 0 auto;
  }
  .head_company{
    margin: 50px 50px 0 50px;
    width: 800px;
    height: 180px;
    background-color: ghostwhite;
    display: inline-block;
  }
  .head_img{
    height: 180px;
    width: 180px;
    float: left;
  }
  .head_name{
    display: inline-block;
    float: left;
    margin: 10px 10px 10px 20px;
  }
  .sentence{
    display: inline-block;
    float: left;
    width: 550px;
    height: 50px;
    margin: 0 10px 0 20px;
    white-space: pre-wrap;
    word-break: break-all;
    text-align: left;
  }
  .block{
    width: 80px;
    height: 60px;
    /*float: left;*/
    margin: 5px 10px 0 10px;
    float: left;
    display: inline-block;
  }

  .number{
    width: 80px;
    color: #31b0d5;
    position: relative;
    top: 13px;
    display: block;
  }

  .block_item{
    position: relative;
    top: 18px;
    color: #555555;
    font-weight: lighter;
    font-size: smaller;
    display: block;
  }
  .el-menu{
    width: 800px;
    margin: 0 auto;
    border: none;
  }

</style>
