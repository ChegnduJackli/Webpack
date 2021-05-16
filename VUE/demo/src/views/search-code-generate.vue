<template>
  <div class="query-wrapper">
    <generate-search-drawer :dataSource="dataSource">生成右弹框查询代码</generate-search-drawer>
    <br>
    <generate-search-xml-mapper :dataSource="dataSource">生产后台xml map查询语句</generate-search-xml-mapper>
  </div>
</template>


<style lang="scss" scoped>
.query-wrapper {
  display: block;
  margin: 10px;
}
</style>

<script>

//配置数据源
let dataModule = [
  // { type: 'input', title: 'invoice.column.sellerName', searchModal: 'sellerName', comment: '公司代码' },
  // { type: 'input', title: 'invoice.column.sellerTaxNumber', searchModal: 'sellerTaxNumber', comment: '代扣代缴项目' },
  // { type: 'select', title: 'invoice.column.invoiceEntityType', searchModal: 'invoiceEntityType', searchDataSource: 'invConstant.inputInvoiceEntityTypeArray' },
  // { type: 'number', title: 'invoice.column.amount', searchModal: 'amount', searchModalFrom: 'amountFrom', searchModalTo: 'amountTo' },
  // { type: 'date', title: 'invoice.column.period', searchModal: 'incomeDate', searchModalFrom: 'incomeDateFrom', searchModalTo: 'incomeDateTo' },
  // { type: 'dateTime', title: 'invoice.column.updateTime', searchModal: 'uploadDate', searchModalFrom: 'uploadDateFrom', searchModalTo: 'uploadDateTo' },

  { type: 'input', title: 'invoice.input.whtItemName', searchModal: 'item', comment: '代扣代缴项目' },
  { type: 'input', title: 'invoice.input.whtDocumentNumber', searchModal: 'documentNumber', comment: '代扣代缴凭证编号' },
  { type: 'number', title: 'invoice.input.taxAmount', searchModal: 'taxAmount', searchModalFrom: 'taxAmountFrom', searchModalTo: 'taxAmountTo', comment: '税额' },
  { type: 'dateTime', title: 'invoice.column.whtPaymentDate', searchModal: 'paymentDate', searchModalFrom: 'paymentDateFrom', searchModalTo: 'paymentDateTo', comment: '缴款日期' },
  { type: 'date', title: 'invoice.column.period', searchModal: 'period', searchModalFrom: 'periodFrom', searchModalTo: 'periodTo' },
  //{ type: 'dateTime', title: 'invoice.column.updateTime', searchModal: 'updateTimeRange', searchModalFrom: 'updateTimeFrom', searchModalTo: 'updateTimeTo' },

]

import generateSearchDrawer from './codeGenerate/generate-search-drawer';
import generateSearchXmlMapper from './codeGenerate/generate-search-xml-mapper';

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
    generateSearchXmlMapper
  },
  methods: {

  },
};
</script>
