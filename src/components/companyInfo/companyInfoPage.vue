<template>
  <el-container class="company">
    <el-aside width="180px">
      <el-menu
        default-active="/companyInfo"
        :router="true"
      >
        <el-menu-item index="/companyInfo">
          <span slot="title"><i class="iconfont">&#xe640;</i>基本信息<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
        <el-menu-item index="/companyProduct">
          <span slot="title"><i class="iconfont">&#xe783;</i>公司产品<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
        <el-menu-item index="/companyIntro">
          <span slot="title"><i class="iconfont">&#xe75b;</i>公司介绍<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
        <el-menu-item index="/companyManager">
          <span slot="title"><i class="iconfont">&#xe654;</i>管理团队<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
        <el-menu-item index="/companyPosition">
          <span slot="title"><i class="iconfont">&#xe7bd;</i>招聘职位<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
        <el-menu-item index="/companyResume">
          <span slot="title"><i class="iconfont">&#xe68d;</i>简历查看<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
        <el-menu-item index="/companyAccount">
          <span slot="title"><i class="iconfont">&#xe65b;</i>账号设置<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <div class="main">
        <router-view></router-view>
      </div>

    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "company-info-page"
    }
</script>

<style scoped>
  .company{
    width: 1020px;
    margin: 0 auto;
  }
  .el-menu{
    text-align: right;
    padding: 30px 0 30px 0;
  }
  .el-menu-item{
    padding: 0 30px 0 30px;
    margin: 10px 0 10px 0;
  }
  .el-menu-item>span{
    letter-spacing: 2px;
    color: black;
    /*font-weight: bold;*/
  }
  .el-icon-arrow-right{
    color: black;
    /*font-weight: bold;*/
  }
  .main{
    overflow: hidden;
    min-height: 800px;
  }

  .iconfont{
    font-family:"iconfont" !important;
    font-size:18px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: black;
    /*height: 20px;*/
    /*line-height: 20px;*/
    margin-right: 5px;
    padding-bottom: 2px;
    /*display: inline-block;*/
  }

  .el-menu-item:hover{
    background-color: dodgerblue;
    color: white;
  }

  .el-menu-item:hover span{
    /*background-color: dodgerblue;*/
    color: white;
  }

  .el-menu-item:hover i{
    /*background-color: dodgerblue;*/
    color: white;
  }

  .is-active,.is-active>span,.is-active>i{
    background-color: dodgerblue;
    color: white;
  }

</style>
