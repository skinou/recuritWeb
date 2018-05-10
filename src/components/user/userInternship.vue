<template>
<div>
  <h3>工作经历</h3>
  <ul class="intern_ul">
    <li v-for="(item , index) in workData">
      <span class="item" style="font-size: large">{{item.company}}<span style="display: inline-block;margin-left: 10px">( {{item.position}} )</span></span>
      <!--<el-button class="button" type="danger" plain size="small" @click="deleteRow(index,workData)">删除</el-button>-->
      <span style="text-align: right;float: right;"> <el-button type="info" plain class="delete" @click="deleteRow(index,workData)"  >╳</el-button></span>
      <span class="item">{{item.start}} - {{item.end}}</span>
      <span class="describe">{{item.statement}}</span>
    </li>
  </ul>


  <div>
    <el-button type="primary" plain @click="dialogVisible = true">添加</el-button>

    <el-dialog
      title="工作经验"
      :visible.sync="dialogVisible"
      width="600px"
    >

      <div class="form_content">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="公司" prop="company">
            <el-input v-model="form.company"></el-input>
          </el-form-item>
          <el-form-item label="职位" prop="position">
            <el-input v-model="form.position"></el-input>
          </el-form-item>
          <el-form-item label="开始日期" prop="start">
            <el-col :span="13">
              <el-date-picker type="date" placeholder="选择日期"
                              format="yyyy 年 MM 月 dd 日"
                              value-format="yyyy.MM.dd"
                              v-model="form.start" style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="结束日期" prop="end">
            <el-col :span="13">
              <el-date-picker type="date" placeholder="选择日期"
                              format="yyyy 年 MM 月 dd 日"
                              value-format="yyyy.MM.dd"
                              v-model="form.end" style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="工作描述" prop="statement">
            <el-input type="textarea"  :rows="7" v-model="form.statement"></el-input>
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
      name: "user-internship",
      created(){
        this.$reqs.get('/users/getUserWork' )
          .then((res)=> {
            // let data = res.data;
            this.workData = res.data;
            // this.form = this.info;
            console.log(this.workData)
          }).catch(function (res) {
        })
      },
      data(){
          return {
            dialogVisible:false,
            workData: [
              {
                // company: 'A公司',
                // position: 'java工程师',
                // start: "2015.02.11",
                // end: '2015.05.15',
                // describe: '期间........................00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000............'
              }
            ],
            form:{
              company: '',
              position: '',
              start: "",
              end: '',
              statement: ''
            },
            rules:{
              company: [
                { required: true, message: '请输入公司名称', trigger: 'blur' }
              ],
              position: [
                { required: true, message: '请输入职位名称', trigger: 'blur' }
              ],
              statement: [
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
          let data = rows.splice(index, 1);
          console.log(data[0].keyid)
          this.$reqs.post('/users/deleteUserWork', {
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
                company:this.form.company,
                position:this.form.position,
                statement:this.form.statement,
                start:this.form.start,
                end:this.form.end,
              }
              this.$reqs.post('/users/insertUserWork', {
                company:this.form.company,
                position:this.form.position,
                statement:this.form.statement,
                start:this.form.start,
                end:this.form.end,
              }).then( (res)=> {
                let data = res.data;
                console.log(data)
              }).catch(function (res) {
              });
              this.workData.push(obj)
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
          this.form.company=''
          this.form.position=''
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
  span{
    color: black;
  }
</style>
