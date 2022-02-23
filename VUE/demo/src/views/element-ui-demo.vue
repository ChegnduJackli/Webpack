<template>
  <div>
    <el-row>
      <el-col :span="6">
        <ul class="left-menu">
          <!-- <li>
            <router-link to="/elementUIDemo.table" active-class="active"
              >table</router-link
            >
          </li> -->
          <li>
            <router-link :to="{ name: 'elementUIDemo.table' }"
              active-class="active">table
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'elementUIDemo.pageSlide' }"
              active-class="active">pageSlide
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'elementUIDemo.ckDialog' }"
              active-class="active">Dialog
            </router-link>
          <li>
          <li>
            <router-link :to="{ name: 'elementUIDemo.classStudy' }"
              active-class="active">es6 class study
            </router-link>
          <li>
            <router-link :to="{ name: 'elementUIDemo.formValidate' }"
              active-class="active">form
              validate</router-link>
          </li>

          <li>
            <router-link :to="{ name: 'elementUIDemo.formValidateUpload' }"
              active-class="active">
              上传文件</router-link>
          </li>

          <li>
            <router-link :to="{ name: 'elementUIDemo.commonTest' }"
              active-class="active">
              常用组件</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'elementUIDemo.elementMenu' }"
              active-class="active">
              element menu</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'elementUIDemo.parentChild' }"
              active-class="active">
              父子组件通信</router-link>
          </li>

          <li>
            <router-link :to="{ name: 'elementUIDemo.uploadFileTemplate' }"
              active-class="active">
              上传附件弹框</router-link>
          </li>

          <li>
            <router-link :to="{ name: 'elementUIDemo.searchCodeGenerate' }"
              active-class="active">
              查询代码生成器</router-link>
          </li>

        </ul>
      </el-col>
      <el-col :span="18"
        class="right-content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
@import "../asset/var.scss";

.left-menu {
  background-color: #fbf9f9;
}

ul li {
  padding: 10px 0;
  list-style: none;

  a {
    text-decoration: none;
    padding: 10px;
    width: 100px;

    &:hover {
      @include a-hover;
    }

    &.active {
      @include a-active;
    }
  }
}

.right-content {
  border: solid 2px #f2f2f2;
  height: 100%;
}

.content {
  width: 1200px;

  margin: 0 auto;
}

.content .button {
  border-raduis: 25px;
}

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
// import pageSlide from "../component/pageslide.vue";

export default {
  name: "elementui",
  components: {
    // "page-slide": pageSlide,
  },
  data () {
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
        .catch((_) => { });
    },
    afterClose: function () {
      console.log("afterClose");
      this.isOpenMoal = false;
    },
  },
};
</script>
