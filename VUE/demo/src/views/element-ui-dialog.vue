<template>
  <div>
    <el-button type="text"
      @click="dialogVisible2 = true">点击打开 Dialog</el-button>
    <el-button @click="submit">提交</el-button>
    <el-button @click="signature">签名</el-button>

    <div>搜索组件ck-search-box:<ck-search-box @refreshData="refreshDataEvent">
      </ck-search-box>
    </div>

    <ck-dialog :dialogShow.sync="dialogVisible2"
      :showCancel="false"
      :showConfirm="true"
      @cancelEvent="OnClose"
      :confirmEvent="onConfirm">

      <div slot="content"
        style="height:100%">
        <el-scrollbar wrap-style="overflow-x: hidden;"
          style="height: 100%">
          <el-table :data="gridData"
            style="padding:8px">
            <el-table-column property="date"
              label="日期"
              width="150"></el-table-column>
            <el-table-column property="name"
              label="姓名"
              width="200"></el-table-column>
            <el-table-column property="address"
              label="地址"></el-table-column>
          </el-table>

          <div>
            <el-select v-model="dto.value2"
              placeholder="请选择">
              <el-option v-for="item in gridData"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
        </el-scrollbar>
      </div>

      <!-- <template v-slot:footer2>
        <div>
          <h1>Here might be a page title</h1>
          <el-button @click="OnClose">取 消outside</el-button>
          <el-button type="primary" @click="onConfirm">确 定</el-button>
        </div>
      </template> -->

      <!-- <span slot="d-footer" class="dialog-footer">
        <ck-btn type="primary" @click="saveData($event, 'orgForm')" :auto-loading="true">confirm</ck-btn>
        <ck-btn @click="handleClose">cancel</ck-btn>
      </span>  -->
    </ck-dialog>
    <div id="tree"
      ref="tree"></div>

  </div>
</template>

<style lang="scss" >
.container {
  // box-sizing: border-box;
  // width: 100%;
  // height: 60px;
  // margin-bottom: 5px;
  padding: 0 10px; /* 给gutter留padding */
}
.shixiang-dialog {
  height: 60%;
}
.dialog-custom {
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 5vh !important; //先用element ui dialog默认的高度
  margin-bottom: auto; //解决高度80% + 15vh + 50px > 屏幕高度出现外侧滚动条
  .el-dialog__header {
    border-bottom: 1px solid #e5e5e5;
  }

  .el-dialog__footer {
    border-top: 1px solid #e5e5e5;
  }

  .el-dialog__body {
    flex: 1;
    overflow: hidden;
    padding: 16px;
  }
}

@media (max-width: 1199px) {
  .dialog-custom {
    width: 80% !important;
  }
}

@media (max-width: 991px) {
  //<=991的设备 }
  .dialog-custom {
    width: 90% !important;
  }
}
</style>
<script>
import { customer } from "../data/custom";

import OrgChart from '@balkangraph/orgchart.js'
import md5 from 'js-md5';
import CryptoJS from 'crypto-js';
//import OrgChart from '../utils/orgchart.js';
import children from "./toChildrenData.vue";

