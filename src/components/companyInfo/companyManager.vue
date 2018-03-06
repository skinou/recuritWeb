<template>
  <div>
    <div class="tag">
      <h4>公司标签</h4>
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="buttonNewTag" size="small" @click="showInput">+ New Tag</el-button>
    </div>
    <div class="manager">
      <h4>管理团队</h4>
      <ul>
        <li v-for="(item , index) in leader" :key="index">
          <div class="item">
            <img src="@/assets/img3.jpg"/>
            <span>{{item.name}}&nbsp;&nbsp;&nbsp;({{item.position}})</span>
            <span style="text-align: right"> <el-button type="info" plain class="delete" @click="deleteRow(index,leader)"  >╳</el-button></span>
          </div>
        </li>
      </ul>
    </div>

    <div class="add">
      <el-button type="primary" plain size="mini" @click="dialogVisible = true">添加</el-button>
    </div>

    <el-dialog
      title="产品信息"
      :visible.sync="dialogVisible"
      width="600px"
    >

      <div class="form_content">
        <el-form ref="form" :model="form" :rules="rules" label-width="120px">
          <el-form-item label="姓名" prop="name">
            <el-col :span="20">
              <el-input v-model="form.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="职位" prop="position">
            <el-col :span="20">
              <el-input v-model="form.position"></el-input>
            </el-col>
          </el-form-item>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('form')">重 置</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </span>

    </el-dialog>

  </div>
</template>

<script>
    export default {
      name: "company-manager",
      data() {
        return {
          dialogVisible:false,
          dynamicTags: ['标签一', '标签二', '标签三'],
          inputVisible: false,
          inputValue: '',
          leader: [
            {
              name: '张三',
              position: 'CEO'
            }
          ],
          form: {
            name:'',
            position:''
          },
          rules:{
            name: [
              { required: true, message: '请输入姓名', trigger: 'blur' },
            ],
            position: [
              { required: true, message: '请输入职位', trigger: 'blur' },

            ]
          },
        }
      },
      methods: {
        handleClose(tag) {
          this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },

        showInput() {
         if(this.dynamicTags.length<=4){
           this.inputVisible = true;
           this.$nextTick(_ => {
             this.$refs.saveTagInput.$refs.input.focus();
           });
         } else{
           this.$message({
             message: '最多添加5个标签',
             type: 'warning'
           });
         }
        },

        handleInputConfirm() {
          let inputValue = this.inputValue;
          if (inputValue) {
            this.dynamicTags.push(inputValue);
          }
          this.inputVisible = false;
          this.inputValue = '';
        },
        deleteRow(index, rows) {
          rows.splice(index, 1);
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              var obj={
                name:this.form.name,
                position:this.form.position,
              }
              this.leader.push(obj)
              this.$message({
                message: '成功',
                type: 'success'
              });
              this.dialogVisible = false
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
          this.form.product=''
          this.form.describe=''
        }
      }
    }
</script>

<style scoped>
  .el-tag + .el-tag {
    margin: 10px 0 0 10px;
  }
  .buttonNewTag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .tag{
    margin: 50px auto;
  }
  .tag>h4{
    display: block;
    margin: 0 0 10px 0;
  }
  .manager>ul{
    padding: 0 0 0 0;
    margin: 0 100px 0 100px;
    /*height: 500px;*/
    list-style: none;
  }

  li{
    background-color: ghostwhite;
    margin-bottom: 30px;
  }

  .item{
    text-align: left;
  }
  img{
    margin: 15px 10px 15px 20px;
    width: 60px;
    height: 60px;
    vertical-align: bottom;
  }
  .item>span{
    display: inline-block;
    width: 150px;
    height: 90px;
    line-height: 90px;
    vertical-align: bottom;
    /*text-align: center;*/
    padding-left: 50px;
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
