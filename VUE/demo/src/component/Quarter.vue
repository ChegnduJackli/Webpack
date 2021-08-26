<template>
  <div>
    <!-- <div>
      <el-button type="primary"
        size="small"
        plain
        @click="quarterTime">季度</el-button>
      <el-button type="primary"
        size="small"
        plain
        @click="halfYear">半年</el-button>
    </div> -->
    <span @click="showDoubleMonth">
      <el-input v-model="choseQuarter"
        prefix-icon="el-icon-date"
        v-bind="$attrs"
        v-on="$listeners"
        placeholder="请选择"
        @blur="closeSelect" />
    </span>
    <div v-show="showTime1a"
      class="show1">
      <p>
        <button type="button"
          aria-label="前一年"
          class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left"
          @click="prev" />
        <span role="button"
          class="span-year">{{ year }}年</span>
        <button type="button"
          aria-label="后一年"
          class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right"
          @click="next" />
      </p>
      <div>
        <span v-for="(item,index) in fullMonth"
          :key="index"
          class="selectMonth"
          @click="selectQuarter(item)">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Quarter',
  data () {
    return {
      value: '',
      showTime2: false,
      showTime1a: false,
      year: new Date().getFullYear(),
      fullMonth: ['第一季度', '第二季度', '第三季度', '第四季度'],
      choseQuarter: "",
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.choseQuarter = this.getCurQuar();
      this.quarterTime()
    })
  },
  props: {
    choseQuarterVal: {
      type: String,
      default: ''
    },
  },
  watch: {
    choseQuarterVal: {
      deep: true,
      immediate: true, // watch侦听操作内的函数会立刻被执行
      handler (val) {
        // debugger
        console.log('choseQuarterVal', val);
        this.choseQuarter = val
      }
    }
  },
  methods: {
    // 点击季度按钮
    quarterTime () {
      this.fullMonth = ['第一季度', '第二季度', '第三季度', '第四季度']
    },
    // 点击半年按钮
    halfYear () {
      this.fullMonth = ['上半年', '下半年']
    },
    // 点击input框
    showDoubleMonth () {
      this.showTime1a = true
    },
    // 上一年
    prev () {
      this.year = this.year * 1 - 1
    },
    // 下一年
    next () {
      this.year = this.year * 1 + 1
    },
    // 点击选项事件
    selectQuarter (item) {
      //   debugger
      switch (item) {
        case '第一季度':
          this.choseQuarter = this.year + '-' + 'Q1'
          break
        case '第二季度':
          this.choseQuarter = this.year + '-' + 'Q2'
          break
        case '第三季度':
          this.choseQuarter = this.year + '-' + 'Q3'
          break
        case '第四季度':
          this.choseQuarter = this.year + '-' + 'Q4'
          break
        case '上半年':
          this.choseQuarter = this.year + '-' + 'H1'
          break
        case '下半年':
          this.choseQuarter = this.year + '-' + 'H2'
          break
      }
      this.showTime1a = false
      // console.log("🚀 ~ file: Quarter.vue ~ line 109 ~ selectQuarter ~ this.choseQuarter", this.choseQuarter)
      // this.$set(this, "choseQuarterVal", this.choseQuarter);
      this.$emit("change", { data: this.choseQuarter });
    },
    closeSelect () {
      //   debugger
      //this.showTime1a = false;
    },
    getCurQuar () {
      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1;
      let result = "";
      switch (month) {
        case 1:
        case 2:
        case 3:
          result = year + "-Q1";
          break;
        case 4:
        case 5:
        case 6:
          result = year + "-Q2";
          break;
        case 7:
        case 8:
        case 9:
          result = year + "-Q3";
          break;
        case 10:
        case 11:
        case 12:
          result = year + "-Q4";
          break;
        default:
          break;
      }

      return result;
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.show1 {
  width: 320px;
  margin-top: 5px;
  position: absolute;
  z-index: 2;
  height: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 5px;
}

.show1 p:nth-child(1) {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
}

.show1 > div {
  width: 100%;
  height: auto;
}

.show1 > div span {
  width: 50%;
}

.selectMonth {
  display: inline-block;
  /* float: left; */
  width: 78px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.selectMonth:hover {
  background: rgba(19, 131, 255, 0.052);
}

.span-year {
  width: 90%;
  margin: 0 auto;
  display: inline-block;
  text-align: center;
  line-height: 40px;
}
</style>