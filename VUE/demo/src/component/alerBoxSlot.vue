<template>
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot>default</slot>
    </div>
</template>

<style scoped>
.demo-alert-box{
    background: green;
    padding: 8px;;
}
</style>

<script>
export default {
    name: "alertBox",
    
    //每个 prop 都有指定的值类型
    // props: {
    //     title: String,
    //     age: Number,
    //     isPublished: Boolean
    // },
    data() {
        return {
            msg: "base button"
        };
    },
    methods:{
        enlargeText(){
            console.log('called enlargeText from child');
            this.$emit('enlargeText',0.1);
        },
    }
};
</script>
