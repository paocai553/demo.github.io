<template>
  <div class="container">
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <div class="basicInfo" v-if="active === 0">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品名称" prop="goods_name">
          <el-input v-model="ruleForm.goods_name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格(元)" prop="goods_price">
          <el-input v-model="ruleForm.goods_price"></el-input>
        </el-form-item>
        <el-form-item label="商品重量(g)" prop="goods_weight">
          <el-input v-model="ruleForm.goods_weight"></el-input>
        </el-form-item>
        <el-form-item label="商品数量(个)" prop="goods_number">
          <el-input v-model="ruleForm.goods_number"></el-input>
        </el-form-item>
        <el-form-item label="选择分类" prop="goods_cat">
          <el-cascader
            :props="defaultParams"
            :options="options"
            v-model="selectedOptions"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
      </el-form>
    </div>
    <div class="basicInfo" v-if="active === 1">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>
    <div class="basicInfo" v-if="active === 2">
      <Editor />
      <el-button type="primary" @click="submitForm()">提交</el-button>
    </div>
    <el-button style="margin-top: 12px" @click="prev">上一步</el-button>
    <el-button style="margin-top: 12px" @click="next">下一步</el-button>
  </div>
</template>
<script>
import axios from "axios";
import _ from "lodash";
import Editor from "../components/Editor";
export default {
  data() {
    return {
      active: 0,
      dialogImageUrl: "",
      dialogVisible: false,

      content: null,
      editorOption: {},

      options: [],
      selectedOptions: [],
      defaultParams: {
        label: "cat_name",
        value: "cat_id",
        children: "children",
      },

      ruleForm: {
        goods_name: "",
        goods_price: "",
        goods_number: "",
        goods_weight: "",
        goods_cat: "",
      },
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    submitForm() {
      axios.post("/api/goods", this.ruleForm).then((res) => {
        console.log(this.ruleForm);

        console.log(res);
      });
    },
    getProduct() {
      axios.get("/api/categories").then((res) => {
        // console.log(res);
        this.options = res.data.data;
      });
    },
    handleChange(value) {
      // console.log(value);
      this.ruleForm.goods_cat = value.join(",");
      console.log(this.ruleForm.goods_cat);
      console.log(this.ruleForm);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    prev() {
      // console.log(this.active);

      if (this.active-- < 1) this.active = 0;
    },
    next() {
      // console.log(this.active);
      if (this.active++ > 1) this.active = 0;
    },
  },
  components: {
    Editor,
  },
};
</script>
<style scoped>
.container {
  /* background-color: #ccc; */
  width: 90%;
  margin-left: 5%;
  margin-top: 5vh;
}
.basicInfo {
  /* width: 800px; */
  /* background-color: #ccc; */
  height: 40vh;
}
</style>
