<template>
  <div class="query-wrapper">
    <generate-search-drawer :dataSource="dataSource">生成右弹框查询代码</generate-search-drawer>
    <br>
    <generate-search-xml-mapper :dataSource="dataSource">生产后台xml map查询语句</generate-search-xml-mapper>
    <br>
    <generate-dx-column :dataSource="dataSource">生成dx column语句 </generate-dx-column>
    <br>
    <generate-search-plus :dataSource="dataSource">生成mybaits plus语句 </generate-search-plus>

    <br>
    <generate-export-dto :dataSource="dataSource">生成Excel导出类 dto语句 </generate-export-dto>
  </div>

</template>


<style lang="scss" scoped>
.query-wrapper {
  display: block;
  margin: 10px;
}
</style>

<script>
import { outputInvoiceMotor } from "../data/output-invoice-motor";

let dataModule1 = outputInvoiceMotor;
console.log('dataModule1', dataModule1);
//配置数据源
let dataModule = [
  // { type: 'input', title: 'invoice.column.sellerName', searchModal: 'sellerName', comment: '公司代码' },
  // { type: 'input', title: 'invoice.column.sellerTaxNumber', searchModal: 'sellerTaxNumber', comment: '代扣代缴项目' },
  // { type: 'select', title: 'invoice.column.invoiceEntityType', searchModal: 'invoiceEntityType', searchDataSource: 'invConstant.inputInvoiceEntityTypeArray' },
  // { type: 'number', title: 'invoice.column.amount', searchModal: 'amount', searchModalFrom: 'amountFrom', searchModalTo: 'amountTo' },
  // { type: 'date', title: 'invoice.column.period', searchModal: 'incomeDate', searchModalFrom: 'incomeDateFrom', searchModalTo: 'incomeDateTo' },
  // { type: 'dateTime', title: 'invoice.column.updateTime', searchModal: 'uploadDate', searchModalFrom: 'uploadDateFrom', searchModalTo: 'uploadDateTo' },

  { type: 'input', title: '报关单号', searchModal: 'customDecNo', comment: '报关单号' },
  { type: 'input', title: 'invoice.output.invoiceNumber', searchModal: 'invoiceNumber', comment: '发票号码' },

  { type: 'date', title: '进出口日期', searchModal: 'importAndExportDate', searchModalFrom: 'importAndExportDateFrom', searchModalTo: 'importAndExportDateTo', comment: '进出口日期' },
  { type: 'select', title: '进出口标志', searchModal: 'importAndExportSign', comment: '进出口标志' },

  { type: 'date', title: '申报日期', searchModal: 'declareDate', searchModalFrom: 'declareDateFrom', searchModalTo: 'declareDateTo', comment: '申报日期' },
  { type: 'input', title: '运抵国(地区)', searchModal: 'arrivalCountry', comment: '运抵国(地区)' },

  { type: 'select', title: '贸易方式/监管方式', searchModal: 'tradeRegulation', comment: '贸易方式/监管方式', searchDataSource: 'searchPanel.options.invoiceStatusArray' },
  { type: 'select', title: '征免性质', searchModal: 'exemptionNature', comment: '征免性质', searchDataSource: 'searchPanel.options.invoiceStatusArray' },
  { type: 'input', title: '报关单项号', searchModal: 'customDecItemNo', comment: '报关单项号' },
  { type: 'input', title: '物料名称', searchModal: 'materialName', comment: '物料名称' },
  { type: 'input', title: 'HS编码', searchModal: 'hsCode', comment: 'HS编码' },

  { type: 'input', title: '申报数量', searchModal: 'quantity', comment: '申报数量' },
  { type: 'input', title: '申报单位', searchModal: 'unit', comment: '申报单位' },

  { type: 'number', title: '申报单价', searchModal: 'unitPrice', searchModalFrom: 'unitPriceFrom', searchModalTo: 'unitPriceTo', comment: '申报单价' },
  { type: 'number', title: '总价', searchModal: 'totalPrice', searchModalFrom: 'totalPriceFrom', searchModalTo: 'totalPriceTo', comment: '总价' },


  { type: 'input', title: '币制', searchModal: 'currency', comment: '币制' },
  { type: 'input', title: '产销国', searchModal: 'originCountry', comment: '产销国' },
  { type: 'input', title: '部门', searchModal: 'department', comment: '部门' },

  { type: 'select', title: '结关状态', searchModal: 'clearanceStatus', comment: '结关状态', searchDataSource: 'searchPanel.options.invoiceStatusArray' },


]

import generateSearchDrawer from './codeGenerate/generate-search-drawer';
import generateSearchXmlMapper from './codeGenerate/generate-search-xml-mapper';
import generateDxColumn from './codeGenerate/generate-dxcolumn';
import generateSearchPlus from './codeGenerate/generate-search-plus';
import generateExportDto from './codeGenerate/generate-export-dto';
export default {
  name: "subRouter1",
  //props: ['title'],
  //每个 prop 都有指定的值类型
  props: {

  },
  data () {
    return {
      msg: "base button",
      codeResult: '',
      searchPanel: {},
      dataSource: dataModule,

    };
  },
  components: {
    generateSearchDrawer,
    generateSearchXmlMapper,
    generateDxColumn,
    generateSearchPlus,
    generateExportDto
  },
  methods: {

  },
};
</script>
