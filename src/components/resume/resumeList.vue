<template>
<div style="text-align: left">
  <router-link to="/companyResume"><el-button size="small" icon="el-icon-d-arrow-left" plain class="back">返回</el-button></router-link>
  <div class="top">
    <h2>{{form.name}}</h2>
    <h4>{{form.salary}}</h4>
    <h5>{{form.city}}/{{form.experience}}/ {{form.degree}}/ {{form.type}}</h5>
    <h5>发布时间: {{form.date}}</h5>
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
        <img src="@/assets/img1.jpg"/>
        <span><router-link to="resume">{{item.name}}</router-link>/</span>
        <span>{{item.sex}}/</span>
        <span>{{item.school}}/</span>
        <span>{{item.degree}}</span>
        <span><el-tag :type="getType(item.state)" size="small" >{{item.state}}</el-tag></span>
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
</template>

<script>
    export default {
      name: "resume-list",
      computed:{
        getPages() {
          return this.getInfo.length
        },
        getItemData() {
          let list = [...this.getInfo]
          let start = 0
          let end = 4
          start += (this.currentPage - 1) * 4
          end += (this.currentPage - 1) * 4
          let arr = list.slice(start, end)
          return arr
        },
        getInfo(){
          let arr = this.info.filter(item=>item.state===this.filter)
          return arr
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
          stateItem:['未查看','已查看','待沟通','通过','不合适'],
          filter: '未查看',
          currentPage: 1,
          form: {
            name: 'Java开发工程师',
            salary: '10k-20k',
            city: '上海',
            experience: '验1-3年',
            degree: '本科及以上',
            type: '全职',
            date: '2018/2/18上午11:35:05',
            jobTag: ['运营', '跨国', '福利好', '法定假期'],
          },
          info:[
            {
              name:'张三',
              sex:'男',
              school:'广州大学',
              degree:'本科',
              state:'未查看'
            },
            {
              name:'张三',
              sex:'男',
              school:'广州大学',
              degree:'本科',
              state:'未查看'
            },
            {
              name:'张三',
              sex:'男',
              school:'广州大学',
              degree:'本科',
              state:'未查看'
            },
            {
              name:'张三',
              sex:'男',
              school:'广州大学',
              degree:'本科',
              state:'未查看'
            },
            {
              name:'张三',
              sex:'男',
              school:'广州大学',
              degree:'本科',
              state:'未查看'
            },
            {
              name:'张三',
              sex:'男',
              school:'广州大学',
              degree:'本科',
              state:'已查看'
            },
            {
              name:'张三',
              sex:'男',
              school:'广州大学',
              degree:'本科',
              state:'待沟通'
            },
            {
              name:'张三',
              sex:'男',
              school:'广州大学',
              degree:'本科',
              state:'不合适'
            },
            {
              name:'张三',
              sex:'男',
              school:'广州大学',
              degree:'本科',
              state:'通过'
            },
          ]
        }
      }
    }
</script>

<style scoped>
  .top{
    height: 200px;
    width: 700px;
    background-color: whitesmoke;
    margin: 20px auto;
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

  h5{
    margin: 0 0 0 20px;
    letter-spacing: 1px;
    color: #555555;
  }
  .back{
    border: none;
  }
  .el-tag{
    margin-left: 20px;
  }
  .resumeList{
    padding: 20px 0 20px 0;
    list-style: none;
    margin: 20px auto;
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

</style>
