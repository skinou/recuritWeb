<template>
  <div class="item">
    <router-link :to="'/job/'+ positionData.jkey"><span class="job_name">{{positionData.jname}}</span></router-link>
    <span class="job_salary">{{positionData.salary}}</span>
    <span class="job_time">{{positionData.jtime}}</span>
    <span class="job_condition">{{positionData.city}} / {{positionData.experience}} / {{positionData.degree}}</span><br>
    <span class="job_tag" v-show="getTags!==null"><el-tag type="primary" v-for="(item,index) in getTags" :key="index" size="mini" >{{item}}</el-tag></span>
  </div>
</template>

<script>
  export default {
    name: "position-block",
    props:{
      positionData: Object,
    },
    computed:{
      getTags(){
        if(this.positionData.jobTag){
          let tag =  this.positionData.jobTag.split(',');
          return tag
        }
        else{
          return null
        }
      }
    }
  }
</script>

<style scoped>
  .item{
    width: 600px;
    height: 105px;
    /*background-color: black;*/
    /*margin: 0 auto;*/
    /*border: whitesmoke solid 2px;*/
    border-radius: 5px;
    text-align: left;
    display: inline-block;
    vertical-align: top;


  }

  .job_name{
    text-align: left;
    /*float: left;*/
    margin: 13px 0 0 20px;
    display: inline-block;
    height: 30px;
    color: dodgerblue;
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: top;
    font-size: large;
  }

  .job_time {
    float: right;
    margin: 13px 50px 0 0;
    color: black;
    font-size: small;
    display: inline-block;
    height: 30px;
    /*width: 50px;*/
    text-align: right;
  }


  .job_salary {
    text-align: left;
    color: red;
    display: inline-block;
    margin: 13px 0 0 20px;
    /*float: right;*/
    height: 30px;
    vertical-align: top;
    font-size: large;
    /*float: left;*/

  }

  .job_condition{
    text-align: left;
    /*font-weight: lighter;*/
    margin: 0 0 0 20px;
    font-size: small;
    display: inline-block;
    height: 23px;
    width: 570px;
    color: black;
    float: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
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
