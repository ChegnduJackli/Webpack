<template>
  <div class="container">
   <div>user name:</div>
   <slot name="userInfo" :user="user">{{ user.lastName }}</slot>
  </div>
</template>

<style scoped>
.demo-alert-box {
  background: green;
  padding: 8px;
}
</style>

<script>
export default {
  name: "baseLayoutSlot",

  //每个 prop 都有指定的值类型
  // props: {
  //     title: String,
  //     age: Number,
  //     isPublished: Boolean
  // },
  data() {
    return {
      msg: "base button",
      user:{
          firstName:'jack',
          lastName:'d li'
      }
    };
  },
  methods: {
    enlargeText() {
      console.log("called enlargeText from child");
      this.$emit("enlargeText", 0.1);
    },
  },
};
</script>
