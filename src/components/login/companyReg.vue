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

    <router-link to="/companyLogin" class="back">登陆</router-link>

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
            cid: '',
            c_time:''
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
              { required: true, message: '请输入注册编号', trigger: 'blur' },
              { min: 15, max: 15, message: '注册编号为15位', trigger: 'blur' }
            ]
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
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.form.c_time = this.formatDateTime(new Date());
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

           // this.$router.push('/companyLoginInfo');

        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>
  .box{
    height: 480px;
    width: 500px;
    margin: 50px auto;
    position: relative;
    transform: translateY(10%);
    box-shadow: 0 0 5px 2px whitesmoke;
    background-color: rgba(255, 255, 255, 0.8);
     border-radius: 10px;
  }
  .tab{
    font-weight:bold;
    width: 80%;
    margin: 20px auto;
    padding: 0 0 20px 0;
    color: dodgerblue;
    text-align: center;
    letter-spacing: 2px;
    display: inline-block;
  }
  .regForm{
    width: 350px;
    margin: 0 0 0 50px;
  }
  .back{
    height: 60px;
    width: 60px;
    line-height: 60px;
    border: dodgerblue solid 2px;
    border-radius: 90px;
    margin-left: 20px;
    background-color: dodgerblue;
    text-decoration: none;
    display: block;
    position: relative;
    color: whitesmoke;
    top: -50px;
    text-align: center;
    box-shadow: 0 0 5px 2px dodgerblue;
  }

  .back:hover{
    /*background-color: whitesmoke;*/
    /*color: dodgerblue;*/
    /*border: whitesmoke solid 2px;*/
    animation: change 1s;
  }

  @keyframes change
  {
    0% {
      transform:scale(1);
    }
    50% {
      transform:scale(1.3);
    }
    100% {
      transform:scale(1);
    }
  }
</style>
