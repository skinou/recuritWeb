<template>
<div style="text-align: left">
  <!--<router-link to="/companyResume"><el-button size="small" icon="el-icon-d-arrow-left" plain class="back">返回</el-button></router-link>-->
  <router-link to="/companyResume"><span class="back iconfont">&#xe7be;</span></router-link>

 <div style="margin-left: 80px">
   <div class="top">
     <h2>{{form.jname}}</h2>
     <h4>{{form.salary}}</h4>
     <h5>{{form.city}}/{{form.experience}}/ {{form.degree}}/ {{form.jtype}}</h5>
     <h5>发布时间: {{form.jtime}}</h5>
     <span class="job_tag"><el-tag v-for="(item,index) in form.jobTag" :key="index" size="small" >{{item}}</el-tag></span>
   </div>

   <ul class="filter">
     <li>
       <a
         class="aItem"
         v-for="(aItem , index) in  stateItem" :key="index"
         :class="{'active': aItem === filter}"
         @click="handle(aItem)"
       >{{aItem}}</a>
     </li>
   </ul>

   <ul class="resumeList">
     <li v-for="(item,index) in getItemData" :key="index">
       <div class="info">
         <img v-if="item.sex==='男'" src="@/assets/boy.png"/>
         <img v-else="item.sex==='女'" src="@/assets/girl.png"/>
         <span><router-link :to="'/resume/'+item.rkey+'/'+item.id">{{item.name}}</router-link></span>
         <!--<span>{{item.sex}}/</span>-->
         <!--<span>{{item.school}}/</span>-->
         <!--<span>{{item.degree}}/</span>-->
         <!--<span>{{item.major}}</span>-->
         <span><el-tag :type="getType(item.state)" size="small" >{{item.state}}</el-tag></span>
         <span class="time">{{item.rtime}}</span>
       </div>
     </li>
   </ul>

   <div style="text-align: center">
     <el-pagination
       background
       layout="prev, pager, next"
       :page-size="4"
       :current-page.sync="currentPage"
       @current-change="handleCurrentChange"
       :total="getPages">
     </el-pagination>
   </div>
 </div>

</div>
</template>

<script>
    export default {
      name: "resume-list",

      mounted(){


        this.$reqs.post('/job/selectJobDetail',{
          jkey:this.$route.params.jkey,
        }).then((res)=>{

          this.form = res.data[0];
          if(this.form.jobTag){
            this.form.jobTag =  this.form.jobTag.split(',');
          }
          else{
            this.form.jobTag = []
          }

        }).catch((err)=>{
          console.log(err.toString())
        });



        this.$reqs.post('/job_resume/getJobResumeList',{
          jkey:this.$route.params.jkey,
        }).then((res)=>{

          this.info = res.data;
          console.log(this.info);

        }).catch((err)=>{
          console.log(err.toString())
        });

      },


      computed:{
        getPages() {
          return this.getInfo.length
        },
        getItemData() {
          let list = [...this.getInfo];
          let start = 0;
          let end = 4;
          start += (this.currentPage - 1) * 4;
          end += (this.currentPage - 1) * 4;
          let arr = list.slice(start, end);
          return arr
        },
        getInfo(){
          let list = [...this.info];
          if (this.filter !== '全部') {
            list = list.filter(item => item.state === this.filter)
          }
          return list
          // let arr;
          // if (this.filter !== '全部') {
          //   arr = this.info.filter(item=>item.state===this.filter);
          // }
          // return arr
        }
      },
      methods:{
        handle(item){
          this.filter = item
        },
        getType(item){
          let type='';
          if(item==='未查看'){
            type='info'
          } else if(item==='不合适'){
            type='danger'
          }else if(item==='通过'){
            type='success'
          }
          return type
        },
        handleCurrentChange(){
          scrollTo(0,0);
        }
      },
      data() {
        return {
          stateItem:['全部','投递成功','待沟通','通过','不合适'],
          filter: '全部',
          currentPage: 1,
          form:[],
          info:[]
        }
      }
    }
</script>

<style scoped>
  .top{
    height: 200px;
    width: 700px;
    /*background-color: whitesmoke;*/
    background-color:rgba(	248,248,255,0.5);
    margin: 40px auto;
    padding: 30px 0 0 0;
  }
  h2,h4,h5,h6{
    width: 70%;
    height: 30px;
    text-align: left;
  }

  h2{
    margin: 0 0 0 20px;

  }

  h4{
    margin: 10px 0 0 20px;
    color: #409EFF;
  }

  h5 {
    margin: 0 0 0 20px;
    letter-spacing: 1px;
    color: #555555;
  }

  .el-tag{
    margin-left: 20px;
  }
  .resumeList{
    padding: 20px 0 20px 0;
    list-style: none;
    margin: 20px auto;
    min-height: 50px;
    width: 700px;
    background-color: ghostwhite;
  }
  .resumeList>li{
    margin: 20px 0 20px 0;
  }
  .info{
    height: 80px;
    width: 600px;
    background-color: white;
    border: ghostwhite solid 3px;
    border-radius: 5px;
    margin: 0 auto;
  }
  .info>img{
    width: 50px;
    height: 50px;
    margin: 15px 20px 15px 20px;
    display: inline-block;
    vertical-align: bottom;
  }
  .info>span{
    display: inline-block;
    vertical-align: bottom;
    height: 50px;
    margin: 15px 0 15px 5px;
    line-height: 50px;
  }

  .info>span>a{
    color: dodgerblue;
    text-decoration: none;
  }
  .aItem{
    /*margin-right: 10px;*/
    color: black;
    display: inline-block;
    padding: 5px 5px 5px 5px;
    cursor: pointer;
    margin: 0 5px 0 5px;
  }

  .aItem:hover{
    background-color: #31b0d5;
    color: white;
    text-decoration: none;
  }
  .filter{
    list-style: none;
    margin: 50px 0 20px 40px;
  }
  .active{
    background-color: #31b0d5;
    color: white;
    text-decoration: none;
  }

  .iconfont{
    font-family:"iconfont" !important;
    font-size:18px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    /*color: black;*/
    /*height: 20px;*/
    /*line-height: 20px;*/
    margin-right: 5px;
    padding-bottom: 2px;
    /*display: inline-block;*/
    color: dodgerblue;
  }

  .back{
    /*float: left;*/
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    /*border: dodgerblue solid 1px;*/
    border-radius: 90px;
    background-color: whitesmoke;
    color: dodgerblue;
    position: relative;
    top: 15px;
    margin-left: 25px;
    float: left;
  }

  .back:hover{
    color: whitesmoke;
    background-color: dodgerblue;
    animation:route 0.5s;
  }

  @keyframes route
  {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }


  .time{
    font-size: small;
    color: grey;
    float: right;
    padding-right: 30px;
  }

</style>
