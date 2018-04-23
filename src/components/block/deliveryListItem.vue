<template>
  <div class="item">
    <!--<img src="@/assets/img2.jpg" class="img"/>-->
    <span class="left"></span>
    <router-link :to="'job/'+item.jkey"><h3 class="job">{{item.jname}}</h3></router-link>
    <span class="salary">{{item.salary}}</span>
    <span class="state" :class="{'pass': pass , 'fail':fail}">{{item.state}}</span>
    <span class="city">{{item.city}} / {{item.experience}} / {{item.degree}} / {{item.jtype}}</span>
    <span class="date">{{item.rtime}}</span>
  </div>
</template>

<script>
    export default {
      name: "delivery-list-item",
      props:{
        item:Object,
        pass:Boolean,
        fail:Boolean
      },
    }
</script>

<style scoped>
  .item{
    width: 600px;
    height: 100px;
    margin: 0 auto;
    background-color: ghostwhite;
  }
  .left{
    width: 40px;
    height: 100px;
    margin-right: 20px;
    float: left;
    background-color: dodgerblue;
  }
  .job{
    display: inline-block;
    max-width: 130px;
    height: 30px;
    float: left;
    text-align: left;
    margin: 20px 0 0 0;
    color: black;
    font-size: large;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .city{
    display: inline-block;
    width: 300px;
    height: 30px;
    float: left;
    text-align: left;
    margin: 5px 0 10px 0;
    color: gray;
  }
  .state{
    display: inline-block;
    width: 170px;
    height: 20px;
    float: right;
    text-align: right;
    margin: 20px 30px 10px 0;
    color: dodgerblue;
  }
  .salary{
    display: inline-block;
    width: 60px;
    height: 20px;
    float: left;
    text-align: left;
    margin: 20px 0 10px 0;
    color: red;
    font-size: large;
    padding-left: 10px;

  }
  .date{
    display: inline-block;
    width: 100px;
    height: 30px;
    float: right;
    text-align: right;
    margin: 10px 30px 10px 0;
    font-size: small;
    color: gray;
  }
  .pass{
    color: limegreen;
  }
  .fail{
    color: red;
  }
</style>
