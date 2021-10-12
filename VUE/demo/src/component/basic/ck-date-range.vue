<template>

  <div class="flex-row">
    <el-date-picker v-model="dateFromCopy"
      type="date"
      v-bind="$attrs"
      :format="format"
      :value-format="format"
      placeholder="选择日期">
    </el-date-picker>

    <span id="xx2"
      class="range-separator mr10">-</span>

    <el-date-picker v-model="dateToCopy"
      type="date"
      v-bind="$attrs"
      :format="format"
      :value-format="format"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template> 

<style scoped lang="scss">
.el-input,
.el-select,
.el-input-number,
.el-date-editor.el-input {
  // width: 100%;
}
.input-range {
  appearance: none;
  border: none;
  outline: none;
  display: inline-block;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 39%;
  text-align: center;
  font-size: 14px;
  color: #7d7d7d;
}
.range-separator {
  display: inline-block;
  height: 100%;
  padding: 0 5px;
  margin: 0;
  text-align: center;
  font-size: 14px;
  width: 5%;
  color: #2d2d2d;
  line-height: 28px;
  font-size: 14px;
}
</style>

<script>


//import DxNumberBox from 'devextreme-vue/number-box';
//import { number_format_round } from '@/filters/index'

export default {
  name: "ckNumberbox",
  components: {
    //DxNumberBox
  },
  props: {
    dateFrom: {
      default: '',
    },
    dateTo: {
      default: '',
    },
    format: {
      default: 'yyyy-MM-dd',
    }


  },

  data () {
    return {
      dateFromCopy: this.dateFrom,
      dateToCopy: this.dateTo,
    };
  },
  computed: {
    // dateFromCopy () {
    //   return this.dateFrom
    // },
    // dateToCopy () {
    //   return this.dateTo
    // },
  },
  watch: {
    dateToCopy: {
      handler (val) {
        if (this.dateToCopy && this.dateFromCopy) {
          if (this.dateToCopy < this.dateFromCopy) {
            this.dateToCopy = this.dateFromCopy;
          }
        }
        this.$emit("update:dateTo", this.dateToCopy)
      },
      //最初绑定的时候也执行，默认是在修改后才会执行的
      immediate: true,
      deep: true
    },
    dateFromCopy: {
      handler (val) {
        this.$emit("update:dateFrom", val)
      }
    }
  },
  created () {

  },
  methods: {



  }
};
</script>
