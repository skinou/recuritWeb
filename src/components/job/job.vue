<template>
<div style="width: 1200px;margin: 0 auto;">
  <div class="top">
    <div class="left">
      <h5 class="cname">{{form.cname}} 招聘</h5>
      <h2>{{form.jname}}</h2>
      <h4>{{form.salary}}</h4>
      <h5>{{form.city}}/{{form.experience}}/ {{form.degree}}/ {{form.jtype}}</h5>
      <span class="job_tag"> <el-tag v-for="(item,index) in form.jobTag" :key="index" size="mini">{{item}}</el-tag> </span>
      <h5 class="time">{{form.jtime}} 发布于招聘网</h5>
    </div>

    <div class="right">
      <el-button  v-if="isPost" type="primary" plain class="btn" @click="post" disabled>已投简历</el-button>
      <el-button  v-else type="primary" plain class="btn" @click="post">投简历</el-button>


      <el-button  v-if="isCollect" type="primary"  class="btn" @click="cancel">取消收藏</el-button>
      <el-button  v-else type="primary"  class="btn" @click="collect">收藏</el-button>
    </div>
  </div>

  <div class="middle">
    <div class="middle_left" ref="elememt" >
      <h4 class="item">职位诱惑</h4>
      <ul class="temptation">
        <li v-for="(item,index) in getTemptation" :key="index">
          {{item}}
        </li>
      </ul>


      <h4 class="item" v-if="form.duty">职位描述</h4>
      <h5 class="sub_item">岗位职责：</h5>

      <ul class="duty">
        <li v-for="(item,index) in getDuty" :key="index">
          {{item}}
        </li>
      </ul>

      <h5 class="sub_item" v-if="form.ability">能力要求：</h5>
      <ul class="ability">
        <li v-for="(item,index) in getAbility" :key="index">
          {{item}}
        </li>
      </ul>

      <h5 class="sub_item" v-if="form.skill">福利待遇：</h5>
      <ul class="skill">
        <li v-for="(item,index) in getSkill" :key="index">
          {{item}}
        </li>
      </ul>

      <h5 class="item">工作地址</h5>
      <p class="address">{{form.address}}</p>
    </div>
    <div class="middle_right">
      <div class="company_content">
        <img class="img" :src="form.cimg"/>
        <ul class="company_list">
          <li>
            <router-link :to="'/company/'+form.cid" class="company_name">{{form.cname}}</router-link>
          </li>
          <li>
            <!--<span class="glyphicon glyphicon-th-large"></span>-->
            <i slot="prefix" class="el-icon-menu"></i>
            {{form.field}}
          </li>
          <li>
            <!--<span class="glyphicon glyphicon-repeat"></span>-->
            <i slot="prefix" class="el-icon-refresh"></i>
            {{form.fiance}}
          </li>
          <li>
            <!--<span class="glyphicon glyphicon-paperclip"></span>-->
            <i slot="prefix" class="el-icon-share"></i>
            {{form.sentence}}
          <li>
            <!--<span class="glyphicon glyphicon-user"></span>-->
            <i slot="prefix" class="el-icon-news"></i>
            {{form.city}}
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
      created(){

        // this.$nextTick(function () {
        //   console.log('123132132123132',this.$refs.element.height);
        // });

        this.jkey = this.$route.params.jkey;

        this.$reqs.get('/job/selectJobDetailForUser',{
          params: {
            jkey: this.jkey,
            // id: this.$route.params.id,
          }
        }).then((res)=>{
          this.form = res.data[0];
          console.log(this.form);
          if(this.form.jobTag){
            this.form.jobTag =  this.form.jobTag.split(',');
          }
          else{
            this.form.jobTag = []
          }
        }).catch((err)=>{
          console.log(err.toString())
        });


        this.$reqs.get('/collect/isCollect',{
          params:{
            jkey:this.jkey,
          }
        }).then((res)=>{
          console.log('12313',res.data);
          if(res.data.length!==0){
            this.isCollect = true
          }
          else{
            this.isCollect = false
          }
        }).catch((err)=>{
          console.log(err.toString())
        });


        this.$reqs.get('/job_resume/isPost',{
          params:{
            jkey:this.jkey,
          }
        }).then((res)=>{
          console.log('3',res.data);
          if(res.data.length!==0){
            this.isPost = true
          }
          else{
            this.isPost = false
          }
        }).catch((err)=>{
          console.log(err.toString())
        });

      },
      data(){
          return{
            jkey:'',
            form:[],
            isCollect:false,
            isPost:false,
          }
      },
      methods:{
        cancel(){
          this.$reqs.post('/collect/deleteCollectList',{
            jkey:this.form.jkey
          }).then((res)=>{
            this.isCollect = false
          }).catch((err)=>{
            console.log(err.toString())
          });
        },
        formatDateTime(inputTime) {
          let date = new Date(inputTime);
          let y = date.getFullYear();
          let m = date.getMonth() + 1;
          m = m < 10 ? ('0' + m) : m;
          let d = date.getDate();
          d = d < 10 ? ('0' + d) : d;
          let h = date.getHours();
          h = h < 10 ? ('0' + h) : h;
          let minute = date.getMinutes();
          let second = date.getSeconds();
          minute = minute < 10 ? ('0' + minute) : minute;
          second = second < 10 ? ('0' + second) : second;
          return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
        },
        post(){
          this.$reqs.post('/job_resume/insertResume',{
            cid: this.form.cid,
            jkey:this.form.jkey,
            rtime:this.formatDateTime(new Date())
          }).then((res)=>{
            console.log(res.data);
            this.isPost = true;
          }).catch((err)=>{
            console.log(err.toString())
          });
        },
        collect(){
          this.$reqs.post('/collect/insertCollectList',{
            jkey:this.form.jkey,
            time:this.formatDateTime(new Date())
          }).then((res)=>{
            // console.log(res.data)
            this.isCollect = true
          }).catch((err)=>{
            console.log(err.toString())
          });
        }

      },
      computed:{
        getTemptation(){
          let list = this.form.temptation;
          let arr = list.split('\n');
          return arr
        },
        getDuty(){
          let list = this.form.duty;
          let arr = list.split('\n');
          return arr
        },
        getAbility(){
          let list = this.form.ability;
          let arr = list.split('\n');
          return arr
        },
        getSkill(){
          let list = this.form.skill;
          let arr = list.split('\n');
          return arr
        },
      },
    }
