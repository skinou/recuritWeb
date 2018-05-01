<template>
  <div class="item">

    <div class="content">
      <div class="item_head">
        <h4>公司环境</h4>
      </div>
      <ul class="img_ul">
        <li v-show="imgList.length!==0" v-for="(item,index) in imgList" :key="index">
          <img id="imgContent" :src="item.img"/>
          <el-button type="primary" plain class="delete" @click="deleteRow(index,imgList)"  >╳</el-button>
        </li>
        <li>
          <input  @change="fileImage" type="file" name="file" class="imgFile" accept="image/png,image/gif,image/jpeg" >
          <el-button type="primary" plain size="mini" class="add">添加图片</el-button>
        </li>
      </ul>
    </div>


    <div class="item_head">
      <h4>公司介绍</h4>
    </div>
    <div class="item_body" v-show="form.intro">
      <p v-for="(arrItem , index) in info" :key="index">{{arrItem}}</p>
    </div>
    <div class="item_foot">
      <el-button type="primary" plain size="mini" @click="dialogVisible = true">修改</el-button>
    </div>


    <el-dialog
      title="公司介绍"
      :visible.sync="dialogVisible"
      width="800px"
    >

      <div class="form_content">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="intro">
            <el-input type="textarea" :rows="7" v-model="form.intro" placeholder="产品描述"></el-input>
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
    export default {
      name: "company-intro",
      created(){
        this.$reqs.get('/company/getCompanyImg')
          .then( (res)=> {
            console.log(res.data);
            this.imgList = res.data;
            // console.log(this.imgList);
          }).catch( (res)=> {
          console.log(res.toString())
        });

        this.$reqs.get('/company/selectCompanyIntro')
          .then( (res)=> {
            console.log(res.data);
            this.form.intro = res.data[0].intro;
            // console.log(this.infoData);
          }).catch( (res)=> {
          console.log(res.toString())
        })

      },
      data(){
        return{
          imgList: [],
          dialogVisible:false,
          form:{
            intro:''
          },
          rules:{
            intro: [
              { required: true, message: '请输入公司介绍信息', trigger: 'blur' },
            ]
          },
        }
      },
      computed:{
        info () {
          if(this.form.intro){
            let arr = this.form.intro.split('\n');
            return arr
          } else{
            return null
          }

        },
      },
      methods:{
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$reqs.post('/company/updateCompanyIntro', {
                intro: this.form.intro
              }).then( (res)=> {
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
          // this.form.intro=''
        },

        deleteRow(index, rows) {
          // rows.splice(index, 1);
          let data = rows.splice(index, 1);
          console.log(data[0]);
          this.$reqs.post('/company/deleteCompanyImg', {
            img: data[0].img,
          }).then((res) => {
            let data = res.data;
            console.log(data)
          }).catch(function (res) {
            console.log(res.toString())
          });


        },
        fileImage:function(e){
          let that = this;
          let file = e.target.files[0];
          console.log(file);
          let reader = new FileReader();
          reader.readAsDataURL(file);
          let obj;
          let imgFile;
          reader.onloadend = ()=> {
            imgFile = reader.result;
            obj = {
              img: imgFile
            };
              this.$reqs.post('/company/inertCompanyImg', {
                img: imgFile
              }).then(function (res) {

              }).catch(function (res) {
                console.log(res)
              });
            console.log(obj);
            if(that.imgList.length<=4){
              that.imgList.push(obj)
            }
           else {
              this.$message({
                message: '不能超过4张',
                type: 'warning'
              });
            }
          }

        },
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
    width: 680px;
    /*float: left;*/
    min-height: 50px;
    text-align: left;
    padding-left: 80px;
  }
  .item_foot{
    text-align: right;
    width: 560px;
    height: 50px;
    line-height: 50px;
    padding: 20px 100px 20px 100px;
    float: left;
    /*background-color: ghostwhite;*/
  }
  .form_content{
    width: 700px;
    margin: 0 auto;
    text-align: left;
  }
  .img_ul{
    list-style: none;
    padding: 0 0 0 0;
  }
  .img_ul>li{
    margin: 10px auto;
    width: 60%;
  }
  .img_ul>li>img{
    width: 95%;
  }

  .imgFile{
    width: 80px;
    height: 28px;
    display: inline-block;
    position: relative;
    left: 42px;
    z-index: 50;
    opacity: 0;
  }
  .add{
    position: relative;
    left: -42px;
    z-index: 20;
  }
  .delete{
    height: 20px;
    width: 20px;
    line-height: 20px;
    padding: 0 0 0 0;
    float: right;
    border-right: 0;
  }
</style>