export default {
  components: {
    "children": children,
  },
  data () {
    return {
      dialogVisible2: false,
      gridData: customer,
      dto: {
        value2: ''
      },
      toChildrenObj: {
        name: '李四',
        age: 22,
        isGood: 1,
      },
      toChildrenArray: [
        // { id: 1, name: 'jack', 'age': 12 },
        // { id: 2, name: 'rose', 'age': 12 }
      ],
      nodes: [
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
      ]

    };
  },
  created () {
    this.init();
    this.initPromise().then((res) => {
      console.log('res2', res);
    }).catch((e) => {
      console.error('er2', e);
      //reject(e);
    })
      .finally(() => {
        console.log('finally 2');
      });
  },
  mounted () {
    //(this.$refs.tree, this.nodes)
  }
  ,
  methods: {
    refreshDataEvent (searchText) {
      console.log('refreshDataEvent called', searchText);
    },
    addToArray () {
      let maxItem = this.$_.maxBy(this.toChildrenArray, 'id');
      maxItem = maxItem || { id: 0 }
      this.toChildrenArray.push({ id: maxItem.id + 1, name: 'xx', age: 20 });
    },
    deleteArray () {
      this.toChildrenArray = this.$_.filter(this.toChildrenArray, function (num) {
        return num.id !== 3;
      })
    },
    test () {

      this.$confirm('用户信息过期，请重新登录', '提示', {
        confirmButtonText: '重登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log('click yes');
      }).catch((e) => {
        //点击取消的时候
        console.log('click cancel');
      });
    },
    submit () {
      this.$mb.success("cc");
    },
    oc: function (domEl, x) {

      this.chart = new OrgChart(domEl, {
        nodes: x,
        nodeBinding: {
          field_0: "name",
          field_1: "title",
          img_0: "img"
        }
      });

    },
    initPromise () {
      return new Promise(function (resolve, reject) {
        console.log('start ');
        setTimeout(function () {
          // resolve(2);
          console.log('resolve');
          //throw new Error('error2');
          reject('xx')
        }, 1000);

      }).catch((e) => {
        console.error('e1', e);
        //reject(e);
      })
        .finally(() => {
          console.log('finally1');
        });
    },

    init () {
      var YesOrNo = {
        Yes: { id: 1, name: "common.yes" }, No: { id: 0, name: "Common.No" },
      };

      var t = this.$ck.objectToArray(YesOrNo);
      console.log("t", t);
      // this.initTree();
    },
    initTree () {
      console.log('OrgChart', OrgChart);
      var chart = new OrgChart(document.getElementById("orgchart"), {
        nodeBinding: {
          field_0: "name"
        },
        nodes: [
          { id: 1, name: "Amber McKenzie" },
          { id: 2, pid: 1, name: "Ava Field" },
          { id: 3, pid: 1, name: "Peter Stevens" }
        ]
      });
    },
    saveData (done, formName) {
      setTimeout(() => {
        this.$message({ type: "info", message: "成功" }); done();
        this.dialogVisible2 = false;
      }, 2000);
    },
    OnClose () {
      console.log("outside close");
      this.dialogVisible2 = false;
    },
    onConfirm () {
      // return new Promise((resolve, reject) => {
      //   console.log("exec in promise");
      //   setTimeout(() => {
      //     console.log("parent timeout");
      //   }, 2000);
      // }).finally(
      //   resolve('parent finished')
      // );
      // console.log("outside confirm");
      this.OnClose();
    },
    handleClose (done) {
      this.dialogVisible2 = false;
      done();
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => { });
    },

    newGuid () {
      function s4 () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      };
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    },
    signature () {
      let config = {
        url: "api/v2/outputMotor/sendSapOrder",
        method: 'post',
        data: {
          'amount': 100,
          'buyerName': 'jack',
          'taxRate': 0.13
        }
      };
      let signature = '';
      let signToStr = '';
      debugger;
      try {
        let param = '';
        param = config.url.split('?')[1];
        param = !!param ? param : '';
        if (config.method.toLowerCase() != 'get') {
          let jsonStr = JSON.stringify(!!config.data ? config.data : {});
          console.log('jsonStr', jsonStr);
          param = param + md5(jsonStr);
        }
        param = config.method.toLowerCase() + '/' + param;
        const uuid = this.newGuid();
        const key = 'apex-fontent';
        const token = 'apex-backend';
        const timeSpan = Date.parse(new Date());

        signToStr = `param=${param}&uuid=${uuid}&timeSpan=${timeSpan}&key=${key}`;

        console.log('signToStr', signToStr);
        signature = `sign=${CryptoJS.HmacSHA256(signToStr, token).toString()}&uuid=${uuid}&timeSpan=${timeSpan}&key=${key}`;

      } catch (e) {
        console.log(e);
      }
      console.log('signature', signature);
      return signature;
    },
  },
};
</script>