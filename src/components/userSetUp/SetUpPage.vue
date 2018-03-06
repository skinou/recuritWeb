<template>
  <el-container class="set">
    <el-aside width="200px">
      <el-menu
        default-active="/SetUpPhone"
        :router="true"
      >
        <el-menu-item index="/SetUpPhone">
          <span slot="title">账号信息</span>
        </el-menu-item>
        <el-menu-item index="/SetUpPsw">
          <span slot="title">修改密码</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "set-up-page"
    }
</script>

<style scoped>
  .set{
    margin: 10px auto;
    width: 1000px;
  }
</style>
