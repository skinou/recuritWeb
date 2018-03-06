<template>
  <div class="item">
    <img src="@/assets/img2.jpg" class="img"/>
    <span class="job_name"><router-link to="/job">{{jobListItem.name}}[{{jobListItem.address}}]</router-link></span>
    <span class="job_salary">({{jobListItem.salary}})</span>
    <span class="job_time">{{jobListItem.time}}</span>
    <span class="job_condition">{{jobListItem.experience}}/{{jobListItem.degree}}</span><br>
    <span class="job_tag"><el-tag type="info" v-for="(item,index) in jobListItem.jobTag" :key="index" size="mini" >{{item}}</el-tag></span>
    <el-button type="primary" icon="el-icon-star-off" size="small" plain @click="btnChange">{{buttonText}}</el-button>
  </div>
</template>

<script>
    export default {
      name: "collect-list-item",
      props:{
        jobListItem: Object,
        cancel:false
      },
      data(){
        return{
          buttonText:'取消',
        }
      },
      methods:{
        btnChange(){
          if(this.buttonText==='取消'){
            this.buttonText='收藏'
          } else {
            this.buttonText='取消'
          }
        }
      }
    }
</script>

<style scoped>
  .item{
    width: 750px;
    height: 105px;
    /*background-color: black;*/
    margin: 0 auto;
    border: whitesmoke solid 2px;
    border-radius: 5px;
    text-align: left;

  }

  .job_name{
    text-align: left;
    /*float: left;*/
    margin: 13px 0 0 20px;
    display: inline-block;
    height: 30px;
  }

  .job_time {
    float: right;
    margin: 13px 50px 0 0;
    color: black;
    font-size: small;
    display: inline-block;
    height: 30px;
    width: 150px;
    text-align: right;
  }

  .job_name>a{
    text-decoration: none;
    color: dodgerblue;
  }

  .job_salary {
    text-align: left;
    color: dodgerblue;
    display: inline-block;
    margin: 13px 0 0 20px;
    /*float: right;*/
    height: 30px;
    /*float: left;*/

  }

  .job_condition{
    text-align: left;
    font-weight: lighter;
    margin: 0 0 0 20px;
    font-size: smaller;
    display: inline-block;
    height: 23px;
    width: 500px;
    color: black;
    float: left;
  }

  .job_tag{
    display: block;
    margin: 0 0 0 10px;
    text-align: left;
    float: left;

  }

  .img{
    width: 85px;
    height: 85px;
    margin: 10px 0 10px 10px;
    float: left;
  }

  .company_intro{
    width: 130px;
    height: 20px;
    margin: 5px 0 0 20px;
    float: left;
    display: block;
    font-size: small;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .el-tag{
    margin: 0 10px 0 10px;
  }

  .el-button{
    float: right;
    margin-right: 30px;
    position: relative;
    top: -20px;
  }
</style>
