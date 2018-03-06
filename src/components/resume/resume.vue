<template>
<div>
  <div style="text-align: left">
    <router-link to="/resumeList"><el-button size="small" icon="el-icon-d-arrow-left" plain class="back">返回</el-button></router-link>
    <el-button size="small"  plain class="danger" type="danger">不合适</el-button>
    <el-button size="small"  plain class="primary" type="primary">通过</el-button>
  </div>
  <el-tabs type="border-card">

    <el-tab-pane label="基本信息">
      <div class="info">
        <img src="@/assets/img2.jpg"/>
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
          <span v-show="job.supplement!== ''" class="supplement">{{job.supplement}}</span>
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
              <p v-for="(arrItem , index) in getWorkDesc(item.describe)" :key="index">{{arrItem}}</p>
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
              <span class="proName">{{item.name}}</span>
              <span class="intern_time">{{item.start}}  -  {{item.end}}</span>
              <div class="describe">
                <p v-for="(arrItem , index) in getWorkDesc(item.describe)" :key="index">{{arrItem}}</p>
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
            <el-progress :stroke-width="12" :percentage="item.value"></el-progress>
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
      methods:{
        getWorkDesc (item) {
          var arr = item.split('\n');
          return arr
        },
      },
      data(){
        return{
          info:{
            name:'张三',
            sex:'男',
            age: 22 ,
            city:'广州',
            major:'计算机',
            school:'广州大学',
            phone:'18826054780',
            email:"617851736@qq.com"
          },
          job:{
            name:'java工程师',
            type:'实习',
            city:'广州',
            salary:'2k-5k',
            supplement:'努力转正'
          },
          eduData:[
            {
              school:'广州大学',
              degree:'本科',
              major:'计算机',
              start:'2014.09.01',
              end:'2018.06.25'
            },
            {
              school:'广州大学',
              degree:'本科',
              major:'计算机',
              start:'2014.09.01',
              end:'2018.06.25'
            }
          ],
          workData: [
            {
              company: 'A公司',
              position: 'java工程师',
              start: "2015.02.11",
              end: '2015.05.15',
              describe:'米矿服务品牌，从新零售做起\n' +
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
            }
          ],
          proData: [
            {
              name: '项目A',
              start: "2015.02.11",
              end: '2015.05.15',
              describe:'米矿服务品牌，从新零售做起\n' +
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
            }
          ],
          describe:'米矿服务品牌，从新零售做起\n' +
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
          skillData:[
            {
              skill:'JavaScript',
              value: 80
            },
            {
              skill:'html5',
              value: 70
            },
          ],
          form:{
            skill:'',
            value:10
          },
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
    margin: 5px 0 0 0;
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
