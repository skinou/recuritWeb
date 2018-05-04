<template>
    <div>
      <search-input></search-input>

      <div style="width: 1200px;margin: 0 auto">
        <nav-pane></nav-pane>
      </div>


      <div class="content">

        <div class="area">
          <el-menu default-active="hot" class="el-menu" mode="horizontal">
            <el-menu-item index="hot">最新职位</el-menu-item>
          </el-menu>
            <job-block v-for="(item , index) in jobDataHot" :data="item" :key="index"></job-block>
        </div>

        <div class="area">
          <el-menu default-active="hot" class="el-menu" mode="horizontal">
            <el-menu-item index="hot">最新公司</el-menu-item>
          </el-menu>
          <company-block v-for="(item , index) in companyData" :data="item" :key="index"></company-block>
        </div>


      </div>
    </div>
</template>

<script>
  import navPane from '@/components/Home/nav-pane'
  import jobBlock from '@/components/block/jobBlock'
  import companyBlock from '@/components/block/companyBlock'
  import search from '@/components/search/search'
  // import job_hot_data from '@/store/job'
  // import company_data from '@/store/company'
    export default {
      name: "homeContent",
      components: {
        'nav-pane': navPane,
        'job-block':jobBlock,
        'company-block':companyBlock,
        'search-input':search
      },
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


        this.$reqs.get('/job/getAllJob' )
          .then((res)=> {
            // let data = res.data;
            this.jobDataHot = res.data;
            this.jobDataHot = this.jobDataHot.sort(compare('jtime'));
            // this.form = this.info;
            console.log(this.jobDataHot)
          }).catch(function (res) {
        });

        this.$reqs.get('/company/getAllCompany' )
          .then((res)=> {
            this.companyData = res.data;
            this.companyData = this.companyData.sort(compare('c_time'));
            console.log(this.companyData)
          }).catch(function (res) {
        })
      },
      data(){
        return{
          // jobDataHot: job_hot_data.jobData_hot,
          // companyData: company_data.companyData,
          jobDataHot: [],
          companyData: []
        }
      }
    }
</script>

<style scoped>
  .content{
    width: 1000px;
    margin: 0 auto;
  }

  .area{
    margin-top: 50px;
    text-align: left;
  }

</style>
