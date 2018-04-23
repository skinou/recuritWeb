<template>
<div>
  <div class="head">
    <div class="head_content">
      <div class="head_company">
        <img :src="info.cimg" class="head_img"/>
        <h2 class="head_name">{{info.cname}}</h2>
        <ul class="info">
          <li><i class="iconfont">&#xe626;</i> {{info.fiance}} </li>
          <li><i class="iconfont">&#xe60b;</i> {{info.field}}</li>
          <li><i class="iconfont">&#xe64a;</i> {{info.address}}</li>
          <li><i class="iconfont">&#xe678;</i> {{info.sentence}}</li>
        </ul>

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
      name: "company",
      created(){
        this.$reqs.get('/companyForUser/getCompany',{
          params:{
            cid:'564165416115614'
          }
        })
          .then( (res)=> {
            this.info  = res.data[0];
            console.log(this.info);
          }).catch(function (res) {
          console.log(res)
        })
      },
      data(){
        return{
          info:[]
        }
      }
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
    width: 590px;
    text-align: left;
  }

  .info{
    list-style: none;
    margin: 5px 0 0 0;
    padding: 0 0 0 30px;
    float: left;
    width: 550px;
  }

  .info>li{
    margin-bottom: 5px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
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





</style>
