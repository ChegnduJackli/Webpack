<template>
  <div class="">
    <el-button @click="generateSearchCode"
      type="primary">
      <slot>生成查询代码</slot>
    </el-button>
    <div style="width:1000px;height:100%;overflow:auto">
      <code>{{codeResult}}</code>
    </div>

  </div>
</template>


<style lang="scss" scoped>
</style>

<script>
import { formatter } from './formatter';


let commentModule = `<!-- @@comment@@ --> `;
let title = ` <div class="title">{{ $t('@@title@@') }}</div>`
let inputModule = `    
    `+ title + `
    <div class="cont">
      <el-input id="@@fieldID@@" v-model="@@searchModal@@"
        :placeholder="$t('common.pleaseInput')" />
    </div>
    `;

let selectModule = `
    `+ title + `
    <div class="cont">
      <el-select v-model="@@searchModal@@" id="@@fieldID@@"
        clearable
        multiple
        collapse-tags
        :placeholder="$t('common.pleaseSelect')"
        style="width: 100%;">
        <el-option v-for="item in @@searchDataSource@@"
          :key="item.value"
          :label="$t(item.label)"
          :value="item.value" />
      </el-select>
    </div>
`;

//期间,yyyyMM
let dateModule = `    
`+ title + `
          <div class="cont">
            <el-date-picker v-model="@@searchModal@@" id="@@fieldID@@"
              type="monthrange"
              format="yyyyMM"
              :editable="false"
              style="width: 100%;"
              :picker-options="{
                onPick: ({minDate, maxDate}) => {
                  @@searchModalFrom@@ = $moment(minDate).format('YYYYMM')
                   @@searchModalTo@@  = $moment(maxDate).format('YYYYMM')
                }
              }" />

          </div>`;

//时间yyyyMMdd
let dateTimeModule = `
`+ title + `
    <div class="cont">
      <el-date-picker v-model="@@searchModal@@" id="@@fieldID@@"
        type="daterange"
        :editable="false"
           format="yyyy-MM-dd"
        style="width: 100%;"
        :picker-options="{
                onPick: ({minDate, maxDate}) => {
                  @@searchModalFrom@@ = $moment(minDate).startOf('day')
                   @@searchModalTo@@ = $moment(maxDate).endOf('day')
                }
              }" />
    </div>

`;
//数字
let numberModule = `
    `+ title + `
    <div class="cont">
      <ck-number-box id="@@fieldID@@" :value.sync="@@searchModalFrom@@">
      </ck-number-box>

      <span class="range-separator mr10">-</span>
      <ck-number-box id="@@fieldID@@" :min="@@searchModalFrom@@"
        :value.sync="@@searchModalTo@@"></ck-number-box>

    </div>`;


//查询drawer map
let queryDrawerMap = {
  input: inputModule,
  select: selectModule,
  number: numberModule,
  date: dateModule,
  dateTime: dateTimeModule
}

export default {
  name: "subRouter1",
  //props: ['title'],
  //每个 prop 都有指定的值类型
  props: {
    dataSource: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      msg: "base button",
      codeResult: '',
      searchPanel: {},

    };
  },
  components: {

  },
  methods: {
    //html 代码格式化 https://tool.ip138.com/html/
    generateSearchCode () {
      let parentCondition = 'searchPanel.condition.';

      let idIndex = 1;
      let pageName = 'viim-';
      let result = '';
      let dataModuleCopy = this.$_.cloneDeep(this.dataSource);
      dataModuleCopy.forEach((item) => {
        item.searchModal = parentCondition + item.searchModal;
        item.searchModalFrom = parentCondition + item.searchModalFrom;
        item.searchModalTo = parentCondition + item.searchModalTo;
        item.fieldID = pageName + (idIndex++);
        // item.fieldID2 = pageName + (idIndex++);

        let template = '';

        let currentItem = queryDrawerMap[item.type];
        template = formatter.parseExpr(currentItem, item);

        // if (item.type == 'input') {
        //   template = formatter.parseExpr(inputModule, item);
        // }
        // else if (item.type == 'select') {
        //   template = formatter.parseExpr(selectModule, item);
        // }
        // else if (item.type == 'number') {
        //   template = formatter.parseExpr(numberModule, item);
        // }
        // else if (item.type == 'date') {
        //   template = formatter.parseExpr(dateModule, item);
        // }
        // else if (item.type == 'dateTime') {
        //   template = formatter.parseExpr(dateTimeModule, item);
        // }

        if (item.comment) {
          template = formatter.parseExpr(commentModule, item.comment) + template;
        }

        result += template;

      });
      console.log(result);
      this.codeResult = result;
    },
  },
};
</script>
