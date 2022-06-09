<template>
  <div class="container">
    <!-- <el-button type="text" @click="dialogVisible = true">添加用户</el-button>
    <el-dialog
      title="添加用户"
      :visible.sync="dialogVisible"
      width="60%"
      height="50%"
      :before-close="handleClose"
    >
      <el-form
        :model="addForm"
        :rules="addFormRules"
        ref="addFormRef"
        label-width="100px"
      >
        <el-form-item label="用户名称" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="mobile">
          <el-input v-model="addForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog> -->
    <!--  -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        label="创建时间"
        width="180"
        prop="create_time"
        :formatter="formatDate"
      >
      </el-table-column>
      <el-table-column label="姓名" width="180" prop="username">
      </el-table-column>
      <el-table-column prop="mobile" label="电话"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="role_name" label="角色"> </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-switch
            @change="handleShowStatusChange(scope.$index, scope.row)"
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="0"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
// import { addusers } from "@/api/users";
export default {
  data() {
    return {
      value: false,
      query: "",
      pagenum: 1,
      pagesize: 10,
      tableData: [],
      dialogVisible: false,
      // addForm: {
      //   username: "",
      //   password: "",
      //   email: "",
      //   mobile: "",
      // },
      // addFormRules: {
      //   username: [
      //     { required: true, message: "请输入用户名称", trigger: "blur" },
      //     {
      //       min: 3,
      //       max: 10,
      //       message: "长度在 3 到 10 个字符",
      //       trigger: "blur",
      //     },
      //   ],
      //   password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      //   mobile: [
      //     { required: true, message: "请输入手机号", trigger: "change" },
      //     {
      //       pattern: /^1[3|5|7|8|9]\d{9}$/,
      //       message: "请输入正确的号码格式",
      //       trigger: "change",
      //     },
      //   ],
      //   email: [
      //     { required: true, message: "请输入邮箱地址", trigger: "blur" },
      //     {
      //       type: "email",
      //       message: "请输入正确的邮箱地址",
      //       trigger: ["blur", "change"],
      //     },
      //   ],
      // },
    };
  },
  created() {
    this.userlist();
  },
  methods: {
    // addUser() {
    //   this.$refs.addFormRef.validate(async (valid) => {
    //     if (valid) {
    //       axios.post("api/users", this.addForm).then((data) => {
    //         console.log(data);
    //       });
    //     }
    //   });
    // },
    // addDialogClosed() {
    //   this.$refs.addFormRef.resetFilelds();
    // },

    handleClick(row) {
      console.log(row);
    },
    formatDate(row, column) {
      var date = new Date(row[column.property] * 1000);
      const Y = date.getFullYear() + "-";
      const M =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1) + "-"
          : date.getMonth() + 1 + "-";
      const D =
        date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
      const h =
        date.getHours() < 10
          ? "0" + date.getHours() + ":"
          : date.getHours() + ":";
      const m =
        date.getMinutes() < 10
          ? "0" + date.getMinutes() + ":"
          : date.getMinutes() + ":";
      const s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    },
    userlist() {
      axios({
        methods: "get",
        url: "api/users",
        params: {
          pagenum: this.pagenum,
          pagesize: this.pagesize,
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data.data.users);
        // console.log(res.data.data.users[0].email);
        this.tableData = res.data.data.users;
        console.log(this.tableData);
      });
    },
    // handleClose(done) {
    //   this.$confirm("确定关闭？")
    //     .then((_) => {
    //       done();
    //     })
    //     .catch((_) => {});
    // },
  },
};
</script>
<style scoped>
.container {
  width: 90%;
  margin-left: 5%;
  padding-top: 5vh;
}
</style>
