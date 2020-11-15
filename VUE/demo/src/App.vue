<template>
    <div class="page">
        <el-container class="page-container">
            <el-header>
                <ul>
                    <li>
                        <router-link to="/home" active-class="active">home</router-link>
                        <router-link to="/computedDemo" active-class="active">计算属性</router-link>
                        <router-link to="/lifeCircleDemo" active-class="active">生命周期</router-link>
                        <router-link to="/todo" active-class="active">To Do List</router-link>
                        <router-link to="/helloworld" active-class="active">组件基础</router-link>
                        <router-link to="/elementUIDemo" active-class="active">element ui demo</router-link>
                        <router-link to="/animation" active-class="active">动画 </router-link>
                        <router-link to="/subRouter" active-class="active">子菜单 </router-link>
                    </li>
                </ul>
                <hr />
            </el-header>
            <el-main> <router-view></router-view></el-main>
        </el-container>
    </div>
</template>
<style lang="scss" scoped>
@import "/asset/var.scss";

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


.page{
    height: 100%;
    .page-container{
        height: 100%;
    }

}
</style>

<script>
export default {
    name: "app",
    components: {},
    beforeCreate() {},
    created() {},
    data() {
        return {};
    },
    methods: {}
};
</script>
<style></style>
