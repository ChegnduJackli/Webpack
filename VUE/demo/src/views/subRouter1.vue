<template>
  <div class="content">
    <el-container class="page-container">
      <el-header>
        <p>router</p>
        <button-css></button-css>
        <button class="button" @click="callApexApi">
          call cargill api with axios
        </button>
      </el-header>
      <!-- <blog-post v-for="post in posts" v-bind:key="post.id" v-bind:post="post"
        >test</blog-post> -->

      <div id="blog-posts-events-demo">
        <div :style="{ fontSize: postFontSize + 'em' }">
          <blog-post
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:post="post"
            v-on:enlargeText="onEnlargeText"
          ></blog-post>
        </div>
      </div>
    </el-container>
  </div>
</template>


<style lang="scss" scoped>
.content {
  width: 1200px;

  margin: 0 auto;
  & /deep/ .button {
    border-raduis: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
  }
  & /deep/ .el-header {
    height: 80px;
  }
}
//控制子层的样式
</style>

//
<style lang="scss">
// .content .button {
//     border-raduis: 5px;
//     -webkit-border-radius: 5px ;
//     -moz-border-radius: 5px;
// }
//
</style>

<script>
import buttonCss from "../component/buttonCss.vue";
import blogPost from "../component/blogPost";

import request from "../utils/request";
import { syncSettlementData } from "../utils/cargill";

export default {
  name: "subRouter1",
  //props: ['title'],
  //每个 prop 都有指定的值类型
  props: {
    title: String,
    age: Number,
    isPublished: Boolean,
  },
  data() {
    return {
      msg: "base button",

      posts: [
        { id: 1, title: "My journey with Vue", content: "this is a content" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
      postFontSize: 1,
    };
  },
  components: {
    "button-css": buttonCss,
    blogPost,
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      console.log("call onEnlargeText from parent ", enlargeAmount);
      this.postFontSize += enlargeAmount;
    },

    callApexApi() {
      var param = {
        DispatchNo: "tes1",
      };
      console.log("call apex api");
      syncSettlementData(param)
        .then((response) => {
          var data = response.data;
          if (!data.result) {
            alert(data.resultMsg);
            return false;
          }
          console.log("response", response);
        })
        .catch((e) => {
          console.error("error", e);
        })
        .finally(() => {
          console.log("finally");
        });
    },
  },
};
</script>
