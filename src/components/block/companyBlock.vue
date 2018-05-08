<template>
  <div class="company_item">
    <img class="logo" :src="data.cimg"/>
    <span class="company"><router-link :to="'/company/'+data.cid">{{data.cname}}</router-link></span>
    <span class="company_introduction">{{data.field}}</span>
    <span class="company_describe">{{data.sentence}}</span>
    <div class="block">
      <span class="number"><i class="iconfont">&#xe64a;</i></span>
      <span class="block_item">{{data.city}}</span>
    </div>
    <div class="block">
      <span class="number"><i class="iconfont">&#xe79a;</i></span>
      <span class="block_item">{{data.fiance}}</span>
    </div>
    <div class="block">
      <span class="number"><i class="iconfont">&#xe68c;</i></span>
      <span class="block_item">{{data.teamNum}}</span>
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
    /*height: 230px;*/
    padding-top: 20px;
    margin-right: 20px;
    margin-left: 30px;
    margin-top: 20px;
    border:1px solid whitesmoke;
    box-shadow:  0 0 2px whitesmoke;
    /*background-color: ghostwhite;*/
    background-color:rgba(	248,248,255,0.5);
    text-align: center;
    display: inline-block;
    vertical-align: top;
  }

  /*.company_item:hover{*/
  /*box-shadow:  0 0 2px darkgray;*/
  /*}*/


  .logo{
    width: 70px;
    height: 70px;
    background: yellow;
    margin: 0 auto;
  }

  .company{
    /*position: relative;*/
    /*top: 8px;*/
    width: 150px;
    text-align: center;
    margin: 5px auto;
    display: block;
    font-weight: bold;
    font-family: STHeiti;
    font-size: large;
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
    color: dodgerblue;
  }

  .company_introduction{
    font-weight: lighter;
    /*float: left;*/
    font-size: smaller;
    width: 200px;
    height: 18px;
    margin: 5px auto;
    color: grey;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .company_describe{
    display: block;
    margin: 0 20px 0 20px;
    color: grey;
    height: 25px;
    text-align: center;
    font-size: small;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }

  .block{
    width: 90px;
    height: 43px;
    /*float: left;*/
    margin: 5px 0 0 0;
    display: inline-block;
  }

  .number{
    /*width: 93px;*/
    color: black;
    /*position: relative;*/
    /*top: 13px;*/
    margin: 10px 0 10px 0;
    display: block;
  }

  .block_item{
    /*position: relative;*/
    /*top: 18px;*/
    color: #555555;
    font-weight: lighter;
    font-size: smaller;
    display: block;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .iconfont{
    font-family:"iconfont" !important;
    font-size:18px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: black;
    /*height: 20px;*/
    /*line-height: 20px;*/
    margin-right: 5px;
    padding-bottom: 2px;
    /*color: dodgerblue;*/
    /*display: inline-block;*/
  }

</style>
