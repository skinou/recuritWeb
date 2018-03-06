<template>
    <div>
      <search-input></search-input>

      <div class="content">

        <nav-pane></nav-pane>

        <div class="area">
          <el-menu default-active="hot" class="el-menu" mode="horizontal">
            <el-menu-item index="hot">热门职位</el-menu-item>
          </el-menu>
            <job-block v-for="(item , index) in jobDataHot" :job="item" :key="index"></job-block>
        </div>

        <div class="area">
          <el-menu default-active="hot" class="el-menu" mode="horizontal">
            <el-menu-item index="hot">热门公司</el-menu-item>
          </el-menu>
          <company-block v-for="(item , index) in companyData" :company="item" :key="index"></company-block>
        </div>


      </div>
    </div>
</template>

<script>
  import navPane from '@/components/Home/nav-pane'
  import jobBlock from '@/components/block/jobBlock'
  import companyBlock from '@/components/block/companyBlock'
  import search from '@/components/search/search'
  import job_hot_data from '@/store/job'
  import company_data from '@/store/company'
    export default {
      name: "homeContent",
      components: {
        'nav-pane': navPane,
        'job-block':jobBlock,
        'company-block':companyBlock,
        'search-input':search
      },
      data(){
        return{
          jobDataHot: job_hot_data.jobData_hot,
          companyData: company_data.companyData
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
