<template>
  <el-row>
    <el-col :span="12" class="Tac">
      <!-- <h5>默认颜色</h5> -->
      <el-menu>
        <router-link to="/home">
          <el-menu-item index="0">
            <i class="el-icon-menu"></i>
            <span slot="title">首页 </span>
          </el-menu-item></router-link
        >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据管理</span>
          </template>

          <router-link to="/userlist">
            <el-menu-item index="1-1">用户列表 </el-menu-item>
          </router-link>
          <router-link to="/shoplist">
            <el-menu-item index="1-2"> 商品列表</el-menu-item>
          </router-link>
          <router-link to="/foodlist">
            <el-menu-item index="1-3"> 食品列表 </el-menu-item>
          </router-link>
          <router-link to="/orderlist">
            <el-menu-item index="1-4"> 订单列表 </el-menu-item>
          </router-link>
          <!-- <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu> -->
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>添加数据</span>
          </template>
          <router-link to="/addshop">
            <el-menu-item index="2-1">添加用户</el-menu-item>
          </router-link>
          <router-link to="/addorder">
            <el-menu-item index="2-2">添加商品</el-menu-item>
          </router-link>
        </el-submenu>
        <!-- <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item> -->
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">用户分布</span>
        </el-menu-item>
        <router-link to="/myself">
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">个人中心 </span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace("/", "");
    },
  },
};
</script>
<style scoped>
.Tac {
  /* border: 1px solid red; */
  width: 200px;
  /* height: 100vh; */
  position: fixed;
  top: 0;
  bottom: 0;
  /* background-color: #696969; */
}
/* .el-submenu .el-menu-item {
  min-width: 0px;
} */
el-menu-item:hover {
  background-color: rgb(255, 255, 255);
}
</style>
