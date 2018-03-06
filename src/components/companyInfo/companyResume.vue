<template>
    <div class="resume">
      <el-tabs type="border-card">
        <el-tab-pane label="全部">
          <ul>
            <li v-for="(item,index) in getItemData" :key="index">
              <resume-job-block :data="item"></resume-job-block>
            </li>
          </ul>
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="4"
            :current-page.sync="currentPage"
            @current-change="handleCurrentChange"
            :total="getPages">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="技术">
          <ul>
            <li v-for="(item,index) in getItemData" :key="index">
              <resume-job-block :data="item"></resume-job-block>
            </li>
          </ul>
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="4"
            :current-page.sync="currentPage"
            @current-change="handleCurrentChange"
            :total="getPages">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="产品">

        </el-tab-pane>
        <el-tab-pane label="视觉设计">

        </el-tab-pane>
        <el-tab-pane label="运营">

        </el-tab-pane>
        <el-tab-pane label="市场">

        </el-tab-pane>
        <el-tab-pane label="人力资源">

        </el-tab-pane>
        <el-tab-pane label="金融">

        </el-tab-pane>
      </el-tabs>

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
        }
      },
      computed: {
        getPages() {
          return this.list.length
        },
        getItemData() {
          let list = [...this.list]
          let start = 0
          let end = 4
          start += (this.currentPage - 1) * 4
          end += (this.currentPage - 1) * 4
          let arr = list.slice(start, end)
          return arr
        }
      },
      data(){
        return{
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
  ul{
    list-style: none;
    padding: 10px 0 20px 0;
    /*width: 609px;*/

  }
  li{
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
</style>
