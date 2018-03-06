<template>
    <div class="info">
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
    </div>
</template>

<script>
    export default {
      name: "set-up-phone",
      data(){
          return{
            form:{
              phone: ''
            },
            rules: {
              phone: [
                {required: true, message: '请输入新账号', trigger: 'blur'},
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
        }
      }
    }
</script>

<style scoped>
.info{
  width: 700px;
  margin: 0 auto;
  height: 450px;
}
  .el-form{
    width: 500px;
  }
  .now{
    width: 500px;
    margin: 20px 0 20px 30px;
    text-align: left;
  }
</style>
