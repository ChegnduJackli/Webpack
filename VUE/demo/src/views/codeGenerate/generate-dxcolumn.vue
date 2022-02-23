<template>
  <div class="">
    <el-button @click="generateSearchCode"
      type="primary">
      <slot>生成Dx Column</slot>
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
let inputModule = `
      <DxColumn  id="@@fieldID@@"
          data-field="@@searchModal@@"
          data-type="string"
          :caption="$t('@@title@@')" ></DxColumn>
`;
let title = ` <div class="title">{{ $t('@@title@@') }}</div>`
// let inputModule = `    
//     `+ title + `
//     <div class="cont">
//       <el-input id="@@fieldID@@" v-model="@@searchModal@@"
//         :placeholder="$t('common.pleaseInput')" />
//     </div>
//     `;

let selectModule = `
     <DxColumn  id="@@fieldID@@"
          data-field="@@searchModal@@"
          data-type="string"
          :customize-text="formatInvoiceType"
          :caption="$t('@@title@@')" ></DxColumn>
`;

//期间,yyyyMM
let datePeriodModule = `    
      <DxColumn  id="@@fieldID@@"
          data-field="@@searchModal@@"
          data-type="datetime"
          data-type="string"
          :caption="$t('@@title@@')" ></DxColumn>`;

//时间yyyyMMdd
let dateModule = `    
      <DxColumn  id="@@fieldID@@"
          data-field="@@searchModal@@"
          data-type="datetime"
          format="yyyy-MM-dd"
          :caption="$t('@@title@@')" ></DxColumn>`;

//时间yyyy-MM-dd HH:mm:ss
let dateTimeModule = `
    <DxColumn  id="@@fieldID@@"
          data-field="@@searchModal@@"
          data-type="datetime"
          format="yyyy-MM-dd HH:mm:ss"
          :caption="$t('@@title@@')" ></DxColumn>

`;
//数字
let numberModule = `
         <DxColumn  id="@@fieldID@@"
          data-field="@@searchModal@@"
         data-type="number"
          format="#,##0.00"
          :caption="$t('@@title@@')" ></DxColumn>`;


//查询drawer map
let queryDrawerMap = {
  input: inputModule,
  select: selectModule,
  number: numberModule,
  date: dateModule,
  datePeriod: datePeriodModule,
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

        //item.searchModal = parentCondition + item.searchModal;
        item.searchModalFrom = parentCondition + item.searchModalFrom;
        item.searchModalTo = parentCondition + item.searchModalTo;
        item.fieldID = pageName + (idIndex++);
        // item.fieldID2 = pageName + (idIndex++);

        let template = '';

        let currentItem = queryDrawerMap[item.type];
        template = formatter.parseExpr(currentItem, item);


        if (item.comment) {
          template = formatter.parseExpr(commentModule, item.comment) + template + '\r\n';
        }

        result += template;

      });
      console.log(result);
      // this.codeResult = result;
    },
  },
};
</script>
