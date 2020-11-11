<template>
    <div>
  sub router 2
    </div>
</template>

<script>
export default {
    name: "subRouter2",
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
