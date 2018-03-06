<template>
  <div class="box">
    <h1 class="tab">注  册</h1>
    <el-form :model="form" :rules="rules" ref="form" label-width="80px" class="regForm">
      <el-form-item label="账号" prop="user">
        <el-input v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="身份证" prop="id">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="back">
      <router-link to="/">< 登陆</router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name: "reg",
      data () {
        return{
          form:{
            user: '',
            password: '',
            name: '',
            id: ''
          },
          rules: {
            user: [
              { required: true, message: '请输入账号', trigger: 'blur' },
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' }
            ],
            name: [
              { required: true, message: '请输入姓名', trigger: 'blur' }
            ],
            id: [
              { required: true, message: '请输入身份证', trigger: 'blur' },
              { min: 18, max: 18, message: '身份证为18位', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // this.$message({
              //   message: '注册成功',
              //   type: 'success'
              // });
              let that = this
              this.$reqs.post('/login/userReg', {
                account:that.form.user,
                password:that.form.password,
                id:that.form.id,
                name:that.form.name
              }).then(function (res) {
                let data = res.data
                if(data === '注册成功'){
                  console.log(data)
                  // that.$message.error(data);
                  that.$router.push('/success')
                }else{
                  that.$message.error(data);
                }
              }).catch(function (res) {
              })
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
    height: 450px;
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
