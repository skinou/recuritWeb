<template>
<div>
  <div class="top">
    <div class="left">
      <h6>{{jobContentData.title}}</h6>
      <h2>{{jobContentData.name}}</h2>
      <h4>{{jobContentData.salary}}</h4>
      <h5>{{jobContentData.city}}/{{jobContentData.experience}}/ {{jobContentData.degree}}/ {{jobContentData.type}}</h5>
      <h6>{{jobContentData.date}} 发布于招聘网</h6>
    </div>

    <div class="right">
      <el-button type="primary" plain class="btn">投简历</el-button>
      <el-button type="primary"  class="btn">收藏</el-button>
    </div>
  </div>

  <div class="middle">
    <div class="middle_left">
      <h5 class="item">职位诱惑</h5>
      <p>技术挑战与个人成长空间</p>
      <h5 class="item">职位描述</h5>
      <h6 class="sub_item">岗位职责：</h6>
      <p>拉勾招聘业务系统的设计、开发</p>
      <p>解决线上系统问题，线上服务的整合与重构</p><br>
      <h6 class="sub_item">能力要求：</h6>
      <p>· 人靠谱，有责任心和团队协作精神</p>
      <p>· 对技术有热情，学习能力强，在某个技术领域有自己的见解</p>
      <p>· 有代码洁癖</p><br>
      <h6 class="sub_item">技术要求：</h6>
      <p>1.具有实的Java基础，逻辑思维缜密；</p>
      <p>2.熟练使用RPC框架，具备相关的分布式开发经验；</p>
      <p>3.具备TCP方面的网络编程经验；</p>
      <p>4.具备WEB方面的开发经验；</p>
      <p>5.熟练使用Mybatis，SpringMVC，SpringCloud等框架。</p><br>
      <h5 class="item">工作地址</h5>
      <p style="color: #1b6d85">北京 - 海淀区 - 苏州街 - 中关村海淀大街34号海置创投大厦4层</p>
    </div>
    <div class="middle_right">
      <div class="company_content">
        <div class="img"></div>
        <ul class="company_list">
          <li>
            <a class="company_name">拉钩网</a>
          </li>
          <li>
            <!--<span class="glyphicon glyphicon-th-large"></span>-->
            <i slot="prefix" class="el-icon-menu"></i>
            企业服务,招聘
          </li>
          <li>
            <!--<span class="glyphicon glyphicon-repeat"></span>-->
            <i slot="prefix" class="el-icon-refresh"></i>
            D轮及以上
          </li>
          <li>
            <!--<span class="glyphicon glyphicon-paperclip"></span>-->
            <i slot="prefix" class="el-icon-share"></i>
            东方弘道(C轮,天使轮)，真格基金(天使轮)，贝塔斯曼(A轮)，启明创投，贝塔斯曼(B轮)，前程无忧(D轮及以上)
          </li>
          <li>
            <!--<span class="glyphicon glyphicon-user"></span>-->
            <i slot="prefix" class="el-icon-news"></i>
            150-500人
          </li>
          <li>
            <!--<span class="glyphicon glyphicon-home"></span>-->
            <i slot="prefix" class="el-icon-location-outline"></i>
            <a href="http://www.lagou.com" target="_blank" title="http://www.lagou.com" rel="nofollow">http://www.lagou.com</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</div>
</template>

<script>
  import jobData from '@/store/job'
    export default {
        name: "job",
      data(){
          return{
            jobContentData:jobData.jobContentData
          }
      }
    }
</script>

<style scoped>

  .top{
    height: 216px;
    width: 815px;
    background-color: white;
    margin: 20px auto;
    /*text-align: center;*/
  }

  .left{
    width: 550px;
    height: 230px;
    background-color:  white;
    float: left;
    border: solid whitesmoke;
    /*display: inline-block;*/
  }

  .right{
    width: 250px;
    height: 230px;
    background-color: whitesmoke;
    border: solid whitesmoke;
    float: left;
    /*display: inline-block;*/
  }

  h2,h4,h5,h6{
    width: 300px;
    height: 30px;
    text-align: left;
    font-family: Microsoft YaHei;
  }

  span,p{
    font-family: Microsoft YaHei;
  }

  h2{
    margin: 0 0 0 20px;

  }

  h4{
    margin: 10px 0 0 20px;
    color: red;
  }

  h5{
    margin: 0 0 0 20px;
    letter-spacing: 2px;
    color: #555555;
  }

  h6{
    margin: 20px 0 0 20px;
    color: #555555;
  }

  .btn{
    position: relative;
    top: 50px;
  }

  .middle{
    height: 810px;
    width: 815px;
    margin: 0 auto;

  }

  .middle_left{
    height: 800px;
    width: 550px;
    background-color: whitesmoke;
    border: solid whitesmoke;
    float: left;
  }

  .middle_right{
    height: 800px;
    width: 250px;
    border: solid whitesmoke;
    background-color: white;
    float: left;
  }

  .item{
    margin: 30px 0 0 20px;
    letter-spacing: 5px;
    color: #555555;
    font-weight: bold;
    height: 20px;
  }

  .sub_item{
    margin: 15px 0 0 20px;
    color: #555555;
    letter-spacing: 2px;
    height: 20px;
  }

  p{
    width: 530px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 0px;
    text-align: left;
    font-size: small;
  }

  .company_content{
    width: 200px;
    height: 500px;
    background-color: white;
    margin: 30px 0 0 10px;
  }

  .img{
    width: 80px;
    height: 80px;
    background-color: #31b0d5;
    margin: 5px 0 0 15px;
  }
  .company_list{
    list-style-type: none;
    text-align: left;
    font-size: smaller;
    padding-left: 15px;

  }

  .company_list>li{
    margin-top: 15px;
    color: #888888;
  }

  .company_list>li>a{
    color: #888888;
  }

  .glyphicon{
    margin-right: 5px;
  }

  .company_name:hover{
    color: #31b0d5;
    font-weight: initial;
    text-decoration: none;
  }
</style>
