<template>
  <div>
    <img id="imgContent"/>
    <i v-show="imageShow" class="el-icon-plus avatar-uploader-icon"></i>
    <input type="file" name="file" class="upload_input" id="imgFile" @change="loadImg">
  </div>
</template>

<script>
    export default {
      name: "img-upload",
      data () {
        return {
          imageShow: true
        }
      },
      methods: {
        loadImg() {
          var that = this
          console.log('123132123')
          // 获取文件
          var file = $('#imgFile').get(0).files[0]
          var files = $('#imgFile').get(0).files
          console.log(files)
          console.log('123132123')
          // 创建读取文件的对象
          var reader = new FileReader()
          reader.readAsDataURL(file)

          // 创建文件读取相关的变量
          var imgFile

          // 为文件读取成功设置事件
          reader.onload = function (e) {
            // alert('文件读取完成')
            imgFile = e.target.result
            // console.log(imgFile)
            $('#imgContent').attr('src', imgFile)
          }
          that.imageShow = false
          console.log(that.imageShow)
          // 正式读取文件
        },
      }
    }
</script>

<style scoped>
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    z-index: 20;
    border-radius: 2px;
    display: inline-block;
    vertical-align: top;
    position: relative;
    left: -155px;
  }
  .upload_input {
    width: 150px;
    height: 150px;
    z-index: 30;
    display: inline-block;
    vertical-align: top;
    opacity: 0;
    position: relative;
    left: -310px;
  }
  img{
    display: inline-block;
    width: 150px;
    height: 150px;
    z-index: 10;
    vertical-align: top;
  }
</style>