</script>

<style scoped>

  .top{
    height: 216px;
    width: 915px;
    background-color: white;
    margin: 20px auto;
    /*text-align: center;*/
  }

  .left{
    width: 600px;
    height: 230px;
    background-color:  white;
    float: left;
    border: solid whitesmoke;
    /*padding-top: 20px;*/
    /*display: inline-block;*/
  }

  .right{
    width: 300px;
    height: 230px;
    background-color: whitesmoke;
    border: solid whitesmoke;
    float: left;
    /*display: inline-block;*/
  }

  .time{
    letter-spacing: 0;
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

  .cname{
    margin: 20px 0 0 20px;
    color: #555555;
  }

  .btn{
    position: relative;
    top: 50px;
  }

  .middle{
    /*height: 810px;*/
    width: 915px;
    margin: 0 auto;



  }

  .middle_left{
    /*height: 800px;*/
    width: 600px;
    background-color: whitesmoke;
    border: solid whitesmoke;
    float: left;
    padding-bottom: 30px;
    margin-bottom: 50px;
  }

  .middle_right{
    /*height: 800px;*/
    width: 300px;
    border-right: solid whitesmoke;
    background-color: white;
    float: left;
    padding-bottom: 50px;
    margin-bottom: 50px;

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
    margin-bottom: 0;
    text-align: left;
    font-size: small;
    white-space: pre-wrap;
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
    display: block;
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

  .temptation,.ability,.duty,.skill{
    list-style: none;
    font-size: small;
    width: 550px;
    padding-left: 30px;
    text-align: left;
  }
  .temptation>li,.ability>li,.duty>li,.skill>li{
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;
  }

  .address{
    padding-left: 10px;
    white-space: pre-wrap;
    width: 80%;
  }

  .job_tag{
    display: block;
    margin: 10px 0 10px 15px;
    text-align: left;
  }

  .el-tag{
    margin-right: 10px;
  }

</style>
