<template>
    <div class="job">
      <el-tabs type="border-card">
        <router-link to="jobRelease"><el-button size="small" type="primary" class="add">发布职位</el-button></router-link>
        <el-tab-pane label="全部">
          <!--<el-button size="small" type="primary" class="add">发布职位</el-button>-->
          <ul>
            <li v-for="(item,index) in getItemData" :key="index">
              <el-button type="info" plain class="delete" @click="deleteRow(index,list)"  >╳</el-button>
              <position :positionData="item"></position>
            </li>
          </ul>
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="4"
            :current-page.sync="currentPage"
            :total="getPages">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="技术">
          <ul>
            <li v-for="(item,index) in getItemData" :key="index">
              <el-button type="info" plain class="delete" @click="deleteRow(index,list)"  >╳</el-button>
              <position :positionData="item"></position>
            </li>
          </ul>
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="4"
            :current-page.sync="currentPage"
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
  import position from '@/components/block/positionBlock'
    export default {
      name: "company-position",
      components:{
        'position':position
      },
      methods:{
        deleteRow(index, rows) {
          rows.splice(index, 1);
        },
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
          positionData: {
            name: '海外运营总监1',
            time: '18:24',
            salary: '12k-20k',
            experience: '经验1-3年',
            degree: '本科',
            address: '广州',
            jobTag:['运营','跨国','福利好','法定假期'],
            companyTag:['前景大','90后'],
          },
          currentPage: 1,
          list: [
            {
              name: '海外运营总监2',
              time: '18:24',
              salary: '12k-20k',
              experience: '经验1-3年',
              degree: '本科',
              address: '广州',
              jobTag:['运营','跨国','福利好','法定假期'],
              companyTag:['前景大','90后'],
            },
            {
              name: '海外运营总监3',
              time: '18:24',
              salary: '12k-20k',
              experience: '经验1-3年',
              degree: '本科',
              address: '广州',
              jobTag:['运营','跨国','福利好','法定假期'],
              companyTag:['前景大','90后'],
            },
            {
              name: '海外运营总监4',
              time: '18:24',
              salary: '12k-20k',
              experience: '经验1-3年',
              degree: '本科',
              address: '广州',
              jobTag:['运营','跨国','福利好','法定假期'],
              companyTag:['前景大','90后'],
            },
            {
              name: '海外运营总监5',
              time: '18:24',
              salary: '12k-20k',
              experience: '经验1-3年',
              degree: '本科',
              address: '广州',
              jobTag:['运营','跨国','福利好','法定假期'],
              companyTag:['前景大','90后'],
            },
            {
              name: '海外运营总监6',
              time: '18:24',
              salary: '12k-20k',
              experience: '经验1-3年',
              degree: '本科',
              address: '广州',
              jobTag:['运营','跨国','福利好','法定假期'],
              companyTag:['前景大','90后'],
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .job{
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

.add{
  /*margin-top: 50px;*/
  /*float: left;*/
}
  .el-tabs--border-card>.el-tabs__content{
  width: 710px;
  margin: 0 auto;
}
  .el-tabs__content{
    width: 100%;
  }
  .delete{
    height: 20px;
    width: 20px;
    line-height: 20px;
    padding: 0 0 0 0;
    float: right;
    margin-right: 30px;
  }
  .el-pagination{
    margin-bottom: 40px;
  }
  .el-tabs{
    min-height: 450px;
  }
</style>
