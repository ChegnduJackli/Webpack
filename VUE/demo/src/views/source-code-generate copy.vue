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

  { type: 'input', title: 'invoice.output.invoiceCode', searchModal: 'invoiceCode', comment: '发票代码' },
  { type: 'input', title: 'invoice.output.invoiceNumber', searchModal: 'invoiceNumber', comment: '发票号码' },

  { type: 'input', title: 'invoice.output.identityId', searchModal: 'identityId', comment: '身份证号码' },
  { type: 'select', title: 'invoice.output.status', searchModal: 'status', comment: '发票状态', searchDataSource: 'searchPanel.options.invoiceStatusArray' },
  { type: 'input', title: 'invoice.output.invoiceType', searchModal: 'invoiceType', comment: '发票类型' },
  { type: 'dateTime', title: 'invoice.column.invoiceDate', searchModal: 'invoiceDate', searchModalFrom: 'invoiceDateFrom', searchModalTo: 'invoiceDateTo', comment: '开票日期' },

  { type: 'input', title: 'invoice.output.buyerCode', searchModal: 'buyerCode', comment: '购方代码' },
  { type: 'input', title: 'invoice.output.buyerName', searchModal: 'buyerName', comment: '购方名称' },
  { type: 'input', title: 'invoice.output.buyerTaxNumber', searchModal: 'buyerTaxNumber', comment: '购方税号' },
  { type: 'input', title: 'invoice.output.manufacturerName', searchModal: 'manufacturerName', comment: '生产企业名称' },

  { type: 'input', title: 'invoice.output.vehicleType', searchModal: 'vehicleType', comment: '车辆类型' },
  { type: 'input', title: 'invoice.output.factoryBrandModel', searchModal: 'factoryBrandModel', comment: '厂牌型号' },
  { type: 'input', title: 'invoice.output.productPlace', searchModal: 'productPlace', comment: '产地' },
  { type: 'input', title: 'invoice.output.certificationNo', searchModal: 'certificationNo', comment: '合格证号' },
  { type: 'input', title: 'invoice.output.importCertificationNo', searchModal: 'importCertificationNo', comment: '进口证明书号' },
  { type: 'input', title: 'invoice.output.inspectionNo', searchModal: 'inspectionNo', comment: '商检单号' },
  { type: 'input', title: 'invoice.output.engineNo', searchModal: 'engineNo', comment: '发动机号码' },

  { type: 'input', title: 'invoice.output.vehicleIdentityNo', searchModal: 'vehicleIdentityNo', comment: '车辆识别代号/车架号码' },
  { type: 'input', title: 'invoice.output.sellerPhoneNo', searchModal: 'sellerPhoneNo', comment: '销方电话' },
  { type: 'input', title: 'invoice.output.sellerAccount', searchModal: 'sellerAccount', comment: '销方账号' },
  { type: 'input', title: 'invoice.output.sellerAddress', searchModal: 'sellerAddress', comment: '销方地址' },
  { type: 'input', title: 'invoice.output.sellerBankName', searchModal: 'sellerBankName', comment: '销方开户银行' },


  { type: 'number', title: 'invoice.output.amount', searchModal: 'amount', searchModalFrom: 'amountFrom', searchModalTo: 'amountTo', comment: '不含税金额' },
  { type: 'number', title: 'invoice.output.taxAmount', searchModal: 'taxAmount', searchModalFrom: 'taxAmountFrom', searchModalTo: 'taxAmountTo', comment: '税额' },
  { type: 'number', title: 'invoice.output.taxRate', searchModal: 'taxRate', searchModalFrom: 'taxRateFrom', searchModalTo: 'taxRateTo', comment: '税率' },
  { type: 'number', title: 'invoice.output.totalPriceLowerCase', searchModal: 'totalPriceLowerCase', searchModalFrom: 'totalPriceLowerCaseFrom', searchModalTo: 'totalPriceLowerCaseTo', comment: '含税总金额' },

  { type: 'input', title: 'invoice.output.taxPaymentCertificateNo', searchModal: 'taxPaymentCertificateNo', comment: '完税凭证号' },
  { type: 'input', title: 'invoice.output.tonnage', searchModal: 'tonnage', comment: '吨位' },
  { type: 'input', title: 'invoice.output.capacity', searchModal: 'capacity', comment: '限乘人数' },
  { type: 'input', title: 'invoice.output.productCode', searchModal: 'productCode', comment: '商品编码' },



  { type: 'input', title: 'invoice.output.tovOrderNumberStr', searchModal: 'orderNumber', comment: '预制订单号' },
  { type: 'input', title: 'invoice.output.category', searchModal: 'category', comment: '发票分类' },
  { type: 'input', title: 'invoice.output.oldInvoiceCode', searchModal: 'oldInvoiceCode', comment: '原蓝字发票代码' },
  { type: 'input', title: 'invoice.output.oldInvoiceNumber', searchModal: 'oldInvoiceNumber', comment: '原蓝字发票号码' },

  { type: 'input', title: 'invoice.output.redNoticeNumber', searchModal: 'redNoticeNumber', comment: '红字信息表编号' },

  // { type: 'dateTime', title: 'invoice.column.whtPaymentDate', searchModal: 'paymentDate', searchModalFrom: 'paymentDateFrom', searchModalTo: 'paymentDateTo', comment: '缴款日期' },
  // { type: 'date', title: 'invoice.column.period', searchModal: 'period', searchModalFrom: 'periodFrom', searchModalTo: 'periodTo' },
  //{ type: 'dateTime', title: 'invoice.column.updateTime', searchModal: 'updateTimeRange', searchModalFrom: 'updateTimeFrom', searchModalTo: 'updateTimeTo' },

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
