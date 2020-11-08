<template>
<div>
    <h1>hello world {{msg}}  title； {{title}}</h1>
    <h2>age:{{age}}, isPublished:{{isPublished}}</h2>
</div>
</template>

<script>
export default {
    name:'baseButton',
    //props: ['title'],
    //每个 prop 都有指定的值类型
    props:{
title:String,
age:Number,
isPublished:Boolean

    },
     data() {
        return {
            msg:'base button'
        }
    },
}
</script>
