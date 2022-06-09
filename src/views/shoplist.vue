<template>
  <div class="container">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        label="创建时间"
        width="180"
        prop="add_time"
        :formatter="formatDate"
      >
      </el-table-column>
      <el-table-column label="商品名称" width="180" prop="goods_name">
      </el-table-column>
      <el-table-column prop="goods_price" label="商品价格(元)">
      </el-table-column>
      <el-table-column prop="goods_weight" label="商品重量(g)">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
      
       layout="prev, pager, next" :total="1000"> </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      query: "",
      pagenum: 1,
      pagesize: 5,
      tableData: [],
    };
  },
  created() {
    this.goodslist();
  },
  methods: {
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
    goodslist() {
      axios({
        method: "get",
        url: "api/goods",
        params: {
          pagenum: this.pagenum,
          pagesize: this.pagesize,
        },
      }).then((res) => {
        console.log(res);
        this.tableData = res.data.data.goods;
      });
    },
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
