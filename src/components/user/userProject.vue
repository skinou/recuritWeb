<template>
<div>
  <h3>项目经验</h3>
  <ul class="intern_ul">
    <li v-for="(item , index) in proData">
      <span class="item" style="font-size: large">{{item.project}}</span>
      <!--<el-button class="button" type="danger" plain size="small" @click="deleteRow(index,data)">删除</el-button>-->
      <span style="text-align: right;float: right;"> <el-button type="info" plain class="delete" @click="deleteRow(index,proData)"  >╳</el-button></span>
      <span class="item">{{item.start}} - {{item.end}}</span>
      <span class="describe">{{item.statement}}</span>
    </li>
  </ul>


  <div>
    <el-button type="primary" plain @click="dialogVisible = true">
      添加
    </el-button>

    <el-dialog
      title="项目经验"
      :visible.sync="dialogVisible"
      width="600px"
    >

      <div class="form_content">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="名称" prop="project">
            <el-input v-model="form.project"></el-input>
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
          <el-form-item label="项目描述" prop="describe">
            <el-input type="textarea" :rows="7" v-model="form.statement"></el-input>
          </el-form-item>
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
      created(){
        this.$reqs.get('/users/getUserPro' )
          .then((res)=> {
            // let data = res.data;
            this.proData = res.data;
            // this.form = this.info;
            console.log(this.proData)
          }).catch(function (res) {
        })
      },
      data(){
        return {
          dialogVisible:false,
          proData: [
            // {
            //   name: '项目A',
            //   start: "2015.02.11",
            //   end: '2015.05.15',
            //   statement: '期间........................00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000............'
            // }
          ],
          form:{
            project: '',
            start: "",
            end: '',
            statement: ''
          },
          rules:{
            project: [
              { required: true, message: '请输入项目名称', trigger: 'blur' }
            ],
            statement: [
              { required: true, message: '请描述项目经历', trigger: 'blur' }
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
          // rows.splice(index, 1);
          let data = rows.splice(index, 1);
          console.log(data[0].keyid)
          this.$reqs.post('/users/deleteUserPro', {
            keyid:data[0].keyid,
          }).then( (res)=> {
            let data = res.data;
            console.log(data)
          }).catch(function (res) {
          });
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // alert('submit!');
              this.dialogVisible = false
              var obj={
                project:this.form.project,
                statement:this.form.statement,
                start:this.form.start,
                end:this.form.end,
              }
              this.$reqs.post('/users/insertUserPro', {
                project:this.form.project,
                statement:this.form.statement,
                start:this.form.start,
                end:this.form.end,
              }).then( (res)=> {
                let data = res.data;
                console.log(data)
              }).catch(function (res) {
              });
              this.proData.push(obj)
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
          this.form.project=''
          this.form.statement=''
          this.form.start=''
          this.form.end=''
          this.dialogVisible = false
        }
      }
    }
</script>

<style scoped>
  .intern_ul{
    width: 600px;
    list-style: none;
    margin: 30px auto;
    padding: 0 0 0 0;
  }
  .intern_ul>li{
    width: 500px;
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
    width: 400px;
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
  .delete{
    height: 20px;
    width: 20px;
    line-height: 20px;
    padding: 0 0 0 0;
  }
  .form_content{
    width: 400px;
    margin: 0 auto;
    text-align: left;
  }
</style>
