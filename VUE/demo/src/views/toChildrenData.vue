<template>
  <div class=""
    style="margin: 30px ;border: 1px solid #0000ff">
    <span style="font-size: 20px;">子组件对象修改区域：</span>
    <div>父组件传过来的对象值【toChildrenObj】：{{myObj}}</div>

    <el-form ref="form"
      :model="myObj"
      label-width="80px">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="活动名称">
            <el-input v-model="myObj.name"></el-input>
          </el-form-item>
          <el-form-item label="firstName">
            <el-input v-model="myObj.firstName"></el-input>
          </el-form-item>
          <el-form-item label="lastName">
            <el-input v-model="myObj.lastName"></el-input>
          </el-form-item>
          <el-form-item label="日期">
            <el-date-picker v-model="myObj.birthDate"
              format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">

          <el-form-item label="sex">
            <el-input v-model="myObj.sex"></el-input>
          </el-form-item>
          <el-form-item label="isYes">
            <el-select v-model="myObj.isGood"
              @change="changedEvent">
              <el-option v-for="item in yesNoArray"
                :value="item.id"
                :label="item.name"
                :key="item.id">{{item.name }}
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="优先级">
            <el-select v-model="myObj.priority"
              @change="changedEvent">
              <el-option v-for="item in priorityArray"
                :value="item.id"
                :label="item.name"
                :key="item.id">{{item.name }}
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发生次数">
            <el-select v-model="myObj.happenTimeValue"
              @change="changedEvent">
              <el-option v-for="item in happenTimeArray"
                :value="item.id"
                :label="item.name"
                :key="item.id">{{item.name }}
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>

    <el-button @click="submit">sbumit</el-button>

    <span style="font-size: 2px;">子组件数组修改区域：</span>
    <el-button @click="addToArray">添加数组</el-button>
    <div>
      <li v-for="item in dataSource"
        :key="item.id">{{ item.id }} + {{ item.name }} + {{ item.age }}
        <el-button @click=deleteItem(item)>删除</el-button>
      </li>
    </div>
  </div>
</template>
<style lang="scss" >
.el-select,
.el-date-editor,
.el-input {
  width: 100% !important;
}
</style>

<script>
export default {

  props: {
    myObj: {
      type: Object,
      default () {
        return {}
      }
    },
    // toChildrenArray: {
    dataSource: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    //console.log('this.entityModel', this.entityModel);
    return {
      // dataSource: this.toChildrenArray,
      yesNoArray: [],
      priorityArray: [],
      //  myObj: this.entityModel,
      happenTimeArray: [],

    }
  },
  created () {
    //this.init();
    var YesOrNo = {
      Yes: { id: 1, name: "是" }, No: { id: 0, name: "否" },
    };

    this.yesNoArray = this.$ck.objectToArray(YesOrNo);
    this.priorityArray = [
      { id: 1, name: "高" },
      { id: 2, name: "中" },
      { id: 3, name: "低" },
    ];
    this.happenTimeArray = [
      { id: 1, name: "单次" },
      { id: 2, name: "自定义" },
      { id: 3, name: "按周" },
      { id: 4, name: "按月" },
      { id: 5, name: "按年" },
    ];
    //这种赋值不对，页面会卡，不能修改
    //this.myObj.sex = 'xx';
    // this.$set(this.myObj, 'sex', 'm')
  },
  watch: {
    //toChildrenArray: {
    dataSource: {
      handler (val) {
        //this.dataSource = val || [];
        console.log('this child dataSource array', this.dataSource);
        //console.log(this.dataSource === this.toChildrenArray);
      },

      //最初绑定的时候也执行，默认是在修改后才会执行的
      immediate: true,
      deep: true
    },

    //对象会双向赋值，不用watch也行
    // myObj: {
    //   handler (val) {
    //     console.log('child entityModel', val);
    //     this.myObj = val;// this.$_.cloneDeep(val);赋值了就不会影响父级了
    //   },

    //   //最初绑定的时候也执行，默认是在修改后才会执行的
    //   immediate: true,
    //   deep: true
    // },

    // toChildrenArray (val) {
    //   if (val != null) {
    //     //debugger;
    //     console.log('watch child toChildrenArray', val);
    //     //this.dataSource = this.toChildrenArray || [];
    //   }

    // },


  },

  methods: {
    changedEvent (val) {
      console.log('changedEvent val', val);

      // this.entityModel.isGood = val;
    },
    submit () {
      console.log('this.entityModel', this.myObj);
    },
    addToArray () {
      let maxItem = this.$_.maxBy(this.toChildrenArray, 'id');
      maxItem = maxItem || { id: 0 }
      this.dataSource.push({ id: maxItem.id + 1, name: 'xx', age: 20 });
    },
    deleteItem (item) {
      //   this.dataSource = this.$_.filter(this.dataSource, function (num) {
      //     return num.id !== item.id;
      //   })

      this.dataSource.splice(this.dataSource.indexOf(item), 1);

      //下面姿势不妥，改变了引用地址，所以不会异步更新父级
      // this.dataSource = this.$_.filter(this.dataSource, function (num) {
      //   return num.id !== item.id;
      // })

      //   this.$$emit('update:toChildrenArray', this.toChildrenArray)

    },
  }
}
</script>
