<template>
  <div class="item">
   <div>
     <span class="job_name"><router-link to="/resumeList">{{data.name}}</router-link></span>
     <span class="job_salary">({{data.salary}})</span>
     <span class="job_condition">{{data.experience}}/{{data.degree}}</span>
   </div>
    <div>
      <span class="resumeNum">已收到简历：{{data.received}}</span>
      <span class="resumeNum" :class="{'red': data.undo > 0}">未处理：{{data.undo}}</span>
    </div>


  </div>
</template>

<script>
    export default {
      name: "resume-job-block",
      props:{
        data: Object
      },
    }
</script>

<style scoped>
  .item{
    width: 550px;
    height: 90px;
    margin: 0 auto;
    border: whitesmoke solid 2px;
    border-radius: 5px;
    text-align: left;

  }

  .job_name{
    text-align: left;
    margin: 13px 0 0 20px;
    display: inline-block;
    height: 30px;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: bottom;
  }


  .job_name>a{
    text-decoration: none;
    color: dodgerblue;
  }

  .job_salary {
    text-align: left;
    color: dodgerblue;
    display: inline-block;
    margin: 13px 0 0 10px;
    height: 30px;
    vertical-align: bottom;

  }

  .job_condition{
    /*text-align: left;*/
    /*font-weight: lighter;*/
    margin: 13px 0 0 20px;
    font-size: smaller;
    display: inline-block;
    height: 23px;
    /*width: 400px;*/
    color: dimgrey;
    vertical-align: top;
    /*float: left;*/
  }

  .resumeNum{
    margin: 5px 0 0 21px;
    color: dimgrey;
    display: inline-block;
    vertical-align: bottom;
  }
  .red{
    color: red;

  }


</style>
