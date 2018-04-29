<template>
  <div class="job_item">
    <div class="job_intro">
      <router-link to="/job/4"><span class="job_name">{{data.job_name}}</span></router-link>
      <span class="job_time">{{data.job_time}}</span>
      <span class="job_condition">{{data.job_experience}}/{{data.job_degree}}</span>
      <span class="job_salary">{{data.job_salary}}</span>
      <span class="job_tag"> <el-tag v-for="(item,index) in tags" :key="index" size="mini">{{item}}</el-tag> </span>
    </div>
    <hr>
    <div class="job_company">
      <img class="img" :src="data.company_img"/>
      <span class="company_name">{{data.company_name}}</span><br>
      <span class="company_intro">{{data.company_field}}/{{data.company_fiance}}/{{data.company_city}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "job-block",
      props : {
        data: Object
      },
      computed:{
        tags(){
          let arr = this.data.job_tag.split(',')
          return arr
        }
      }
    }
</script>

<style scoped>
  .job_item{
    width: 280px;
    height: 200px;
    padding-top: 20px;
    margin-right: 20px;
    margin-left: 30px;
    margin-top: 20px;
    border:1px solid lightgrey;
    /*float: left;*/
    display: inline-block;
  }

  .job_item:hover{
    box-shadow:  0 0 3px darkgray;
  }

  .job_intro{
    width: 100%;
    height: 90px;
  }

  .job_company{
    height: 80px;
    width: 100%;
  }


  .job_name{
    float: left;
    margin-left: 15px;
    /*font-weight: lighter;*/
    width: 150px;
    height: 22px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: dodgerblue;
  }

  a{
    color: dodgerblue;
  }

  .job_time{
    float: left;
    margin-right: 20px;
    font-size: smaller;
    font-weight: lighter;
    color: #9d9d9d;
    width: 90px;
    height: 22px;
    text-align: right;

  }

  .job_salary {
    color: red;
    display: inline-block;
    margin: 10px 20px 0 0;
    float: right;
  }

  .job_tag{
    display: inline-block;
    margin: 10px 0 0 15px;

  }

  .el-tag{
    margin-right: 10px;
  }

  .job_condition{
    font-weight: lighter;
    /*float: left;*/
    margin-left: 15px;
    margin-top: 10px;
    font-size: smaller;
    color: #9d9d9d;
    display: inline-block;
    text-align: left;
    width: 150px;
  }

  hr{
    width: 90%;
    color: white;

  }

  .img{
    width: 50px;
    height: 50px;
    /*background: yellow;*/
    float: left;
    margin: 10px 5px 0 15px;
    /*display: inline-block;*/
  }

  .company_name{
    font-weight: lighter;
    float: left;
    font-size: smaller;
    margin: 15px 0 0 10px;
    /*display: inline-block;*/
  }

  .company_intro{
    width: 180px;
    font-weight: lighter;
    float: left;
    font-size: small;
    margin: 5px 0 0 10px;
    color: #9d9d9d;
    word-break:normal;
    white-space:pre-wrap;
    text-align: left;
    /*display: inline-block;*/
  }

  a{
    text-decoration: none;
    color: dodgerblue;
  }
</style>
