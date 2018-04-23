<template>
  <div class="container">
    <div class="area">
      <h3>公司标签</h3>
      <el-tag v-for="(item,index) in getTagData" :key="index" >{{item}}</el-tag>
    </div>
    <div class="area" v-show="proData!==null">
      <h3>公司产品</h3>
      <ul class="productList">
        <li v-for="(item , index) in proData" :key="index">
          <div style="text-align: left">
            <div class="left">
              <img class="proImg" :src="item.pimg"/>
            </div>
            <div class="right">
              <span>{{item.pname}}</span>
              <div class="content">
                <p v-for="(arrItem , index) in describeInfo(item.des)" :key="index">{{arrItem}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="area">
      <h3>公司介绍</h3>
      <div class="company_introduction">
        <p v-for="(item,index) in companyInfo" :key="index">{{item}}</p>
      </div>
      <!--<el-carousel class="infoImage" indicator-position="outside" height="300px">-->
        <!--<el-carousel-item v-for="item in 4" :key="item">-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
    </div>
  </div>
  <!--<el-container>-->
    <!--<el-main>-->
      <!---->
    <!--</el-main>-->
    <!--<el-aside width="250px">-->
      <!--<div class="area">-->
        <!--<h3>基本信息</h3>-->
        <!--<ul class="company_list">-->
          <!--<li>-->
            <!--<i slot="prefix" class="el-icon-menu"></i>-->
            <!--企业服务,招聘-->
          <!--</li>-->
          <!--<li>-->
            <!--<i slot="prefix" class="el-icon-refresh"></i>-->
            <!--D轮及以上-->
          <!--</li>-->
          <!--<li>-->
            <!--<i slot="prefix" class="el-icon-share"></i>-->
            <!--东方弘道(C轮,天使轮)，真格基金(天使轮)，贝塔斯曼(A轮)，启明创投，贝塔斯曼(B轮)，前程无忧(D轮及以上)-->
          <!--</li>-->
          <!--<li>-->
            <!--<i slot="prefix" class="el-icon-news"></i>-->
            <!--150-500人-->
          <!--</li>-->
          <!--<li>-->
            <!--<i slot="prefix" class="el-icon-location-outline"></i>-->
            <!--<a href="http://www.lagou.com" target="_blank" title="http://www.lagou.com" rel="nofollow">http://www.lagou.com</a>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
      <!--<div class="area">-->
        <!--<h3>公司标签</h3>-->
        <!--<el-tag type="info" v-for="(item,index) in tagData" :key="index" >{{item}}</el-tag>-->
      <!--</div>-->
      <!--<div class="area">-->
        <!--<h3>管理团队</h3>-->
        <!--<el-carousel class="teamImage" indicator-position="outside" height="210px">-->
          <!--<el-carousel-item v-for="item in 4" :key="item">-->
            <!--<div class="leader">-->
              <!--<img src="@/assets/img2.jpg"/>-->
              <!--<span class="title">CEO</span>-->
              <!--<span class="name">张三</span>-->
            <!--</div>-->
          <!--</el-carousel-item>-->
        <!--</el-carousel>-->
      <!--</div>-->
    <!--</el-aside>-->
  <!--</el-container>-->
</template>

<script>
    export default {
      name: "company-home",
      created(){
        this.$reqs.get('/companyForUser/getCompanyProduct',{
          params:{
            cid:'564165416115614'
          }
        }).then( (res)=> {
            this.proData = res.data
          }).catch( (res)=> {
          console.log(res.toString())
        });

        this.$reqs.get('/companyForUser/selectCompanyIntro',{
          params:{
            cid:'564165416115614'
          }
        }).then( (res)=> {
          console.log(res.data);
          this.info = res.data[0].intro;
        }).catch( (res)=> {
          console.log(res.toString())
        });

        this.$reqs.get('/companyForUser/selectCompanyTags',{
          params:{
            cid:'564165416115614'
          }
        }).then( (res)=> {
          console.log(res.data);
            this.tagData = res.data[0].tags;
          }).catch( (res)=> {
          console.log(res.toString())
        });


      },
      data(){
          return{
            tagData:'',
            proData:null,
            info:''
            // info:'米矿服务品牌，从新零售做起\n' +
            // '一家全渠道融合运营滴服务公司，成立两年一直稳步发展。\n' +
            // '无论你喜欢相对稳定的环境还是快速发展的激情，这里都有属于你的舞台。\n' +
            // '\n' +
            // '合作项目繁多，分布在广东周边地域，总有一个是你家~\n' +
            // '新零售电商+移动互联网拓展整合ing，物色着同样有新零售互联网思维滴你加入！\n' +
            // '传统企业的产品+互联网思维运营，\n' +
            // '蛋糕已经准备好了，你还等待啥？\n' +
            // '\n' +
            // '【氛围】\n' +
            // '✔年轻团队，全部＜35\n' +
            // '✔扁平开放去阶级，高效协作常常自嗨\n' +
            // '✔追求高效能，偏好新技术、新工具\n' +
            // '✔协作核心：自我驱动+自律',
          }
      },
      methods:{
        describeInfo (item) {
          let arr = item.split('\n');
          return arr
        },
      },
      computed: {
        companyInfo: function () {
          var arr = this.info.split('\n');
          return arr
        },
        getTagData(){
          var arr = this.tagData.split(',');
          return arr
        }
      }
    }
</script>

<style scoped>
.container{
  width: 900px;
  margin: 0 auto;
}

.el-tag{
  margin: 10px 10px 10px 10px;
}
  .area{
    width: 100%;
    display: inline-block;
    min-height: 100px;
    margin: 0 0 20px 0;
  }
  h3{
    margin: 15px 20px 25px 30px;
    text-align: left;
  }
.productList{
  list-style: none;
  /*float: left;*/
  width: 100%;
  padding: 0 0 0 0;
}
.productList>li{
  margin-top: 20px;
  /*float: left;*/
  background-color: white;
}
.container>p{
  text-align: left;
  white-space: pre-wrap;
  word-break: break-all;
  width: 450px;
  overflow: auto;
  margin: 0 0 2px 0;
  font-size: smaller;
}
.company_introduction{
  margin: 0 30px 30px 30px;
}
  .company_introduction>p{
    text-align: left;
    height: 21px;
    margin: 10px 0 0 10px;
  }

.infoImage{
  width: 500px;
  margin: 50px auto;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
/*.company_list{*/
  /*list-style-type: none;*/
  /*text-align: left;*/
  /*font-size: smaller;*/
  /*display: inline-block;*/

/*}*/

/*.company_list>li{*/
  /*width: 180px;*/
  /*margin-bottom: 15px;*/
  /*color: #888888;*/
  /*word-break: break-all;*/

/*}*/

/*.company_list>li>a{*/
  /*color: #888888;*/
  /*text-decoration: none;*/
/*}*/


  /*.leader>img{*/
    /*width: 100px;*/
    /*height: 120px;*/
    /*display: inline-block;*/
    /*margin: 10px auto;*/
  /*}*/

.content {
  width: 505px;
  height: 145px;
  overflow-y: auto;
  overflow-x: hidden;
}

.right>span{
  display: inline-block;
  width: 490px;
  margin: 10px 0 15px 0;
  background-color: white;
  /*padding: 0 20px 0 20px;*/
}
.left>img{
  width: 150px;
  height: 150px;
  display: inline-block;
}

.left{
  width: 180px;
  min-height: 150px;
  /*float: left;*/
  padding: 30px 10px 10px 30px;
  display: inline-block;
  vertical-align: top;
  /*background-color: dodgerblue;*/
}
.right{
  width: 540px;
  min-height: 150px;
  /*padding-bottom: 30px;*/
  padding-top: 20px;
  /*float: left;*/
  /*overflow: auto;*/
  background-color: white;
  text-align: left;
  display: inline-block;
  vertical-align: top;
}

.content::-webkit-scrollbar {/*滚动条整体样式*/
  width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.content::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: #31b0d5;
}
.content::-webkit-scrollbar-track {/*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: white;
}


</style>
