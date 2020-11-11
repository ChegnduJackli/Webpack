<template>
    <div>
  sub router 1
    </div>
</template>

<script>
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
    }
};
</script>
