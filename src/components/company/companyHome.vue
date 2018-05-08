<template>
  <div class="container" style="background-color: white">
    <div class="area" v-show="imgList.length!==0">
      <h3>公司环境</h3>
      <el-carousel indicator-position="outside" class="imgContent">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.img" class="img_li">
        </el-carousel-item>
      </el-carousel>
    </div>
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
                <!--<p>{{item.des}}</p>-->
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
            <span class="desc">{{item.mdesc}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="area">
      <h3>公司介绍</h3>
      <div class="company_introduction">
        <p v-for="(item,index) in companyInfo" :key="index">{{item}}</p>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
      name: "company-home",
      created(){
        window.scrollTo(0,0);
        this.cid = this.$route.params.cid;

        this.$reqs.get('/companyForUser/getCompanyProduct',{
          params:{
            cid:this.cid
          }
        }).then( (res)=> {
            this.proData = res.data
          }).catch( (res)=> {
          console.log(res.toString())
        });

        this.$reqs.get('/companyForUser/selectCompanyIntro',{
          params:{
            cid:this.cid
          }
        }).then( (res)=> {
          console.log(res.data);
          this.info = res.data[0].intro;
        }).catch( (res)=> {
          console.log(res.toString())
        });

        this.$reqs.get('/companyForUser/getCompanyImg',{
          params:{
            cid:this.cid
          }
        })
          .then( (res)=> {
            console.log(res.data);
            this.imgList = res.data;
            // console.log(this.imgList);
          }).catch( (res)=> {
          console.log(res.toString())
        });

        this.$reqs.get('/companyForUser/selectCompanyTags',{
          params:{
            cid:this.cid
          }
        }).then( (res)=> {
          console.log(res.data);
            this.tagData = res.data[0].tags;
          }).catch( (res)=> {
          console.log(res.toString())
        });

        this.$reqs.get('/companyForUser/selectCompanyManager',{
          params:{
            cid:this.cid
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
            imgList:[],
            cid:'',
            leader:[],
            tagData:'',
            proData:null,
            info:''
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
  margin: 0 0 0 20px;
}
.productList>li{
  margin-top: 10px;
  /*float: left;*/
  background-color: white;
}
.container>p{
  text-align: left;
  /*white-space: pre-wrap;*/
  /*word-break: break-all;*/
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
    /*height: 21px;*/
    margin: 10px 0 0 10px;
    width: 650px;
    text-indent:2em;
    /*word-break: break-all;*/
    white-space: pre-wrap;
    line-height: 200%;
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
  height: 130px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 20px;
}

.content>p{
  margin: 0 0 20px 0;
  font-size: small;

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
  margin: 0 0 0 40px;
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
.desc{
  display: block;
  margin: 0 auto;
  width: 80%;
  font-size: small;
  text-align: left;
  white-space: pre-wrap;
  padding-bottom: 10px;
}

  .imgContent{
    width: 70%;
    margin: 30px auto;
  }
  .img_li{
    width: 100%;
  }

</style>
