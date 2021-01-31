<template>
  <div>
    <el-button type="text" @click="dialogVisible2 = true">点击打开 Dialog</el-button>
    <el-button @click="submit">提交</el-button>

    <ck-dialog :dialogShow.sync="dialogVisible2" :showCancel="false" :showConfirm="true"
               @cancelEvent="OnClose" @confirmEvent="onConfirm">

      <div slot="content" style="height:100%">
        <el-scrollbar wrap-style="overflow-x: hidden;" style="height: 100%">
          <el-table :data="gridData" style="padding:8px">
            <el-table-column property="date" label="日期" width="150"></el-table-column>
            <el-table-column property="name" label="姓名" width="200"></el-table-column>
            <el-table-column property="address" label="地址"></el-table-column>
          </el-table>

          <div>
            <el-select v-model="dto.value2" placeholder="请选择">
              <el-option v-for="item in gridData" :key="item.id" :label="item.name"
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

export default {
  data () {
    return {
      dialogVisible2: false,
      gridData: customer,
      dto: {
        value2: ''
      }

    };
  },
  created () {
    this.init();
  },
  methods: {
    submit () {
      this.$mb.success("cc");
    },
    init () {
      var YesOrNo = {
        Yes: { id: 1, name: "common.yes" }, No: { id: 0, name: "Common.No" },
      };

      var t = this.$ck.objectToArray(YesOrNo);
      console.log("t", t);
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
      console.log("outside confirm");
      this.OnClose();
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