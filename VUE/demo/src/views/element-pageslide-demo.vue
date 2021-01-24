<template>
  <div>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">test</div></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">test2 {{ msg }}</div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-button
          v-on:click="handleOpen"
          type="primary"
          style="margin-left: 16px"
        >
          点我打开
        </el-button>
        {{ isOpenMoal }}
        <!-- v-on:beforeClose="beforeClose"
                    v-on:afterClose="afterClose" -->

        <page-slide :is-open.sync="isOpenMoal">
          <table>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </table>
        </page-slide>
      </el-col>
      <el-col :span="18"></el-col>
    </el-row>
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
import pageSlide from "../component/pageslide.vue";

export default {
  name: "elementui",
  components: {
    "page-slide": pageSlide,
  },
  data() {
    return {
      msg: "jack",
      isOpenMoal: false,
    };
  },
  methods: {
    handleOpen: function () {
      this.isOpenMoal = true;
    },
    beforeClose: function (done) {
      console.log("beforeclose");

      this.$confirm("确认关闭？")
        .then((_) => {
          //done();
          this.isOpenMoal = false;
          console.log(this.isOpenMoal);
        })
        .catch((_) => {});
    },
    afterClose: function () {
      console.log("afterClose");
      this.isOpenMoal = false;
    },
  },
};
</script>
