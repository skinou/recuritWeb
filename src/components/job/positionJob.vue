<template>
  <div style="text-align: left">

    <!--<el-button size="small" icon="el-icon-d-arrow-left" plain class="back"><router-link to="/companyPosition">返回</router-link></el-button>-->

    <router-link to="/companyPosition"><span class="back iconfont">&#xe7be;</span></router-link>

    <div class="top">
      <el-button type="primary" plain size="mini"  @click="dialog1 = true" class="change">修改</el-button>
      <h2>{{form.name}}</h2>
      <h4>{{form.salary}}</h4>
      <h5>{{form.city}}/{{form.experience}}/ {{form.degree}}/ {{form.type}}</h5>
      <h5>发布时间: {{form.time}}</h5>
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

      <h4 class="item">职位描述</h4>

      <el-button type="primary" plain size="mini"  @click="dialog3 = true" class="change">修改</el-button>
      <h5 class="sub_item">岗位职责：</h5>
      <ul class="duty">
        <li v-for="(item,index) in getDuty" :key="index">
          {{item}}
        </li>
      </ul>

      <el-button type="primary" plain size="mini"  @click="dialog4 = true" class="change">修改</el-button>
      <h5 class="sub_item">能力要求：</h5>
      <ul class="ability">
        <li v-for="(item,index) in getAbility" :key="index">
          {{item}}
        </li>
      </ul>

      <el-button type="primary" plain size="mini"  @click="dialog5 = true" class="change">修改</el-button>
      <h5 class="sub_item">技术要求：</h5>
      <ul class="skill">
        <li v-for="(item,index) in getSkill" :key="index">
          {{item}}
        </li>
      </ul>

      <el-button type="primary" plain size="mini"  @click="dialog6 = true" class="change">修改</el-button>
      <h5 class="item">工作地址</h5>
      <p style=" color: #409EFF;">{{form.address}}</p>
    </div>





   <div style="text-align: center">

     <el-dialog title="基本信息" :visible.sync="dialog1" width="800px">
       <div class="form_content">
         <el-form ref="form2" :model="form2" :rules="rules" label-width="120px">
           <el-form-item label="岗位名称" prop="name">
             <el-col :span="11">
               <el-input v-model="form2.name"></el-input>
             </el-col>
           </el-form-item>
           <el-form-item label="公司所在城市" prop="city">
             <el-col :span="6">
               <el-input v-model="form2.city"></el-input>
             </el-col>
           </el-form-item>
           <el-form-item label="方向" prop="direction">
             <el-select v-model="form2.direction" placeholder="请选择方向" >
               <el-option v-for="(item , index) in directionItem" :key="index" :label="item" :value="item"></el-option>
             </el-select>
           </el-form-item>
           <el-form-item label="工资" prop="salary">
             <el-col :span="10">
               <el-select v-model="form2.salary" placeholder="请选择工资" >
                 <el-option v-for="(item , index) in salaryItem" :key="index" :label="item" :value="item"></el-option>
               </el-select>
             </el-col>
           </el-form-item>
           <el-form-item label="工作经验" prop="experience">
             <el-select   v-model="form2.experience" placeholder="请选择类别">
               <el-option v-for="(item , index) in experienceItem" :key="index" :label="item" :value="item"></el-option>
             </el-select>
           </el-form-item>
           <el-form-item label="学历要求" prop="degree">
             <el-select   v-model="form2.degree" placeholder="请选择学历">
               <el-option v-for="(item , index) in degreeItem" :key="index" :label="item" :value="item"></el-option>
             </el-select>
           </el-form-item>
           <el-form-item label="类别" prop="type">
             <el-select   v-model="form2.type" placeholder="请选择类别">
               <el-option v-for="(item , index) in typeItem" :key="index" :label="item" :value="item"></el-option>
             </el-select>
           </el-form-item>
           <el-form-item label="标签">
             <el-tag :key="tag" v-for="tag in form2.jobTag" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
             <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
             <el-button v-else class="buttonNewTag" size="small" @click="showInput">+ New Tag</el-button>
           </el-form-item>
         </el-form>
       </div>
       <span slot="footer" class="dialog-footer">
              <el-button @click="dialog=false">取 消</el-button>
              <el-button type="primary" @click="submit1('form2')">确 定</el-button>
            </span>
     </el-dialog>



     <el-dialog title="岗位诱惑" :visible.sync="dialog2" width="800px">
       <div class="form_content">
         <el-form ref="form" :model="form2">
           <el-form-item  prop="temptation">
             <el-input type="textarea" :rows="7" v-model="form2.temptation"></el-input>
             <span>{{form.temptation.length}}字</span>
           </el-form-item>
         </el-form>
       </div>
       <span slot="footer" class="dialog-footer">
        <!--<el-button @click="resetForm('content')">重 置</el-button>-->
         <el-button @click="dialog2=false">取 消</el-button>
        <el-button type="primary" @click="submit2()">确 定</el-button>
      </span>
     </el-dialog>


     <el-dialog title="岗位职责" :visible.sync="dialog3" width="800px">
       <div class="form_content">
         <el-form ref="form2" :model="form2">
           <el-form-item  prop="duty">
             <el-input type="textarea" :rows="7" v-model="form2.duty"></el-input>
             <span>{{form2.duty.length}}字</span>
           </el-form-item>
         </el-form>
       </div>
       <span slot="footer" class="dialog-footer">
        <!--<el-button @click="resetForm('content')">重 置</el-button>-->
         <el-button @click="dialog3=false">取 消</el-button>
        <el-button type="primary" @click="submit3()">确 定</el-button>
      </span>
     </el-dialog>


     <el-dialog title="能力要求" :visible.sync="dialog4" width="800px">
       <div class="form_content">
         <el-form ref="form2" :model="form2">
           <el-form-item  prop="ability">
             <el-input type="textarea" :rows="7" v-model="form2.ability"></el-input>
             <span>{{form2.ability.length}}字</span>
           </el-form-item>
         </el-form>
       </div>
       <span slot="footer" class="dialog-footer">
        <!--<el-button @click="resetForm('content')">重 置</el-button>-->
         <el-button @click="dialog4=false">取 消</el-button>
        <el-button type="primary" @click="submit4()">确 定</el-button>
      </span>
     </el-dialog>


     <el-dialog title="技术要求" :visible.sync="dialog5" width="800px">
       <div class="form_content">
         <el-form ref="form2" :model="form2">
           <el-form-item  prop="skill">
             <el-input type="textarea" :rows="7" v-model="form2.skill"></el-input>
             <span>{{form2.skill.length}}字</span>
           </el-form-item>
         </el-form>
       </div>
       <span slot="footer" class="dialog-footer">
        <!--<el-button @click="resetForm('content')">重 置</el-button>-->
         <el-button @click="dialog5=false">取 消</el-button>
        <el-button type="primary" @click="submit5()">确 定</el-button>
      </span>
     </el-dialog>


     <el-dialog title="工作地址" :visible.sync="dialog6" width="800px">
       <div class="form_content">
         <el-form ref="form2" :model="form2">
           <el-form-item  prop="address">
             <el-input type="textarea" :rows="7" v-model="form2.address"></el-input>
             <span>{{form2.address.length}}字</span>
           </el-form-item>
         </el-form>
       </div>
       <span slot="footer" class="dialog-footer">
        <el-button @click="dialog6=false">取 消</el-button>
        <el-button type="primary" @click="submit6()">确 定</el-button>
      </span>
     </el-dialog>


   </div>

  </div>
