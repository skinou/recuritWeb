<template>
    <div class="item">
      <div class="left">
        <div class="top">
          <!--<img :src="jobListItem.cimg" class="img"/>-->
          <span class="job_name"><router-link :to="'/job/'+jobListItem.jkey">{{jobListItem.jname}}</router-link></span>
          <span class="job_address"> [{{jobListItem.city}}]</span>
          <span class="job_time">{{jobListItem.jtime}}</span>
          <span class="job_condition"> <span class="job_salary">{{jobListItem.salary}}</span>   {{jobListItem.experience}}/{{jobListItem.degree}}/{{jobListItem.jtype}}</span>
        </div>
        <div class="bottom">
          <span class="job_tag"><el-tag type="info" v-for="(item,index) in getTags(jobListItem.jobTag)" :key="index" size="mini" >{{item}}</el-tag></span>
        </div>
      </div>
      <div class="right">
        <img :src="jobListItem.cimg" class="img"/>
        <span class="company_name"><router-link :to="'/company/'+jobListItem.cid">{{jobListItem.cname}}</router-link></span><br>
        <span class="company_intro">{{jobListItem.fiance}} / {{jobListItem.city}}</span>
        <span class="company_intro">{{jobListItem.field}}</span>

      </div>
    </div>
</template>

<script>
    export default {
      name: "job-list-item",
      props:{
          jobListItem: Object
      },
      methods:{
        getTags(jobTag){
          let arr = jobTag.split(',');
          return arr;
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

.left{
  width: 500px;
  height: 100px;
  float: left;
}

.right{
  width: 250px;
  height: 100px;
  float: left;
}


.top{
  width: 100%;
  height: 70px;
}

.bottom{
  width: 100%;
  height: 30px;
}

.job_name,.company_name{
  text-align: left;
  margin: 13px 0 0 20px;
  /*display: inline-block;*/
  height: 25px;
  max-width: 220px;
  min-width: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  float: left;
}

.company_name{
  text-align: left;
  margin: 18px 0 0 20px;
  display: block;
  font-size: 14px;
  height: 20px;
}

.job_time {
  float: right;
  margin: 13px 50px 0 0;
  color: black;
  font-size: small;
  display: inline-block;
  height: 25px;
  /*width: 50px;*/
  text-align: right;
}

.job_name>a,.company_name>a{
  text-decoration: none;
  color: dodgerblue;
}

.job_address{
  text-align: left;
  color: dodgerblue;
  display: inline-block;
  margin: 13px 0 0 5px;
  /*float: right;*/
  height: 25px;
  /*width: 80px;*/
  /*float: left;*/
  font-size: small;

}

.job_condition{
  text-align: left;
  display: block;
  margin: 0 0 0 20px;
  /*float: right;*/
  height: 25px;
  /*width: 80px;*/
  float: left;
  width: 200px;
  font-size: small;
  color: black;
}

.job_salary{
  text-align: left;
  display: inline-block;
  margin: 0 10px 0 0;
  /*float: right;*/
  height: 25px;
  float: left;
  font-size: small;
  color: red;
}

/*.job_condition{*/
  /*text-align: left;*/
  /*font-weight: lighter;*/
  /*margin: 0 0 0 10px;*/
  /*font-size: smaller;*/
  /*display: inline-block;*/
  /*height: 23px;*/
  /*!*width: 200px;*!*/
  /*color: black;*/
  /*float: left;*/
  /*white-space: nowrap;*/
  /*overflow: hidden;*/
  /*text-overflow: ellipsis;*/
/*}*/

.job_tag{
  display: block;
  margin: 0 0 0 10px;
  text-align: left;
  float: left;

}

  .img{
    width: 60px;
    height: 60px;
    margin: 20px 0 20px 10px;
    display: inline-block;
    float: left;
  }

  .company_intro{
    width: 150px;
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

  .fiance{

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
