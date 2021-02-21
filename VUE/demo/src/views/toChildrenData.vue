<template>
  <div class=""
    style="width: 100%;margin: 30px ;border: 1px solid #0000ff">
    <span style="font-size: 20px;">子组件对象修改区域：</span>
    <div>父组件传过来的对象值【toChildrenObj】：{{myObj}}</div>

    <el-form ref="form"
      :model="myObj"
      label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="myObj.name"></el-input>
      </el-form-item>

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
<script>
export default {

  props: {
    toChildrenObj: {
      type: Object,
      default () {
        return {}
      }
    },
    toChildrenArray: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      dataSource: this.toChildrenArray,
      yesNoArray: [],
      priorityArray: [],
      myObj: this.toChildrenObj
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
  },
  watch: {
    toChildrenArray: {
      handler (val) {
        this.dataSource = val || [];
        console.log(this.dataSource === this.toChildrenArray);
      },

      //最初绑定的时候也执行，默认是在修改后才会执行的
      immediate: true,
      deep: true
    },

    // toChildrenObj: {
    //   handler (val) {
    //     this.myObj = val || [];
    //   },

    //   //最初绑定的时候也执行，默认是在修改后才会执行的
    //   // immediate: true,
    //   deep: true
    // },

    // toChildrenArray (val) {
    //   if (val != null) {
    //     debugger;
    //     console.log('watch toChildrenArray', val);
    //     this.dataSource = this.toChildrenArray || [];
    //   }

    // },


  },

  methods: {
    changedEvent (val) {
      console.log('changedEvent val', val);

      // this.toChildrenObj.isGood = val;
    },
    submit () {
      console.log('this.toChildrenObj', this.myObj);
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
      this.dataSource.splice(this.toChildrenArray.indexOf(item), 1);

      //下面姿势不妥，改变了引用地址，所以不会异步更新父级
      //   this.dataSource = this.$_.filter(this.dataSource, function (num) {
      //     return num.id !== item.id;
      //   })

      //   this.$$emit('update:toChildrenArray', this.toChildrenArray)

    },
  }
}
</script>
