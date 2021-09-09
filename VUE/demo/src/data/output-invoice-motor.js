const outputInvoiceMotor = [
    { type: 'input', title: 'invoice.output.invoiceCode', searchModal: 'invoiceCode', comment: '发票代码' },
    { type: 'input', title: 'invoice.output.invoiceNumber', searchModal: 'invoiceNumber', comment: '发票号码' },

    { type: 'input', title: 'invoice.output.identityId', searchModal: 'identityId', comment: '身份证号码' },
    { type: 'input', title: 'invoice.output.status', searchModal: 'status', comment: '发票状态' },
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


]

export { outputInvoiceMotor }