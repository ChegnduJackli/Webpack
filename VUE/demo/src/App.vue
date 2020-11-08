<template>
<div>
    <ul>
        <li>
            <router-link to="/home">home</router-link>
            <router-link to="/computedDemo">计算属性</router-link>
            <router-link to="/lifeCircleDemo">生命周期</router-link>
            <router-link to="/todo">To Do List</router-link>
            <router-link to="/helloworld">组件基础</router-link>
            <router-link to="/elementUIDemo">element ui demo </router-link>
        
        </li>
    </ul>
    <router-view></router-view>
</div>
</template>
<style scoped>

li{
   
    list-style: none;
}

li > a{
    padding: 0 20px;
     text-decoration: none;
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
    methods: {},
};
</script>
<style>
</style>
