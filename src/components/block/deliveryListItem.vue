<template>
  <div class="item">
    <img src="@/assets/img2.jpg" class="img"/>
    <span class="job">{{item.job}}</span>
    <span class="state" :class="{'pass': pass , 'fail':fail}">{{item.state}}</span>
    <span class="salary">{{item.salary}}</span>
    <span class="date">{{item.date}}</span>
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
    width: 500px;
    height: 100px;
    margin: 0 auto;
    background-color: ghostwhite;
  }
  .img{
    width: 60px;
    height: 60px;
    margin: 20px;
    float: left;
  }
  .job{
    display: inline-block;
    width: 200px;
    height: 20px;
    float: left;
    text-align: left;
    margin: 20px 0 10px 0;
    color: gray;
  }
  .state{
    display: inline-block;
    width: 170px;
    height: 20px;
    float: left;
    text-align: right;
    margin: 20px 30px 10px 0;
    color: dodgerblue;
  }
  .salary{
    display: inline-block;
    width: 200px;
    height: 30px;
    float: left;
    text-align: left;
    margin: 5px 0 10px 0;
    font-size: small;
    color: gray;
  }
  .date{
    display: inline-block;
    width: 170px;
    height: 30px;
    float: left;
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
