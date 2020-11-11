<template>
    <div>
        <el-row>
            <el-col :span="6">
                <ul>
                    <li>
                        <router-link to="/subRouter/subRouter1"
                            >subRouter1</router-link
                        >
                    </li>
                    <li>
                        <router-link :to="{ name: 'subRouter2' }"
                            >subRouter2</router-link
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

<style scoped>
 ul li{
 padding: 10px 0;
 }
 .right-content{
     border: solid 2px #f2f2f2;
     height: 100%;
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
        isPublished: Boolean
    },
    data() {
        return {
            msg: "base button"
        };
    }
};
</script>
