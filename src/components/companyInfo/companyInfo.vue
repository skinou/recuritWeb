<template>

  <div class="item">
    <div class="item_head">
      <h4>基本信息</h4>
    </div>
    <div class="item_body">
      <!--<img src="@/assets/img1.jpg" class="img"/>-->

      <div style="margin: 50px auto;width: 210px">
        <i :class="{'text':imageShow}" class="avatar"></i>
        <img id="imgContent3" :src="info.cimg"/>
        <div style="margin: 10px auto;width: 205px;text-align: center">
          <!--<input type="file" name="file" id="imgFile2" accept="image/png,image/gif,image/jpeg" style="display: none">-->
          <input @change="fileImage" type="file" name="image" accept="image/*" class="imgUpload">
          <el-button type="primary" plain size="mini">更换公司图标</el-button>
        </div>
      </div>


      <ul>
        <li><span class="title">公司名称：</span><span class="content">{{info.cname}}</span></li>
        <li><span class="title">所在城市：</span><span class="content">{{info.city}}</span></li>
        <li><span class="title">公司类型：</span><span class="content">{{info.field}}</span></li>
        <li><span class="title">融资阶段：</span><span class="content">{{info.fiance}}</span></li>
        <li><span class="title">公司人数：</span><span class="content">{{info.teamNum}}</span></li>
        <li><span class="title">公司地址：</span><span class="sentence">{{info.address}}</span></li>
        <li><span class="title">融资阶段：</span><span class="sentence">{{info.sentence}}</span></li>
        <li><el-button type="primary" plain   @click="dialogVisible = true">修改</el-button></li>
      </ul>
     </div>

    <el-dialog
      title="公司基本信息"
      :visible.sync="dialogVisible"
      width="700px"
    >

      <div class="form_content">
        <el-form ref="form" :model="form" :rules="rules" label-width="180px">
          <el-form-item label="公司名称" prop="name">
            <el-col :span="15">
              <el-input v-model="form.name" disabled></el-input>
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
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
              <el-button @click="resetForm()">重 置</el-button>
              <el-button type="primary" @click="submitForm('form')">确 定</el-button>
            </span>

    </el-dialog>

  </div>

</template>

<script>
    export default {
      name: "company-info",
      created(){
        let date = new Date();
        console.log(date.getTime());
        this.$reqs.get('/company/getCompany')
          .then( (res)=> {
            this.info  = res.data[0];
            console.log(this.info);
            let arr = this.info.field.split(',') ;
            this.form.sentence=this.info.sentence;
            this.form.name=this.info.cname;
            this.form.city=this.info.city;
            this.form.field = arr;
            this.form.address=this.info.address;
            this.form.fiance=this.info.fiance;
            this.form.teamNum = this.info.teamNum;
          }).catch(function (res) {
            console.log(res)
        })
      },
      data(){
          return{
            fianceItem: ['未融资','天使轮','A轮','B轮','C轮','D轮','D轮以上','上市公司','不需要融资'],
            fieldItem: ['移动互联网','电子商务','金融','企业服务','教育',
              '文化娱乐','游戏','O2O','硬件','旅游','医疗健康',
              '生活服务','广告营销','数据服务','社交服务','分类信息','信息安全','招聘','其他'],
            teamNum:['0-20','20-50','50-100','100-300','300-500','500-1000','1000以上'],
            dialogVisible:false,
            imageShow: false,
            info:{},
            form:{
              name:'',
              city:'',
              field:[],
              fiance:'',
              address:'',
              sentence:'',
              teamNum:''
            },
            rules: {
              name: [
                { required: true, message: '请输入公司名称', trigger: 'blur' }
              ],
              sentence: [
                { required: true, message: '不能为空', trigger: 'change' },
                { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
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
      },
      methods:{
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              if(this.form.field.length<=3){
                this.$reqs.post('/company/updateCompany', {
                  data:{
                    cname:this.form.name,
                    city:this.form.city,
                    field:this.form.field.toString(),
                    fiance:this.form.fiance,
                    address:this.form.address,
                    sentence:this.form.sentence,
                    teamNum:this.form.teamNum
                  }
                }).then( (res)=> {
                  let data = res.data;
                  if(data === '公司名已被注册'){
                    this.$message({
                      message: data,
                      type: 'warning'
                    });
                  }else{
                    this.info.name=this.form.name;
                    this.info.city=this.form.city;
                    this.info.field=this.form.field.toString();
                    this.info.fiance=this.form.fiance;
                    this.info.address=this.form.address;
                    this.info.sentence=this.form.sentence;
                    this.info.teamNum=this.form.teamNum;
                    this.dialogVisible = false
                  }
                  console.log(data)
                }).catch(function (res) {
                });

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
          this.form.sentence = ''
        },

        fileImage:function(e){
          // let that = this
          let file = e.target.files[0];
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = ()=> {
            this.info.cimg = reader.result;
            this.$reqs.post('/company/companyImg', {
              img: this.info.cimg
            }).then(function (res) {
            }).catch(function (res) {
              console.log(res)
            })
          };
          this.imageShow = true;
          console.log(this.imageShow)
        },

      }
    }
</script>

<style scoped>
.item_head{
  width: 800px;
  height: 30px;
  line-height: 30px;
  margin: 20px 0 20px 0;
}
.item_head>h4{
  margin: 0 0 0 0;
  text-align: center;
}

  .item_body{
    width: 760px;
    text-align: center;
    margin: 0 auto;
  }
  .title{
    width: 180px;
    padding-right: 20px;
    display: inline-block;
    text-align: right;
    vertical-align: top;
  }
  .content{
    width: 310px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    vertical-align: top;
  }
  .item_body>ul{
    width: 600px;
    list-style: none;
    margin: 0 auto;
    padding: 0 0 0 0;
  }
.item_body>ul>li{
  width: 600px;
  margin: 20px 0 20px 0;
}
  .form_content{
    width: 600px;
    margin: 0 auto;
    text-align: left;
  }
  .red{
    color: red;
  }
  .img{
    width: 100px;
    height: 100px;
    margin: 10px auto;
  }
  .sentence{
    width: 310px;
    text-align: left;
    display: inline-block;
    white-space: pre-wrap;
    word-break: break-all;
    vertical-align: top;
  }

.avatar {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 150px;
  text-align: center;
  z-index: 10;
  /*border:  dashed antiquewhite 3px;*/
  border-radius: 2px;
  display: inline-block;
  vertical-align: top;
  /*float: left;*/
  position: relative;
  left: 50px;
}
#imgContent3{
  position: relative;
  left: -55px;
  display: inline-block;
  width: 100px;
  height: 100px;
  z-index: 20;
  vertical-align: top;
}
.text{
  opacity: 0;
}
  .imgUpload{
    display: inline-block;
    width: 110px;
    position: relative;
    top: 28px;
    height: 28px;
    opacity: 0;
  }
</style>
