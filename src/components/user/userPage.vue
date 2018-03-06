<template>

  <el-container class="user">
    <el-aside width="220px">
      <div class="aside">

        <ul class="nav">
          <li>
            <i class="el-icon-delete"></i>
            <router-link to="/deliveryPage">投递箱</router-link>
          </li>
          <li>
            <i class="el-icon-star-off"></i>
            <router-link to="/collectPage">收藏</router-link>
          </li>
          <li>
            <i class="el-icon-setting"></i>
            <router-link to="/setUpPage">设置</router-link>
          </li>
        </ul>

        <el-menu
          default-active="/userInfo"
          :router="true"
        >
          <el-menu-item index="/userInfo">
            <span slot="title">基本信息<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
          <el-menu-item index="/userWork">
            <span slot="title">期望工作<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
          <el-menu-item index="/userEducation">
            <span slot="title">教育经历<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
          <el-menu-item index="/userInternship">
            <span slot="title">工作经验<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
          <el-menu-item index="/userProject">
            <span slot="title">项目经验<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
          <el-menu-item index="/userDescription">
            <span slot="title">自我描述<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
          <el-menu-item index="/userSkill">
            <span slot="title">技能评价<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
        </el-menu>
      </div>
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
      name: 'user-page'
    }
</script>

<style scoped>
.aside{
  width: 220px;
  /*display: inline-block;*/
}
.main{
  width: 700px;
  /*height: 400px;*/
  /*background-color: dodgerblue;*/
  /*display: inline-block;*/
}
  .user{
    margin: 10px auto;
    width: 1000px;
  }
  .nav{
    width: 220px;
    margin: 20px auto;
    list-style: none;
    padding: 0 0 0 0;
   }
  .nav>li{
    width: 60px;
    height: 60px;
    padding: 0 5px 0 5px;
    display: inline-block;
  }
.nav>li>i{
  width: 60px;
  display: block;
  margin: 8px 0  8px 0;
}
.nav>li>a{
  text-decoration: none;
  color: black;
  font-weight: normal;
  font-size: small;
}

  .el-menu{
    text-align: right;
  }
  .el-menu-item{
    padding: 0 30px 0 30px;
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
</style>
