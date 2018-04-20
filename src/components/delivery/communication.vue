<template>
  <div>
    <div v-if="list.length!==0">
      <ul class="communication">
        <li v-for="(item,index) in getItemData" :key="index">
          <delivery-list-item :item="item" :pass="false" :fail="false"></delivery-list-item>
        </li>
      </ul>

      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="4"
        :current-page.sync="currentPage"
        :total="getPages">
      </el-pagination>
    </div>
    <div v-else>
      <h3>没有相关信息</h3>
    </div>

  </div>

</template>

<script>
  import deliveryListItem from '@/components/block/deliveryListItem'
  export default {
    name: "communication",
    created(){
      this.$reqs.get('/deliver/getJobDeliverList' ,{
        params: {
          state: '待沟通'
        }
      }).then( (res)=> {
        console.log(res.data);
        this.list = res.data
      }).catch(function (res) {
        console.log(res)
      });
    },
    components:{
      'delivery-list-item':deliveryListItem
    },
    computed: {
      getPages() {
        return this.list.length
      },
      getItemData() {
        let list = [...this.list];
        let start = 0;
        let end = 4;
        start += (this.currentPage - 1) * 4;
        end += (this.currentPage - 1) * 4;
        let arr = list.slice(start, end);
        return arr
      }
    },
    data(){
      return {
        currentPage: 1,
        list:[]
        // list: [
        //   {
        //     job: 'java工程师',
        //     salary: '2k-3k',
        //     date: '2017.12.24',
        //     state: '待沟通'
        //   },
        //   {
        //     job: 'php工程师',
        //     salary: '2k-3k',
        //     date: '2017.12.28',
        //     state: '待沟通'
        //   },
        //   {
        //     job: 'java工程师',
        //     salary: '2k-3k',
        //     date: '2017.12.24',
        //     state: '待沟通'
        //   }
        // ]
      }
    }
  }
</script>

<style scoped>
  .communication{
    margin: 30px auto;
    list-style: none;
    padding:  0 0 0 0;
  }
  .communication>li{
    margin-top: 20px;
  }
</style>
