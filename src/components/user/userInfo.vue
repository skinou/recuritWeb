<template>
    <div>
      <div style="margin: 40px auto;width: 190px">
        <i :class="{'text':imageShow}" class="avatar"></i>
        <img v-if="form.img===null" class="imgContent3" src="@/assets/boy.png"/>
        <img v-else class="imgContent3" :src="form.img"/>
        <div style="margin: 10px auto;width: 195px;text-align: center">
          <input type="file" name="file" id="imgFile2" accept="image/png,image/gif,image/jpeg" style="display: none">
          <el-button type="primary" plain size="mini" @click="loadImg2">更换头像</el-button>
        </div>
      </div>
      <div class="item_name">{{form.name}}</div>
      <div class="item_info">
        <ul>
          <li>
            <i class="el-icon-document"></i>
            {{form.sex}} / {{form.age}}  / {{form.city}}
          </li>
          <li>
            <i class="el-icon-edit-outline"></i>
            {{form.degree}} {{form.major}}   {{form.school}}
          </li>
          <li>
            <i class="el-icon-phone-outline"></i>
            {{form.phone}}
            &nbsp;&nbsp; {{form.email}}
          </li>
        </ul>
        <div>
          <el-button type="primary" plain @click="dialogVisible = true">修改</el-button>

          <el-dialog
            title="个人信息"
            :visible.sync="dialogVisible"
            width="600px"
            >

          <div class="form_content">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="form.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="年龄" prop="age">
                <el-col :span="10">
                  <el-input v-model="form.age"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="毕业学校" prop="school">
                <el-input v-model="form.school"></el-input>
              </el-form-item>
              <el-form-item label="学历" prop="degree">
                <el-select   v-model="form.degree" placeholder="请选择学历">
                  <el-option v-for="(item , index) in degreeItem" :key="index" :label="item" :value="item"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="专业" prop="major">
                <el-input v-model="form.major"></el-input>
              </el-form-item>
              <el-form-item label="联系电话" prop="phone">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱" prop="email">
                <el-input v-model="form.email"></el-input>
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
    </div>
</template>

<script>
  import img from "@/assets/img2.jpg"
  import $ from 'jquery'
    export default {
      name: 'user-info',
      created(){
        this.$reqs.get('/users/userInfo' )
          .then( (res)=> {
            let data = res.data[0]
            this.info = data
            this.form = this.info
            console.log(this.info)
          }).catch(function (res) {
        })
      },
      data(){
          return{
            imageShow: false,
            dialogVisible: false,
            degreeItem: ['大专','本科','硕士','博士'],
            info:{},
            form:{},
            rules:{
              name: [
                { required: true, message: '请输入姓名', trigger: 'blur' }
              ],
              sex: [
                { required: true, message: '请选择性别', trigger: 'blur' }
              ],
              age: [
                { required: true, message: '请输入年龄', trigger: 'blur' },
              ],
              city: [
                { required: true, message: '请输入所在城市', trigger: 'blur' }
              ],
              major: [
                { required: true, message: '请输入专业', trigger: 'blur' }
              ],
              school: [
                { required: true, message: '请输入学校', trigger: 'blur' }
              ],
              phone: [
                { required: true, message: '请输入联系电话', trigger: 'blur' }
              ],
              email: [
                { required: true, message: '请输入电子邮箱', trigger: 'blur' }
              ]
            }
          }
      },
      methods:{
        submitForm(formName) {
          let that = this
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$reqs.post('/users/userInfo', {
                name:that.form.name,
                sex:that.form.sex,
                age: that.form.age ,
                city:that.form.city,
                degree:that.form.degree,
                major:that.form.major,
                school:that.form.school,
                phone:that.form.phone,
                email:that.form.email
              }).then(function (res) {
                let data = res.data;
                console.log(data)
              }).catch(function (res) {
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
          this.form = this.info
        },
        loadImg2 () {

          let that = this
          $('#imgFile2').click()
          $('#imgFile2').change(function () {
            var file = $('#imgFile2').get(0).files[0]
            console.log(file)
            // console.log(file.name)
            if (file.size > 1024 * 1024) {
              that.$message({
                showClose: true,
                message: '图片过大',
                type: 'warning'
              })
            } else {
              // 创建读取文件的对象
              var reader = new FileReader()
              reader.readAsDataURL(file)

              // 创建文件读取相关的变量
              var imgFile

              // 为文件读取成功设置事件
              reader.onload = function (e) {
                // alert('文件读取完成')
                imgFile = e.target.result
                that.$reqs.post('/users/userImg', {
                  img: imgFile
                }).then(function (res) {
                }).catch(function (res) {
                  console.log(res.toString())
                })
                that.form.img = imgFile
              }
              that.imageShow = true
              console.log(that.imageShow)
            }
          })
        },

      }
    }
</script>

<style scoped>
  .item_img{
    width: 600px;
    margin: 20px auto;
    background-color: white;
  }
  .img-circle{
    width: 100px;
    height: 110px;
  }
  .item_name{
    font-size: large;
    margin-top: 10px;
  }
  .item_info{
    margin: 10px;
  }

  .item_info>ul{
    list-style: none;
    padding: 0 0 0 0;
  }
  .item_info>ul>li{
    /*list-style: none;*/
    margin: 10px 0 10px 0;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .form_content{
    width: 300px;
    margin: 0 auto;
    text-align: left;
  }
  .avatar {
    font-size: 28px;
    color: #8c939d;
    width: 85px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    z-index: 10;
    /*border:  dashed antiquewhite 3px;*/
    border-radius: 2px;
    display: inline-block;
    vertical-align: top;
    /*float: left;*/
    position: relative;
    left: 50px;
  }
  .imgContent3{
    position: relative;
    left: -40px;
    display: inline-block;
    width: 85px;
    height: 100px;
    z-index: 20;
    vertical-align: top;
  }
  .text{
    opacity: 0;
  }
</style>
