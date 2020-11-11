<template>
    <div class="page">
        <el-container class="page-container">
            <el-header>
                <ul>
                    <li>
                        <router-link to="/home">home</router-link>
                        <router-link to="/computedDemo">计算属性</router-link>
                        <router-link to="/lifeCircleDemo">生命周期</router-link>
                        <router-link to="/todo">To Do List</router-link>
                        <router-link to="/helloworld">组件基础</router-link>
                        <router-link to="/elementUIDemo"
                            >element ui demo
                        </router-link>
                        <router-link to="/animation">动画 </router-link>
                        <router-link to="/subRouter">子菜单 </router-link>
                    </li>
                </ul>
                <hr />
            </el-header>
            <el-main> <router-view></router-view></el-main>
        </el-container>
    </div>
</template>
<style lang="scss" scoped>
li {
    list-style: none;
}

li > a {
    padding: 0 20px;
    text-decoration: none;
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
