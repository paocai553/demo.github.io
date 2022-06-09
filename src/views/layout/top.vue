<template>
  <div>
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">
          {{ item }}
        </el-breadcrumb-item>
        <!-- <el-breadcrumb-item>用户列表</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  height: 5vh;
  /* line-height: 5vh; */
  background-color: rgb(242, 236, 236);
}
.el-breadcrumb {
  line-height: 5vh;
}
/* .Top {
  width: 100%;
  background: rgb(255, 255, 255);
  position: fixed;
} */
/* div { */
/* width: 100%; */
/* background-color: rgb(1, 1, 1); */
/* } */
</style>
