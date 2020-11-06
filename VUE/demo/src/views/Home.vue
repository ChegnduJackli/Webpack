<template>
<div class="parent">
    <h1>Welcome {{name}}</h1>
    <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
</template>

<script>
import DemoMixin from '../Mixins/DemoMixin'
export default {
    mixins:[DemoMixin],
    data() {
        return {
            items: ['item1', 'item2', 'item3'],
            value: '',
            name:'jack 2',
            message: '页面加载于 ' + new Date().toLocaleString()
        }
    },
    methods: {
        delete() {

        },
        addItem(item) {
            this.items.push(item);
        }
    },
    created() {

    },
    destroyed() {

    },
    mounted() {

    }
}
</script>

<style lang="scss">
@import '../asset/var.scss';
.parent{
    background-color: $header-color;

    &>span {
        color:red;
        font-size: $header-size;
    }
}
</style>
