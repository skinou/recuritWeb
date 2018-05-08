<template>
  <div class="box">
    <h1 class="tab">公 司 注  册</h1>

    <div class="imgBox">
      <!-- <i :class="{'text':imageShow}" class="avatar"></i> -->
      <img id="imgContent3" :src="form.cimg"/>
      <input @change="fileImage" type="file" name="image" accept="image/*" class="imgUpload">
      <!-- <div style="margin: 10px auto;width: 205px;text-align: center">
        <!<input type="file" name="file" id="imgFile2" accept="image/png,image/gif,image/jpeg" style="display: none">-->
        <!-- <el-button type="primary" plain size="mini">添加公司图标</el-button> -->
      <!-- </div> -->
    </div>

    <el-form ref="form" :model="form" :rules="rules" label-width="180px">
      <el-form-item label="公司名称" prop="cname">
        <el-col :span="15">
          <el-input v-model="form.cname" disabled></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="公司所在城市" prop="city">
        <el-col :span="6">
          <el-input v-model="form.city"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="公司人数" prop="teamNum">
        <el-select v-model="form.teamNum" placeholder="请选择公司人数">
          <el-option v-for="(item , index) in teamNum" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="融资阶段" prop="fiance">
        <el-select v-model="form.fiance" placeholder="请选择融资阶段">
          <el-option v-for="(item , index) in fianceItem" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="类别（最多选3个）" prop="field" >
        <el-select  multiple v-model="form.field" placeholder="请选择类别">
          <el-option v-for="(item , index) in fieldItem" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="公司地址" prop="address">
        <el-col :span="20">
          <!--<el-input v-model="form.name"></el-input>-->
          <el-input v-model="form.address"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="一句话介绍（30字以内）" prop="sentence">
        <el-col :span="20">
          <!--<el-input v-model="form.name"></el-input>-->
          <el-input v-model="form.sentence"></el-input>
          <span :class="{'red':form.sentence.length>=30}">{{form.sentence.length}}字</span>
        </el-col>
      </el-form-item>
      <!--<el-form-item>-->
        <!--<el-button type="primary" plain @click="submitForm('form')">注册</el-button>-->
        <!--<el-button @click="resetForm('form')">重置</el-button>-->
      <!--</el-form-item>-->
    </el-form>
    <div class="buttonArea">
      <el-button type="primary" plain @click="submitForm('form')">注册</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </div>

    <router-link to="/companyReg" class="back">上一步</router-link>

  </div>
</template>

