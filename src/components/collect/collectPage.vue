<template>
    <div class="collect">
      <ul class="list">
        <li v-for="(item , index) in getJobListData" :key="index">
          <collect-list-item :jobListItem="item"></collect-list-item>
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
</template>

<script>
  import collectListItem from '@/components/block/collectListItem'
  import jobListData from '@/store/job'
    export default {
      name: "collect-page",
      components:{
        'collect-list-item':collectListItem
      },
      data(){
        return{
          jobListData:jobListData.jobListItem,
          currentPage:1
        }
      },
      computed: {
        getPages() {
          return this.jobListData.length
        },
        getJobListData(){
          let list = [...this.jobListData]
          let start = 0
          let end = 6
          start += (this.currentPage - 1) * 6
          end += (this.currentPage - 1) * 6
          let arr = list.slice(start, end)
          console.log(this.jobListData.length)
          console.log(arr)
          return arr
        }
      }
    }
</script>

<style scoped>
  .list{
    margin: 20px auto;
    list-style: none;
    padding: 0 0 0 0;
  }
  .list>li{
    margin: 20px 0 20px 0;
  }
</style>
