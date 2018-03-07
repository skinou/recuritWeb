<template>
<div>
  <h3>技能</h3>
  <div class="content">
    <ul>
      <li v-for="(item,index) in skillData" :key="index">
        <div class="skill">
          <h4 class="title">{{item.skill}}</h4>
          <el-button class="button" icon="el-icon-close" size="mini" @click="deleteRow(index,skillData)"></el-button>
          <el-progress :text-inside="true" :stroke-width="16" :percentage="item.sValue"></el-progress>
        </div>
      </li>
    </ul>
  </div>

  <div>
    <el-button  type="primary" plain @click="add" >添加</el-button>

    <el-dialog
      title="技能"
      :visible.sync="dialogVisible"
      width="600px"
    >

      <div class="form_content">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="技能" prop="skill">
            <el-col :span="11">
              <el-input v-model="form.skill"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="熟练度" prop="sValue">
            <el-slider v-model="form.sValue"></el-slider>
          </el-form-item>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
         <el-button @click="dialogVisible = false">取 消</el-button>
         <el-button type="primary" @click="submitForm('form')" >确 定</el-button>
       </span>
    </el-dialog>
  </div>

</div>
</template>

<script>
    export default {
      name: "user-skill",
      created(){
        this.$reqs.get('/users/getUserSkill' )
          .then((res)=> {
            // let data = res.data;
            this.skillData = res.data;
            // this.form = this.info;
            console.log(this.skillData)
          }).catch(function (error) {


          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);



        })
      },
      data(){
          return{
            dialogVisible: false,
            skillData:[
              // {
              //   skill:'JavaScript',
              //   sValue: 80
              // },
              // {
              //   skill:'html5',
              //   sValue: 70
              // },
            ],
            form:{
              skill:'',
              sValue:10
            },
            rules: {
              skill: [
                {required: true, message: '请输入技能名称', trigger: 'blur'}
              ],
            }
          }
      },
      methods:{
        add(){
          if(this.skillData.length < 5){
            this.dialogVisible = true
          }else{
            this.$message({
              message: '最多只能添加5项技能',
              type: 'warning'
            });
          }
        },
        deleteRow(index, rows) {
          let data = rows.splice(index, 1);
          console.log(data[0].keyid)
          this.$reqs.post('/users/deleteUserSkill', {
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
                skill:this.form.skill,
                sValue:this.form.sValue,
              }
              this.$reqs.post('/users/insertUserSkill', {
                skill:this.form.skill,
                sValue:this.form.sValue,
              }).then( (res)=> {
                let data = res.data;
                console.log(data)
              }).catch(function (res) {
              });
              this.skillData.push(obj)
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
      }
    }
</script>

<style scoped>
.content{
  width: 500px;
  /*padding: 30px 50px 30px 50px;*/
  margin: 30px auto;
  /*min-height: 100px;*/
  background-color: ghostwhite;

}
  .content>ul{
    list-style: none;
    margin: 0 auto;
    padding: 10px 0 50px 0;
  }

.content>ul>li{
  width: 300px;
  margin: 20px auto;
  padding: 0 10px 20px 10px;
  background-color: white;
}

.content>ul>li:hover{
  background-color: white;
}

  .title{
    display: inline-block;
  }
  .button{
    margin: 18px 10px 18px 0;
    float: right;
    display: inline-block;
    border: none;
    padding: 5px 5px 5px 5px;
  }
  .form_content{
    width: 400px;
    margin: 0 auto;
  }
</style>
