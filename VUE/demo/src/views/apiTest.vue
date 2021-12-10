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

      <br>
      <br>

      order key:<el-input v-model="param.orderKey"
        style="width:200px"></el-input>
      <ck-btn @click="queryAPiResult($event)"
        :autoLoading="true">查询标准api结果</ck-btn>

      <br>
      <br>
      BW order Number:<el-input v-model="param.orderNumber"
        style="width:200px"></el-input>
      <ck-btn @click="queryBWOrderEvent($event)"
        :autoLoading="true">query BW order</ck-btn>

      <ck-btn @click="issueDoorInvoiceEvent($event)"
        :autoLoading="true">issue door Invoice</ck-btn>

      <ck-btn @click="reverseInvoiceEvent($event)"
        :autoLoading="true">红冲door order</ck-btn>
      <br>
      <br>

      <ck-btn @click="mockhuilianyiData($event)"
        :autoLoading="true">mock汇联易</ck-btn>

      <ck-btn @click="promiseTest">promise test</ck-btn>

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

import {
  getUserList, mybatisPlusTest, sendSapOrder, getCallBackInvoice,
  getHLYInvoice, sendVatOrder, queryVatInvoiceList, queryBWOrder,
  reverseInvoice, issueDoorInvoice
} from "../utils/userLib";

