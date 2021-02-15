<template>
  <div>
    <el-button type="text"
      @click="dialogVisible2 = true">点击打开 Dialog</el-button>
    <el-button @click="submit">提交</el-button>

    <ck-dialog :dialogShow.sync="dialogVisible2"
      :showCancel="false"
      :showConfirm="true"
      @cancelEvent="OnClose"
      :confirmEvent="onConfirm">

      <div slot="content"
        style="height:100%">
        <el-scrollbar wrap-style="overflow-x: hidden;"
          style="height: 100%">
          <el-table :data="gridData"
            style="padding:8px">
            <el-table-column property="date"
              label="日期"
              width="150"></el-table-column>
            <el-table-column property="name"
              label="姓名"
              width="200"></el-table-column>
            <el-table-column property="address"
              label="地址"></el-table-column>
          </el-table>

          <div>
            <el-select v-model="dto.value2"
              placeholder="请选择">
              <el-option v-for="item in gridData"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
        </el-scrollbar>
      </div>

      <!-- <template v-slot:footer2>
        <div>
          <h1>Here might be a page title</h1>
          <el-button @click="OnClose">取 消outside</el-button>
          <el-button type="primary" @click="onConfirm">确 定</el-button>
        </div>
      </template> -->

      <!-- <span slot="d-footer" class="dialog-footer">
        <ck-btn type="primary" @click="saveData($event, 'orgForm')" :auto-loading="true">confirm</ck-btn>
        <ck-btn @click="handleClose">cancel</ck-btn>
      </span>  -->
    </ck-dialog>
    <div id="tree"
      ref="tree"></div>
  </div>
</template>

<style lang="scss" >
.container {
  // box-sizing: border-box;
  // width: 100%;
  // height: 60px;
  // margin-bottom: 5px;
  padding: 0 10px; /* 给gutter留padding */
}
.shixiang-dialog {
  height: 60%;
}
.dialog-custom {
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 5vh !important; //先用element ui dialog默认的高度
  margin-bottom: auto; //解决高度80% + 15vh + 50px > 屏幕高度出现外侧滚动条
  .el-dialog__header {
    border-bottom: 1px solid #e5e5e5;
  }

  .el-dialog__footer {
    border-top: 1px solid #e5e5e5;
  }

  .el-dialog__body {
    flex: 1;
    overflow: hidden;
    padding: 16px;
  }
}

@media (max-width: 1199px) {
  .dialog-custom {
    width: 80% !important;
  }
}

@media (max-width: 991px) {
  //<=991的设备 }
  .dialog-custom {
    width: 90% !important;
  }
}
</style>
<script>
import { customer } from "../data/custom";

import OrgChart from '@balkangraph/orgchart.js'

//import OrgChart from '../utils/orgchart.js';

export default {
  data () {
    return {
      dialogVisible2: false,
      gridData: customer,
      dto: {
        value2: ''
      },
      nodes: [
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
      ]

    };
  },
  created () {
    this.init();
  },
  mounted () {
    //(this.$refs.tree, this.nodes)
  }
  ,
  methods: {
    submit () {
      this.$mb.success("cc");
    },
    oc: function (domEl, x) {

      this.chart = new OrgChart(domEl, {
        nodes: x,
        nodeBinding: {
          field_0: "name",
          field_1: "title",
          img_0: "img"
        }
      });

    },
    init () {
      var YesOrNo = {
        Yes: { id: 1, name: "common.yes" }, No: { id: 0, name: "Common.No" },
      };

      var t = this.$ck.objectToArray(YesOrNo);
      console.log("t", t);
      // this.initTree();
    },
    initTree () {
      console.log('OrgChart', OrgChart);
      var chart = new OrgChart(document.getElementById("orgchart"), {
        nodeBinding: {
          field_0: "name"
        },
        nodes: [
          { id: 1, name: "Amber McKenzie" },
          { id: 2, pid: 1, name: "Ava Field" },
          { id: 3, pid: 1, name: "Peter Stevens" }
        ]
      });
    },
    saveData (done, formName) {
      setTimeout(() => {
        this.$message({ type: "info", message: "成功" }); done();
        this.dialogVisible2 = false;
      }, 2000);
    },
    OnClose () {
      console.log("outside close");
      this.dialogVisible2 = false;
    },
    onConfirm () {
      return new Promise((resolve, reject) => {
        console.log("exec in promise");
        setTimeout(() => {
          console.log("parent timeout");
        }, 2000);
      }).finally(
        resolve('parent finished')
      );
      // console.log("outside confirm");
      // this.OnClose();
    },
    handleClose (done) {
      this.dialogVisible2 = false;
      done();
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => { });
    },
  },
};
</script>