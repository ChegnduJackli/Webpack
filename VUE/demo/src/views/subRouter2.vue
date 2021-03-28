<template>
  <div>
    <div>
      多选：
      <el-select-mul @change="changeEvent"
        :model.sync="selectedArray"
        :options="options">

        <el-option v-for='(item, index) in options'
          :key='index'
          :label='item.name'
          :value='item.name'></el-option>
      </el-select-mul>
    </div>
  </div>
</template>

<script>
import elSelectMul from "../component/el-select-mul";

export default {
  name: "subRouter2",
  //props: ['title'],
  //每个 prop 都有指定的值类型
  components: {
    elSelectMul
  },
  props: {
    title: String,
    age: Number,
    isPublished: Boolean
  },
  data () {
    return {
      msg: "base button",
      selectedArray: [],
      options: [
        { name: '1', label: 'one' },
        { name: '2', label: 'tow' },
        { name: '3', label: 'three' },
        { name: '4', label: 'four' },
        { name: '5', label: 'five' }
      ]
    };
  },
  methods: {
    changeEvent (val) {
      console.log('val', val);
      console.log('selectedArray', this.selectedArray);

    }
  }
};
</script>
