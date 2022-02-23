<template>
  <div class="">
    <el-button @click="generateSearchCode"
      type="primary">
      <slot>生成查询后台xml代码</slot>
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


let commentModule = `/*-- @@comment@@ --*/ `;


let inputModule = `    
 if (StringUtils.isNotBlank(reqDto.get@@searchModal@@())) {
  wrapper.like(@@tableName@@::get@@searchModal@@, reqDto.get@@searchModal@@());
}
    `;


let selectModule = `
 if (StringUtils.isNotBlank(reqDto.get@@searchModal@@())) {
  wrapper.in(@@tableName@@::get@@searchModal@@, reqDto.get@@searchModal@@());
}
`;

//期间,yyyyMM
let dateModule = `    
     if (reqDto.get@@searchModalFrom@@() != null) {
            wrapper.ge(@@tableName@@::get@@searchModal@@, reqDto.get@@searchModalFrom@@());
        }
        if (reqDto.get@@searchModalTo@@() != null) {
            wrapper.le(@@tableName@@::get@@searchModal@@, reqDto.get@@searchModalTo@@());
        }

          `;

//时间yyyyMMdd
let dateTimeModule = `
     if (reqDto.get@@searchModalFrom@@() != null) {
            wrapper.ge(@@tableName@@::get@@searchModal@@, reqDto.get@@searchModalFrom@@());
        }
        if (reqDto.get@@searchModalTo@@() != null) {
            wrapper.le(@@tableName@@::get@@searchModal@@, reqDto.get@@searchModalTo@@());
        }

`;
//数字
let numberModule = `
     if (reqDto.get@@searchModalFrom@@() != null) {
            wrapper.ge(@@tableName@@::get@@searchModal@@, reqDto.get@@searchModalFrom@@());
        }
        if (reqDto.get@@searchModalTo@@() != null) {
            wrapper.le(@@tableName@@::get@@searchModal@@, reqDto.get@@searchModalTo@@());
        }
   `;



//查询drawer map
let queryDrawerMap = {
  input: inputModule,
  select: selectModule,
  number: numberModule,
  date: dateModule,
  datePeriod: dateModule,
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
    upFirstLetter (name) {
      if (!name) return '';
      let result = name.substring(0, 1).toUpperCase() + name.substring(1)
      return result;
    },
    //html 代码格式化 https://tool.ip138.com/html/
    generateSearchCode () {
      let parentCondition = 'condition.';
      let tableAlias = 'a.';//如inputInvoice i
      let tableName = 'OutputInvoiceMotor';
      let result = '';
      let dataModuleCopy = this.$_.cloneDeep(this.dataSource);
      dataModuleCopy.forEach((item) => {
        let fieldName = item.searchModal;

        item.searchModal = this.upFirstLetter(fieldName);
        item.searchModalFrom = this.upFirstLetter(item.searchModalFrom);
        item.searchModalTo = this.upFirstLetter(item.searchModalTo);
        item.tableName = tableName;
        // item.searchModalFrom = parentCondition + item.searchModalFrom;
        // item.searchModalTo = parentCondition + item.searchModalTo;
        // item.fieldName = tableAlias + formatter.camelToUnderscore(fieldName); //buyerName转换为buyer_name

        let template = '';

        let currentItem = queryDrawerMap[item.type];
        template = formatter.parseExpr(currentItem, item);
        if (item.comment) {
          template = formatter.parseExpr(commentModule, item.comment) + template + "\r\n";
        }
        result += template;

      });
      console.log(result);
      // this.codeResult = result;
    },
  },
};
</script>
