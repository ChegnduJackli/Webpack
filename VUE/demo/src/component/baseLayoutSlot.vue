<template>
  <div class="container">

    <header>
      <slot name="header">header default </slot>
    </header>
    <main>
      <slot>main default</slot>
    </main>
    <footer>
      <slot name="footer">footer default</slot>
    </footer>
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
