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
       <router-link
         v-for="(aItem ,index) in dataItem.itemData"
         :key="index"
         to="/searchPage"
         @click.native="setValue(aItem)"
       >{{aItem}}</router-link>
     </div>
    </div>
  </div>

  <el-carousel height="300px">
    <el-carousel-item v-for="item in imgData" :key="item">
      <img :src="item" class="image">
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
  import dataList from '@/store/nav-pane'
  import img1 from '@/assets/1.jpg'
  import img2 from '@/assets/2.jpg'
  import img3 from '@/assets/3.jpg'
  import img4 from '@/assets/4.png'
    export default {
      name: "nav-pane",
      data(){
        return{
          nav: dataList.nav,
          data: dataList.data[0],
          imgData:[img1,img2,img3,img4]
        }
      },
      created (){
        console.log(this.data)
      },
      methods :{
        handClick(index){
          this.data = dataList.data[index]
        },
        setValue(value){
          this.$store.commit('setSearchValue',value);
        }
      }
    }
</script>

<style scoped>
.el-menu{
  width: 150px;
  float: left;
  color: dimgrey;
}
.el-menu>li{
  height: 40px;
  line-height: 40px;
  font-size: 12px;

}
  .nav-content{
    float: left;
    width: 400px;
    height: 300px;
    background-color: white;
  }

.navItem{
  margin-bottom: 15px;
  width: 380px;
}

.navItem>span{
  margin: 8px 0 8px 5px;
  text-align: left;
  padding-left: 10px;
  color: rgba(0,0,0,0.77);
  display: block;
  font-size: 13px;
}

.aItem{
  text-align: left;
}

.aItem>a{
  margin: 0 10px 10px 20px;
  padding: 5px 8px 5px 8px;
  cursor: pointer;
  font-size: small;
  /*border: dimgrey solid 1px;*/
  border-radius: 2px;
  background-color: ghostwhite;
  color: dimgrey;
  display: inline-block;
  text-decoration: none;
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

  .image{
    width: 700px;
    height: 300px;
  }
</style>
