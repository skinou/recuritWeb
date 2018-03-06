<template>
<div>

  <div class="describe">
    <p>{{describe}}</p>
  </div>

  <div>
    <el-button  type="primary" plain @click="dialogVisible = true" >修改</el-button>

    <el-dialog
      title="自我评价"
      :visible.sync="dialogVisible"
      width="600px"
    >
        <el-input  :rows="7" type="textarea"  v-model="describe" class="text"></el-input>

       <span slot="footer" class="dialog-footer">
         <el-button @click="dialogVisible = false">取 消</el-button>
         <el-button type="primary" @click="dialogVisible = false" >确 定</el-button>
       </span>
    </el-dialog>
  </div>
</div>
</template>

<script>
    export default {
        name: "user-description",
      data(){
          return{
            dialogVisible: false,
            describe:'11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
          }
      }
    }
</script>

<style scoped>
.describe{
  width: 600px;
  padding: 30px 50px 30px 50px;
  margin: 50px auto;
  background-color: ghostwhite;
  word-break: break-all;
  white-space: pre-wrap;
  text-align: left;
}
  .text{
    width: 400px;
    height: 150px;
  }
</style>
