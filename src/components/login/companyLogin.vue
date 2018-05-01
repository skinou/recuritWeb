<template>
  <div class="box">
    <h1 class="tab">企业</h1>
    <div class="input-login">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="user">
          <el-input v-model="form.user" placeholder="账号">
            <i slot="prefix" class="el-input__icon iconfont">&#xe64b;</i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="密码" type="password">
            <i slot="prefix" class="el-input__icon iconfont">&#xe62d;</i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="remAccount">记住账号</el-checkbox>
          <el-checkbox v-model="remPassword">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  class="login"  @click="btnSubmit('form')">登陆</el-button>
          <router-link to="/companyReg"><el-button type="primary"  class="login"  >注册</el-button></router-link>
        </el-form-item>
      </el-form>
    </div>
    <div class="reg">
      <router-link to="/">用户登陆 > </router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name: "company-login",
      created(){
        let companyAccount = localStorage.getItem("companyAccount");
        let companyPassword = localStorage.getItem("companyPassword");
        console.log(companyAccount);
        console.log(companyPassword);
        if(companyAccount){
          this.remAccount = true;
          this.form.user = companyAccount;
        }
        else{
          this.remAccount = false
        }
        if(companyPassword){
          this.remPassword = true;
          this.form.password = companyPassword;
        }
        else{
          this.remPassword = false
        }
      },
      data() {
        return{
          remAccount:true,
          remPassword:true,
          form:{
            user: '',
            password: ''
          },
          rules: {
            user: [
              {required: true, message: '请输入账号', trigger: 'blur'}
            ],
            password: [
              {required: true, message: '请输入密码', trigger: 'blur'}
            ],
          }
        }
      },
      methods: {
        btnSubmit:function (form) {

          localStorage.removeItem("companyAccount");
          localStorage.removeItem("companyPassword");

          this.$refs[form].validate((valid) => {
            if (valid) {
              this.$reqs.post('/login/companyLogin', {
                account:this.form.user,
              }).then( (res)=> {
                let data = res.data;
                console.log(data[0]);
                if(data.length ===0 ){
                  this.$message.error('账号不存在');
                }
                else {
                  if (data[0].password === this.form.password) {

                    if(this.remAccount){
                      localStorage.setItem("companyAccount", this.form.user);
                    }

                    if(this.remPassword){
                      localStorage.setItem("companyPassword", this.form.password);
                    }

                    window.location.href='/home.html#/companyInfoPage'
                  }
                  else {
                    this.$message.error('密码错误');
                  }
                }
              }).catch(function (res) {
              })

            } else {
              this.$message.error('账号/密码 不能为空');
              return false;
            }
          });
        }
      }
    }
</script>

<style scoped>
  .box{
    height: 400px;
    width: 380px;
    position: relative;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.9);
    text-align: center;
    box-shadow: 0 0 5px 2px whitesmoke;
    transform: translateY(40%);
    border-radius: 10px;
  }

  .tab{
    font-weight:bold;
    width: 80%;
    margin: 30px auto;
    padding-top: 20px;
    color: dodgerblue;
    text-align: center;
    letter-spacing: 2px;
  }

  .input-login{
    width: 280px;
    margin: 0 auto;
  }

  .login{
    width: 80px;
    margin-top: 10px;
  }

  .reg{
    text-align: right;
    margin: 0 20px;
  }

  .reg>a{
    color: dodgerblue;
    text-decoration: none;
  }

  .iconfont{
    font-family:"iconfont" !important;
    font-size:15px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: darkgray;
    /*height: 20px;*/
    /*line-height: 20px;*/
    margin-right: 10px;
    padding-bottom: 2px;
    /*display: inline-block;*/
  }

</style>
