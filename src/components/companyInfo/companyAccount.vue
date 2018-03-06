<template>
  <div class="info">
    <h4>账号信息</h4>
    <div class="now">
      <span>现有账号：</span><span>123456789</span>
    </div>
    <el-form ref="form" :model="form" :rules="rules"  label-width="80px">
      <el-form-item label="新账号" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">确认</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>

    <h4>密码信息</h4>

    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm2('ruleForm2')">提交</el-button>
        <el-button @click="resetForm2('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
    export default {
      name: "company-account",
      data() {
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm2.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          form: {
            phone: ''
          },
          rules: {
            phone: [
              {required: true, message: '请输入新账号', trigger: 'blur'},
            ]
          },
          ruleForm2: {
            pass: '',
            checkPass: '',
          },
          rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ]
          }
        }
      },
      methods:{
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

        submitForm2(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm2(formName) {
          this.$refs[formName].resetFields();
        }

      }
    }
</script>

<style scoped>
  .info{
    width: 700px;
    margin: 30px auto;
    /*height: 450px;*/
  }
  .info>h4{
    margin: 30px 0 30px 0 ;
    text-align: left;
  }
  .el-form{
    width: 500px;
    margin-bottom: 50px;
  }
  .now{
    width: 500px;
    margin: 20px 0 20px 30px;
    text-align: left;
  }
</style>