</template>

<script>
  // import jobData from '@/store/job'
    export default {
      name: "position-job",

      mounted(){
        this.$reqs.post('/job/selectJobDetail',{
          jkey:this.$route.params.jkey,
        }).then((res)=>{

          this.setValue(res.data[0]);
          console.log(this.form)

        }).catch((err)=>{
          console.log(err.toString())
        })
      },

      methods:{
        setValue(data){
          this.form.name = data.jname;
          this.form.salary = data.salary;
          this.form.city = data.city;
          this.form.degree = data.degree;
          this.form.direction = data.direction;
          this.form.experience = data.experience;
          this.form.type = data.jtype;
          this.form.time = data.jtime;
          this.form.jobTag = data.jobTag;
          if(data.jobTag){
            this.form.jobTag =  data.jobTag.split(',');
          }
          else{
            this.form.jobTag = []
          }
          this.form.temptation = data.temptation;
          this.form.duty = data.duty;
          this.form.skill = data.skill;
          this.form.ability = data.ability;
          this.form.address = data.address;


          this.form2.name = data.jname;
          this.form2.salary = data.salary;
          this.form2.city = data.city;
          this.form2.degree = data.degree;
          this.form2.direction = data.direction;
          this.form2.experience = data.experience;
          this.form2.type = data.jtype;
          this.form2.time = data.jtime;
          this.form2.jobTag = data.jobTag;
          if(data.jobTag){
            this.form2.jobTag =  data.jobTag.split(',');
          }
          else{
            this.form2.jobTag = []
          }
          this.form2.temptation = data.temptation;
          this.form2.duty = data.duty;
          this.form2.skill = data.skill;
          this.form2.ability = data.ability;
          this.form2.address = data.address;


        },
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
        handleClose(tag) {
          this.form2.jobTag.splice(this.form2.jobTag.indexOf(tag), 1);
        },

        showInput() {
          if(this.form2.jobTag.length<=4){
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
            this.form2.jobTag.push(inputValue);
          }
          this.inputVisible = false;
          this.inputValue = '';
        },
        submit1(form) {
          this.$refs[form].validate((valid) => {
            if (valid) {
              this.form2.time = this.formatDateTime(new Date());

              this.$reqs.post('/job/updateJobDetail',{
                jkey:this.$route.params.jkey,
                obj: {
                  jname:this.form2.name,
                  salary: this.form2.salary,
                  city:this.form2.city,
                  direction:this.form2.direction,
                  experience:this.form2.experience,
                  degree:this.form2.degree,
                  jtype:this.form2.jtype,
                  jtime: this.form2.time,
                  jobTag:this.form2.jobTag.toString(),
                }
              }).then((res)=>{
                console.log(res.data);
                this.form.name=this.form2.name;
                this.form.salary=this.form2.salary;
                this.form.city=this.form2.city;
                this.form.direction=this.form2.direction;
                this.form.experience=this.form2.experience;
                this.form.degree=this.form2.degree;
                this.form.jtype=this.form2.jtype;
                this.form.time=this.form2.time;
                this.form.jobTag=this.form2.jobTag;
                this.$message({
                  message: '成功',
                  type: 'success'
                });
                this.dialog1=false

              }).catch((err)=>{
                console.log(err.toString())
              });

            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        submit2() {
          if(this.form2.temptation!==''){
            let time = this.formatDateTime(new Date());
            this.$reqs.post('/job/updateJobTemptation',{
              temptation:this.form2.temptation,
              jkey:this.$route.params.jkey,
              jtime:time
            }).then((res)=>{

              console.log(res.data);
              this.form.temptation=this.form2.temptation;
              this.dialog2=false;
              this.$message({
                message: '成功',
                type: 'success'
              });

            }).catch((err)=>{
              console.log(err.toString())
            })
          }
          else{
            this.$message({
              message: '不能为空',
              type: 'warning'
            });
          }


        },
        submit3() {
          if(this.form2.duty!==''){
            let time = this.formatDateTime(new Date());
            this.$reqs.post('/job/updateJobDuty',{
              duty:this.form2.duty,
              jkey:this.$route.params.jkey,
              jtime:time
            }).then((res)=>{

              console.log(res.data);
              this.form.duty=this.form2.duty;
              this.dialog3=false;
              this.$message({
                message: '成功',
                type: 'success'
              });

            }).catch((err)=>{
              console.log(err.toString())
            })
          }
          else{
            this.$message({
              message: '不能为空',
              type: 'warning'
            });
          }

        },
        submit4() {
          if(this.form2.ability!==''){
            let time = this.formatDateTime(new Date());
            this.$reqs.post('/job/updateJobAbility',{
              ability:this.form2.ability,
              jkey:this.$route.params.jkey,
              jtime:time
            }).then((res)=>{

              console.log(res.data);
              this.form.ability=this.form2.ability;
              this.dialog4=false;
              this.$message({
                message: '成功',
                type: 'success'
              });

            }).catch((err)=>{
              console.log(err.toString())
            })
          }
          else{
            this.$message({
              message: '不能为空',
              type: 'warning'
            });
          }

        },
        submit5() {
          if(this.form2.skill!==''){
            let time = this.formatDateTime(new Date());
            this.$reqs.post('/job/updateJobSkill',{
              skill:this.form2.skill,
              jkey:this.$route.params.jkey,
              jtime:time
            }).then((res)=>{

              console.log(res.data);
              this.form.skill=this.form2.skill;
              this.dialog5=false;
              this.$message({
                message: '成功',
                type: 'success'
              });

            }).catch((err)=>{
              console.log(err.toString())
            })
          }
          else{
            this.$message({
              message: '不能为空',
              type: 'warning'
            });
          }

        },
        submit6() {
          if(this.form2.address!==''){
            let time = this.formatDateTime(new Date());
            this.$reqs.post('/job/updateJobAddress',{
              address:this.form2.address,
              jkey:this.$route.params.jkey,
              jtime:time
            }).then((res)=>{

              console.log(res.data);
              this.form.address=this.form2.address;
              this.dialog6=false;
              this.$message({
                message: '成功',
                type: 'success'
              });

            }).catch((err)=>{
              console.log(err.toString())
            })
          }
          else{
            this.$message({
              message: '不能为空',
              type: 'warning'
            });
          }

        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      },
      computed:{
        getTemptation(){
          let list = this.form.temptation;
          let arr = list.split('\n');
          return arr
        },
        getDuty(){
          let list = this.form.duty;
          let arr = list.split('\n');
          return arr
        },
        getAbility(){
          let list = this.form.ability;
          let arr = list.split('\n');
          return arr
        },
        getSkill(){
          let list = this.form.skill;
          let arr = list.split('\n');
          return arr
        },
      },
      data(){
        return{
          form: {
            name:'',
            salary: '',
            city:'',
            experience:'',
            degree:'',
            type:'',
            time: '',
            jobTag:[],
            temptation:'',
            duty:'',
            skill:'',
            ability:'',
            address:''
          },
          form2: {
            name:'',
            salary: '',
            city:'',
            direction:'',
            experience:'',
            degree:'',
            type:'',
            time: '',
            jobTag:[],
            temptation:'',
            duty:'',
            skill:'',
            ability:'',
            address:''
          },

          // content:{
          //   temptation:'',
          //   skill:'',
          //
          //   address:''
          // },

          inputVisible: false,
          inputValue: '',
          directionItem:['技术','产品','视觉设计','运营','市场','人力资源','金融'],
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
  .back{
    /*float: left;*/
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    /*border: dodgerblue solid 1px;*/
    border-radius: 90px;
    background-color: whitesmoke;
    color: dodgerblue;
    /*position: relative;*/
    /*top: 30px;*/
    margin-left: 25px;
  }

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
  .temptation,.ability,.duty,.skill{
    list-style: none;
    font-size: small;
    width: 530px;
  }
  li{
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;
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


  .iconfont{
    font-family:"iconfont" !important;
    font-size:18px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    /*color: black;*/
    /*height: 20px;*/
    /*line-height: 20px;*/
    margin-right: 5px;
    padding-bottom: 2px;
    /*display: inline-block;*/
    color: dodgerblue;
  }

  .back:hover{
    color: whitesmoke;
    background-color: dodgerblue;
    animation:route 0.5s
  }

  @keyframes route
  {
    0% {
      transform: rotate(0deg) scale(1.5);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
</style>
