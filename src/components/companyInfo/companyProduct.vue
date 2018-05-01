<template>
  <div class="item">
    <div class="item_head">
      <h4>公司产品</h4>
    </div>
    <div class="item_body">
      <ul class="productList" v-show="proData!==null">
        <li v-for="(item , index) in proData" :key="index">
          <div>
            <div class="left">
              <img :src="item.pimg"/>
            </div>
            <div class="right">
              <span>{{item.pname}}</span>
              <el-button type="primary" plain class="delete" @click="deleteRow(index,proData)"  >╳</el-button>
              <div class="content">
                <p v-for="(arrItem , index) in describeInfo(item.des)" :key="index">{{arrItem}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="item_foot">
      <el-button type="primary" plain size="mini" @click="dialogVisible = true">添加</el-button>
    </div>

    <el-dialog
      title="产品信息"
      :visible.sync="dialogVisible"
      width="700px"
    >

      <div class="form_content">

        <div class="imgBox">
          <img id="imgContent3" :src="form.img"/>
          <input @change="fileImage" type="file" name="image" accept="image/*" class="imgUpload">
        </div>

        <el-form ref="form" :model="form" :rules="rules" label-width="120px">
          <el-form-item label="产品名称" prop="product">
            <el-col :span="11">
              <el-input v-model="form.product"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="产品描述" prop="describe">
            <el-input type="textarea" :rows="7" v-model="form.describe" placeholder="产品描述"></el-input>
            <span :class="{'red': number }">{{form.describe.length}}字</span>
          </el-form-item>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('form')">重 置</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </span>

    </el-dialog>

  </div>
</template>

<script>
  import img1 from '@/assets/img1.jpg'
    export default {
      name: "company-product",
      created(){
        this.$reqs.get('/company/getCompanyProduct')
          .then( (res)=> {
            console.log(res.data);
            this.proData = res.data
        }).catch( (res)=> {
          console.log(res.toString())
        })
      },
      data(){
        return{
          dialogVisible:false,
          proData:null,
            // {
            //   img:img1,
            //   product:'微商城',
            //   describe:'米矿服务品牌，从新零售做起\n' +
            //   '一家全渠道融合运营滴服务公司，成立两年一直稳步发展。\n' +
            //   '无论你喜欢相对稳定的环境还是快速发展的激情，这里都有属于你的舞台。\n' +
            //   '\n' +
            //   '合作项目繁多，分布在广东周边地域，总有一个是你家~\n' +
            //   '新零售电商+移动互联网拓展整合ing，物色着同样有新零售互联网思维滴你加入！\n' +
            //   '传统企业的产品+互联网思维运营，\n' +
            //   '蛋糕已经准备好了，你还等待啥？\n' +
            //   '\n' +
            //   '【氛围】\n' +
            //   '✔年轻团队，全部＜35\n' +
            //   '✔扁平开放去阶级，高效协作常常自嗨\n' +
            //   '✔追求高效能，偏好新技术、新工具\n' +
            //   '✔协作核心：自我驱动+自律',
            // }
          form:{
            img:null,
            product:'',
            describe:''
          },
          rules:{
            product: [
              { required: true, message: '请输入项目名称', trigger: 'blur' },
              { min: 1, max: 20, message: '长度在 1 到 15 个字符', trigger: 'blur' }
            ],
            describe: [
              { required: true, message: '请输入任职期间经历', trigger: 'blur' },
              // { min: 1, max: 20, message: '长度在 1 到 200 个字符', trigger: 'blur' }

            ]
          },
        }
      },
      computed:{
        number(){
          if(this.form.describe.length>200){
            return true
          }else{
            return false
          }
        },
      },
      methods:{
        fileImage:function(e){
          let file = e.target.files[0];
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = ()=> {
            this.form.img = reader.result;
            // this.$reqs.post('/company/companyImg', {
            //   img: this.form.cimg
            // }).then(function (res) {
            // }).catch(function (res) {
            //   console.log(res.toString())
            // })
          };
        },
        describeInfo (item) {
          let arr = item.split('\n');
          return arr
        },
        deleteRow(index, rows) {
          // rows.splice(index, 1);
          let data = rows.splice(index, 1);
          console.log(data[0].pkey);
          this.$reqs.post('/company/deleteCompanyProduct', {
            pkey:data[0].pkey,
          }).then( (res)=> {
            let data = res.data;
            console.log(data)
          }).catch(function (res) {
            console.log(res.toString())
          });
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let obj={
                pimg:this.form.img,
                pname:this.form.product,
                desc:this.form.describe,
              };
              this.$reqs.post('/company/insertCompanyProduct', {
                obj:obj
              }).then( (res) =>{
                this.proData.push(obj);
                this.$message({
                  message: '成功',
                  type: 'success'
                });
                this.dialogVisible = false
              }).catch( (res)=> {
                console.log(res.toString())
              });
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
          this.form.product='';
          this.form.describe=''
        }
      }
    }
</script>

<style scoped>
  .item_head{
    width: 760px;
    height: 30px;
    line-height: 30px;
    /*float: left;*/
    margin: 20px 0 20px 0;
  }
  .item_head>h4{
    margin: 0 0 0 50px;
    text-align: left;
  }

  .item_body{
    width: 760px;
    margin-left: 20px;
    /*float: left;*/

  }
  .left{
    width: 180px;
    min-height: 150px;
    /*float: left;*/
    padding: 30px 10px 10px 10px;
    display: inline-block;
    vertical-align: top;
    /*background-color: dodgerblue;*/
  }
  .right{
    width: 540px;
    min-height: 150px;
    padding-bottom: 30px;
    padding-top: 20px;
    /*float: left;*/
    /*overflow: auto;*/
    /*background-color: whitesmoke;*/
    background-color:rgba(	248,248,255,0.5);
    text-align: left;
    display: inline-block;
    vertical-align: top;
  }
  .content {
    width: 505px;
    height: 120px;
    overflow-y: auto;
    overflow-x: hidden;
  }


  .content::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  .content::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #31b0d5;
  }
  .content::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: white;
  }


  .item_foot{
    text-align: right;
    width: 560px;
    height: 50px;
    line-height: 50px;
    padding: 20px 100px 20px 100px;
    /*float: left;*/
    /*background-color: ghostwhite;*/
  }
  .right>span{
    display: inline-block;
    width: 490px;
    margin: 10px 0 15px 0;
    /*background-color: whitesmoke;*/
    /*padding: 0 20px 0 20px;*/
    background-color:rgba(	248,248,255,0.6);
  }
  .left>img{
    width: 150px;
    height: 150px;
    display: inline-block;
  }
  .sentence{
    height: 45px;
  }
  .productList{
    list-style: none;
    /*float: left;*/
    width: 100%;
    padding: 0 0 0 0;
  }
  .productList>li{
    margin-top: 20px;
    /*float: left;*/
    /*background-color: whitesmoke;*/
    background-color:rgba(	248,248,255,0.6);
  }

  .content>p{
    text-align: left;
    white-space: pre-wrap;
    word-break: break-all;
    width: 450px;
    overflow: auto;
    margin: 0 0 2px 0;
    font-size: smaller;
  }
  .delete{
    height: 20px;
    width: 20px;
    line-height: 20px;
    padding: 0 0 0 0;
  }
  .form_content{
    width: 600px;
    margin: 0 auto;
    text-align: left;
  }
  .red{
    color: red;
  }


  .imgBox{
    margin: 20px auto;
    width: 310px
  }

  /*.avatar {*/
    /*font-size: 28px;*/
    /*color: #8c939d;*/
    /*width: 100px;*/
    /*height: 100px;*/
    /*line-height: 150px;*/
    /*text-align: center;*/
    /*z-index: 10;*/
    /*!*border:  dashed antiquewhite 3px;*!*/
    /*border-radius: 2px;*/
    /*display: inline-block;*/
    /*vertical-align: top;*/
    /*!*float: left;*!*/
    /*position: relative;*/
    /*!*left: 50px;*!*/
  /*}*/
  #imgContent3{
    position: relative;
    left: 80px;
    display: inline-block;
    width: 150px;
    height: 150px;
    z-index: 20;
    vertical-align: top;
  }
  .imgUpload{
    display: inline-block;
    width: 150px;
    height: 150px;
    position: relative;
    left: -75px;
    opacity: 0;
    z-index: 50;
  }

</style>
