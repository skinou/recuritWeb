<template>
  <div class="job">

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

  </div>
</template>

<script>
  import position from '@/components/block/positionBlock2'
    export default {
        name: "company-job",
      created(){
        window.scrollTo(0,0);
        this.$reqs.get('/companyForUser/selectJobForCompany',{
          params:{
            cid:'564165416115614'
          }
        })
          .then( (res) =>{
            console.log(res.data);
            this.list2  = [...res.data];
            console.log(this.list2)
          }).catch( (res)=> {
          console.log(res.toString())
        });
      },
      components:{
        'position':position
      },
      methods:{
        deleteRow(index, rows) {
          let data = rows.splice(index, 1);
          console.log(data)
        },
        handleType(item){
          this.filterType = item
          // console.log(this.filterAddress)
        }
      },
      computed: {
        filterData() {
          let list = [...this.list2];
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
          list2:[],
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
    width: 900px;
    margin: 0 auto;
    min-height: 800px;
    background-color: white;
  }
  .list{
    list-style: none;
    padding: 0 0 20px 0;
    margin: 0 0 5px 0;
    /*width: 609px;*/

  }
  .list>li{
    margin: 20px auto;
    width: 650px;
    text-align: left;
    background-color: whitesmoke;
    /*padding: 10px 0 10px 0;*/
    padding-left: 20px;
    box-shadow: 0 0 5px 2px ghostwhite;

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
    margin: 15px 20px 0 0;
  }
  .el-pagination{
    margin-bottom: 40px;
  }
  .el-tabs{
    min-height: 450px;
  }
  .left{
    width: 50px;
    height: 105px;
    background-color: dodgerblue;
    /*background: -webkit-linear-gradient(dodgerblue, whitesmoke);*/
    /*background: -o-linear-gradient(dodgerblue, whitesmoke);*/
    /*background: -moz-linear-gradient(dodgerblue, whitesmoke);*/
    /*background: linear-gradient(dodgerblue,red);*/
    display: inline-block;
    vertical-align: top;
  }


  .condition{
    width: 85%;
    /*height: 90px;*/
    /*line-height: 90px;*/
    background-color: ghostwhite;
    margin: 20px auto;
    display:inline-block;
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
</style>
