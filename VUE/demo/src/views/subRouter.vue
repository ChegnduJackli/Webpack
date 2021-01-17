<template>
  <div>
    <el-row>
      <el-col :span="6">
        <ul class="left-menu">
          <li>
            <router-link to="/subRouter/subRouter1" active-class="active"
              >父子组件传递</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'subRouter2' }" active-class="active"
              >subRouter2</router-link
            >
          </li>
                <li>
            <router-link :to="{ name: 'subRouter3_vuex' }" active-class="active"
              >subRouter3 vuex study</router-link
            >
          </li>

          

          <li>
            <router-link
              :to="{ name: 'dynamicComponetDemo' }"
              active-class="active"
              >dynamic Componet Demo</router-link
            >
          </li>
              <li>
            <router-link
              :to="{ name: 'async' }"
              active-class="active"
              >es6 async </router-link
            >
          </li>
                       <li>
            <router-link
              :to="{ name: 'slot' }"
              active-class="active"
              >插槽slot </router-link
            >
          </li>
        </ul>
      </el-col>
      <el-col :span="18" class="right-content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
@import "../asset/var.scss";
.left-menu{
    background-color: #fbf9f9;;
}
ul li {
  padding: 10px 0;
  list-style: none;
  a {
    text-decoration: none;
    padding: 10px ;
    width:100px;
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
</style>

<script>
export default {
  name: "subRouter",
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
    };
  },
};
</script>
