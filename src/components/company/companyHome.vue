<template>
  <div class="container" style="background-color: white">
    <div class="area">
      <h3>公司标签</h3>
      <div class="tags">
        <el-tag v-for="(item,index) in getTagData" :key="index" >{{item}}</el-tag>
      </div>
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
              <span class="pname">{{item.pname}}</span>
              <div class="content">
                <p v-for="(arrItem , index) in describeInfo(item.des)" :key="index">{{arrItem}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="area">
      <h3>管理团队</h3>
      <ul v-show="leader.length!==0" class="manager">
        <li v-for="(item , index) in leader" :key="index">
          <div class="item">
            <img :src="item.mimg"/>
            <span class="name">{{item.mname}}</span>
            <!--<span class="name">/</span>-->
            <span class="name">{{item.mposition}}</span>
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

</template>

<script>
    export default {
      name: "company-home",
      created(){
        window.scrollTo(0,0);

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

        this.$reqs.get('/companyForUser/selectCompanyManager',{
          params:{
            cid:'564165416115614'
          }
        })
          .then( (res)=> {
            let data = res.data;
            console.log(data);
            if(data.length !== 0){
              this.leader=data;
              console.log(this.leader);
            }
          }).catch( (res)=> {
          console.log(res.toString())
        });


      },
      data(){
          return{
            leader:[],
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
    margin: 15px 20px 15px 30px;
    text-align: left;
  }
.productList{
  list-style: none;
  /*float: left;*/
  width: 100%;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}
.productList>li{
  margin-top: 10px;
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

.content {
  width: 505px;
  height: 120px;
  overflow-y: auto;
  overflow-x: hidden;
}

.content>p{
  margin: 0 0 10px 0;
}

.right>span{
  display: inline-block;
  width: 490px;
  margin: 2px 0 8px 0;
  background-color: white;
  /*padding: 0 20px 0 20px;*/
}
.left>img{
  width: 180px;
  height: 150px;
  display: inline-block;
}

.left{
  width: 180px;
  min-height: 150px;
  /*float: left;*/
  padding: 10px 10px 10px 30px;
  display: inline-block;
  vertical-align: top;
  /*background-color: dodgerblue;*/
}
.right{
  width: 540px;
  min-height: 150px;
  /*padding-bottom: 30px;*/
  padding-top: 10px;
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

.tags{
  text-align: left;
  padding-left: 30px;
}

.manager{
  padding: 0 0 0 0;
  margin: 0 0 0 30px;
  /*height: 500px;*/
  list-style: none;
  width: 500px;
}

.manager>li{
  background-color: white;
  margin-bottom: 30px;
}

.item{
  text-align: left;
}
.item>img{
  margin: 15px 10px 15px 20px;
  width: 60px;
  height: 60px;
  vertical-align: bottom;
}

.name{
  display: inline-block;
  max-width: 100px;
  height: 90px;
  line-height: 90px;
  color: black;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: top;
  font-size: 1em;
}
</style>
