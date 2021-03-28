<template>
  <el-select multiple
    collapse-tags
    clearable
    :filterable="filterable"
    v-model='selectedArray'
    @change='changeSelect'
    @remove-tag='removeTag'
    placeholder='请选择'>
    <el-option label='全选'
      value='全选'
      @click.native='selectAll'></el-option>

    <!-- <el-checkbox v-model="checked"
      @change='selectAll'>全选</el-checkbox> -->

    <slot></slot>
  </el-select>
</template>

<style  lang="scss" scoped>
.el-checkbox {
  text-align: right;
  width: 100%;
  padding-right: 10px;
}
</style>


<script>



export default {
  props: {
    model: { type: Array, default: () => [] },
    options: { type: Array, default: () => [] },
    filterable: { type: Boolean, default: true },
  },

  data () {
    return {
      checked: false,
      selectedArray: this.model
    }
  },
  methods: {
    test () {
      console.log('filterable', this.filterable);
    },
    selectAll () {
      if (this.selectedArray.length < this.options.length) {
        this.selectedArray = []
        this.options.map((item) => {
          this.selectedArray.push(item.name)
        })
        this.selectedArray.unshift('全选')
      } else {
        this.selectedArray = []
      }
      this.syncModel();

    },
    changeSelect (val) {
      if (!val.includes('全选') && val.length === this.options.length) {
        this.selectedArray.unshift('全选')
      } else if (val.includes('全选') && (val.length - 1) < this.options.length) {
        this.selectedArray = this.selectedArray.filter((item) => {
          return item !== '全选'
        })
      }
      this.test();
      this.syncModel();

    },

    syncModel () {
      this.$emit("update:model", this.selectedArray)
      if (this._events['change']) {
        this.$emit("change", this.selectedArray);
      }
      debugger;
    },
    removeTag (val) {
      if (val === '全选') {
        this.selectedArray = []
      }
      this.syncModel();
    }
  }
}
</script>