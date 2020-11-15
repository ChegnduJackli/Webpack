<template>
    <div class="content">
        <el-container class="page-container">
            <el-header>
                <p>router</p>
                <button-css></button-css>
            </el-header>
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

export default {
    name: "subRouter1",
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
    },
    components: {
        "button-css": buttonCss
    }
};
</script>
