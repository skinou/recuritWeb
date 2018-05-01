<template>
  <div>
    <h4>公司标签</h4>
    <div class="tag" v-if="created===true">
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
    <div class="tag" v-else>
      <el-button type="primary" size="small" @click="createTags">创建标签</el-button>
    </div>




    <div class="manager">
      <h4>管理团队</h4>
      <ul v-show="leader.length!==0">
        <li v-for="(item , index) in leader" :key="index">
          <div class="item">
            <img :src="item.mimg"/>
            <span class="name">{{item.mname}}</span>
            <!--<span class="name">/</span>-->
            <span class="name">{{item.mposition}}</span>
            <span class="del"> <el-button type="primary" plain class="delete" @click="deleteRow(index,leader)"  >╳</el-button></span>
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

        <div class="imgBox">
          <img id="imgContent3" :src="form.img"/>
          <input @change="fileImage" type="file" name="image" accept="image/*" class="imgUpload">
        </div>

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
      created(){

        this.$reqs.get('/company/selectCompanyTags')
          .then( (res)=> {
            let data = res.data[0];
            console.log(data);
            if(data.length !== 0){
              this.created=true;
              this.dynamicTags=data.tags.split(',');
            }else {
              this.created=false;
            }
        }).catch( (res)=> {
          console.log(res.toString())
        });

        this.$reqs.get('/company/selectCompanyManager')
          .then( (res)=> {
            let data = res.data;
            console.log(data);
            if(data.length !== 0){
              this.leader=data;
              console.log(this.leader);
              console.log('11111111111111111111111111111111111111111111111111111111')
            }
          }).catch( (res)=> {
          console.log(res.toString())
        });


      },
      data() {
        return {
          created:false,
          dialogVisible:false,
          // dynamicTags: ['标签一', '标签二', '标签三'],
          dynamicTags:[],
          inputVisible: false,
          inputValue: '',
          // leader: [
          //   {
          //     img:'',
          //     name: '张三',
          //     position: 'CEO'
          //   }
          // ],
          leader:[],
          form: {
            img:null,
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

        createTags(){
          this.$reqs.post('/company/insertCompanyTags')
            .then( (res)=> {
              this.created = true
            }).catch( (res)=> {
            console.log(res.toString())
          });
        },

        handleClose(tag) {
          this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
          this.$reqs.post('/company/updateCompanyTags',{
            tags:this.dynamicTags.toString()
          })
            .then( (res)=> {
              console.log(res.data);
            }).catch( (res)=> {
            console.log(res.toString())
          });
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

            this.$reqs.post('/company/updateCompanyTags',{
              tags:this.dynamicTags.toString()
            })
              .then( (res)=> {
                console.log(res.data);
              }).catch( (res)=> {
                console.log(res.toString())
            });
          }
          this.inputVisible = false;
          this.inputValue = '';
        },


        deleteRow(index, rows) {
          let data = rows.splice(index, 1);
          console.log(data[0]);
          this.$reqs.post('/company/deleteCompanyManager',{
            mkey:data[0].mkey
          }).then( (res)=> {

            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.dialogVisible = false

          }).catch( (res)=> {
            console.log(res.toString())
          });
        },


        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let obj={
                mimg:this.form.img,
                mname:this.form.name,
                mposition:this.form.position,
              };
              this.leader.push(obj);

              this.$reqs.post('/company/insertCompanyManager',{
                manager:obj
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
          this.form.product='';
          this.form.describe=''
        },

        fileImage:function(e){
          let file = e.target.files[0];
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = ()=> {
            this.form.img = reader.result;
            // this.$reqs.post('/company/companyImg', {
            //   img: this.form.cimg
            // }).then(function (res) {
            // }).catch(function (res) {
            //   console.log(res.toString())
            // })
          };
        },




      }
    }
</script>

<style scoped>
  /*.el-tag + .el-tag {*/
    /*margin: 10px 0 0 10px;*/
  /*}*/
  .buttonNewTag {
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
    vertical-align: top;
    margin-left: 10px;
  }
  .input-new-tag {
    width: 90px;
    vertical-align: top;
    margin-left: 10px;

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
    margin: 0 150px 0 150px;
    /*height: 500px;*/
    list-style: none;
  }

  li{
    /*background-color: whitesmoke;*/
    background-color:rgba(	248,248,255,0.7);
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
  /*.item>span{*/
    /*display: inline-block;*/
    /*width: 100px;*/
    /*height: 30px;*/
    /*line-height: 30px;*/
    /*vertical-align: bottom;*/
    /*!*text-align: center;*!*/
    /*color: dodgerblue;*/
    /*font-size: large;*/
    /*text-overflow: ellipsis;*/
    /*overflow: hidden;*/
    /*white-space: nowrap;*/
  /*}*/
  .name{
    display: inline-block;
    max-width: 100px;
    height: 90px;
    line-height: 90px;
    /*margin: 15px 0 10px 0;*/
    /*vertical-align: bottom;*/
    /*text-align: center;*/
    color: dodgerblue;
    /*font-size: large;*/
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: top;
    font-size: 1em;
  }
  .del{
    float: right;
    width: 50px;
    line-height: 90px;
    height: 90px;
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
  .el-tag{
    max-width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: top;
    margin: 0 10px 0 10px;
  }


  .imgBox{
    margin: 0 auto;
    padding-bottom: 40px;
    width: 205px
  }

  #imgContent3{
    position: relative;
    left: 50px;
    display: inline-block;
    width: 100px;
    height: 100px;
    z-index: 20;
    vertical-align: top;
    margin: 0 0 0 0;
  }
  .imgUpload{
    display: inline-block;
    width: 100px;
    height: 100px;
    position: relative;
    left: -55px;
    opacity: 0;
    z-index: 50;
  }
</style>
