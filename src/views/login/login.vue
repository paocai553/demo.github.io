<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h2>后台管理系统</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import axios from "axios";
import { login } from "@/api/login";
export default {
  data() {
    return {
      ruleForm: {
        password: "123456",
        // checkpassword: "",
        username: "admin",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在3-10之间", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  methods: {
    handleLogin() {
      this.$refs.ruleForm.validate(async (valid) => {
        // if (!valid) return;
        // let res = await login(this.ruleForm);
        // console.log(res);
        if (valid) {
          let res = await login(this.ruleForm);
          console.log(res);
          if (res.data.meta.status === 200) {
            this.$message({
              type: "success",
              message: "登录成功!",
            });
            sessionStorage.setItem("token", res.data.data.token);
            this.$router.push("/home");
          } else {
            this.$message({
              type: "error",
              message: "登录失败!",
            });
          }
        } else {
          console.log("error");
        }
      });
      //   this.$refs.ruleForm.validate(async (valid) => {
      //     if (valid) {
      //       axios.post("/api/login", this.ruleForm).then((res) => {
      //         console.log(res);
      //         // console.log(res.data.data.token);
      //         if (res.data.meta.status === 200) {
      //           this.$message({
      //             type: "success",
      //             message: "登录成功!",
      //           });
      //           window.sessionStorage.setItem("token", res.data.data.token);
      //           window.sessionStorage.setItem(
      //             "user",
      //             JSON.stringify(res.data.data)
      //           );
      //           this.$router.push("/layout");
      //         } else {
      //           this.$message({
      //             type: "error",
      //             message: "登录失败!",
      //           });
      //         }
      //       });
      //     } else {
      //       console.log("error");
      //     }
      //   });
    },
  },
};
</script>

<style scoped>
.demo-ruleForm {
  width: 50%;
  /* border: 1px solid black; */
  margin-left: 25%;
  padding-top: 150px;
}
.demo-ruleForm h2 {
  text-align: center;
}
.el-form-item__label {
  text-align: center;
}
.el-button {
  width: 100%;
}




</style>
