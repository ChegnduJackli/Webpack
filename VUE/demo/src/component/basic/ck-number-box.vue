<template>
  <!-- <DxNumberBox :value="value"
    :format="format"
    showClearButton
    :placeholder="$t('common.pleaseInput')"
    @change="changeEvent" />-->

  <el-input clearable
    v-model.trim="valueCopy"
    @blur="inputMoneyFormat($event, 'valueCopy')"
    v-ck-number
    @clear="clearEvent">

  </el-input>
</template> 

<style scoped>
.el-input,
.el-select,
.el-input-number,
.el-date-editor.el-input {
  width: 100%;
}
</style>

<script>

const MoneyTest = /((^[1-9]\d*)|^0)(\.\d{0,10}){0,1}$/;

// 金额添加千分位
const comdify = function (n) {
  if (!n) return n;
  let str = n.split('.');
  let re = /\d{1,3}(?=(\d{3})+$)/g;
  let n1 = str[0].replace(re, "$&,");
  return str.length > 1 && str[1] ? `${n1}.${str[1]}` : `${n1}`;
};
//去除千分位中的‘，’
const delcommafy = function (num) {
  if (!num) return '';
  num = num.toString();
  num = num.replace(/,/gi, '');
  return num;
};

const valdateFn = function (rule, val, cb) {
  // setTimeout(() => {
  if (val) {
    let inputVal = delcommafy(val);
    if (rule.test(inputVal)) {
      return true;
    } else {
      // cb('只能是数字金额,最多两位小数')
      return false;
    }
  }
  return true;
  // })
}
// 验证金额数字可以为负数
const moneyValid = function (rule, val, cb) {
  return valdateFn(/((^-?[1-9]\d*)|^-?0)(\.\d{0,10}){0,1}$/, val, cb);
};
// 验证金额数字不可以为负数
const moneyNValid = function (rule, val, cb) {
  valdateFn(MoneyTest, val, cb);
};

// 获取输入框的值
const getInputValue = (el) => {
  let inputVal = el.target.value || '';
  return comdify(delcommafy(inputVal));
};


function number_format_round (number, decimals, dec_point, thousands_sep) {
  if (number === undefined || number === null || number === 0) {
    return '0.00'
  }
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  var n = !isFinite(+number) ? 0 : +number
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  var sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep
  var dec = (typeof dec_point === 'undefined') ? '.' : dec_point
  var s = ''
  function toFixedFix (n, prec) {
    var k = Math.pow(10, prec)
    return '' + Math.round(n * k) / k
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  var re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

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
    //清空event
    clearEvent () {
      let _this = this;
      _this.$emit("update:value", null);
    },

    restrictChars (val) {

      if (!MoneyTest.test(val)) {
        return false;
      }
      return true;
    },

    inputMoneyFormat (el, name) {

      let _this = this;
      //去掉千分位
      let targetValue = delcommafy(el.target.value || '');

      if (targetValue !== '' && moneyValid(null, targetValue, null)) {
        //转成number类型
        let valueNum = parseFloat(targetValue);
        if (valueNum < _this.min) {
          valueNum = _this.min;
        }

        if (valueNum > _this.max) {
          valueNum = _this.max;
        }

        //转成带有千分位的 ,这个会默认2位小数
        let valStr = number_format_round(valueNum, 2);
        //let valStr = comdify(valueNum);
        //默认带有2位小数.00
        let idx = valStr.indexOf('.');
        if (idx >= 0) {
          let suffix = valStr.substring(idx + 1);
          if (parseFloat(suffix) === 0) {
            valStr = valStr.substring(0, idx);
          }
        }

        _this.valueCopy = valStr;
        this.oldValueStr = valStr;
        this.oldValueNum = valueNum;
        _this.$emit("update:value", valueNum);

      }
      //清空的时候不需要显示上次的值
      else if (targetValue === '') {
        el.target.value = '';
        _this.$emit("update:value", null);
      }
      else {
        el.target.value = '';
        _this.$emit("update:value", null);
      }
    }

  }
};
</script>
