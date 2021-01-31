<template>
  <div>
    <div class="box">
      <div class="title">el-row</div>
      <div class="content" style="height:200px">
        <el-scrollbar wrap-style="overflow-x: hidden;" style="height: 100%">
          <div class="kill-row-margin">
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
          </div>
        </el-scrollbar>
      </div>
    </div>
    <div class="box">
      <div class="title">el-row 2</div>
      <div class="content">
        <el-select v-model="dto.value" placeholder="请选择" @change="changeEvent">
          <el-option v-for="item in tableData" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>

        <el-select v-model="dto.value2" placeholder="请选择">
          <el-option v-for="item in tableData" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>

      </div>
    </div>
    <div class="box">
      <div class="title">radio button</div>
      <div class="content">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2" :disabled="isDisabled">disable备选项</el-radio>
      </div>
    </div>
    <div class="box">
      <div class="title">checkbox button</div>
      <div class="content">
        <el-checkbox-group v-model="checkedCities" @change="checkboxChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city.id">
            {{city.value}}
          </el-checkbox>
        </el-checkbox-group>
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

export default {
  name: "element-table-demo",
  components: {
    "element-table": elementTable,
  },
  data () {
    return {
      checkList: ['选中且禁用', '复选框 A'],
      msg: "jack",
      isOpenMoal: false,

      cities: [{ id: 1, value: '上海' }, { id: 2, value: '北京' }, { id: 3, value: '广州' }],
      checkedCities: [],
      value: '',
      value2: '',
      radio: '1',
      isDisabled: false,
      dto: {
        value: '',
        value2: '',
      },
      tableData: [
        {
          id: "1",
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: "2",
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: "3",
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          id: "4",
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  created () {
    this.init();
  },
  methods: {
    changeEvent (val) {
      console.log('val', val);
      this.dto.value2 = "";
    },
    checkboxChange (val) {
      //console.log('checkboxChange', val);
      console.log('this.checkedCities', this.checkedCities)
      var mapId = this.checkedCities.map(s => s.id)
      console.log('mapid', mapId);
    },
    init () {
      var selectId = 1;
      var findObj = this.cities.find(s => s.id == selectId);
      console.log('findObj', findObj);
      if (findObj) {
        this.checkedCities = [findObj]
      }
    },
  },
};
</script>
