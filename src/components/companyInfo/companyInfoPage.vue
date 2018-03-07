<template>
  <el-container class="company">
    <el-aside width="180px">
      <el-menu
        default-active="/companyInfo"
        :router="true"
      >
        <el-menu-item index="/companyInfo">
          <span slot="title">基本信息<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
        <el-menu-item index="/companyProduct">
          <span slot="title">公司产品<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
        <el-menu-item index="/companyIntro">
          <span slot="title">公司介绍<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
        <el-menu-item index="/companyManager">
          <span slot="title">管理团队<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
        <el-menu-item index="/companyPosition">
          <span slot="title">招聘职位<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
        <el-menu-item index="/companyResume">
          <span slot="title">简历查看<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
        <el-menu-item index="/companyAccount">
          <span slot="title">账号设置<i class="el-icon-arrow-right"></i></span>
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
  }
</style>
