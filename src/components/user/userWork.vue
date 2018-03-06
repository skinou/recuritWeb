<template>
<div>
  <div class="content">
    <h3 style="text-align: center;margin-bottom: 30px">期望岗位</h3>
    <ul class="list">
      <li><span class="item">职位名称 ：</span>{{form.name}}</li>
      <li><span class="item">类别 ：</span>{{form.type}}</li>
      <li><span class="item">工作城市 ：</span>{{form.city}}</li>
      <li><span class="item">期望工资 ：</span>{{form.salary}}</li>
      <li><span class="item">补充 ：</span><span class="statement">{{form.statement}}</span></li>
    </ul>
  </div>

  <div>
    <el-button type="primary" plain @click="dialogVisible = true">修改</el-button>

    <el-dialog
      title="期望工作"
      :visible.sync="dialogVisible"
      width="600px"
    >

      <div class="form_content">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="期望岗位" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="类型" prop="type">
            <el-col :span="10">
              <el-select v-model="form.type" placeholder="请选择工作类型" >
                <el-option label="实习" value="实习"></el-option>
                <el-option label="兼职" value="兼职"></el-option>
                <el-option label="全职" value="全职"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="城市" prop="city">
            <el-input v-model="form.city"></el-input>
          </el-form-item>
          <el-form-item label="工资" prop="salary">
            <el-col :span="10">
              <el-select v-model="form.salary" placeholder="请选择工资" >
                <el-option label="2k以下" value="2k以下"></el-option>
                <el-option label="2k-5k" value="2k-5k"></el-option>
                <el-option label="5k-10k" value="5k-10k"></el-option>
                <el-option label="10k-15k" value="10k-15k"></el-option>
                <el-option label="15k-25k" value="15k-25k"></el-option>
                <el-option label="25k-50k" value="25k-50k"></el-option>
                <el-option label="50k以上" value="50k以上"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="补充信息" prop="supplement">
            <el-input type="textarea" v-model="form.statement"></el-input>
          </el-form-item>
          <!--<el-form-item>-->
          <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
          <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
          <!--</el-form-item>-->
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
              <el-button @click="resetForm">重 置</el-button>
              <el-button type="primary" @click="submitForm('form')">确 定</el-button>
            </span>

    </el-dialog>
  </div>

</div>
</template>

<script>
    export default {
      name: "user-work",
      created(){
        this.$reqs.get('/users/userExpect' )
          .then( (res)=> {
            let data = res.data[0];
            this.info = data;
            this.form = this.info;
            console.log(this.info)
          }).catch(function (res) {
        })
      },
      data(){
          return{
            dialogVisible: false,
            form:{
            },
            rules:{
              name: [
                { required: true, message: '请输入岗位名称', trigger: 'blur' }
              ],
              type: [
                { required: true, message: '请选择工作类型', trigger: 'blur' }
              ],
              city: [
                { required: true, message: '请输入工作城市', trigger: 'blur' }
              ],
              salary: [
                { required: true, message: '请选择工资', trigger: 'blur' }
              ]
            }
          }
      },
      methods:{
        submitForm(formName) {
          let that = this;
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$reqs.post('/users/userExpectUpdate', {
                name:that.form.name,
                type: that.form.type ,
                city:that.form.city,
                salary:that.form.salary,
                statement:that.form.statement
              }).then( (res)=> {
                let data = res.data;
                console.log(data)
              }).catch(function (res) {
              });
              this.dialogVisible = false
            } else {
              return false;
            }
          });
        },
        resetForm() {
          this.form = this.info

        }
      }
    }
</script>

<style scoped>
.content{
  width: 550px;
  /*height: 120px;*/
  border: ghostwhite solid 1px;
  margin: 20px auto;
  text-align: left;
  border-radius: 3px;
  background-color: ghostwhite;
  padding: 20px 20px 30px 20px;
}
.list{
  width: 100%;
  padding: 0 0 0 0;
  list-style: none;
}
.list>li{
  margin: 20px 0 20px 0;
  color: dimgrey;
}
.form_content{
  width: 400px;
  margin: 0 auto;
  text-align: left;
}
  .item{
    display: inline-block;
    width: 230px;
    font-weight: bold;
    margin-right: 15px;
    text-align: right;
    vertical-align: top;
  }
  .statement{
    width: 280px;
    display: inline-block;
    white-space: pre-wrap;
    word-break: break-all;
    vertical-align: top;
  }
</style>
