<template>
  <!-- <DxNumberBox :value="value"
    :format="format"
    showClearButton
    :placeholder="$t('common.pleaseInput')"
    @change="changeEvent" />-->
  <div class="el-date-editor el-range-editor el-input__inner el-date-editor--daterange el-range-editor--medium is-active">
    <ck-number-box :value.sync="amountFrom"
      class="el-range-input"></ck-number-box>

    <span id="xx2"
      class="range-separator mr10">-</span>

    <ck-number-box :value.sync="amountFrom"
      class="el-range-input"></ck-number-box>
  </div>
</template> 

<style scoped lang="scss">
.el-input,
.el-select,
.el-input-number,
.el-date-editor.el-input {
  width: 100%;
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
  /* line-height: 32px; */
  font-size: 14px;
  width: 5%;
  color: #2d2d2d;
  line-height: 28px;
  font-size: 14px;
}

/deep/ .el-input__inner {
  height: 100%;
  line-height: 100%;
  border: 0;
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
    value: {
      default: '',
    },
    format: {
      default: '#,##0'
    },
    min: {
      type: Number,
      default: -9999999999999
    },
    max: {
      type: Number,
      default: 9999999999999
    }
  },

  data () {
    return {
      valueCopy: this.value,
      oldValueStr: '',
      oldValueNum: null,
    };
  },
  watch: {
    value: {
      handler (val) {
        if (!val || val === '') {
          this.valueCopy = '';
        }
      },
      //最初绑定的时候也执行，默认是在修改后才会执行的
      immediate: true,
      deep: true
    },
  },
  created () {

  },
  methods: {



  }
};
</script>
