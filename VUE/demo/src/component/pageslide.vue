<template>
    <el-drawer
        title="我是标题"
        :visible.sync="isOpen"
        :direction="direction"
        :before-close="beforeClose"
        :close-on-press-escape="true"
    >
        <span>我来啦!</span>
        <span>isOpen:{{isOpen}}</span>
         <slot></slot>
        <el-button>确定</el-button>
            <el-button>取消</el-button>
    </el-drawer>
</template>

<script>
export default {
    name: "pageSlide",
    props: ["title", "isOpen"], //单向绑定
    data() {
        return {
            msg: "base button",
            direction: "rtl",
         //   isOpenModal:this.isOpen
        };
    },
    methods: {
        beforeClose() {
            this.$emit("beforeClose");
        },
    
        handleClose(done) {
            this.$confirm("确认关闭？")
                .then(_ => {
                     done();
                     // this.$emit('update:isOpen', false); //触发 input 事件，并传入新值
                     console.log(this.isOpen);
                })
                .catch(_ => {});
        }
    }
};
</script>
