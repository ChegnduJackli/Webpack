<template>
  <div>
    sub router 3 vuex study
    <button class="button" @click="increment">count ++</button>
    <button class="button" @click="decrement">count --</button>
    <div>count: {{ count }}</div>
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
    isPublished: Boolean,
  },
  data() {
    return {
      msg: "base button",
    };
  },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log("store count", this.$store.state.count);
    },
    decrement() {
      this.$store.commit("decrement");
      console.log("store count minus", this.$store.state.count);
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>