export default {
  name: "element-table-demo",
  components: {
    "element-table": elementTable,
  },
  data () {
    return {
      tableData: [],
      param: {
        orderKey: ''
      },

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

    queryBWOrderEvent (done) {

      let orderNo = this.param.orderNumber;
      let dto = {
        orderNumber: orderNo,
      }
      queryBWOrder(dto).then((res) => {
        console.log('queryBWOrder', res);
      }).finally(() => {
        done();
      })
    },
    issueDoorInvoiceEvent (done) {
      let dto = {
        "action": "01", //01开具，02红冲
        "orderNumber": "test2021111056120309", //订单号
        "buyerName": "李大哥",
        "buyerTaxNumber": "234234RRTE23412010",
        "buyerEmail": "jack.d.li@cn.pwc.com",
        "buyerPhoneNo": "32424324243",
        "buyerAddress": "四川省成都市来福士广场26楼",
        "buyerTelNo": "3242343243",
        "buyerBankName": "中国工商银行",
        "buyerBankAccount": "34324243242432",
        "buyerType": "02", //01企业（电专），02个人（电普）
        "orderDate": "2021-11-12",
        "amount": 75,
        "items": [
          {
            "productCode": "LC",
            "productName": "甜点",
            "quantity": 4,
            "unitPrice": 100,
            "remark": null,
            "unit": null,
            "specification": null,
            "originalAmount": 500,
            "pointsAmount": 50,
            "discountAmount": 50,
            "amount": 400
          },
          {
            "productCode": "LC",
            "productName": "饮品",
            "quantity": 2,
            "unitPrice": 200,
            "remark": null,
            "unit": null,
            "specification": null,
            "originalAmount": 250,
            "pointsAmount": 25,
            "discountAmount": 25,
            "amount": 200
          },
          {

            "productCode": "LC",
            "productName": "牛奶",
            "quantity": 3,
            "unitPrice": 15,
            "remark": null,
            "unit": null,
            "specification": null,
            "originalAmount": 200,
            "pointsAmount": 20,
            "discountAmount": 30,
            "amount": 150
          },
          {
            "productCode": "LC",
            "productName": "甜点",
            "quantity": 2,
            "unitPrice": 15,
            "remark": null,
            "unit": null,
            "specification": null,
            "originalAmount": 300,
            "pointsAmount": 10,
            "discountAmount": 40,
            "amount": 250
          },
          {
            "productCode": "LC",
            "productName": "极氪001",
            "quantity": 2,
            "unitPrice": 15,
            "remark": null,
            "unit": null,
            "specification": null,
            "originalAmount": 300,
            "pointsAmount": 10,
            "discountAmount": 40,
            "amount": 250
          },
          {
            "productCode": "LC",
            "productName": "极氪001",
            "quantity": 2,
            "unitPrice": 15,
            "remark": null,
            "unit": null,
            "specification": null,
            "originalAmount": 300,
            "pointsAmount": 10,
            "discountAmount": 40,
            "amount": 250
          }
        ],
        "sellerName": "交付中心|上海手拉手",
        "sellerCode": "3391",

      };


      issueDoorInvoice(dto).then((res) => {
        console.log('reverseInvoice', res);
      }).finally(() => {
        done();
      });
    },
    reverseInvoiceEvent (done) {
      let dto = {
        originalOrder: "test2021111056120309",
        returnOrder: "30333",

      }
      reverseInvoice(dto).then((res) => {
        console.log('reverseInvoice', res);
      }).finally(() => {
        done();
      });

    },
    mockhuilianyiData (done) {

      let dto = {
        "transmissionId": "100010036",
        "claimNumber": "1000102736",
        "claimBy": "王五",
        "invoiceList": [
          {
            "invoiceCode": "1000021026",
            "invoiceNumber": "100002126",
            "invoiceDate": "2021-09-07",
            "invoiceType": "03",
            "buyerName": "卓莓企业管理（上海）有限公司",
            "buyerTaxNumber": "91310000MA1FL1CQ9N",
            "buyerAddress": "上海市长宁区娄山关路523号9楼06单元",
            "buyerPhone": "021-62758288",
            "buyerBankName": "中国建设银行",
            "buyerBankAccount": "6222000088880000888",
            "sellerName": "普华永道个人税务咨询（上海）有限公司",
            "sellerTaxNumber": "913100006624786873",
            "sellerAddress": "上海市黄浦区湖滨路202号",
            "sellerPhone": "021-23238888 ",
            "sellerBankName": "渣打银行（中国）有限公司上海分行",
            "sellerBankAccount": "404061",
            "amount": "2000",
            "taxAmount": "200",
            "totalAmount": "2200",
            "checkCode": "100002",
            "invalidStatus": "N",
            "remark": "100002",
            "imageId": "1002",
            "imageUrl": "http://10.157.107.80:9900/outputinvoice/SY82021080132.pdf?Content-Disposition=attachment%3B%20filename%3D%22SY82021080132.pdf%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=admin%2F20211208%2F%2Fs3%2Faws4_request&X-Amz-Date=20211208T092725Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=aae412b0dca00cbfa487c78356f485b1484f85483ed693b1bb6cf4da9283d4f0",
            "fileName": "SY82021080132.pdf",
            "itemList": [
              {
                "itemSeq": 1,
                "productionName": "商品名称",
                "specification": "规格",
                "unit": "单位",
                "quantity": "1",
                "unitPrice": "1000",
                "amount": "1000",
                "taxRate": "0.1",
                "taxAmount": "100",
                "vehicleType": "客车",
                "passDateFrom": "20211130",
                "passDateTo": "20221130",
                "itemName": "通行费",
                "plateNumber": "川A34324"
              },
              {
                "itemSeq": 2,
                "productionName": "商品名称2",
                "specification": "规格2",
                "unit": "单位",
                "quantity": "1",
                "unitPrice": "1000",
                "amount": "1000",
                "taxRate": "0.1",
                "taxAmount": "100",
                "vehicleType": "小轿车",
                "passDateFrom": "20211130",
                "passDateTo": "20221130",
                "itemName": "通行费",
                "plateNumber": "川A343434"
              }
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
      let type = '01';
      for (let i = 426; i < 427; i++) {
        let data = {
          "IV_TYPE": type, //01,机动车，02，软件，03,总公司发票
          "IV_ACTION": '01', //01开票，02 红冲
          "KEY": this.newGuid(),
          "GMFLX": '02', //01企业，02个人
          "IV_FPTYPE": '01', //01电子普票，02电专,04纸质普票,
          "ORDER": '3502041549952150003' + i,
          "NAME": 'jackTest' + i, //企业或者个人名称
          "ZNSH": 'MA350204154995215000' + i, //购方税号
          "ZCLXH": '车辆类型，超跑',
          "ZCPXH": '厂牌型号',
          "ZCD": '中国',
          "ZHGZH": 'RT3434',
          "ZFDJH": 'dfdderer' + i,
          "VIN": 'RTERERE901' + i,
          "MFNAME": '生产企业名称' + i,
          "FBUKRS": '3391',//开票公司代码 集团公司销售方 3391 3368
          "TBUKRS": '3206', //收票公司代码 type:03才有值
          "YHKHH": '成都银行', //购方信息
          "YHZH": '02342343434323',
          "GSDZ": '成都龙泉',
          "TEL": '13866456565',
          "BUKRS": 'doorNo' + i,
          "YFPDM": '1150998418',
          "YFPHM": '96687572',
          "EMAIL": 'jack.d.li@cn.pwc.com', //jack.d.li@cn.pwc.com
          "ITEMS": [
            {
              "ZNAME": type == '02' ? 'OTA' : (type == '03' ? '极氪001' : ''), //IV_TYPE =02 OTA. IV_TYPE =03 极氪001
              "ZTYPE": type == '03' ? 'vin' + i : '规格型号',
              "ZKPJE": '5000',
              "ZTAX": '0.1',
            },
            {
              "ZNAME": type == '02' ? 'OTA' : (type == '03' ? '极氪001' : ''), //IV_TYPE =02 OTA. IV_TYPE =03 极氪001
              "ZTYPE": type == '03' ? 'vin' + i : '规格型号',
              "ZKPJE": '6000',
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
        "Action": '02', //01开票，02 红冲
        "OrderKey": this.newGuid(),
        "InvoiceType": '01', //01电子普票，02电专,04纸质普票,
        "OrderNumber": '202109091000120302',
        "BuyerName": '李大哥',
        "BuyerTaxNumber": '644493049812444587',
        "BuyerBankName": '工商银行',
        "BuyerBankAccount": '622299990987778653299',
        "BuyerAddress": '成都来福士广场',
        "BuyerPhoneNo": '13888889999',
        "BuyerEmail": 'zhouxingchi@pwc.com',
        "OrgCode": '3368',

        "IsNeedSend": '是',
        "ReceiverName": '老王',
        "ReceiverPhone": '老王电话',
        "ReceiverAddress": '老王地址',
        "Remark": '备注',
        "OldInvoiceCode": '1137198351',
        "OldInvoiceNumber": '60907407',
        "Items": [
          {
            "ProductName": 'OTA',
            "Specification": '规格型号',
            "Amount": '10000', //含税
            "TaxRate": '0.13',
            "Unit": '个',
            "Quantity": '1'
          },
          //         {
          // "ProductName": '即可',
          //           "Specification": '规格型号',
          //           "Amount": '20000',
          //           "TaxRate": '0.13',
          //           "Unit": '个',
          //           "Quantity": '1'
          //         },
          {

            "ProductName": "甜点",
            "Quantity": 4,

            "Unit": '个',
            "Specification": '规格型号',
            "TaxRate": '0.06',
            "Amount": 400
          },
          {

            "ProductName": "饮品",
            "Quantity": 1,

            "Unit": '个',
            "Specification": '规格型号',
            "TaxRate": '0.06',
            "Amount": 200
          },
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

    queryAPiResult (done) {

      let arr = {
        OrderKeyList:
          [{ "OrderKey": this.param.orderKey }]
      };

      queryVatInvoiceList(arr).then((res) => {
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

    },
    timeout (ms) {
      return new Promise((resolve, reject) => {
        console.log('enter promise');
        setTimeout(resolve, ms, 'done');
      });
    },
    promiseTest () {
      this.timeout(1000).then((value) => {
        console.log(value);
      });
      console.log('Hi!');
    },
  },
};
</script>
