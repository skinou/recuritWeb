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
            <router-link to="/setUpPsw">设置</router-link>
          </li>
        </ul>

        <el-menu
          default-active="/userInfo"
          :router="true"
        >
          <el-menu-item index="/userInfo">
            <span slot="title"><i class="iconfont">&#xe615;</i>基本信息<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
          <el-menu-item index="/userWork">
            <span slot="title"><i class="iconfont">&#xe613;</i>期望工作<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
          <el-menu-item index="/userEducation">
            <span slot="title"><i class="iconfont">&#xe606;</i>教育经历<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
          <el-menu-item index="/userInternship">
            <span slot="title"><i class="iconfont">&#xe61a;</i>工作经验<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
          <el-menu-item index="/userProject">
            <span slot="title"><i class="iconfont">&#xe614;</i>项目经验<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
          <el-menu-item index="/userDescription">
            <span slot="title"><i class="iconfont">&#xe618;</i>自我描述<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
          <el-menu-item index="/userSkill">
            <span slot="title"><i class="iconfont">&#xe63f;</i>技能评价<i class="el-icon-arrow-right"></i></span>
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
  min-height: 800px;
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
    text-align: center;
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
