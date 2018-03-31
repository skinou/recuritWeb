<template>
  <div style="text-align: left">
    <el-button size="small" icon="el-icon-d-arrow-left" plain class="back"><router-link to="/companyPosition">返回</router-link></el-button>
    <div class="top">
      <el-button type="primary" plain size="mini"  @click="dialog1 = true" class="change">修改</el-button>
      <h2>{{form.name}}</h2>
      <h4>{{form.salary}}</h4>
      <h5>{{form.city}}/{{form.experience}}/ {{form.degree}}/ {{form.type}}</h5>
      <h5>发布时间: {{form.date}}</h5>
      <span class="job_tag"><el-tag v-for="(item,index) in form.jobTag" :key="index" size="small" >{{item}}</el-tag></span>
    </div>

    <div class="middle">
      <el-button type="primary" plain size="mini"  @click="dialog2 = true" class="change">修改</el-button>
      <h5 class="item">职位诱惑</h5>
      <ul class="temptation">
        <li v-for="(item,index) in getTemptation" :key="index">
          {{item}}
        </li>
      </ul>

      <h5 class="item">职位描述</h5>

      <el-button type="primary" plain size="mini"  @click="dialog3 = true" class="change">修改</el-button>
      <h6 class="sub_item">岗位职责：</h6>
      <ul class="duty">
        <li v-for="(item,index) in getDuty" :key="index">
          {{item}}
        </li>
      </ul>

      <el-button type="primary" plain size="mini"  @click="dialog4 = true" class="change">修改</el-button>
      <h6 class="sub_item">能力要求：</h6>
      <ul class="ability">
        <li v-for="(item,index) in getAbility" :key="index">
          {{item}}
        </li>
      </ul>

      <el-button type="primary" plain size="mini"  @click="dialog5 = true" class="change">修改</el-button>
      <h6 class="sub_item">技术要求：</h6>
      <ul class="skill">
        <li v-for="(item,index) in getSkill" :key="index">
          {{item}}
        </li>
      </ul>

      <el-button type="primary" plain size="mini"  @click="dialog6 = true" class="change">修改</el-button>
      <h5 class="item">工作地址</h5>
      <p style=" color: #409EFF;">{{content.address}}</p>
    </div>

   <div style="text-align: center">

     <el-dialog title="基本信息" :visible.sync="dialog1" width="800px">
       <div class="form_content">
         <el-form ref="form" :model="form" :rules="rules" label-width="120px">
           <el-form-item label="岗位名称" prop="name">
             <el-col :span="11">
               <el-input v-model="form.name"></el-input>
             </el-col>
           </el-form-item>
           <el-form-item label="公司所在城市" prop="city">
             <el-col :span="6">
               <el-input v-model="form.city"></el-input>
             </el-col>
           </el-form-item>
           <el-form-item label="工资" prop="salary">
             <el-col :span="10">
               <el-select v-model="form.salary" placeholder="请选择工资" >
                 <el-option v-for="(item , index) in salaryItem" :key="index" :label="item" :value="item"></el-option>
               </el-select>
             </el-col>
           </el-form-item>
           <el-form-item label="工作经验" prop="experience">
             <el-select   v-model="form.experience" placeholder="请选择类别">
               <el-option v-for="(item , index) in experienceItem" :key="index" :label="item" :value="item"></el-option>
             </el-select>
           </el-form-item>
           <el-form-item label="学历要求" prop="degree">
             <el-select   v-model="form.degree" placeholder="请选择学历">
               <el-option v-for="(item , index) in degreeItem" :key="index" :label="item" :value="item"></el-option>
             </el-select>
           </el-form-item>
           <el-form-item label="类别" prop="type">
             <el-select   v-model="form.type" placeholder="请选择类别">
               <el-option v-for="(item , index) in typeItem" :key="index" :label="item" :value="item"></el-option>
             </el-select>
           </el-form-item>
           <el-form-item label="标签">
             <el-tag :key="tag" v-for="tag in form.jobTag" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
             <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
             <el-button v-else class="buttonNewTag" size="small" @click="showInput">+ New Tag</el-button>
           </el-form-item>
         </el-form>
       </div>
       <span slot="footer" class="dialog-footer">
              <el-button @click="resetForm('form')">重 置</el-button>
              <el-button type="primary" @click="submit1('form')">确 定</el-button>
            </span>
     </el-dialog>



     <el-dialog title="岗位诱惑" :visible.sync="dialog2" width="800px">
       <div class="form_content">
         <el-form ref="content" :model="content">
           <el-form-item  prop="temptation">
             <el-input type="textarea" :rows="7" v-model="content.temptation"></el-input>
             <span>{{content.temptation.length}}字</span>
           </el-form-item>
         </el-form>
       </div>
       <span slot="footer" class="dialog-footer">
        <!--<el-button @click="resetForm('content')">重 置</el-button>-->
         <el-button @click="dialog2=false">取 消</el-button>
        <el-button type="primary" @click="submit2('content')">确 定</el-button>
      </span>
     </el-dialog>


     <el-dialog title="岗位职责" :visible.sync="dialog3" width="800px">
       <div class="form_content">
         <el-form ref="content" :model="content">
           <el-form-item  prop="duty">
             <el-input type="textarea" :rows="7" v-model="content.duty"></el-input>
             <span>{{content.duty.length}}字</span>
           </el-form-item>
         </el-form>
       </div>
       <span slot="footer" class="dialog-footer">
        <!--<el-button @click="resetForm('content')">重 置</el-button>-->
         <el-button @click="dialog3=false">取 消</el-button>
        <el-button type="primary" @click="submit3('content')">确 定</el-button>
      </span>
     </el-dialog>


     <el-dialog title="能力要求" :visible.sync="dialog4" width="800px">
       <div class="form_content">
         <el-form ref="content" :model="content">
           <el-form-item  prop="ability">
             <el-input type="textarea" :rows="7" v-model="content.ability"></el-input>
             <span>{{content.ability.length}}字</span>
           </el-form-item>
         </el-form>
       </div>
       <span slot="footer" class="dialog-footer">
        <!--<el-button @click="resetForm('content')">重 置</el-button>-->
         <el-button @click="dialog4=false">取 消</el-button>
        <el-button type="primary" @click="submit4('content')">确 定</el-button>
      </span>
     </el-dialog>


     <el-dialog title="技术要求" :visible.sync="dialog5" width="800px">
       <div class="form_content">
         <el-form ref="content" :model="content">
           <el-form-item  prop="skill">
             <el-input type="textarea" :rows="7" v-model="content.skill"></el-input>
             <span>{{content.skill.length}}字</span>
           </el-form-item>
         </el-form>
       </div>
       <span slot="footer" class="dialog-footer">
        <!--<el-button @click="resetForm('content')">重 置</el-button>-->
         <el-button @click="dialog5=false">取 消</el-button>
        <el-button type="primary" @click="submit5('content')">确 定</el-button>
      </span>
     </el-dialog>


     <el-dialog title="工作地址" :visible.sync="dialog6" width="800px">
       <div class="form_content">
         <el-form ref="content" :model="content">
           <el-form-item  prop="address">
             <el-input type="textarea" :rows="7" v-model="content.address"></el-input>
             <span>{{content.address.length}}字</span>
           </el-form-item>
         </el-form>
       </div>
       <span slot="footer" class="dialog-footer">
        <el-button @click="dialog6=false">取 消</el-button>
        <el-button type="primary" @click="submit6('content')">确 定</el-button>
      </span>
     </el-dialog>


   </div>

  </div>
