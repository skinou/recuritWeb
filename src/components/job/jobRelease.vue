<template>
<div>
  <div style="text-align: left">
    <router-link to="/companyPosition"><span class="back iconfont">&#xe7be;</span></router-link>
  </div>

  <div style="text-align: right; width: 100%">
    <ul class="sideNav">
      <li><a href="#info" :class="{'active':site===1}" @click="change(1)"><i class="iconfont">&#xe628;</i>基本信息</a></li>
      <li><a href="#temptation" :class="{'active':site===2}" @click="change(2)"><i class="iconfont">&#xe62a;</i>岗位诱惑</a></li>
      <li><a href="#duty" :class="{'active':site===3}" @click="change(3)"><i class="iconfont">&#xe62c;</i>岗位职责</a></li>
      <li><a href="#ability" :class="{'active':site===4}" @click="change(4)"><i class="iconfont">&#xe62e;</i>能力要求</a></li>
      <li><a href="#skill" :class="{'active':site===5}" @click="change(5)"><i class="iconfont">&#xe630;</i>福利待遇</a></li>
      <li><a href="#skill" :class="{'active':site===6}" @click="change(6)"><i class="iconfont">&#xe632;</i>工作地址</a></li>
    </ul>
  </div>

  <h2>岗位发布</h2>
  <h3 style=" margin: 50px 0 50px 0" id="info" ref="info">基本信息</h3>

  <div style="text-align: center">
    <div class="form_content">
      <el-form ref="form" :model="form" :rules="rules" label-width="130px">
        <el-form-item label="岗位名称" prop="jname">
          <el-col :span="18">
            <el-input v-model="form.jname"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="城市" prop="city">
          <el-col :span="18">
            <el-input v-model="form.city"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="方向" prop="direction">
            <el-select v-model="form.direction" placeholder="请选择方向" >
              <el-option v-for="(item , index) in directionItem" :key="index" :label="item" :value="item"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="工资" prop="salary">
            <el-select v-model="form.salary" placeholder="请选择工资" >
              <el-option v-for="(item , index) in salaryItem" :key="index" :label="item" :value="item"></el-option>
            </el-select>
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
        <el-form-item label="类别" prop="jtype">
          <el-select   v-model="form.jtype" placeholder="请选择类别">
            <el-option v-for="(item , index) in typeItem" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标签">
          <el-tag :key="tag" v-for="tag in form.jobTag" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
          <el-button v-else class="buttonNewTag" size="small" @click="showInput">+ New Tag</el-button>
        </el-form-item>
      </el-form>

      <el-form :model="form" >
        <h3 style=" margin: 50px 0 50px 0" id="temptation" ref="temptation">岗位诱惑</h3>
        <el-form-item  prop="temptation" >
          <el-input type="textarea" :rows="7" v-model="form.temptation"></el-input>
          <span  v-show="form.temptation!==''">{{form.temptation.length}}字</span>
        </el-form-item>
        <h3 style=" margin: 50px 0 50px 0" id="duty" ref="duty">岗位职责</h3>
        <el-form-item  prop="duty">
          <el-input type="textarea" :rows="7" v-model="form.duty"></el-input>
          <span>{{form.duty.length}}字</span>
        </el-form-item>
        <h3 style=" margin: 50px 0 50px 0" id="ability" ref="ability">能力要求</h3>
        <el-form-item  prop="ability" >
          <el-input type="textarea" :rows="7" v-model="form.ability"></el-input>
          <span>{{form.ability.length}}字</span>
        </el-form-item>
        <h3 style=" margin: 50px 0 50px 0" id="skill" ref="skill">福利待遇</h3>
        <el-form-item  prop="skill">
          <el-input type="textarea" :rows="7" v-model="form.skill"></el-input>
          <span>{{form.skill.length}}字</span>
        </el-form-item>
        <h3 style=" margin: 50px 0 50px 0" id="address" ref="address">工作地址</h3>
        <el-form-item  prop="address">
          <el-input type="textarea" :rows="3" v-model="form.address"></el-input>
          <span>{{form.address.length}}字</span>
        </el-form-item>
      </el-form>
      <div style="text-align: center; margin: 80px 0 50px 0">
        <el-button  @click="resetForm('form')">重 置</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
    export default {
      name: "job-release",
      // computed:{
      //
      // },
      mounted() {
        window.addEventListener('scroll', this.height)
      },
      methods: {
        change(index){
          this.site = index;
        },
        height(){
          console.log(this.$refs);
          let height = this.$refs.info.getBoundingClientRect().top;
          console.log('--------------------------');
          console.log(height);
          // let winHeight = window.innerHeight/1.2;
          // console.log(winHeight);
          console.log('--------------------------');
          // let val = winHeight - height;
          // console.log(val);
          // console.log('--------------------------');
          // console.log('/n');
          // if(height<winHeight &&height>0 ){
          //   console.log(true);
          //   return true
          // }
          // else {
          //   console.log(false);
          //   return false
          // }
          if(height<200&&height>-442){
            this.site = 1;
          }
          else if(height<-442&&height>-719){
            this.site = 2;
          }
          else if(height<-719&&height>-1037){
            this.site = 3;
          }
          else if(height<-1037&&height>-1363){
            this.site = 4;
          }
          else if(height<-1363&&height>-1500){
            this.site = 5;
          }
          else if(height<-1500){
            this.site = 6;
          }
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
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // alert('submit!');
              this.form.jtime = this.formatDateTime(new Date());


              this.$reqs.post('/job/insertJobRelease',{
                obj:this.form
              }).then((res)=>{
                this.$message({
                  message: '成功',
                  type: 'success'
                });
              }).catch((err)=>{
                console.log(err.toString())
              })

            } else {
              // console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        handleClose(tag) {
          this.form.jobTag.splice(this.form.jobTag.indexOf(tag), 1);
        },

        showInput() {
          if (this.form.jobTag.length <= 4) {
            this.inputVisible = true;
            this.$nextTick(_ => {
              this.$refs.saveTagInput.$refs.input.focus();
            });
          } else {
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
      },
      data(){
        return{
          site:1,
          // aItem:['基本信息','岗位诱惑','岗位职责','能力要求','技术要求','工作地址'],
          directionItem:['技术','产品','视觉设计','运营','市场','人力资源','金融'],
          experienceItem: ['全部','经验不限','3年以下','3-5年','5-10年','10年以上'],
          degreeItem: ['大专','本科','硕士','博士'],
          salaryItem: ['2k以下','2k-5k','5k-10k','10k-15k','15k-25k','25k-50k','50k以上'],
          typeItem: ['实习','全职','兼职'],
          inputVisible: false,
          inputValue: '',
          form: {
            jname:'',
            salary: '',
            city:'',
            direction:'',
            experience:'',
            degree:'',
            jtype:'',
            jobTag:[],
            temptation:'',
            duty:'',
            skill:'',
            ability:'',
            address:'',
            jtime:''
          },
          rules: {
            jname: [
              {required: true, message: '不能为空', trigger: 'blur'}
            ],
            direction: [
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
            jtype: [
              {required: true, message: '不能为空', trigger: 'blur'}
            ],
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
    position: relative;
    top: 30px;
    margin-left: 25px;
  }
  .form_content{
    width: 600px;
    margin: 0 auto;
    text-align: left;
  }
  .el-tag{
    margin-left: 20px;
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
  h3{
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

  .sideNav{
    /*float: right;*/
    position: fixed;
    padding: 0 0 0 0;
    width: 120px;
    display: inline-block;
  }

  .sideNav>li{
    display: inline-block;
    width: 120px;
    height: 50px;
    margin: 8px 0 8px 0;
    background-color: whitesmoke;
    text-align: center;
    line-height: 50px;
  }

  .sideNav>li>a{
    text-decoration: none;
    color: dodgerblue;
    display: inline-block;
    width: 120px;
    height: 50px;
    /*font-size: small;*/
    /*font-size:18px;*/
  }



  .sideNav>li>.active{
    background-color: dodgerblue;
    color: whitesmoke;
    transform:scale(1.2);
  }

  .active>i{
    color: whitesmoke;
  }

  .sideNav>li>a:hover{
    background-color: dodgerblue;
    color: whitesmoke;
    /*margin: 5px 0 5px 0;*/
    transform:scale(1.2);
    animation:change 0.5s
  }

  .sideNav>li>a:hover i{
    background-color: dodgerblue;
    color: whitesmoke;
    animation:change 0.8s
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

  @keyframes change
  {
    0% {
      transform:scale(1);
    }
    100% {
      transform:scale(1.2);
    }
  }

</style>
