<template>
  <div>

    <div class="box">
      <div class="title">api增删改查</div>
      <el-button @click="mybatisPlus">mybatisPlus</el-button>
      <div slot="content"
        style="height:100%">
        <el-scrollbar wrap-style="overflow-x: hidden;"
          style="height: 100%">
          <el-table :data="tableData"
            style="padding:8px">
            <el-table-column property="username"
              label="姓名"
              width="150"></el-table-column>
            <el-table-column property="birthday"
              label="生日"
              width="200"></el-table-column>
            <el-table-column property="sex"
              label="性别"></el-table-column>
            <el-table-column property="address"
              label="地址"></el-table-column>
          </el-table>

        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kill-row-margin {
  padding: 0 10px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 200px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.title {
  color: #fff;
  background-color: #d04a02;
  padding: 8px;
}

.box {
  border: solid 1px #2d2d2d;
  margin: 10px 0;

  .content {
    padding: 10px;
  }
}
</style>
<script>
import { createLogger } from 'vuex';
import elementTable from "../component/element-table.vue";

import { getUserList, mybatisPlusTest } from "../utils/userLib";

export default {
  name: "element-table-demo",
  components: {
    "element-table": elementTable,
  },
  data () {
    return {
      tableData: [],

    };
  },
  created () {
    this.init();
  },
  methods: {
    mybatisPlus () {
      mybatisPlusTest();
    },
    init () {
      getUserList().then((res) => {
        console.log(res);
        this.tableData = res.data;
        debugger;

      });
    },
  },
};
</script>
