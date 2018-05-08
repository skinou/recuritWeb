<template>
      <div style="width: 1200px;margin: 0 auto">
        <div class="recommend">
          <el-carousel trigger="click" height="320px">
            <el-carousel-item v-for="item in 2" :key="item">
              <div class="content">
                <div class="recommend_item">
                  <div class="recommend_img"></div>
                  <div class="recommend_sentence">
                    <span>以移动互联网改变精英教育</span>
                  </div>
                </div>
                <div class="recommend_item">
                  <div class="recommend_img"></div>
                  <div class="recommend_sentence">
                    <span>以移动互联网改变精英教育</span>
                  </div>
                </div>
                <div class="recommend_item">
                  <div class="recommend_img"></div>
                  <div class="recommend_sentence">
                    <span>以移动互联网改变精英教育</span>
                  </div>
                </div>
                <div class="recommend_item">
                  <div class="recommend_img"></div>
                  <div class="recommend_sentence">
                    <span>以移动互联网改变精英教育</span>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="search">
          <div class="search_div">
            <input type="text" name="search" class="search_input" v-model="searchCondition">
            <!--<button type="button" class="search_btn"><router-link to="/searchPage">搜 索</router-link></button>-->
            <button type="button" class="search_btn" @click="search()">搜 索</button>
          </div>
        </div>

        <div class="search_condition">
          <ul>
            <li>
              <span class="head">公司地点</span>
              <a
                class="aItem"
                v-for="(aItem , index) in  itemData.addressItem" :key="index"
                :class="{on: aItem === filterAddress}"
                @click="handleAddress(aItem)"
              >{{aItem}}</a>
            </li>
            <li>
              <span class="head">融资阶段</span>
              <a
                class="aItem"
                v-for="(aItem , index) in  itemData.fianceItem" :key="index"
                :class="{on: aItem === filterFiance}"
                @click="handleFiance(aItem)"
              >{{aItem}}</a>
            </li>
            <li>
              <span class="head">行业领域</span>
              <a
                class="aItem"
                v-for="(aItem , index) in itemData.fieldItem" :key="index"
                :class="{on: aItem === filterField}"
                @click="handleField(aItem)"
              >{{aItem}}</a>
            </li>
          </ul>
        </div>
        <div class="area">
          <company-block v-for="(item , index) in getCompanyData" :data="item" :key="index"></company-block>
          <h4 class="text" v-show="getCompanyData.length===0">没有相关信息</h4>
        </div>

        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="6"
          :current-page.sync="currentPage"
          @current-change="handleCurrentChange"
          :total="getPages">
        </el-pagination>
      </div>
</template>

<script>
  import itemData from '@/store/nav-pane'
  import companyBlock from '@/components/block/companyBlock2'
  import company_data from '@/store/company'
    export default {
      name: "company-page",
      components:{
        'company-block': companyBlock
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


        this.$reqs.get('/company/getAllCompany',{
        }).then( (res) =>{
            // console.log(res.data);
          this.companyData  = res.data;
          this.companyData = this.companyData.sort(compare('c_time'));
          console.log(this.companyData)
          }).catch( (res)=> {
          console.log(res.toString())
        });
      },
      data(){
          return{
            searchCondition:'',
            itemData:itemData.companyItem,
            filterAddress:'全部',
            filterFiance:'全部',
            filterField:'全部',
            companyData:[],
            currentPage:1
          }
      },
      computed:{
        filterData(){
          let list = [...this.companyData];
          if(this.filterAddress!=='全部'){
            list = list.filter(item=>item.city===this.filterAddress)
          }
          if(this.filterFiance!=='全部'){
            list = list.filter(item=>item.fiance===this.filterFiance)
          }
          if(this.filterField!=='全部'){
            list = list.filter(item=>item.field.includes(this.filterField))
          }
          return list
        },
        getPages(){
          return this.filterData.length
        },
        getCompanyData(){
          let list = [...this.filterData];
          let start = 0;
          let end = 6;
          start += (this.currentPage - 1) * 6;
          end += (this.currentPage - 1) * 6;
          let arr = list.slice(start, end);
          console.log(this.companyData.length);
          return arr
        }
      },
      methods: {
        search(){
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
          this.$reqs.post('/search/searchCompany', {
            keyword:this.searchCondition
          }).then( (res)=> {
            this.companyData  = res.data;
            this.companyData = this.companyData.sort(compare('c_time'));
          }).catch(function (res) {
          })
        },
        handleAddress(item) {
          this.filterAddress = item
          // console.log(this.filterAddress)
        },
        handleFiance(item) {
          this.filterFiance = item
          // console.log(this.filterAddress)
        },
        handleField(item) {
          this.filterField = item
          // console.log(this.filterAddress)
        },
        handleCurrentChange(){
          console.log(this.currentPage)
        }
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .recommend{
    width: 1100px;
    margin: 10px auto;
  }

  .recommend_item{
    width: 150px;
    height: 180px;
    background-color: white;
    margin: 10px 20px 0 20px;
    /*float: left;*/
    display: inline-block;
  }

  .recommend_img{
    width: 110px;
    height: 110px;
    margin: 15px 15px 10px 15px;
    background-color: #31b0d5;
    /*float: left;*/
    display: inline-block;
  }

  .recommend_sentence{
    width: 130px;
    height: 22px;
    /*float: left;*/
    display: inline-block;
    padding: 0 10px 0 10px;
    font-size: small;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .recommend_sentence>span>a{
    color: black;
  }

  .recommend_sentence>span>a:hover{
    text-decoration: none;
    color: #31b0d5;
  }
  .content{
    width: 950px;
    height: 230px;
    margin: 50px auto;
    text-align: center;
  }


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
    margin: 5px 5px 0 5px;
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

  .area{
    width: 1000px;
    margin: 50px auto;
    text-align: left;
  }

  .text{
    width: 500px;
    margin: 0 auto;
    text-align: center;
  }

  .search{
    width: 750px;
    height: 60px;
    background-color: whitesmoke;
    margin: 0 auto;

  }

  .search_input{
    float: left;
    height: 30px;
    width: 350px;
    border: solid white 1px;
    padding-left: 10px;
  }

  .search_input:focus{
    border: 1px solid deepskyblue;
  }

  .search_btn{
    float: left;
    height: 35px;
    line-height: 35px;
    width: 100px;
    border: solid deepskyblue 1px;
    background-color: deepskyblue;
    font-size: large;
    /*padding-top: 4px;*/
    color: white;
    text-decoration: none;
  }

  .search_div{
    width: 470px;
    height: 35px;
    margin: 0 auto;
    position: relative;
    top: 30px;
  }

</style>
