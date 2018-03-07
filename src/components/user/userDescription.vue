<template>
<div>

  <h3>自我描述</h3>
  <div class="describe">
    <p>{{statement}}</p>
  </div>

  <div>
    <el-button  type="primary" plain @click="dialogVisible = true" >修改</el-button>

    <el-dialog
      title="自我评价"
      :visible.sync="dialogVisible"
      width="600px"
    >
        <el-input  :rows="7" type="textarea"  v-model="statement" class="text"></el-input>

       <span slot="footer" class="dialog-footer">
         <el-button @click="reset">重 置</el-button>
         <el-button type="primary" @click="onSubmit" >确 定</el-button>
       </span>
    </el-dialog>
  </div>
</div>
</template>

<script>
    export default {
      name: "user-description",
      created(){
        this.$reqs.get('/users/getUserDes' )
          .then((res)=> {
            let data = res.data[0];
            this.statement = data.statement;
            // this.form = this.info;
            console.log(this.statement)
          }).catch(function (res) {
        })
      },
      data(){
          return{
            dialogVisible: false,
            statement:''
          }
      },
      methods:{
        onSubmit(){
          let that = this
          this.$reqs.post('/users/updateUserDes', {
            statement:that.statement,
          }).then( (res)=> {
            let data = res.data;
            console.log(data)
          }).catch(function (res) {
          });
          this.dialogVisible = false
        },
        reset(){

        }
      }

    }
</script>

<style scoped>
.describe{
  width: 500px;
  padding: 30px 50px 30px 50px;
  margin: 50px auto;
  background-color: ghostwhite;
  word-break: break-all;
  white-space: pre-wrap;
  text-align: left;
}
.describe>p{
  line-height: 160%;
}
  .text{
    width: 400px;
    height: 150px;
  }
</style>
