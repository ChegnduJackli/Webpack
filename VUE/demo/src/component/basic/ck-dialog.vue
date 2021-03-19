<template>
  <el-dialog title="提示2"
    :center="false"
    :append-to-body="false"
    :visible.sync="dialogShow"
    top="15vh"
    :before-close="handleClose"
    custom-class="dialog-custom">
    <slot name="content"></slot>
    <!-- <el-scrollbar wrap-style="overflow-x: hidden;" style="height: 100%">
      <slot name="content"></slot>
    </el-scrollbar> -->
    <!-- :close-on-click-modal="false" -->
    <span slot="footer"
      class="dialog-footer">
      <slot name="footer2"
        class="right">
        <el-button @click="OnClose"
          v-if="showCancel">取 消2</el-button>
        <el-button type="primary"
          @click="onConfirm"
          v-if="showConfirm">确 定</el-button>
      </slot>
    </span>

    <!-- <el-button @click="OnClose">取 消2</el-button>
      <el-button type="primary" @click="OnClose">确 定</el-button> -->

  </el-dialog>
</template>

<style lang="scss">
.dialog-custom {
  height: 80%;
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 15vh; //先用element ui dialog默认的高度
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
  }
}

@media (max-width: 1199) {
  //<=1199的设备 }
  /deep/ .el-dialog .dialog-custom {
    width: 80%;
  }
}
@media (max-width: 991px) {
  //<=991的设备 }
  .dialog-custom {
    width: 90%;
  }
}
</style>
<script>
//import { customer } from "@/data/custom";

export default {
  props: {
    dialogShow: {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    confirmEvent: {
      type: Function
    },
  },
  data () {
    return {
      // dialogVisible: this.dialogShow,
      //gridData: customer,
    };
  },
  methods: {
    OnClose () {
      console.log('default close');
      this.$emit('update:dialogShow', false)
    },
    onConfirm () {
      this.confirmEvent().then((res) => {
        console.log('res', res);

      });
      console.log('default confirm');
      // this.$emit('confirmEvent')

      // this.OnClose();
    },
    handleClose (done) {
      this.$emit('update:dialogShow', false)
      // done();
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => { });
    },
  },
};
</script>