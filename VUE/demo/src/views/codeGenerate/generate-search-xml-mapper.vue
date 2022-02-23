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


let commentModule = `<!-- @@comment@@ --> `;

let inputModule = `    
            <if test="@@searchModal@@ != null and @@searchModal@@ != ''"> 
                AND @@fieldName@@ like concat('%', concat(#{@@searchModal@@}, '%'))
            </if>
    `;


let selectModule = `
          <if test="@@searchModal@@ != null and @@searchModal@@.size()&gt;0">
                AND @@fieldName@@ IN
                <foreach close=")" collection="@@searchModal@@" item="item" open="(" separator=",">
                    #{item}
                </foreach>
            </if>
`;

//期间,yyyyMM
let datePeriodModule = `    
    <if test="@@searchModalFrom@@!=null and @@searchModalFrom@@!=''">
                and @@fieldName@@ <![CDATA[ >= ]]> #{@@searchModalFrom@@}
            </if>
            <if test="@@searchModalTo@@ !=null and @@searchModalTo@@ !=''">
                and @@fieldName@@ <![CDATA[ <= ]]> #{@@searchModalTo@@ }
            </if>
          `;

//时间yyyyMMdd
let dateModule = `
       <if test="@@searchModalFrom@@  != null">
                and DATE_FORMAT(@@fieldName@@, '%Y-%m-%d') >= DATE_FORMAT(#{@@searchModalFrom@@ }, '%Y-%m-%d')
            </if>
            <if test="@@searchModalTo@@ != null">
                and DATE_FORMAT(@@fieldName@@, '%Y-%m-%d') <= DATE_FORMAT(#{@@searchModalTo@@}, '%Y-%m-%d')
            </if>

`;

//时间yyyyMMdd hh:mm:ss
let dateTimeModule = `
       <if test="@@searchModalFrom@@  != null">
                and DATE_FORMAT(@@fieldName@@, '%Y-%m-%d %H:%i:%s') >= DATE_FORMAT(#{@@searchModalFrom@@ }, '%Y-%m-%d %H:%i:%s')
            </if>
            <if test="@@searchModalTo@@ != null">
                and DATE_FORMAT(@@fieldName@@, '%Y-%m-%d %H:%i:%s') <= DATE_FORMAT(#{@@searchModalTo@@}, '%Y-%m-%d %H:%i:%s')
            </if>

`;
//数字
let numberModule = `
       <if test="@@searchModalFrom@@ != null">
                AND @@fieldName@@ <![CDATA[ >= ]]> #{@@searchModalFrom@@ }
            </if>
            <if test="@@searchModalTo@@ != null">
                AND @@fieldName@@ <![CDATA[ <= ]]> #{@@searchModalTo@@}
            </if>
   `;



//查询drawer map
let queryDrawerMap = {
  input: inputModule,
  select: selectModule,
  number: numberModule,
  datePeriod: datePeriodModule,
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
      let parentCondition = 'condition.';
      let tableAlias = 'a.';//如inputInvoice i

      let result = '';
      let dataModuleCopy = this.$_.cloneDeep(this.dataSource);
      dataModuleCopy.forEach((item) => {
        let fieldName = item.searchModal;

        item.searchModal = parentCondition + item.searchModal;
        item.searchModalFrom = parentCondition + item.searchModalFrom;
        item.searchModalTo = parentCondition + item.searchModalTo;
        item.fieldName = tableAlias + formatter.camelToUnderscore(fieldName); //buyerName转换为buyer_name

        let template = '';

        let currentItem = queryDrawerMap[item.type];
        template = formatter.parseExpr(currentItem, item);

        if (item.comment) {
          template = formatter.parseExpr(commentModule, item.comment) + template + "\r\n";
        }


        result += template;

      });
      console.log(result);
      this.codeResult = result;
    },
  },
};
</script>
