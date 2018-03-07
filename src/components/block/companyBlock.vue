<template>
  <div class="company_item">
    <img class="logo" :src="data.company_img"/>
    <span class="company"><router-link to="/company">{{data.company_name}}</router-link></span>
    <span class="company_introduction">{{data.company_field}}</span>
    <span class="company_describe">{{data.company_statement}}</span>
    <div class="block">
      <span class="number">{{data.num_comment}}</span>
      <span class="block_item">面试评价</span>
    </div>
    <div class="block">
      <span class="number">{{data.num_position}}</span>
      <span class="block_item">在招职位</span>
    </div>
    <div class="block">
      <span class="number">{{data.num_rate}}%</span>
      <span class="block_item">简历处理率</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "company-block",
      props:{
       data: Object
      }
    }
</script>

<style scoped>
  .company_item{
    width: 280px;
    height: 230px;
    padding-top: 20px;
    margin-right: 20px;
    margin-left: 30px;
    margin-top: 20px;
    border:1px solid lightgrey;
    /*float: left;*/
    text-align: center;
    display: inline-block;
  }

  .company_item:hover{
    box-shadow:  0 0 2px darkgray;
  }


  .logo{
    width: 70px;
    height: 70px;
    background: yellow;
    margin: 0 auto;
  }

  .company{
    position: relative;
    top: 8px;
    width: 150px;
   text-align: center;
    margin: 0 auto;
    display: block;
  }

  .company>a{
    width: 150px;
    color: #333333;
    font-weight: lighter;
    /*font-size: small;*/
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .company>a:hover{
    text-decoration: none;
    color: #31b0d5;
  }

  .company_introduction{
    font-weight: lighter;
    /*float: left;*/
    font-size: smaller;
    width: 200px;
    margin: 10px auto;
    color: #9d9d9d;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .company_describe{
    display: block;
    margin: 0 20px 0 20px;
    color: #9d9d9d;
    height: 25px;
    text-align: center;
    font-size: small;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }

  .block{
    width: 90px;
    height: 73px;
    /*float: left;*/
    margin: 5px 0 0 0;
    display: inline-block;
  }

  .number{
    width: 93px;
    color: #31b0d5;
    position: relative;
    top: 13px;
    display: block;
  }

  .block_item{
    position: relative;
    top: 18px;
    color: #555555;
    font-weight: lighter;
    font-size: smaller;
    display: block;
  }

</style>
