<template>
  <el-container>
    <el-main>
      <div class="area">
        <h3>公司产品</h3>
        <ul>
          <li>
            <div class="product">
              <img src="@/assets/img2.jpg"/>
              <span class="product_name">微商城</span>
              <p class="product_info">
                自主研发商城，微信公众号：好易康（haoyikang8020）
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="area">
        <h3>公司介绍</h3>
        <div class="company_introduction">
          <p v-for="(item,index) in companyInfo" :key="index">{{item}}</p>
        </div>
        <el-carousel class="infoImage" indicator-position="outside" height="300px">
          <el-carousel-item v-for="item in 4" :key="item">
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-main>
    <el-aside width="250px">
      <div class="area">
        <h3>基本信息</h3>
        <ul class="company_list">
          <li>
            <i slot="prefix" class="el-icon-menu"></i>
            企业服务,招聘
          </li>
          <li>
            <i slot="prefix" class="el-icon-refresh"></i>
            D轮及以上
          </li>
          <li>
            <i slot="prefix" class="el-icon-share"></i>
            东方弘道(C轮,天使轮)，真格基金(天使轮)，贝塔斯曼(A轮)，启明创投，贝塔斯曼(B轮)，前程无忧(D轮及以上)
          </li>
          <li>
            <i slot="prefix" class="el-icon-news"></i>
            150-500人
          </li>
          <li>
            <i slot="prefix" class="el-icon-location-outline"></i>
            <a href="http://www.lagou.com" target="_blank" title="http://www.lagou.com" rel="nofollow">http://www.lagou.com</a>
          </li>
        </ul>
      </div>
      <div class="area">
        <h3>公司标签</h3>
        <el-tag type="info" v-for="(item,index) in tagData" :key="index" >{{item}}</el-tag>
      </div>
      <div class="area">
        <h3>管理团队</h3>
        <el-carousel class="teamImage" indicator-position="outside" height="210px">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="leader">
              <img src="@/assets/img2.jpg"/>
              <span class="title">CEO</span>
              <span class="name">张三</span>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-aside>
  </el-container>
</template>

<script>
    export default {
        name: "company-home",
      data(){
          return{
            info:'米矿服务品牌，从新零售做起\n' +
            '一家全渠道融合运营滴服务公司，成立两年一直稳步发展。\n' +
            '无论你喜欢相对稳定的环境还是快速发展的激情，这里都有属于你的舞台。\n' +
            '\n' +
            '合作项目繁多，分布在广东周边地域，总有一个是你家~\n' +
            '新零售电商+移动互联网拓展整合ing，物色着同样有新零售互联网思维滴你加入！\n' +
            '传统企业的产品+互联网思维运营，\n' +
            '蛋糕已经准备好了，你还等待啥？\n' +
            '\n' +
            '【氛围】\n' +
            '✔年轻团队，全部＜35\n' +
            '✔扁平开放去阶级，高效协作常常自嗨\n' +
            '✔追求高效能，偏好新技术、新工具\n' +
            '✔协作核心：自我驱动+自律',
            tagData:[
              '扁平管理',
              '节日礼物',
              '弹性工作'
            ]
          }
      },
      computed: {
        companyInfo: function () {
          var arr = this.info.split('\n');
          return arr
        }
      }
    }
</script>

<style scoped>
.content{
  width: 1000px;
  margin: 0 auto;
}
.el-aside {
  background-color: ghostwhite;
}

.el-main {
  padding: 0 0 0 0;
  overflow: hidden;
}
.el-container{
  width: 1000px;
  margin: 50px auto;
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
  .area>ul{
    margin: 0 20px 0 20px;
    padding: 0 0 0 0;
    list-style: none;
  }
  .product>img{
    width: 250px;
    height: 200px;
    float: left;
    display: inline-block;
  }
  .product_name{
    display: inline-block;
    float: left;
    margin-left: 20px;
    font-size: large;
  }
  .product_info{
    display: inline-block;
    float: left;
    margin-left: 20px;
  }
.company_introduction{
  margin: 0 30px 30px 30px;
}
  .company_introduction>p{
    text-align: left;
    height: 21px;
    margin: 10px 0 0 0;
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
.company_list{
  list-style-type: none;
  text-align: left;
  font-size: smaller;
  display: inline-block;

}

.company_list>li{
  width: 180px;
  margin-bottom: 15px;
  color: #888888;
  word-break: break-all;

}

.company_list>li>a{
  color: #888888;
  text-decoration: none;
}

  .leader{
    width: 150px;
    height: 200px;
    margin: 0 auto;
  }

  .leader>img{
    width: 100px;
    height: 120px;
    display: inline-block;
    margin: 10px auto;
  }
.name{
  width: 150px;
  height: 30px;
  font-weight: bold;
  display: inline-block;
}
.title{
  width: 150px;
  height: 20px;
  font-size: small;
  font-weight: bold;
  display: inline-block;
}


</style>
