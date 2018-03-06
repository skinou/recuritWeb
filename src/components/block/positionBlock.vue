<template>
  <div class="item">
    <img src="@/assets/img2.jpg" class="img"/>
    <span class="job_name"><router-link to="/positionJob">{{positionData.name}}[{{positionData.address}}]</router-link></span>
    <span class="job_salary">({{positionData.salary}})</span>
    <span class="job_time">{{positionData.time}}</span>
    <span class="job_condition">{{positionData.experience}}/{{positionData.degree}}</span><br>
    <span class="job_tag"><el-tag type="info" v-for="(item,index) in positionData.jobTag" :key="index" size="mini" >{{item}}</el-tag></span>
  </div>
</template>

<script>
    export default {
      name: "position-block",
      props:{
        positionData: Object,
      },
    }
</script>

<style scoped>
  .item{
    width: 550px;
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
    width: 50px;
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
    width: 400px;
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
