<template>
    <div class="collect">

      <h2 class="title">岗位收藏</h2>

      <div class="condition">
        <span class="head">类别</span>
        <ul>
          <li
            v-for="(aItem , index) in type" :key="index"
            :class="{on: aItem === filterType}"
            @click="handleType(aItem)"
          >
            {{aItem}}
          </li>
        </ul>
      </div>


      <div v-if="getJobListData.length!==0" style="width: 800px;margin: 0 auto;text-align: center">
        <ul class="list">
          <li v-for="(item , index) in getJobListData" :key="index">
            <collect-list-item :jobListItem="item"></collect-list-item>
            <el-button class="cancel" type="primary" icon="el-icon-star-off" size="small" plain @click="deleteRow(index,list)">取消</el-button>
          </li>
        </ul>

        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="6"
          :current-page.sync="currentPage"
          :total="getPages">
        </el-pagination>
      </div>
      <div v-else>
        <h4>没有相关信息</h4>
      </div>
    </div>
</template>

<script>
  import collectListItem from '@/components/block/collectListItem'
  import jobListData from '@/store/job'
    export default {
      name: "collect-page",
      created(){

        let compare = function (prop) {
          return function (obj1, obj2) {
            let val1 = new Date(obj1[prop].replace(/-/g,"\/"));
            let val2 =  new Date(obj2[prop].replace(/-/g,"\/"));
            if (val1 < val2) {
              return 1;
            } else if (val1 > val2) {
              return -1;
            } else {
              return 0;
            }
          }
        };

        this.$reqs.get('/collect/getCollectList',{
        }).then((res)=>{
          this.list = res.data;
          // this.list = this.list.sort(compare('time'));
          console.log(this.list)
        }).catch((err)=>{
          console.log(err.toString())
        });
      },
      components:{
        'collect-list-item':collectListItem
      },
      data(){
        return{
          filterType: '全部',
          type:['全部','技术','产品','视觉设计','运营','市场','人力资源','金融'],
          jobListData:jobListData.jobListItem,
          currentPage:1,
          list:[],
        }
      },
      computed: {
        filterData() {
          let list = [...this.list];
          // this.list2 = [...this.list];
          // console.log(this.list2);
          if (this.filterType !== '全部') {
            list = list.filter(item => item.direction === this.filterType)
          }
          return list
        },
        getPages() {
          return this.filterData.length
        },
        getJobListData(){
          let list = [...this.filterData];
          let start = 0;
          let end = 6;
          start += (this.currentPage - 1) * 6;
          end += (this.currentPage - 1) * 6;
          let arr = list.slice(start, end);
          console.log(arr);
          return arr
        }
      },
      methods:{
        deleteRow(index, rows) {
          // rows.splice(index, 1);
          let data = rows.splice(index, 1);
          console.log('123132',data);
          this.$reqs.post('/collect/deleteCollectList',{
            jkey:data[0].jkey
          }).then((res)=>{
            console.log(res.data)
          }).catch((err)=>{
            console.log(err.toString())
          });
        },
        handleType(item){
          this.filterType = item
          // console.log(this.filterAddress)
        }
      }
    }
</script>

<style scoped>
  .collect{
    min-height: 500px;
    width: 1200px;
    margin: 10px auto;
  }
  .list{
    margin: 20px auto;
    list-style: none;
    padding: 0 0 0 0;
  }
  .list>li{
    margin: 0 auto;
    width: 800px;
  }
  .cancel{
    /*float: right;*/
    position: relative;
    top: -55px;
    left: 270px;
  }
  .el-pagination{
    display: inline-block;
    text-align: center;
  }

  .condition{
    width: 750px;
    height: 90px;
    /*line-height: 90px;*/
    background-color: whitesmoke;
    margin: 20px auto;
    display:flex;
    align-items: center;
    text-align: center;
    justify-content:center;
  }

  .condition>ul{
    list-style: none;
    text-align: left;
    padding: 0 0 0 0;
    display: inline-block;
    /*height: 50px;*/
  }

  .head{
    font-weight: bold;
    display: inline-block;
    padding: 5px 10px 5px 10px;
    margin: 0 5px 0 5px;
    /*width: 70px;*/
  }

  .condition>ul>li{
    /*margin-right: 10px;*/
    color: black;
    display: inline-block;
    padding: 5px 10px 5px 10px;
    cursor: pointer;
    margin: 0 5px 0 5px;
  }

  .aItem{
    /*margin-right: 10px;*/
    color: black;
    display: inline-block;
    padding: 5px 10px 5px 10px;
    cursor: pointer;
    margin: 0 5px 0 5px;
  }

  .condition>ul>li:hover{
    background-color: dodgerblue;
    color: white;
  }


  .condition>ul>li.on{
    background-color: dodgerblue;
    color: white;
    text-decoration: none;
  }

  .title{
    color: dodgerblue;
    font-family: STHeiti;
    letter-spacing: 5px;
  }

</style>
