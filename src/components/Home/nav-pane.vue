<template>
<div>
  <el-menu
    default-active="技术"
    >
    <el-menu-item
      v-for="(item ,index) in nav"
      :key="index"
      :index="item"
      @click="handClick(index)"
    >
      <span slot="title">{{item}}</span>
    </el-menu-item>
  </el-menu>

  <div class="nav-content">
    <div
      v-for="(dataItem ,index) in data"
      :key="index"
      class="navItem"
    >
      <span>{{dataItem.item}}</span>
     <div class="aItem">
       <a
         v-for="(aItem ,index) in dataItem.itemData"
         :key="index"
       >{{aItem}}</a>
     </div>
    </div>
  </div>

  <el-carousel height="210px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
  import dataList from '@/store/nav-pane'
    export default {
      name: "nav-pane",
      data(){
        return{
          nav: dataList.nav,
          data: dataList.data[0]
        }
      },
      created (){
        console.log(this.data)
      },
      methods :{
        handClick(index){
          this.data = dataList.data[index]
        }
      }
    }
</script>

<style scoped>
.el-menu{
  width: 100px;
  float: left;
  color: dimgrey;
}
.el-menu>li{
  height: 30px;
  line-height: 30px;
  font-size: 12px;

}
  .nav-content{
    float: left;
    width: 400px;
    height: 210px;
    background-color: white;
  }

.navItem{
  margin-bottom: 10px;
  width: 380px;
}

.navItem>span{
  margin: 8px 0 8px 5px;
  text-align: left;
  padding-left: 10px;
  color: rgba(0,0,0,0.77);
  display: block;
  font-size: 10px;
}

.aItem{
  text-align: left;
}

.aItem>a{
  margin: 0 10px 5px 20px;
  padding: 2px 5px 2px 5px;
  cursor: pointer;
  font-size: x-small;
  border: dimgrey solid 1px;
  border-radius: 2px;
  background-color: ghostwhite;
  color: dimgrey;
  display: inline-block;
}

.aItem>a:hover{
  border-color: dodgerblue;
  color: white;
  background-color: dodgerblue;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

  .item {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    background-color: dodgerblue;
  }

  span{
    font-family: Microsoft YaHei;
  }
</style>
