<template>


    <div>
        <h1>hello animation</h1>

        <el-row>
            <el-col :span="12">
                <button v-on:click="show = !show">
                    Toggle
                </button>
                <transition name="fade">
                    <p v-if="show">hello</p>
                </transition>
            </el-col>
            <el-col :span="12">
                <button @click="show = !show">
                    Toggle render
                </button>
                <transition
                    name="custom-classes-transition"
                    enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight"
                >
                    <p v-if="show">hello</p>
                </transition>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss">

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>

<script>
export default {
    name: "animation",
    //props: ['title'],
    //每个 prop 都有指定的值类型
    props: {
        title: String,
        age: Number,
        isPublished: Boolean
    },
    data() {
        return {
            msg: "base button",
            show: true
        };
    }
};
</script>


