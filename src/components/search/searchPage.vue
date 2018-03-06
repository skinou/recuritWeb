<template>
  <div>
    <search-input></search-input>

    <div class="search_condition">
      <ul>
        <li>
          <span class="head">工作地点</span>
          <a
            class="aItem"
            v-for="(aItem , index) in  itemData.addressItem" :key="index"
            :class="{on: aItem === filterAddress}"
            @click="handleAddress(aItem)"
          >{{aItem}}</a>
        </li>
        <li>
          <span class="head">工作经验</span>
          <a
            class="aItem"
            v-for="(aItem , index) in  itemData.experienceItem" :key="index"
            :class="{on: aItem === filterExp}"
            @click="handleExp(aItem)"
          >{{aItem}}</a>
        </li>
        <li>
          <span class="head">学历要求</span>
          <a
            class="aItem"
            v-for="(aItem , index) in itemData.degreeItem" :key="index"
            :class="{on: aItem === filterDegree}"
            @click="handleDegree(aItem)"
          >{{aItem}}</a>
        </li>
        <li>
          <span class="head">月薪</span>
          <a
            class="aItem"
            v-for="(aItem , index) in itemData.salaryItem" :key="index"
            :class="{on: aItem === filterSalary}"
            @click="handleSalary(aItem)"
          >{{aItem}}</a>
        </li>
        <li>
          <span class="head">工作性质</span>
          <a
            class="aItem"
            v-for="(aItem , index) in itemData.typeItem" :key="index"
            :class="{on: aItem === filterType}"
            @click="handleType(aItem)"
          >{{aItem}}</a>
        </li>
      </ul>
    </div>

    <ul class="list">
      <li v-for="(item , index) in getJobListData" :key="index">
        <job-list-item :jobListItem="item"></job-list-item>
      </li>
      <h4 class="text" v-show="getJobListData.length===0">没有相关信息</h4>
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
  import search from '@/components/search/search'
  import itemData from '@/store/nav-pane'
  import jobListItem from '@/components/block/jobListItem'
  import jobListData from '@/store/job'
    export default {
      name: "search-page",
      components:{
        'search-input':search,
        'job-list-item':jobListItem
      },
      data(){
        return{
          itemData:itemData.jobItem,
          filterAddress: '全部',
          filterExp: '全部',
          filterDegree: '全部',
          filterSalary: '全部',
          filterType: '全部',
          jobListData:jobListData.jobListItem,
          currentPage:1
        }
      },
      computed: {
        getPages() {
          return this.filterData.length
        },
        filterData(){
          let list = [...this.jobListData]
          if(this.filterAddress!=='全部'){
            list = list.filter(item=>item.address===this.filterAddress)
          }
          if(this.filterExp!=='全部'){
            list = list.filter(item=>item.experience===this.filterExp)
          }
          if(this.filterDegree!=='全部'){
            list = list.filter(item=>item.degree===this.filterDegree)
          }
          if(this.filterSalary!=='全部'){
            list = list.filter(item=>item.salary===this.filterSalary)
          }
          if(this.filterType!=='全部'){
            list = list.filter(item=>item.type===this.filterType)
          }

          return list
        },
        getJobListData(){
          let list = [...this.filterData]
          let start = 0
          let end = 6
          start += (this.currentPage - 1) * 6
          end += (this.currentPage - 1) * 6
          let arr = list.slice(start, end)
          console.log(this.jobListData.length)
          console.log(arr)
          return arr
        }
      },
      methods:{
        handleAddress(item){
          this.filterAddress = item
          // console.log(this.filterAddress)
        },
        handleExp(item){
          this.filterExp = item
          // console.log(this.filterAddress)
        },
        handleDegree(item){
          this.filterDegree = item
          // console.log(this.filterAddress)
        },
        handleSalary(item){
          this.filterSalary = item
          // console.log(this.filterAddress)
        },
        handleType(item){
          this.filterType = item
          // console.log(this.filterAddress)
        }
      }
    }
</script>

<style scoped>

  .search_condition{
    width: 750px;
    height: 210px;
    background-color: whitesmoke;
    margin: 0 auto;
    padding-top: 5px;
  }

  .search_condition>ul{
    list-style: none;
    text-align: left;
  }

  .search_condition>ul>li{
    /*width: 70px;*/
    margin: 0 0 10px 20px;
    /*float: left;*/
    font-size: smaller;
    display: block;
  }

  .head{
    font-weight: bold;
    width: 70px;
  }

  .search_condition>ul>li>span{
    /*margin-right: 10px;*/
    color: black;
    display: inline-block;
    padding: 5px 5px 5px 5px;
  }

  .aItem{
    /*margin-right: 10px;*/
    color: black;
    display: inline-block;
    padding: 5px 5px 5px 5px;
    cursor: pointer;
    margin: 0 5px 0 5px;
  }

  .aItem:hover{
    background-color: #31b0d5;
    color: white;
    text-decoration: none;
  }

  a.on{
    background-color: #31b0d5;
    color: white;
    text-decoration: none;
  }
  .list{
    margin: 20px auto;
    list-style: none;
    padding: 0 0 0 0;
  }
  .list>li{
    margin: 20px 0 20px 0;
  }
  .text{
    width: 500px;
    margin: 0 auto;
    text-align: center;
  }
</style>
