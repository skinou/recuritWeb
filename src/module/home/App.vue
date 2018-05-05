<template>
    <div id="app">

      <div class="header">

        <div class="header-tab">
          <a class="companyEntrance" href="/index.html#/companyLogin"> < 企业入口</a>
          <div  v-if="accountType === '' ">
            <a class="userEntrance" href="/index.html'"> 登陆 </a>
          </div>
          <div v-else-if="accountType === '个人用户'">
            <router-link class="userEntrance" to="/userPage" @click.native="getActive=0">个人简历</router-link>
            <router-link class="userEntrance" to="/deliveryPage" @click.native="getActive=0">投递箱</router-link>
            <router-link class="userEntrance" to="/collectPage" @click.native="getActive=0">收藏箱</router-link>
          </div >
          <div v-else-if="accountType === '公司用户'">
            <router-link class="userEntrance" to="/companyInfo" @click.native="getActive=0">公司信息</router-link>
            <!--<router-link class="userEntrance" to="/deliveryPage" @click.native="getActive=0">投递箱</router-link>-->
            <!--<router-link class="userEntrance" to="/userPage" @click.native="getActive=0">个人简历</router-link>-->
          </div >
        </div>

        <ul class="nav">
          <li :class="{'active': getActive === 1}" @click="getActive=1"><router-link to="/" >首页</router-link></li>
          <li :class="{'active': getActive === 2}" @click="getActive=2"><router-link to="/companyPage" >公司</router-link></li>
        </ul>

      </div>
      <div class="body">
        <router-view/>
      </div>

      <!--<div class="footer">-->
      <!--</div>-->

    </div>
</template>

<script>
    export default {
      name: "App",
      data(){
        return{
          getActive:0,
          username:'',
          accountType:''
        }
      },
      created(){
        let test = window.location.hash;
        console.log(test)
        if(test==='#/'){
          this.getActive =1
        }
        else if(test==='#/companyPage'){
          this.getActive =2
        }
        else{
          this.getActive =0
        }

        this.$reqs.get('/login/home' )
          .then( (res)=> {
            let data = res.data;
            this.username = data.name;
            this.accountType = data.type;
            this.$store.commit('setAccount',data.account);
            console.log(data)
        }).catch(function (res) {

        })

      },
    }
</script>

<style scoped>
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  .header{
    min-width: 1200px;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 588199 */
    src: url('//at.alicdn.com/t/font_588199_7wtt45l9nssdzpvi.eot');
    src: url('//at.alicdn.com/t/font_588199_7wtt45l9nssdzpvi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_588199_7wtt45l9nssdzpvi.woff') format('woff'),
    url('//at.alicdn.com/t/font_588199_7wtt45l9nssdzpvi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_588199_7wtt45l9nssdzpvi.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }


  .userEntrance{
    float: right;
    color: white;
    cursor: pointer;
    margin: 4px 20px 0 0;
    font-size: small;
    text-decoration: none;
  }

  .companyEntrance{
    color: white;
    cursor: pointer;
    float: left;
    margin: 4px 0 0 20px;
    font-size: small;
    text-decoration: none;
  }

  .footer{
    min-width: 1200px;
    height: 80px;
    margin-top: 30px;
    background-color:whitesmoke;
  }

  .header-tab{
    height: 25px;
    background-color: #333333;
  }

  .el-menu{
    padding-left: 100px;
    height: 50px;
  }

  .el-menu>li{
    height: 50px;
  }
.nav{
  padding-left: 100px;
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
    font-size: small;
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

</style>
