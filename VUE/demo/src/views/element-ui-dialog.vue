<template>
  <div>
    <el-button type="text" @click="dialogVisible2 = true"
      >点击打开 Dialog</el-button
    >

    <!-- 
      <ck-dialog :dialogShow="dialogVisible2">
      <div slot="content">
        <el-table :data="gridData">
          <el-table-column
            property="date"
            label="日期"
            width="150"
          ></el-table-column>
          <el-table-column
            property="name"
            label="姓名"
            width="200"
          ></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table> 
      </div>


  <span slot="footer" class="dialog-footer">
    <ck-btn
      type="primary"
      @click="saveData($event, 'orgForm')"
      :auto-loading="true"
      >confirm</ck-btn
    >
    <ck-btn @click="handleClose">cancel</ck-btn>
  </span>

    </ck-dialog>  -->

    <el-dialog
      title="提示2"
      :center="false"
      :append-to-body="false"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible2"
      width="60%"
      :before-close="handleClose"
      custom-class="shixiang-dialog dialog-custom "
    >
      <el-scrollbar wrap-style="overflow-x: hidden;" style="height: 100%">
        <el-table :data="gridData">
          <el-table-column
            property="date"
            label="日期"
            width="150"
          ></el-table-column>
          <el-table-column
            property="name"
            label="姓名"
            width="200"
          ></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
      </el-scrollbar>

      <span slot="footer" class="dialog-footer">
        <ck-btn
          type="primary"
          @click="saveData($event, 'orgForm')"
          :auto-loading="true"
          >confirm</ck-btn
        >
        <ck-btn @click="dialogVisible2 = false">cancel</ck-btn>
      </span>
    </el-dialog>
  </div>
</template>

<style lang="scss">
.shixiang-dialog {
  height: 60%;
}
.dialog-custom {
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 5vh  !important; //先用element ui dialog默认的高度
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

@media (max-width: 1199) {
  //<=1199的设备 }
  /deep/ .el-dialog .dialog-custom {
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

export default {
  data() {
    return {
      dialogVisible2: true,
      gridData: customer,
    };
  },
  methods: {
    saveData(done, formName) {
      setTimeout(() => {
        this.$message({
          type: "info",
          message: "成功",
        });
        done();
        this.dialogVisible2 = false;
      }, 2000);
    },
    handleClose(done) {
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