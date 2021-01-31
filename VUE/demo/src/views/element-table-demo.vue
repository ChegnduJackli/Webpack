<template>
  <div>
    <div>组件参数和事件传递</div>
    <element-table :data-source="tableData" @deleteRow="deleteRow"></element-table>

  </div>
</template>

<style scoped>
.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #464647;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
<script>
import elementTable from "../component/element-table.vue";

export default {
  name: "element-table-demo",
  components: {
    "element-table": elementTable,
  },
  data () {
    return {
      msg: "jack",
      isOpenMoal: false,
      tableData: [
        {
          id: "1",
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: "2",
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: "3",
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          id: "4",
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    deleteRow (row) {
      var _this = this;

      function sleep (interval) {
        return new Promise((resolve) => {
          setTimeout(resolve, interval);
        });
      }

      return new Promise(function (resolve, reject) {
        sleep(2000);
        console.log("delete row form parent", row);
        _this.tableData.splice(_this.tableData.indexOf(row), 1);

        _this.$message({
          type: "success",
          message: "删除成功!",
        });

        return resolve(true);
      });
    },
  },
};
</script>
