<template>

  <div class="item">
    <div class="item_head">
      <h4>基本信息</h4>
    </div>
    <div class="item_body">
       <img src="@/assets/img1.jpg"/>
       <span class="name">{{form.name}}</span>
      <span class="city">{{form.city}}</span>
       <span class="field">{{form.field.join()}}</span>
       <span class="fiance">{{form.fiance}}</span>
      <span class="sentence">{{form.sentence}}</span>

     </div>
    <div class="item_foot">
    <el-button type="primary" plain size="mini"  @click="dialogVisible = true">修改</el-button>
    </div>

    <el-dialog
      title="公司基本信息"
      :visible.sync="dialogVisible"
      width="800px"
    >

      <div class="form_content">
        <el-form ref="form" :model="form" :rules="rules" label-width="120px">
          <el-form-item label="公司名称" prop="name">
            <el-col :span="11">
              <el-input v-model="form.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="公司所在城市" prop="city">
            <el-col :span="6">
              <el-input v-model="form.city"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="融资阶段" prop="fiance">
            <el-select v-model="form.fiance" placeholder="请选择融资阶段">
              <el-option v-for="(item , index) in fianceItem" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="类别" prop="field">
            <el-select  multiple v-model="form.field" placeholder="请选择类别">
              <el-option v-for="(item , index) in fieldItem" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="一句话介绍" prop="sentence">
            <el-input v-model="form.sentence"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
              <el-button @click="resetForm('form')">取 消</el-button>
              <el-button type="primary" @click="submitForm('form')">确 定</el-button>
            </span>

    </el-dialog>

  </div>

</template>

<script>
    export default {
        name: "company-info",
      data(){
          return{
            fianceItem: ['未融资','天使轮','A轮','B轮','C轮','D轮','D轮以上','上市公司','不需要融资'],
            fieldItem: ['移动互联网','电子商务','金融','企业服务','教育',
              '文化娱乐','游戏','O2O','硬件','旅游','医疗健康',
              '生活服务','广告营销','数据服务','社交服务','分类信息','信息安全','招聘','其他'],
            dialogVisible:false,
            form:{
              name:'广州米矿信息科技有限公司',
              city:'广州',
              field:['企业服务'],
              fiance:'D轮及以上',
              sentence:'一句话介绍'
            },
            rules: {
              name: [
                { required: true, message: '请输入公司名称', trigger: 'blur' }
              ],
              sentence: [
                { required: true, message: '不能为空', trigger: 'change' },
                { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
              ],
              city: [
                { required: true, message: '请输入所在城市', trigger: 'blur' }
              ],
              fiance: [
                { required: true, message: '请选择融资阶段', trigger: 'blur' }
              ],
              field: [
                { required: true, message: '请选择公司类别', trigger: 'blur' }
              ]
            }
          }
      },
      methods:{
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$message({
                message: '成功',
                type: 'success'
              });
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
.item_head{
  width: 760px;
  height: 30px;
  line-height: 30px;
  margin: 20px 0 20px 0;
}
.item_head>h4{
  margin: 0 0 0 50px;
  text-align: left;
}

  .item_body{
    width: 760px;
    text-align: center;
  }
  .item_body>img{
    width: 180px;
    height: 160px;
    display: inline-block;
  }
.item_body>span{
  display: block;
  margin: 20px auto;
}
  .item_foot{
    text-align: right;
    width: 560px;
    height: 50px;
    line-height: 50px;
    padding: 20px 100px 20px 100px;
  }

  .sentence{
    height: 45px;
  }

  .form_content{
    width: 700px;
    margin: 0 auto;
    text-align: left;
  }
</style>
