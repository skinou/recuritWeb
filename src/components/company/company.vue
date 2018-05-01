<template>
<div>
  <div class="head">
    <div class="head_content">
      <div class="head_company">
        <div class="head_img">
          <img :src="info.cimg" class="img"/>
          <div class="block">
            <span class="number"><i class="iconfont">&#xe64a;</i></span>
            <span class="block_item">{{info.city}}</span>
          </div>
          <div class="block">
            <span class="number"><i class="iconfont">&#xe79a;</i></span>
            <span class="block_item">{{info.fiance}}</span>
          </div>
          <div class="block">
            <span class="number"><i class="iconfont">&#xe68c;</i></span>
            <span class="block_item">{{info.teamNum}}</span>
          </div>
        </div>
        <h2 class="head_name">{{info.cname}}</h2>
        <ul class="info">
          <li> <el-tag v-for="(item,index) in getTagData" :key="index" size="small" type="info">{{item}}</el-tag></li>
          <!--<li>{{info.field}}</li>-->
          <li><i class="iconfont">&#xe678;</i> {{info.sentence}}</li>
          <li> [ {{info.address}} ]</li>
        </ul>

      </div>

      <!--<el-menu :default-active="'companyHome/'+cid" :router="true" class="el-menu-demo" mode="horizontal">-->
        <!--<el-menu-item :index="'companyHome/'+cid">公司首页</el-menu-item>-->
        <!--<el-menu-item :index="'companyJob/'+cid">在招职位</el-menu-item>-->
      <!--</el-menu>-->


      <ul class="nav">
        <li :class="{'active': getActive === 1}" @click="getActive=1"><router-link :to="'/companyHome/'+cid" >公司首页</router-link></li>
        <li :class="{'active': getActive === 2}" @click="getActive=2"><router-link :to="'/companyJob/'+cid" >在招职位</router-link></li>
      </ul>

    </div>
  </div>

  <div style="background-color: ghostwhite;width: 100%;min-width: 1200px">
    <router-view></router-view>
  </div>

  <div style="height: 50px;width: 100%;background-color: ghostwhite">

  </div>


</div>
</template>

<script>
    export default {
      name: "company",
      created(){
        window.scrollTo(0,0);
        this.cid = this.$route.params.cid;
        console.log(this.cid);
        this.$reqs.get('/companyForUser/getCompany',{
          params:{
            cid:this.cid,
          }
        })
          .then( (res)=> {
            this.info  = res.data[0];
            console.log(this.info);
          }).catch(function (res) {
          console.log(res)
        })
      },
      computed:{
        getTagData(){
          var arr = this.info.field.split(',');
          return arr
        }
      },
      data(){
        return{
          getActive:1,
          cid:'',
          info:[]
        }
      }
    }
</script>

<style scoped>
  .head{
    width: 100%;
    min-width: 1200px;
    height: 300px;
    background-color: ghostwhite;
    /*border: ghostwhite solid 2px;*/
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

  .img{
    padding-top: 5px;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    display: block;
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
    margin-bottom: 20px;
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

/*.el-menu{*/
  /*border: none;*/
/*}*/


  .nav{
    padding-left: 30px;
    height: 50px;
    list-style: none;
    margin: 0 0 0 0;
    min-width: 900px;
    text-align: left;
    border-bottom: solid 1px #e6e6e6;
  }
  .nav>li{
    height: 48px;
    display: inline-block;
    line-height: 50px;
    cursor: pointer;
    white-space: nowrap;
    /*font-size: small;*/
  }

  .nav>li>a{
    display: inline-block;
    line-height: 50px;
    height: 48px;
    padding: 0 20px 0 20px;
    color: #303133;
    text-decoration: none;
  }


  .active {
    border-bottom: 2px solid #409EFF;

  }

  .block{
    width: 50px;
    /*height: 43px;*/
    /*float: left;*/
    margin: 5px 0 0 0;
    display: inline-block;
  }

  .number{
    /*width: 93px;*/
    color: black;
    /*position: relative;*/
    /*top: 13px;*/
    margin: 10px 0 10px 0;
    display: block;
  }

  .block_item{
    /*position: relative;*/
    /*top: 18px;*/
    color: #555555;
    font-weight: lighter;
    font-size: smaller;
    display: block;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

.el-tag{
  margin-right: 15px;
}

</style>
