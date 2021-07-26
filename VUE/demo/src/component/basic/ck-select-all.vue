<template>
  <div>

    <el-select v-model="selected"
      multiple
      :placeholder="ph"
      v-bind="$attrsAll"
      v-on="$listenserAll"
      @change="onChange">
      <el-checkbox v-model="isSelectAll"
        style="padding-left:18px"
        @change="selectAll">全选</el-checkbox>

      <el-option v-for="(item, index) in options"
        :key='index'
        :label='item[label]'
        :value='item[ky]' />
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'selectAll',
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    ky: {
      type: String,
      default: () => {
        return ''
      }
    },
    label: {
      type: String,
      default: () => {
        return ''
      }
    },
    placeHolder: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data () {
    const selected = this.value || []
    const ph = this.placeHolder || this.$t('common.pleaseSelect');
    console.log(' this.placeHolder', this.placeHolder);
    console.log(' this.ph', ph);
    return {
      ph,
      selected,
      mdoptionsValue: [],
      oldMdoptionsValue: [],
      mdoptionsList: [],
      isSelectAll: false,
    }
  },
  computed: {
    $attrsAll () {
      // const val = this.$vnode.data.model && this.$vnode.data.model.value;
      const result = {
        // value: val,
        ...this.$attrs
      }
      return result
    },
    $listenserAll () {
      const _this = this
      return Object.assign({}, this.$listeners, {
        // change: () => {
        //   this.$emit('change', (_this.selected || []).filter(v => {
        //     return v !== 'all'
        //   }))
        // },
        // input: () => {
        //   this.$emit('update:value', (_this.selected || []).filter(v => {
        //     return v !== 'all'
        //   }))
        // }
      });
    }
  },
  watch: {
    value: function (newValue, oldValue) {
      console.log(this.value)
      if (Array.isArray(newValue) && Array.isArray(oldValue)) {
        let findNotSame = this.$_.some(newValue, (m) => {
          return !oldValue.includes(m);
        })
        if (findNotSame || newValue.length !== oldValue.length) {
          this.selected = this.value || [];
        }
      }

      this.selectCheck(newValue);

    },
    selected: {
      immediate: true,
      deep: true,
      handler (val) {

        this.$emit('update:value', (val || []).filter(v => {
          return v !== 'all'
        }))
      }
    },
    // options: {
    //   immediate: true,
    //   deep: true,
    //   handler (val) {
    //     if (!val || val.length === 0) {
    //       this.mdoptionsList = []
    //     } else {
    //       let opt = {};
    //       opt[this.ky] = 'all';
    //       opt[this.label] = this.$t('common.selectall');
    //       this.mdoptionsList = [opt, ...val]
    //     }
    //   }
    // }
  },
  mounted () {
    console.log(this.selected);
    console.log(this.value);
  },
  methods: {

    selectAll (val) {
      let allValues = [];
      for (const item of this.options) {
        allValues.push(item[this.ky])
      }
      this.selected = val ? allValues : [];
    },

    selectCheck (val) {
      if (val.length === this.options.length) {

        this.isSelectAll = true;
      } else {
        this.isSelectAll = false;
      }
    },

    onChange (val) {
      this.selectCheck(val);
      // const allValues = []
      // // 保留所有值
      // for (const item of this.mdoptionsList) {
      //   allValues.push(item[this.ky])
      // }
      // // 用来储存上一次的值，可以进行对比
      // const oldVal = this.oldMdoptionsValue.length === 1 ? [] : this.oldMdoptionsValue[1] || []
      // // 若是全部选择
      // if (val.includes('all')) this.selected = allValues
      // // 取消全部选中  上次有 当前没有 表示取消全选
      // if (oldVal.includes('all') && !val.includes('all')) this.selected = []
      // // 点击非全部选中  需要排除全部选中 以及 当前点击的选项
      // // 新老数据都有全部选中
      // if (oldVal.includes('all') && val.includes('all')) {
      //   const index = val.indexOf('all')
      //   val.splice(index, 1) // 排除全选选项
      //   this.selected = val
      // }
      // // 全选未选 但是其他选项全部选上 则全选选上 上次和当前 都没有全选
      // if (!oldVal.includes('all') && !val.includes('all')) {
      //   if (val.length === allValues.length - 1) this.selected = ['all'].concat(val)
      // }
      // // 储存当前最后的结果 作为下次的老数据
      // this.oldMdoptionsValue[1] = this.selected
      // console.log('this.selected change', this.selected);
    }
  }
}
</script>