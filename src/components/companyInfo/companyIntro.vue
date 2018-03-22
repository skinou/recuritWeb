<template>
  <div class="item">
    <div class="item_head">
      <h4>公司介绍</h4>
    </div>
    <div class="item_body">
      <p v-for="(arrItem , index) in info" :key="index">{{arrItem}}</p>
    </div>
    <div class="item_foot">
      <el-button type="primary" plain size="mini" @click="dialogVisible = true">修改</el-button>
    </div>

    <el-dialog
      title="公司介绍"
      :visible.sync="dialogVisible"
      width="800px"
    >

      <div class="form_content">
        <el-form ref="form" :model="form" :rules="rules" label-width="120px">
          <el-form-item label="产品描述" prop="intro">
            <el-input type="textarea" :rows="7" v-model="form.intro" placeholder="产品描述"></el-input>
            <span>{{form.intro.length}}字</span>
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
      name: "company-intro",
      created(){
        this.$reqs.get('/company/selectCompanyIntro')
          .then( (res)=> {
            console.log(res.data);
            this.form.intro = res.data[0].intro;
            // console.log(this.infoData);
          }).catch( (res)=> {
          console.log(res.toString())
        })
      },
      data(){
        return{
          dialogVisible:false,
          // infoData:null,
          // '米矿服务品牌，从新零售做起\n' +
          // '一家全渠道融合运营滴服务公司，成立两年一直稳步发展。\n' +
          // '无论你喜欢相对稳定的环境还是快速发展的激情，这里都有属于你的舞台。\n' +
          // '\n' +
          // '合作项目繁多，分布在广东周边地域，总有一个是你家~\n' +
          // '新零售电商+移动互联网拓展整合ing，物色着同样有新零售互联网思维滴你加入！\n' +
          // '传统企业的产品+互联网思维运营，\n' +
          // '蛋糕已经准备好了，你还等待啥？\n' +
          // '\n' +
          // '【氛围】\n' +
          // '✔年轻团队，全部＜35\n' +
          // '✔扁平开放去阶级，高效协作常常自嗨\n' +
          // '✔追求高效能，偏好新技术、新工具\n' +
          // '✔协作核心：自我驱动+自律',
          form:{
            intro:''
          },
          rules:{
            intro: [
              { required: true, message: '请输入公司介绍信息', trigger: 'blur' },
            ]
          },
        }
      },
      computed:{
        info () {
          if(this.infoData!==null){
            let arr = this.form.intro.split('\n');
            return arr
          } else{
            return null
          }

        },
      },
      methods:{
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$reqs.post('/company/updateCompanyIntro', {
                intro: this.form.intro
              }).then( (res)=> {
                this.$message({
                  message: '成功',
                  type: 'success'
                });
                this.dialogVisible = false
              }).catch( (res)=> {
                console.log(res.toString())
              });

            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
          // this.form.intro=''
        }
      }
    }
</script>

<style scoped>
  .item_head{
    width: 760px;
    height: 30px;
    line-height: 30px;
    /*float: left;*/
    margin: 20px 0 20px 0;
  }
  .item_head>h4{
    margin: 0 0 0 50px;
    text-align: left;
  }

  .item_body{
    width: 680px;
    /*float: left;*/
    min-height: 50px;
    text-align: left;
    padding-left: 80px;
  }
  .item_foot{
    text-align: right;
    width: 560px;
    height: 50px;
    line-height: 50px;
    padding: 20px 100px 20px 100px;
    float: left;
    /*background-color: ghostwhite;*/
  }
  .form_content{
    width: 700px;
    margin: 0 auto;
    text-align: left;
  }
</style>
