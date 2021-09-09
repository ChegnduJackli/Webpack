<template>
  <div class="">
    <el-button @click="generateSearchCode"
      type="primary">
      <slot>生成导出dto</slot>
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


let commentModule = `/* @@comment@@ */ `;

//数字
let inputModule = `
    @ValidateFieldAnnotation(value = "@@searchModal@@", required = true, transField = "@@title@@")
    private String @@searchModal@@;`;

let dateModule = `
    @ValidateFieldAnnotation(value = "@@searchModal@@", required = true, transField = "@@title@@",format = "yyyy-MM-dd")
    private Date @@searchModal@@;`;


let numberModule = `
    @ValidateFieldAnnotation(value = "@@searchModal@@", required = true, transField = "@@title@@")
    private BigDecimal @@searchModal@@;`;

//查询drawer map
let queryDrawerMap = {
  input: inputModule,
  select: inputModule,
  number: numberModule,
  date: dateModule,
  dateTime: dateModule
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
          template = formatter.parseExpr(commentModule, item.comment) + template + "\r\n \r\n";
        }

        result += template;

      });
      console.log(result);
      this.codeResult = result;
    },
  },
};
</script>
