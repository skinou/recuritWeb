<template>
  <div class="item">
   <div>
     <h4 class="job_name"><router-link :to="'/resumeList/'+ data.jkey">{{data.jname}}</router-link></h4>
     <span class="job_salary">{{data.salary}}</span>
     <span class="job_condition">{{data.city}} / {{data.experience}} / {{data.degree}}</span>
   </div>
    <div>
      <span class="resumeNum">收到简历：{{data.num}}</span>
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
    /*font-weight: 500;*/
  }


  .job_name>a{
    text-decoration: none;
    color: black;
  }

  .job_salary {
    text-align: left;
    color: dodgerblue;
    display: inline-block;
    margin: 13px 0 0 10px;
    height: 30px;
    vertical-align: bottom;
    /*color: grey;*/

  }

  .job_condition{
    /*text-align: left;*/
    /*font-weight: lighter;*/
    margin: 13px 0 0 20px;
    font-size: small;
    display: inline-block;
    height: 23px;
    /*width: 400px;*/
    color: grey;
    vertical-align: top;
    /*float: left;*/
  }

  .resumeNum{
    margin: 5px 0 0 21px;
    color: gray;
    display: inline-block;
    vertical-align: bottom;
  }


</style>
