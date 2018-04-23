<template>
    <div class="collect">
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
        this.$reqs.get('/collect/getCollectList',{
        }).then((res)=>{
          this.list = res.data;
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
          jobListData:jobListData.jobListItem,
          currentPage:1,
          list:[],
        }
      },
      computed: {
        getPages() {
          return this.list.length
        },
        getJobListData(){
          let list = [...this.list];
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
        }
      }
    }
</script>

<style scoped>
  .collect{
    min-height: 500px;
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

</style>
