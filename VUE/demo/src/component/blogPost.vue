<template>
  <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
      <button v-on:click="enlargeText">
          <!-- <button @click="$emit('enlarge-text')"> -->
       enlarge text 子层调用父层
      </button>
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
    name: "blogpost",
    props: ['post'],
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
            console.log('called enlargeText from child2');
            this.$emit('enlargeText',0.1);
        },
    }
};
</script>
