<template>
<div>
    <div>a:<input v-model.number="a"></div>
    <div>b:<input v-model.number="b"></div>
    <div>c:<input v-model.number="c"></div>
    <div>d:{{d}}</div>
</div>
</template>

<script>
export default {
    mixins:[],
    data() {
        return {
            a: 1,
            b: 1,
            c: 1
        }
    },
    computed: {
        d() {
            return this.a + this.b + this.c;
        },
    },
    methods: {},
    created() {

    },
    destroyed() {

    },
    mounted() {

    }
}
</script>

<style>

</style>
