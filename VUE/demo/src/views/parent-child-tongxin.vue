<template>
  <div>

    <div style="width: 100%;;border: 1px solid red;">
      <b>总结：对象(或数组)在组件传递会双向赋值,数组删除用splice</b> <br>
      <br>
      <span style="font-size: 20px;">父组件区域：</span>
      <div>传给子组件对象的值【toChildrenObj】：{{toChildrenObj}}</div>
      <div>传给子组件数组的值【toChildrenArray】：{{toChildrenArray}}</div>
      <div>
        <el-button @click="addToArray">添加数组</el-button>
        <el-button @click="deleteArray">删除数组</el-button>
        <el-button @click="rollbakData">恢复</el-button>
      </div>
      <el-form ref="form"
        :model="toChildrenObj"
        label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="toChildrenObj.name"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <children :myObj="toChildrenObj"
          :dataSource="toChildrenArray"></children>
      </div>

      <div>
        xx
        <Quarter @change="changeQStart($event)"
          :choseQuarterVal="periodStartQuarter">
        </Quarter>
        <span id="vccqcq-s44">-</span>
        <Quarter @change="changeQEnd($event)"
          :choseQuarterVal="periodEndQuarter">
        </Quarter>

      </div>
    </div>

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

//import OrgChart from '../utils/orgchart.js';
import children from "./toChildrenData.vue";


import Quarter from "../component/Quarter";


let defaultModel = function () {
  return {
    name: '李四',
    age: 22,
    isGood: 1,
    sex: 'M',
    priority: 2,
  }

};

export default {
  components: {
    "children": children,
    Quarter
  },
  data () {
    return {
      dialogVisible2: false,
      gridData: customer,
      dto: {
        value2: ''
      },
      periodStartQuarter: '',
      periodEndQuarter: '',
      toChildrenObj: {},
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
      ],
      globalQ: 5,
      tempObj: { name: 'jack' },

    };
  },
  watch: {
    // toChildrenObj: {
    //   handler (val) {
    //     console.log('parent val', val)
    //   },
    //   immediate: true,
    //   deep: true
    // },
    toChildrenArray (val) {
      if (val != null) {
        //debugger;
        console.log('watch parent toChildrenArray', val);
        //this.dataSource = this.toChildrenArray || [];
      }

    },
  },
  created () {
    // this.init();
    console.log(' _this.toChildrenObj created', this.toChildrenObj);
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

    // this.$nextTick(() => {
    //   this.refreshChart3();
    // })

  }
  ,
  methods: {
    changeQStart (val) {
      this.periodStartQuarter = val.data;
      this.refreshChart3();
    },
    refreshChart3 () {
      let quarters = this.globalQ;
      this.globalQ++;
      if (quarters > 4) {
        // debugger
        this.$mb.warning("选择区间超过4个季度,请重新选择")
        this.periodStartQuarter = "2020-Q" + quarters + 1;
        this.periodEndQuarter = "2020-Q" + quarters + 2;
        return;
      }
    },

    changeQEnd (val) {
      this.periodEndQuarter = val.data;
      this.refreshChart3();
    },

    refreshDataEvent (searchText) {
      console.log('refreshDataEvent called', searchText);
    },
    addToArray () {
      let maxItem = this.$_.maxBy(this.toChildrenArray, 'id');
      maxItem = maxItem || { id: 0 }
      this.toChildrenArray.push({ id: maxItem.id + 1, name: 'xx', age: 20 });
      console.log('this.toChildrenArray', this.toChildrenArray);

    },
    deleteArray () {
      // this.toChildrenArray.length = 0;
      //下面三种都会生效
      //this.toChildrenArray.splice(0, 1);
      // this.toChildrenArray = [];
      // this.toChildrenArray = this.$_.filter(this.toChildrenArray, function (num) {
      //   return num.id === 3;
      // });
      this.toChildrenArray = [{ name: 'xx' }]
      console.log('this.toChildrenArray', this.toChildrenArray);
    },
    rollbakData () {
      this.toChildrenObj = this.$_.cloneDeep(defaultModel());
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

    initPromise () {
      let _this = this;
      return new Promise(function (resolve, reject) {
        console.log('start ');
        setTimeout(function () {
          // resolve(2);
          console.log('resolve');
          let extObj = {
            calendarDateValue: 1614848052353,
            dateFromValue: 1614848052361,
            dateToValue: 1614848052361,
            // day: { dayCheckValue1: true, dayCheckValue2: false, intervalDayValue: 1 },
            happenTimeValue: 1
          };

          _this.toChildrenObj = Object.assign({}, _this.toChildrenObj, defaultModel(), extObj);
          //firstName不是响应式
          //last name是响应式
          _this.toChildrenObj.firstName = 'firstname';
          _this.$set(_this.toChildrenObj, 'lastName', 'lastName')
          //下面这2句话both不会响应，页面不会生效，无法选中
          //Object.assign(_this.toChildrenObj, defaultModel(), extObj);
          // _this.toChildrenObj = Object.assign(_this.toChildrenObj, defaultModel(), extObj);
          console.log(' _this.toChildrenObj', _this.toChildrenObj);
          //_this.toChildrenObj = defaultModel();
          resolve(_this.toChildrenObj);
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

      //2这种对象转换为数组的方法
      let t2 = this.$_.map(YesOrNo, (item) => item);

      var t = this.$ck.objectToArray(YesOrNo);
      console.log("t", t);
      console.log("t2", t2);
      // this.initTree();
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
      return new Promise((resolve, reject) => {
        console.log("exec in promise");
        setTimeout(() => {
          console.log("parent timeout");
        }, 2000);
      }).finally(
        resolve('parent finished')
      );
      // console.log("outside confirm");
      // this.OnClose();
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
  },
};
</script>