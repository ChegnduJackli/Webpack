<template>
  <div>

    <div class="box">
      <div class="title">api增删改查</div>
      <el-button @click="mybatisPlus">mybatisPlus</el-button>
      <ck-btn @click="triggerSend($event)"
        :autoLoading="true">mock motor sap order</ck-btn>

      <ck-btn @click="triggerStandApi($event)"
        :autoLoading="true">mock标准api</ck-btn>

      <ck-btn @click="callBack($event)"
        :autoLoading="true">callBack sap order</ck-btn>

      <ck-btn @click="mockhuilianyiData($event)"
        :autoLoading="true">mock汇联易</ck-btn>

      <div slot="content"
        style="height:100%">
        <el-scrollbar wrap-style="overflow-x: hidden;"
          style="height: 100%">
          <el-table :data="tableData"
            style="padding:8px">
            <el-table-column property="username"
              label="姓名"
              width="150"></el-table-column>
            <el-table-column property="birthday"
              label="生日"
              width="200"></el-table-column>
            <el-table-column property="sex"
              label="性别"></el-table-column>
            <el-table-column property="address"
              label="地址"></el-table-column>
          </el-table>

        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kill-row-margin {
  padding: 0 10px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 200px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.title {
  color: #fff;
  background-color: #d04a02;
  padding: 8px;
}

.box {
  border: solid 1px #2d2d2d;
  margin: 10px 0;

  .content {
    padding: 10px;
  }
}
</style>
<script>
import { createLogger } from 'vuex';
import elementTable from "../component/element-table.vue";

import { getUserList, mybatisPlusTest, sendSapOrder, getCallBackInvoice, getHLYInvoice, sendVatOrder } from "../utils/userLib";

export default {
  name: "element-table-demo",
  components: {
    "element-table": elementTable,
  },
  data () {
    return {
      tableData: [],

    };
  },
  created () {
    this.init();
  },
  methods: {
    mybatisPlus () {
      mybatisPlusTest();
    },
    init () {
      console.log('this.$auth.getAccessToken()', this.$auth.getAccessToken());
      getUserList().then((res) => {
        console.log(res);
        this.tableData = res.data;
        debugger;

      });
    },
    callBack (done) {
      getCallBackInvoice().then((res) => {
        console.log('getCallBackInvoice', res);
      }).finally(() => {
        done();
      })
    },
    mockhuilianyiData (done) {

      let dto = {
        transmissionID: '10001001',
        claimNumber: '10001',
        claimBy: '王五',
        invoiceList: [
          {
            invoiceCode: '100002',
            invoiceNumber: '100002',
            invoiceDate: '2021-09-07',
            invoiceType: "增值税普通发票", //增值税专用发票，电子普票，电子专票
            buyerName: '卓莓企业管理（上海）有限公司',
            buyerTaxNumber: '100002',
            sellerName: '普华永道个人税务咨询（上海）有限公司',
            sellerTaxNumber: '913100006624786873',
            sellerAddress: '上海市黄浦区湖滨路202号',
            sellerPhone: '021-23238888 ',
            sellerBankName: '渣打银行（中国）有限公司上海分行',
            sellerBankAccount: '404061',

            amount: '2000',
            taxAmount: '200',
            checkCode: '100002',
            remark: '100002',
            itemList: [{
              productionName: '商品名称',
              specification: '规格',
              unit: '单位',
              quantity: '1',
              unitPrice: '1000',
              amount: '1000',
              taxRate: '0.1',
              taxAmount: '100',
            },
            {
              productionName: '商品名称2',
              specification: '规格2',
              unit: '单位',
              quantity: '1',
              unitPrice: '1000',
              amount: '1000',
              taxRate: '0.1',
              taxAmount: '100',
            },
            ]
          }
        ]
      };
      getHLYInvoice(dto).then((res) => {
        console.log('getHLYInvoice', res);
      }).finally(() => {
        done();
      })

    },
    newGuid () {
      function s4 () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      };
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    },

    mockData () {

      let arr = [];
      let type = '03';
      for (let i = 410; i < 420; i++) {
        let data = {

          "IV_TYPE": type, //01,机动车，02，软件，03,总公司发票
          "IV_ACTION": '01', //01开票，02 红冲
          "KEY": this.newGuid(),
          "GMFLX": '01', //01企业，02个人
          "IV_FPTYPE": '02', //01电子普票，02电专,04纸质普票,
          "ORDER": 'Order20210928' + i,
          "NAME": 'jackTest' + i, //企业或者个人名称
          "ZNSH": '350204154995215000' + i, //购方税号
          "ZCLXH": '车辆类型，超跑',
          "ZCPXH": '厂牌型号',
          "ZCD": '中国',
          "ZHGZH": 'RT3434',
          "ZFDJH": 'dfdderer' + i,
          "VIN": 'RTERERE901' + i,
          "FBUKRS": '3378',//开票公司代码 集团公司销售方
          "TBUKRS": '3368', //收票公司代码 type:03才有值
          "YHKHH": '成都银行', //购方信息
          "YHZH": '02342343434323',
          "GSDZ": '成都龙泉',
          "TEL": '13866456565',
          "BUKRS": 'doorNo' + i,
          "YFPDM": '1156612771',
          "YFPHM": '21516187',
          "EMAIL": 'jack.d.li@cn.pwc.com', //jack.d.li@cn.pwc.com
          "ITEMS": [
            {
              "ZNAME": type == '02' ? 'OTA' : (type == '03' ? '极氪001' : ''), //IV_TYPE =02 OTA. IV_TYPE =03 极氪001
              "ZTYPE": '规格型号',
              "ZKPJE": '5000',
              "ZTAX": '0.1',
            }
          ]
        };
        arr.push(data);
      }
      return arr;

    },
    mockData2 () {
      let arr = [
        { "BUKRS": "doorNo32", "EMAIL": "", "FBUKRS": "3378", "GMFLX": "02", "GSDZ": "成都龙泉", "ITEMS": [{ "ZKPJE": "5000", "ZNAME": "极氪001", "ZTAX": "0.1", "ZTYPE": "规格型号" }], "IV_ACTION": "01", "IV_FPTYPE": "04", "IV_TYPE": "03", "KEY": "f64fdb65-c064-4b0f-efb9-4a95d6b7bc30", "NAME": "jackTest32", "ORDER": "Order20210918001032", "TBUKRS": "3368", "TEL": "13866456565", "VIN": "RTERERE90132", "YFPDM": "1137274225", "YFPHM": "35847493", "YHKHH": "成都银行", "YHZH": "02342343434323", "ZCD": "中国", "ZCLXH": "车辆类型，超跑", "ZCPXH": "厂牌型号", "ZFDJH": "dfdderer32", "ZHGZH": "RT3434", "ZNSH": "35020415499521500032" }

      ];


      return arr;

    },

    triggerStandApi (done) {

      let arr = {
        "Action": '01', //01开票，02 红冲
        "OrderKey": '202109091000201',
        "InvoiceType": '02',
        "OrderNumber": '202109091000201',
        "BuyerName": '周星驰',
        "BuyerTaxNumber": '644493049812444587',
        "BuyerBankName": '工商银行',
        "BuyerBankAccount": '622299990987778653299',
        "BuyerAddress": '成都来福士广场',
        "BuyerPhoneNo": '13888889999',
        "BuyerEmail": 'zhouxingchi@pwc.com',
        "OrgCode": '3368',
        "OldInvoiceCode": '1308899776',
        "OldInvoiceNumber": '66564454',
        "IsNeedSend": '是',
        "ReceiverName": '老王',
        "ReceiverPhone": '老王电话',
        "ReceiverAddress": '老王地址',
        "Remark": '备注',
        "Items": [
          {
            "ProductName": 'OTA',
            "Specification": '规格型号',
            "Amount": '10000',
            "TaxRate": '0.13',
            "Unit": '个',
            "Quantity": '1'
          }
        ]
      }
      sendVatOrder(arr).then((res) => {
        console.log(res);
      }).finally(() => {
        done();
      })
    },
    triggerSend (done) {

      let arr = this.mockData();

      sendSapOrder(arr).then((res) => {
        console.log(res);
      }).finally(() => {
        done();
      })
    },

    test2 () {
      let arr = [0, 100, 20, 0, 20, 30, 40, 12, 10, 0, 20, 21];
      let i = 0, j = 0, maxLenth = 0, maxArr = [];
      const set = new Set();
      for (i; i < arr.length; i++) {
        if (arr[i] != 0) {
          set.add(arr[i]);
          if (maxLenth < set.size) {
            maxLenth = set.size;
            maxArr = [...set];
          }
        }
        else {
          while (j < i) {
            set.delete(arr[j]);
            j++;
          }
        }
      }

      console.log(maxArr);

    }
  },
};
</script>
