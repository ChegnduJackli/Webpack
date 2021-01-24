<template>
  <div>
    sub router 3 vuex study
    <button class="button" @click="increment">count ++</button>
    <button class="button" @click="incrementPayload">count ++10</button>
    <button class="button" @click="incrementPayloadConstant">count constant ++20</button>
    <button class="button" @click="decrement">count --</button>
    <div>getter</div>
    <button class="button" @click="visitGetter">访问getter</button>

    <div>
      用mapMutations
    </div>
    <!-- <button class="button" @click="increment">count ++</button>
    <button class="button" @click="incrementPayloadMount(10)">count ++10</button>

    <button class="button" @click="add">count ++  rename to add</button> -->

    <div>
      action
    </div>
    <button class="button" @click="incrementUserAction">action count ++</button>
    <button class="button" @click="incrementUserPayloadAction">action payload count ++100</button>
    <button class="button" @click="incrementSyncPromise">action promise count ++</button>
    <div>store模块化</div>
    <button class="button" @click="incrementSubModule">sub Module mutation count ++</button>
        <button class="button" @click="incrementSubModuleAction">sub Module a action count ++</button>
    <div>count: {{ count }}</div>
    <div>countModuleA: {{ countModuleA }}</div>

  </div>
</template>

<script>
//常量作为函数名称
import {
  SOME_MUTATION
} from '../constant/mutation-type'

import { mapMutations } from 'vuex'

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

    //     ...mapMutations([
    //   'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

    //   // `mapMutations` 也支持载荷：
    //   'incrementPayloadMount' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    // ]),
    // ...mapMutations({
    //   add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    // }),

    increment() {
      this.$store.commit("increment");
      console.log("store count", this.$store.state.count);
    },
    incrementPayload() {
      //  this.$store.commit("incrementPayload",{amount:10});
      //提交 mutation 的另一种方式是直接使用包含 type 属性的对象：
      this.$store.commit({
        type: "incrementPayload",
        amount: 10,
      });
    },
    //常量作为函数名，
    incrementPayloadConstant() {
      this.$store.commit({
        type: SOME_MUTATION,
        amount: 20,
      });
    },
    decrement() {
      this.$store.commit("decrement");
      console.log("store count minus", this.$store.state.count);
    },
    visitGetter() {
      console.log("store getter", this.$store.getters.doneTodos);
      console.log("store getter by id", this.$store.getters.getTodoById(2));
    },
    incrementUserAction() {
      this.$store.dispatch('incrementAsync');
    },

    //Actions 支持同样的载荷方式和对象方式进行分发：
    incrementUserPayloadAction() {
      // 以载荷形式分发
      this.$store.dispatch('incrementPayloadAsync', {
        amount: 10
      })
      //对象方式进行分发：
      this.$store.dispatch({
        type: 'incrementPayloadAsync',
        amount: 100
      });
    },
    incrementSyncPromise() {
      this.$store.dispatch({
        type: 'incrementSyncPromise',
      }).then((res) => {
        console.log('res', res);
      });
    },
    incrementSubModule() {
      //rooter
      this.$store.commit({
        type: "incrementPayload",
        amount: 11,
      });
      //子模块，必须加namespace:true;
      this.$store.commit('a/increment');

    },
    //访问Module a 的action
    incrementSubModuleAction() {
      this.$store.dispatch({
        type: 'a/incrementIfOddOnRootSum',
      });
    }
    //incrementIfOddOnRootSum
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    countModuleA() {
      return this.$store.state.a.count;
    }
  },
};
</script>
