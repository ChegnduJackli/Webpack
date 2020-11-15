<template>
    <div class="button-warp">
        <button class="button">button text</button>
    </div>
</template>

<style scoped>
.button-warp {
    display: inline-block;
}

.button {
    padding: 5px 10px;

    font-size: 12px;

    border-radus: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
}
</style>

<script>
export default {
    name: "buttonCss",
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