</template>

<script>
  // import jobData from '@/store/job'
    export default {
      name: "position-job",

      created(){
        this.$reqs.post('/job/selectJobDetail',{
          jkey:this.$route.params.jkey,
        }).then((res)=>{

          this.jobDetail = Object.assign(this.jobDetail,res.data[0]);
          console.log(this.jobDetail);
          console.log(this.jobDetail.ability)

        }).catch((err)=>{
          console.log(err.toString())
        })
      },

      methods:{
        handleClose(tag) {
          this.form.jobTag.splice(this.form.jobTag.indexOf(tag), 1);
        },

        showInput() {
          if(this.form.jobTag.length<=4){
            this.inputVisible = true;
            this.$nextTick(_ => {
              this.$refs.saveTagInput.$refs.input.focus();
            });
          } else{
            this.$message({
              message: '最多添加5个标签',
              type: 'warning'
            });
          }
        },

        handleInputConfirm() {
          let inputValue = this.inputValue;
          if (inputValue) {
            this.form.jobTag.push(inputValue);
          }
          this.inputVisible = false;
          this.inputValue = '';
        },
        submit1(form) {
          this.$refs[form].validate((valid) => {
            if (valid) {
              var date = new Date();
              this.form.date=date.toLocaleDateString() + date.toLocaleTimeString()
              // this.jobContentData=form
              this.$message({
                message: '成功',
                type: 'success'
              });
              this.dialog1=false
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        submit2(form) {
          this.$refs[form].validate((valid) => {
            if (valid) {
              this.$message({
                message: '成功',
                type: 'success'
              });
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        submit3(form) {
          this.$refs[form].validate((valid) => {
            if (valid) {
              this.$message({
                message: '成功',
                type: 'success'
              });
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        submit4(form) {
          this.$refs[form].validate((valid) => {
            if (valid) {
              this.$message({
                message: '成功',
                type: 'success'
              });
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        submit5(form) {
          this.$refs[form].validate((valid) => {
            if (valid) {
              this.$message({
                message: '成功',
                type: 'success'
              });
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        submit6(form) {
          this.$refs[form].validate((valid) => {
            if (valid) {
              this.$message({
                message: '成功',
                type: 'success'
              });
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      },
      computed:{
        getTemptation(){
          let list = this.content.temptation
          let arr = list.split('\n')
          return arr
        },
        getDuty(){
          let list = this.content.duty
          let arr = list.split('\n')
          return arr
        },
        getAbility(){
          let list = this.content.ability
          let arr = list.split('\n')
          return arr
        },
        getSkill(){
          let list = this.content.skill
          let arr = list.split('\n')
          return arr
        },
      },
      data(){
        return{
          jobDetail:{},
          form: {
            name:'Java开发工程师',
            salary: '10k-20k',
            city:'上海',
            experience:'经验1-3年',
            degree:'本科及以上',
            type:'全职',
            date: '2018/2/18上午11:35:05',
            jobTag:['运营','跨国','福利好','法定假期'],
          },
          inputVisible: false,
          inputValue: '',
          experienceItem: ['全部','经验不限','3年以下','3-5年','5-10年','10年以上'],
          degreeItem: ['大专','本科','硕士','博士'],
          salaryItem: ['2k以下','2k-5k','5k-10k','10k-15k','15k-25k','25k-50k','50k以上'],
          typeItem: ['实习','全职','兼职'],
          dialog1:false,
          dialog2:false,
          dialog3:false,
          dialog4:false,
          dialog5:false,
          dialog6:false,
          content:{
            temptation:'技术挑战与个人成长空间',
            duty:'拉勾招聘业务系统的设计、开发\n' +
                  '解决线上系统问题，线上服务的整合与重构',
            ability:'人靠谱，有责任心和团队协作精神\n' +
                  '对技术有热情，学习能力强，在某个技术领域有自己的见解\n' +
                  '有代码洁癖',
            skill:'具有实的Java基础，逻辑思维缜密；\n' +
                  '熟练使用RPC框架，具备相关的分布式开发经验\n' +
                  '具备TCP方面的网络编程经验\n' +
                  '具备WEB方面的开发经验\n' +
                  '熟练使用Mybatis，SpringMVC，SpringCloud等框架。',
            address:'北京 - 海淀区 - 苏州街 - 中关村海淀大街34号海置创投大厦4层'
          },
          rules: {
            name: [
              {required: true, message: '不能为空', trigger: 'blur'}
            ],
            salary: [
              {required: true, message: '不能为空', trigger: 'blur'},
            ],
            city: [
              {required: true, message: '不能为空', trigger: 'blur'}
            ],
            experience: [
              {required: true, message: '不能为空', trigger: 'blur'}
            ],
            degree: [
              {required: true, message: '不能为空', trigger: 'blur'}
            ],
            type: [
              {required: true, message: '不能为空', trigger: 'blur'}
            ]
          }
        }
      }
    }
</script>

<style scoped>
  .top{
    height: 220px;
    width: 700px;
    background-color: whitesmoke;
    margin: 20px auto;
    padding: 30px 0 0 0;
  }
  h2,h4,h5,h6{
    width: 70%;
    height: 30px;
    text-align: left;
    font-family: Microsoft YaHei;
  }

  span,p{
    font-family: Microsoft YaHei;
  }

  h2{
    margin: 0 0 0 20px;

  }

  h4{
    margin: 10px 0 0 20px;
    color: #409EFF;
  }

  h5{
    margin: 0 0 0 20px;
    letter-spacing: 1px;
    color: #555555;
  }

  .middle{
    min-height: 810px;
    width: 700px;
    margin: 0 auto;

  }
  .item{
    margin: 40px 0 20px 20px;
    letter-spacing: 5px;
    color: #555555;
    font-weight: bold;
    height: 20px;
  }

  .sub_item{
    margin: 25px 0 25px 30px;
    color: #555555;
    letter-spacing: 2px;
    height: 20px;
  }

  p{
    width: 530px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 0px;
    text-align: left;
    font-size: small;
  }

  .company_content{
    width: 200px;
    height: 500px;
    background-color: white;
    margin: 30px 0 0 10px;
  }
  .back{
    border: none;
  }
  .back>span>a{
    color: #909399;
    text-decoration: none;
  }
  .back>span>a:hover{
    color: #409EFF;
  }
  .el-tag{
    margin-left: 20px;
  }
  .temptation{
    list-style: square;
    font-size: small;
  }
  .duty{
    font-size: small;
  }
  .ability{
    font-size: small;
    list-style: circle;
  }
  .skill{
    font-size: small;
    list-style: decimal;
  }
  li{
    margin-bottom: 20px;
  }
  .change{
    float: right;
    margin-right: 50px;
  }
  ul{
    padding-left: 50px;
  }
  .form_content{
    width: 600px;
    margin: 0 auto;
    text-align: left;
  }
  .el-tag + .el-tag {
    margin: 10px 0 0 10px;
  }
  .buttonNewTag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .el-dialog{
   text-align: center;
  }
</style>
