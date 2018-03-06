<template>
<div>

  <ul class="intern_ul">
    <li v-for="(item , index) in data">
      <span class="item" style="font-size: large">{{item.name}}</span>
      <el-button class="button" type="danger" plain size="small" @click="deleteRow(index,data)">删除</el-button>
      <span class="item">{{item.start}} - {{item.end}}</span>
      <span class="describe">{{item.describe}}</span>
    </li>
  </ul>


  <div>
    <el-button type="primary" plain @click="dialogVisible = true">
      添加
    </el-button>

    <el-dialog
      title="工作经验"
      :visible.sync="dialogVisible"
      width="600px"
    >

      <div class="form_content">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="开始日期" prop="start">
            <el-col :span="13">
              <el-date-picker type="date" placeholder="选择日期"
                              format="yyyy 年 MM 月 dd 日"
                              value-format="yyyy-MM-dd"
                              v-model="form.start" style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="结束日期" prop="end">
            <el-col :span="13">
              <el-date-picker type="date" placeholder="选择日期"
                              format="yyyy 年 MM 月 dd 日"
                              value-format="yyyy-MM-dd"
                              v-model="form.end" style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="任职描述" prop="describe">
            <el-input type="textarea" v-model="form.describe"></el-input>
          </el-form-item>
          <!--<el-form-item>-->
          <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
          <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
          <!--</el-form-item>-->
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
              <el-button @click="resetForm('form')">取 消</el-button>
              <el-button type="primary" @click="submitForm('form')">确 定</el-button>
            </span>

    </el-dialog>
  </div>

</div>
</template>

<script>
    export default {
        name: "user-project",
      data(){
        return {
          dialogVisible:false,
          data: [
            {
              name: '项目A',
              start: "2015.02.11",
              end: '2015.05.15',
              describe: '期间........................00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000............'
            }
          ],
          form:{
            name: '',
            start: "",
            end: '',
            describe: ''
          },
          rules:{
            name: [
              { required: true, message: '请输入项目名称', trigger: 'blur' }
            ],
            describe: [
              { required: true, message: '请输入任职期间经历', trigger: 'blur' }
            ],
            start: [
              { required: true, message: '请选择时间', trigger: 'blur' }
            ],
            end: [
              { required: true, message: '请选择时间', trigger: 'blur' }
            ]
          },
        }
      },
      methods:{
        deleteRow(index, rows) {
          rows.splice(index, 1);
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // alert('submit!');
              this.dialogVisible = false
              var obj={
                name:this.form.name,
                describe:this.form.describe,
                start:this.form.start,
                end:this.form.end,
              }
              this.data.push(obj)
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
          this.form.name=''
          this.form.describe=''
          this.form.start=''
          this.form.end=''
          this.dialogVisible = false
        }
      }
    }
</script>

<style scoped>
  .intern_ul{
    width: 700px;
    list-style: none;
    margin: 30px auto;
    padding: 0 0 0 0;
  }
  .intern_ul>li{
    width: 600px;
    padding: 30px 30px 30px 40px;
    height: auto;
    border: whitesmoke solid 1px;
    background-color: ghostwhite;
    border-radius: 5px;
    margin: 20px auto;
    text-align: left;
  }
  .item{
    display: inline-block;
    width: 500px;
    margin: 0 0 10px 0;
    text-align: left;
  }
  .describe{
    display: block;
    width: 400px;
    white-space: pre-wrap;
    text-align: left;
    word-break: break-all;
    margin: 10px 0 0 0;
    /*font-size: small;*/
  }
  .button{
    float: right;
  }
  .form_content{
    width: 400px;
    margin: 0 auto;
    text-align: left;
  }
</style>
