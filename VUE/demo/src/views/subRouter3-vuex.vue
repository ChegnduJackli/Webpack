<template>
    <div>
  sub router 3 vuex study
    </div>
</template>

<script>
export default {
    name: "subRouter3 vuex",
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
