<template>
  <div class="box">
    <h1 class="tab">公 司 注  册</h1>
    <el-form :model="form" :rules="rules" ref="form" label-width="80px" class="regForm">
      <el-form-item label="账号" prop="account">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="注册编号" prop="cid">
        <el-input v-model="form.cid"></el-input>
      </el-form-item>
      <el-form-item label="公司名称" prop="cname">
        <el-input v-model="form.cname"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain @click="submitForm('form')">下一步</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="back">
      <router-link to="/companyLogin">< 登陆</router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name: "company-reg",
      data () {
        return{
          form:{
            account: '',
            password: '',
            cname: '',
            cid: ''
          },
          rules: {
            account: [
              { required: true, message: '请输入账号', trigger: 'blur' },
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' }
            ],
            cname: [
              { required: true, message: '请输入公司名称', trigger: 'blur' }
            ],
            cid: [
              { required: true, message: '请输入身份证', trigger: 'blur' },
              { min: 15, max: 15, message: '注册编号为15位', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        submitForm(formName) {
          // let that = this;
          this.$refs[formName].validate((valid) => {
            if (valid) {

              this.$reqs.post('/login/companyReg', {
                account:this.form.account,
                cname:this.form.cname,
                cid:this.form.cid
              }).then( (res)=>{
                console.log(res);
                let data = res.data;
                if(data === '注册成功'){
                  this.$store.commit('setValueLogin',this.form);
                  this.$router.push('/companyLoginInfo');
                }else{
                  this.$message.error(data);
                }
              }).catch( (res)=> {
                console.log(res.toString())
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>
  .box{
    height: 500px;
    width: 500px;
    margin: 50px auto;
    position: relative;
    top: 20%;
    transform: translateY(-60%);
    background-color: whitesmoke;
  }
  .tab{
    font-weight:bold;
    width: 80%;
    margin: 20px auto;
    padding: 0 0 20px 0;
    color: #31b0d5;
    text-align: center;
    letter-spacing: 2px;
    display: inline-block;
  }
  .regForm{
    width: 350px;
    margin: 0 0 0 50px;
  }
  .back{
    height: 30px;
    text-align: left;
    margin-left: 20px;
  }
  .back>a{
    margin: 0 0 0 10px;
    color: dodgerblue;
    text-decoration: none;
  }
</style>
