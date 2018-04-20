<template>
<div>
  <div style="text-align: left">
    <router-link :to="'/resumeList/'+jkey"><el-button size="small" icon="el-icon-d-arrow-left" plain class="back">返回</el-button></router-link>
    <el-button  size="small"  plain class="danger" type="danger"  @click="changeToFail">不合适</el-button>
    <el-button v-if="state==='投递成功'" size="small"  plain class="primary" type="primary" @click="changeToCommun">待沟通</el-button>
    <el-button v-else-if="state==='待沟通'" size="small"  plain class="primary" type="primary" @click="changeToPass">通过</el-button>
  </div>
  <el-tabs type="border-card">

    <el-tab-pane label="基本信息">
      <div class="info">
        <img v-if="info.img!==null" :src="info.img"/>
        <img v-else src="@/assets/boy.png"/>
        <div class="item_name">{{info.name}}</div>
        <ul>
          <li>
            <i class="el-icon-document"></i>
            {{info.sex}} {{info.age}} {{info.degree}}  {{info.city}}
          </li>
          <li>
            <i class="el-icon-edit-outline"></i>
            {{info.major}}   {{info.school}}
          </li>
          <li>
            <i class="el-icon-phone-outline"></i>
            {{info.phone}}
            &nbsp;&nbsp; {{info.email}}
          </li>
        </ul>
      </div>

      <div class="content">
        <div>
          <span class="name"><i class="el-icon-star-off"></i>期望工作：{{job.name}}</span>
          <span class="salary">（{{job.salary}}）</span>
          <span class="type">{{job.type}}</span>
          <span class="city"><i class="el-icon-location-outline"></i>{{job.city}}</span>
        </div>
        <div style="margin-top: 10px">
          <span class="add"> <i class="el-icon-edit"></i>补充:</span>
          <span v-show="job.statement!== ''" class="supplement">{{job.statement}}</span>
        </div>
      </div>

      <ul class="edu_ul">
        <li v-for="(item , index) in eduData" :key="index">
          <div class="edu_content">
            <span>{{item.school}}</span>
            <span style="margin-left: 10px">{{item.degree}} · {{item.major}}</span>
            <span style="display: block; margin-top: 10px">{{item.start}}  - {{item.end}}</span>
          </div>
        </li>
      </ul>

    </el-tab-pane>

    <!--<el-tab-pane label="教育经历">-->
     <!---->
    <!--</el-tab-pane>-->

    <el-tab-pane label="工作经验">
      <ul class="work">
        <li v-for="(item , index) in workData" :key="index">
          <div class="intern_content">
            <span class="company">{{item.company}}</span>
            <span class="position">{{item.position}}</span>
            <span class="intern_time">{{item.start}} - {{item.end}}</span>
            <!--<span class="intern_describe">{{item.describe}}</span>-->
            <div class="describe">
              <p v-for="(arrItem , index) in getWorkDesc(item.statement)" :key="index">{{arrItem}}</p>
            </div>
          </div>
        </li>
      </ul>
    </el-tab-pane>

    <el-tab-pane label="项目经验">
      <div class="project">
        <ul class="work">
          <li v-for="(item , index) in proData" :key="index">
            <div class="intern_content">
              <span class="proName">{{item.project}}</span>
              <span class="intern_time">{{item.start}}  -  {{item.end}}</span>
              <div class="describe">
                <p v-for="(arrItem , index) in getWorkDesc(item.statement)" :key="index">{{arrItem}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </el-tab-pane>

    <el-tab-pane label="自我描述">
      <div class="selfDescribe">
        <ul>
          <li v-for="(arrItem , index) in getWorkDesc(describe)" :key="index" >{{arrItem}}</li>
        </ul>
      </div>
    </el-tab-pane>

    <el-tab-pane label="技能评价">
      <div class="skill">
        <ul>
          <li v-for="(item,index) in skillData" :key="index">
            <h5 class="title">{{item.skill}}</h5>
            <el-progress :stroke-width="12" :percentage="item.sValue"></el-progress>
          </li>
        </ul>
      </div>
    </el-tab-pane>

  </el-tabs>
</div>
</template>

<script>
    export default {
      name: "resume",
      created(){

        this.rkey =  this.$route.params.rkey;

        this.$reqs.get('/job_resume/getJobResume' ,{
          params: {
            rkey: this.rkey,
          }
        }).then( (res)=> {
          this.state = res.data[0].state;
          this.jkey = res.data[0].jkey;
          console.log('state',this.state)
        }).catch(function (res) {
        });



        this.$reqs.get('/job_resume/userInfo' ,{
          params: {
            id: this.$route.params.id,
          }
        }).then( (res)=> {
            this.info = res.data[0]
          }).catch(function (res) {
        });


        this.$reqs.get('/job_resume/userExpect' ,{
          params: {
            id: this.$route.params.id,
          }
        }).then( (res)=> {
          this.job = res.data[0]
        }).catch(function (res) {
        });


        this.$reqs.get('/job_resume/getUserEducation' ,{
          params: {
            id: this.$route.params.id,
          }
        }).then( (res)=> {
          this.eduData = res.data
        }).catch(function (res) {
        });


        this.$reqs.get('/job_resume/getUserWork' ,{
          params: {
            id: this.$route.params.id,
          }
        }).then( (res)=> {
          this.workData = res.data
          console.log(res.data)
        }).catch(function (res) {
        });

        //
        this.$reqs.get('/job_resume/getUserPro' ,{
          params: {
            id: this.$route.params.id,
          }
        }).then( (res)=> {
          this.proData = res.data;
          console.log(res.data)
        }).catch(function (res) {
        });
        //
        //
        this.$reqs.get('/job_resume/getUserDes' ,{
          params: {
            id: this.$route.params.id,
          }
        }).then( (res)=> {
          this.describe = res.data[0].statement;
          console.log(res.data[0].statement)
        }).catch(function (res) {
        });
        //
        //
        this.$reqs.get('/job_resume/getUserSkill' ,{
          params: {
            id: this.$route.params.id,
          }
        }).then( (res)=> {
          this.skillData = res.data
        }).catch(function (res) {
        });


      },
      methods:{
        getWorkDesc (item) {
          var arr = item.split('\n');
          return arr
        },

        changeToCommun(){
          let state = "待沟通";
          this.$reqs.post('/job_resume/updateJobResumeState' ,{
            rkey: this.rkey,
            state: state
          }).then( (res)=> {
            console.log(res.data);
            this.state = "待沟通";
          }).catch(function (res) {
          });
        },

        changeToFail(){
          let state = "不合适";
          this.$reqs.post('/job_resume/updateJobResumeState' ,{
            rkey: this.rkey,
            state: state
          }).then( (res)=> {
            console.log(res.data);
            this.state = "不合适";
          }).catch(function (res) {
          });
        },

        changeToPass(){
          let state = "通过";
          this.$reqs.post('/job_resume/updateJobResumeState' ,{
            rkey: this.rkey,
            state: state
          }).then( (res)=> {
            console.log(res.data);
            this.state = "通过";
          }).catch(function (res) {
          });
        },


      },
      data(){
        return{
          state:'',
          jkey:'',
          rkey:'',
          info:{},
          job:{},
          eduData:[],
          workData: [],
          proData: [],
          describe:'',
          skillData:[
            // {
            //   skill:'JavaScript',
            //   value: 80
            // },
            // {
            //   skill:'html5',
            //   value: 70
            // },
          ],
          // form:{
          //   skill:'',
          //   value:10
          // },
        }
      }
    }
</script>

<style scoped>
.el-tabs{
width: 750px;
  margin: 30px auto;
}
 .back{
  border: none;

}
 .primary,.danger{
   float: right;
   margin-right: 20px;
 }
.info{
  margin: 20px 20px 20px 20px;
}
.info>ul{
  list-style: none;
  padding: 0 0 0 0;
}
.info>ul>li{
  margin-top: 10px;
}
  .info>img{
    width: 80px;
    height: 80px;
  }
.content{
  width: 550px;
  height: 120px;
  border: ghostwhite solid 1px;
  margin: 20px auto;
  text-align: left;
  border-radius: 3px;
  background-color: ghostwhite;
}
.name{
  display: inline-block;
  margin: 20px 0 0 50px;
}
.city,.type{
  display: inline-block;
  margin: 20px 0 0 10px;
}
.salary{
  display: inline-block;
  margin: 10px 0 0 0;
  color: dodgerblue;
}
.add{
  margin: 20px 0 0 50px;
}
.supplement{
  margin: 10px 0 0 10px;
}
.edu_ul{
  width: 550px;
  padding: 10px 0 20px 0;
  list-style: none;
  margin: 20px auto;
  background-color: ghostwhite;
}
.edu_ul>li{;
  width: 500px;
  height: 100px;
  background-color: white;
  border: white solid 2px;
  border-radius: 5px;
  margin: 10px auto;
  display: inline-block;
}
.edu_content {
  height: 60px;
  margin: 20px 0 0 60px;
  /*display: inline-block;*/
  float: left;
  text-align: left;
}
.work{
  width: 700px;
  /*height: 500px;*/
  list-style: none;
  margin: 30px auto;
  padding: 0 0 0 0;
}
.work>li{
  width: 600px;
  padding: 0 0 0 0;
  /*min-height: 100px;*/
  height: auto;
  border: whitesmoke solid 1px;
  background-color: ghostwhite;
  border-radius: 5px;
  margin: 20px auto;
}
.intern_content{
  width: 500px;
  margin:  0 auto;
  padding: 20px;
  text-align: left;

}
.company,.proName{
  display: block;
  white-space: pre-wrap;
  word-break: break-all;
}
.position{
  display: inline-block;
  margin: 10px 10px 0 0;
  white-space: pre-wrap;
  word-break: break-all;
}
.intern_time{
  display: inline-block;
  font-size: small;
  margin: 10px 0 0 0;
  white-space: pre-wrap;
  word-break: break-all;
}
.describe{
  margin-top: 20px;
}
  .describe>p{
    font-size: small;
    color: dimgrey;
    margin: 10px 0 0 0;
    width: 450px;
    white-space: pre-wrap;
    word-break: break-all;
  }
  .selfDescribe{
    width: 600px;
    padding: 10px 50px 30px 50px;
    margin: 10px auto;
    background-color: ghostwhite;
    word-break: break-all;
    white-space: pre-wrap;
    text-align: left;
  }
  .selfDescribe>ul{
    list-style: decimal;
    padding: 0 0 0 0;
  }
.selfDescribe>ul>li{
  margin-bottom: 5px;
}
.skill{
  width: 600px;
  /*padding: 30px 50px 30px 50px;*/
  margin: 30px auto;
  /*min-height: 100px;*/
  background-color: ghostwhite;

}
.skill>ul{
  list-style: none;
  margin: 0 auto;
  padding: 10px 0 50px 0;
}

.skill>ul>li{
  width: 500px;
  margin: 10px auto;
  padding: 0 10px 20px 10px;
}

  .el-progress{
    width: 400px;
    margin: 0 auto;
  }

</style>