<script>
    export default {
      name: "company-login-info",

      methods:{
        formatDateTime(inputTime) {
          let date = new Date(inputTime);
          let y = date.getFullYear();
          let m = date.getMonth() + 1;
          m = m < 10 ? ('0' + m) : m;
          let d = date.getDate();
          d = d < 10 ? ('0' + d) : d;
          let h = date.getHours();
          h = h < 10 ? ('0' + h) : h;
          let minute = date.getMinutes();
          let second = date.getSeconds();
          minute = minute < 10 ? ('0' + minute) : minute;
          second = second < 10 ? ('0' + second) : second;
          return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // let arr = this.form.field.toString();
              // this.form.field  = arr;
              if(this.form.field.length<=3){
                if(this.form.cimg!==null){
                  this.form.c_time = this.formatDateTime(new Date());
                  this.$store.commit('setValueInfo',this.form);
                  let company_login = this.$store.state.company_login;
                  let company_info = this.$store.state.company_info;
                  // console.log('1112313');
                  console.log(company_login);
                  console.log(company_info);
                  this.$reqs.post('/company/insertCompany', {
                    company_login:company_login,
                    company_info:company_info,
                  }).then( (res)=> {
                    let data = res.data;
                    if(data === '注册成功'){
                      this.$router.push('/regSuccess');
                    }
                  }).catch(function (res) {
                    console.log(res)
                  });
                }else{
                  this.$message({
                    message: '图片不能为空',
                    type: 'warning'
                  });
                }
              }
              else{
                this.$message({
                  message: '类别不能超过三个',
                  type: 'warning'
                });
              }


            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },

        resetForm() {
          this.form.name = '';
          this.form.city = '';
          this.form.field = [];
          this.form.fiance = '';
          this.form.address = '';
          this.form.sentence = '';
          this.form.teamNum = ''
        },

        fileImage:function(e){
          // let that = this
          let file = e.target.files[0];
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = ()=> {
            this.form.cimg = reader.result;
            // this.$reqs.post('/company/companyImg', {
            //   img: this.form.cimg
            // }).then(function (res) {
            // }).catch(function (res) {
            //   console.log(res.toString())
            // })
          };
          this.imageShow = true;
          console.log(this.imageShow)
        },
      },
      data() {
        return {
          imageShow: false,
          fianceItem: ['未融资','天使轮','A轮','B轮','C轮','D轮','D轮以上','上市公司','不需要融资'],
          fieldItem: ['移动互联网','电子商务','金融','企业服务','教育',
            '文化娱乐','游戏','O2O','硬件','旅游','医疗健康',
            '生活服务','广告营销','数据服务','社交服务','分类信息','信息安全','招聘','其他'],
          teamNum:['0-20','20-50','50-100','100-300','300-500','500-1000','1000以上'],
          form:{
            cimg:null,
            cname: this.$store.state.company_login.cname,
            cid:this.$store.state.company_login.cid,
            city:'',
            teamNum:'',
            field:[],
            fiance:'',
            address:'',
            sentence:'',
            c_time:''
          },
          rules: {
            cname: [
              { required: true, message: '请输入公司名称', trigger: 'blur' }
            ],
            sentence: [
              { required: true, message: '不能为空', trigger: 'change' },
              { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
            ],
            city: [
              { required: true, message: '请输入所在城市', trigger: 'blur' }
            ],
            fiance: [
              { required: true, message: '请选择融资阶段', trigger: 'blur' }
            ],
            field: [
              { required: true, message: '请选择公司类别', trigger: 'blur' }
            ],
            teamNum: [
              { required: true, message: '请选择公司人数', trigger: 'blur' }
            ],
            address: [
              { required: true, message: '请选择公司类别', trigger: 'blur' }
            ]
          }
        }
      }
    }
</script>

<style scoped>
  .box{
    height: 800px;
    width: 700px;
    margin: 50px auto;
    position: relative;
    transform: translateY(10%);
     box-shadow: 0 0 5px 2px whitesmoke;
    background-color: rgba(255, 255, 255, 0.9);
     border-radius: 10px;
    text-align: left;
  }
  .tab{
    font-weight:bold;
    width: 100%;
    margin: 20px auto;
    /*padding: 0 0 20px 0;*/
    color: dodgerblue;
    text-align: center;
    letter-spacing: 2px;
    display: inline-block;
  }
  .imgBox{
    margin: 20px auto;
    width: 210px;
    /* background-color: darkblue; */
  }

  .el-form{
    width: 600px;
    margin: 0 auto;
  }
  .buttonArea{
    width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  #imgContent3{
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;
    z-index: 20;
    left: 55px;
    vertical-align: top;
  }
  .imgUpload{
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
    left: -50px;
    z-index: 30;
    opacity: 0;
  }
  .text{
    opacity: 0;
  }

   .back{
    height: 60px;
    width: 60px;
    line-height: 60px;
    border: dodgerblue solid 2px;
    border-radius: 90px;
    margin-left: 20px;
    background-color: dodgerblue;
    text-decoration: none;
    display: block;
    position: relative;
    color: whitesmoke;
    top: -50px;
    text-align: center;
    box-shadow: 0 0 5px 2px dodgerblue;
  }

  .back:hover{
    /*background-color: whitesmoke;*/
    /*color: dodgerblue;*/
    /*border: whitesmoke solid 2px;*/
    animation: change 1s;
  }

  @keyframes change
  {
    0% {
      transform:scale(1);
    }
    50% {
      transform:scale(1.3);
    }
    100% {
      transform:scale(1);
    }
  }
</style>
