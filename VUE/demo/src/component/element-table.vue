<template>
  <el-table :data="dataSource" style="width: 100%" stripe height="500">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="viewData(scope.row)" type="text" size="small"
          >查看</el-button
        >
        <el-button type="text" size="small" @click="deleteRow(scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "elementTable",
  //   props: ["title", "isOpen"], //单向绑定
  props: {
    dataSource: Array,
    // age: Number,
    // isPublished: Boolean
  },
  data() {
    return {};
  },
  methods: {
    viewData(row) {
      console.log("view row", row);
      this.$emit("viewData", row);
    },
    deleteRow(row) {
      var _this = this;
      console.log("delete row trigger from child", row);

      //_this.$emit("deleteRow", row);
    

      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          _this.$emit("deleteRow", row);
          // this.$message({
          //   type: 'success',
          //   message: '删除成功!'
          // });
        })
        .catch((e) => {
          console.error(e);
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    console.log("created from table");
  },
};
</script>
