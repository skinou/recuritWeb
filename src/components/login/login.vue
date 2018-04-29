<template>
  <div class="box">
    <h1 class="tab">招聘网</h1>
    <div class="input-login">
      <el-form :model="form" :rules="rules" ref="form">
        <!--<input type="text" name="username" class="input-login" placeholder="用户名"><br>-->
        <el-form-item prop="user">
          <el-input v-model="form.user" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <!--<input type="text" name="password" class="input-login" placeholder="密码"><br>-->
        <!--<button type="button" class="login"  @click="btnSubmit">登    陆</button>-->
        <el-form-item>
          <el-button type="primary"  class="login"  @click="btnSubmit('form')">登陆</el-button>
          <router-link to="/reg"><el-button type="primary"  class="login"  >注册</el-button></router-link>
        </el-form-item>

      </el-form>
    </div>
    <div class="reg">
      <router-link to="/companyLogin">企业登陆 > </router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name: "login",
      created(){
        // let a = {
        //   b:'123456'
        // };
        // let b = {
        //   c:1
        // };
        // let string = '123123';
        // let arr = ['12','121','565'];
        // let arr2 = [];
        // arr2 = arr;
        // a.b = arr;
        // let d = b;
        // b.c++;
        // console.log(a.b);
        // console.log(d.c);
        // console.log('123123');
        // console.log(arr2);
        // console.log(arr.toString())
        let time = new Date();
        console.log(time);
        let time2 = this.formatDateTime(new Date());
        console.log(time2)
      },
      data() {
        return{
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
        btnSubmit:function (form) {
            // console.log("1231231")
          this.$refs[form].validate((valid) => {
            if (valid) {
              this.$reqs.post('/login/userLogin', {
                account:this.form.user,
                obj:{
                  num:10,
                  num2:20
                }
              }).then( (res)=> {
                let data = res.data;
                console.log(data[0]);
                if(data.length ===0 ){
                  this.$message.error('账号不存在');
                }
                else {
                  if (data[0].password === this.form.password) {
                    // that.$message.error('密码错误');
                    window.location.href='/home.html'
                  }
                  else {
                    this.$message.error('密码错误');
                  }
                }
              }).catch(function (res) {
              })
              // window.location.href='/home.html'
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
    height: 350px;
    width: 350px;
    transform: translateY(40%);
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.9);
    text-align: center;
    box-shadow: 0 0 5px 2px whitesmoke;
    border-radius: 5px;
  }

  .tab{
    font-weight:bold;
    width: 80%;
    margin: 30px auto;
    padding-top: 20px;
    color:dodgerblue;
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


</style>
