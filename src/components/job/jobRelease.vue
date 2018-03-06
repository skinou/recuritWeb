<template>
<div>
  <div style="text-align: left">
    <router-link to="/companyPosition"><el-button size="small" icon="el-icon-d-arrow-left" plain class="back">返回</el-button></router-link>
  </div>
  <h2>岗位发布</h2>
  <h3 style=" margin: 50px 0 50px 0">基本信息</h3>
  <div style="text-align: center">
    <div class="form_content">
      <el-form ref="form" :model="form" :rules="rules" label-width="130px">
        <el-form-item label="岗位名称" prop="name">
          <el-col :span="18">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="城市" prop="city">
          <el-col :span="18">
            <el-input v-model="form.city"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="方向" prop="direction">
            <el-select v-model="form.salary" placeholder="请选择工资" >
              <el-option v-for="(item , index) in salaryItem" :key="index" :label="item" :value="item"></el-option>
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
      <el-form :model="form" >
        <h3 style=" margin: 50px 0 50px 0">岗位诱惑</h3>
        <el-form-item  prop="temptation" >
          <el-input type="textarea" :rows="7" v-model="form.temptation"></el-input>
          <span  v-show="form.temptation!==''">{{form.temptation.length}}字</span>
        </el-form-item>
        <h3 style=" margin: 50px 0 50px 0">岗位职责</h3>
        <el-form-item  prop="duty">
          <el-input type="textarea" :rows="7" v-model="form.duty"></el-input>
          <span>{{form.duty.length}}字</span>
        </el-form-item>
        <h3 style=" margin: 50px 0 50px 0">能力要求</h3>
        <el-form-item  prop="ability" >
          <el-input type="textarea" :rows="7" v-model="form.ability"></el-input>
          <span>{{form.ability.length}}字</span>
        </el-form-item>
        <h3 style=" margin: 50px 0 50px 0">技术要求</h3>
        <el-form-item  prop="skill">
          <el-input type="textarea" :rows="7" v-model="form.skill"></el-input>
          <span>{{form.skill.length}}字</span>
        </el-form-item>
        <h3 style=" margin: 50px 0 50px 0">工作地址</h3>
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
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
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
          directionItem:['技术','产品','视觉设计','运营','市场','人力资源','金融'],
          experienceItem: ['全部','经验不限','3年以下','3-5年','5-10年','10年以上'],
          degreeItem: ['大专','本科','硕士','博士'],
          salaryItem: ['2k以下','2k-5k','5k-10k','10k-15k','15k-25k','25k-50k','50k以上'],
          typeItem: ['实习','全职','兼职'],
          inputVisible: false,
          inputValue: '',
          form: {
            name:'123',
            salary: '',
            city:'',
            experience:'',
            degree:'',
            type:'',
            direction:'',
            jobTag:[],
            temptation:'',
            duty:'',
            skill:'',
            ability:'',
            address:''
          },
          rules: {
            name: [
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
            type: [
              {required: true, message: '不能为空', trigger: 'blur'}
            ],
          }
        }
      }
    }
</script>

<style scoped>
  .back{
    border: none;
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
</style>
