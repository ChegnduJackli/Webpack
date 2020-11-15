<template>
    <div>
        <h1>hello world {{ msg }} title； {{ title }}</h1>
        <h2>age:{{ age }}, isPublished:{{ isPublished }}</h2>
        <button-css>button css</button-css>
    </div>
</template>



<script>
import buttonCss from "../component/buttonCss.vue";

export default {
    name: "baseButton",
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
    },
    components: {
        buttonCss
    }
};
</script>
