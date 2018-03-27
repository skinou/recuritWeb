<template>
    <div class="resume">
      <!--<el-tabs type="border-card">-->
        <!--<el-tab-pane label="全部">-->
          <!--<ul>-->
            <!--<li v-for="(item,index) in getItemData" :key="index">-->
              <!--<resume-job-block :data="item"></resume-job-block>-->
            <!--</li>-->
          <!--</ul>-->
          <!--<el-pagination-->
            <!--background-->
            <!--layout="prev, pager, next"-->
            <!--:page-size="4"-->
            <!--:current-page.sync="currentPage"-->
            <!--@current-change="handleCurrentChange"-->
            <!--:total="getPages">-->
          <!--</el-pagination>-->
        <!--</el-tab-pane>-->
        <!--<el-tab-pane label="技术">-->
          <!--<ul>-->
            <!--<li v-for="(item,index) in getItemData" :key="index">-->
              <!--<resume-job-block :data="item"></resume-job-block>-->
            <!--</li>-->
          <!--</ul>-->
          <!--<el-pagination-->
            <!--background-->
            <!--layout="prev, pager, next"-->
            <!--:page-size="4"-->
            <!--:current-page.sync="currentPage"-->
            <!--@current-change="handleCurrentChange"-->
            <!--:total="getPages">-->
          <!--</el-pagination>-->
        <!--</el-tab-pane>-->
        <!--<el-tab-pane label="产品">-->

        <!--</el-tab-pane>-->
        <!--<el-tab-pane label="视觉设计">-->

        <!--</el-tab-pane>-->
        <!--<el-tab-pane label="运营">-->

        <!--</el-tab-pane>-->
        <!--<el-tab-pane label="市场">-->

        <!--</el-tab-pane>-->
        <!--<el-tab-pane label="人力资源">-->

        <!--</el-tab-pane>-->
        <!--<el-tab-pane label="金融">-->

        <!--</el-tab-pane>-->
      <!--</el-tabs>-->

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


      <ul class="list">
        <li v-for="(item,index) in getItemData" :key="index">
          <resume-job-block :data="item"></resume-job-block>
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

</template>

<script>
  import resumeJobBlock from '@/components/block/resumeJobBlock'
    export default {
      name: "company-resume",
      components:{
        'resume-job-block':resumeJobBlock
      },
      methods:{
        deleteRow(index, rows) {
          rows.splice(index, 1);
        },
        handleCurrentChange(){
          scrollTo(0,0);
        },
        handleType(item){
          this.filterType = item
          // console.log(this.filterAddress)
        }
      },
      computed: {
        filterData() {
          let list = [...this.list];
          if (this.filterType !== '全部') {
            list = list.filter(item => item.type === this.filterType)
          }
          return list
        },
        getPages() {
          return this.filterData.length
        },
        getItemData() {
          let list = [...this.filterData];
          let start = 0;
          let end = 4;
          start += (this.currentPage - 1) * 4;
          end += (this.currentPage - 1) * 4;
          let arr = list.slice(start, end);
          return arr
        }
      },
      data(){
        return{
          filterType: '全部',
          type:['全部','技术','产品','视觉设计','运营','市场','人力资源','金融'],
          currentPage: 1,
          list: [
            {
              name: '海外运营总监111111111111111111',
              salary: '12k-20k',
              experience: '经验1-3年',
              degree: '本科',
              received: 20,
              undo: 10
            },
            {
              name: '海外运营总监12',
              salary: '12k-20k',
              experience: '经验1-3年',
              degree: '本科',
              received: 50,
              undo: 0
            },
            {
              name: '海外运营总监31',
              salary: '12k-20k',
              experience: '经验1-3年',
              degree: '本科',
              received: 20,
              undo: 20
            },
            {
              name: '海外运营总监51',
              salary: '12k-20k',
              experience: '经验1-3年',
              degree: '本科',
              received: 20,
              undo: 0
            },
            {
              name: '海外运营总监16',
              salary: '12k-20k',
              experience: '经验1-3年',
              degree: '本科',
              received: 20,
              undo: 15
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .resume{
    margin: 30px 20px 100px 20px;
  }
  .list{
    list-style: none;
    padding: 10px 0 20px 0;
    /*width: 609px;*/

  }
  .list>li{
    margin-bottom: 20px;
  }
  .item{
    width: 100%;
    /*height: 50px;*/
    /*background-color: dodgerblue;*/
  }

  .el-tabs--border-card>.el-tabs__content{
    width: 710px;
    margin: 0 auto;
  }
  .el-tabs__content{
    width: 100%;
  }

  .el-pagination{
    margin-bottom: 40px;
  }
  .el-tabs{
    min-height: 450px;
  }


  .condition{
    /*width: 750px;*/
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
    padding: 5px 5px 5px 5px;
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

  .condition>ul>li:hover{
    background-color: dodgerblue;
    color: white;
  }
  .condition>ul>li.on{
    background-color: dodgerblue;
    color: white;
    text-decoration: none;
  }
</style>
