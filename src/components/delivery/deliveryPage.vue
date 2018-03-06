<template>
  <el-container class="delivery">
    <el-aside width="200px">
      <el-menu
        default-active="/success"
        :router="true"
      >
        <el-menu-item index="/success">
          <span slot="title">投递成功</span>
        </el-menu-item>
        <el-menu-item index="/checked">
          <span slot="title">被查看</span>
        </el-menu-item>
        <el-menu-item index="/communication">
          <span slot="title">待沟通</span>
        </el-menu-item>
        <el-menu-item index="/pass">
          <span slot="title">通过</span>
        </el-menu-item>
        <el-menu-item index="/fail">
          <span slot="title">不合适</span>
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
        name: "delivery-page"
    }
</script>

<style scoped>
  .delivery{
    margin: 10px auto;
    width: 1000px;
  }
</style>
