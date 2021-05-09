<template>
  <div style="width:100%;">

    <el-select v-model="entityModal.orgId"
      @change="changeListEvent"
      clearable
      filterable
      :multiple="isMultpile">
      <el-option v-for="item in orgList"
        :key="item.id"
        :label="item.name"
        :value="item.id" />
    </el-select>

    <!-- 
    <el-select v-model="entityModal.orgIdList"
      @change="changeListEvent"
      v-if="isMultpile"
      clearable
      filterable
      multiple
      :placeholder="$t('common.pleaseSelect')">
      <el-option v-for="item in orgList"
        :key="item.id"
        :label="item.name"
        :value="item.id" />
    </el-select> -->
  </div>
</template>

<style lang="scss" scoped>
.el-input,
.el-select,
.el-input-number,
.el-date-editor.el-input {
  width: 100%;
}

//控制子层的样式
</style>

<script>



//支持单个和多个
//单个传递属性taxNo or orgId, or orgInfo
//多个属性传递带List的，如taxNoList
export default {
  name: "accessOrgList",
  props: {
    taxNo: {
      // type: [String, Array],
      require: false,
    },
    orgId: {
      // type: [Number, Array],
      require: false,
    },

    orgInfo: {
      //  type: [Object, Array],
      require: false,
    },

    // taxNoList: {
    //   type: Array,
    //   default: () => [],
    // },

    // orgIdList: {
    //   type: Array,
    //   default: () => [],
    // },

    // orgInfoList: {
    //   type: Array,
    //   default: () => [],
    // },

    permissionCode: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false
    },
    //如果只有一个元素默认选中第一个
    selectFirst: {
      type: Boolean,
      default: false
    }

  },

  data () {
    return {
      entityModal: {
        orgId: null,
        orgIdList: null,
      },
      orgList: [],
      formRules: {
        name: [{
          required: true,
          message: '请输入',
          trigger: 'blur'
        }]
      },

    };
  },
  components: {

  },
  watch: {
    listenChange: {
      handler (val) {
        if ((!val.orgId || val.orgId.length === 0)
          && (!val.taxNo || val.taxNo.length === 0)) {
          this.reset();

        }
      },
      //   //最初绑定的时候也执行，默认是在修改后才会执行的
      //   immediate: true,
      //   deep: true
    }
  },
  computed: {
    isMultpile () {
      return this.multiple;
    },
    listenChange () {
      const obj = {};
      obj.orgId = this.orgId;
      // obj.orgIdList = this.orgIdList;
      obj.taxNo = this.taxNo;
      //obj.taxNoList = this.taxNoList;
      return obj;

    }

  },
  mounted () {
    this.initData();
    //console.log('this.this.permissionCode', this.permissionCode);
  },
  methods: {
    getAllActiveOrgList () {

      this.orgList = [{ id: 1, name: 'aa' }, { id: 2, name: 'bb' }]


    },

    reset () {
      //this.entityModal.orgIdList = [];
      this.entityModal.orgId = null;
    },
    //单个下拉
    changeEvent (val) {
      // console.log('val list', val);
      let findOrg = this.$_.find(this.orgList, (item) => {
        return val === item.id;
      });
      if (findOrg) {
        this.$emit('update:orgId', findOrg.id);
        this.$emit('update:orgInfo', findOrg);
        this.$emit('update:taxNo', findOrg.taxRegistrationNumber);
      }
    },

    //多个下拉
    changeListEvent (val) {
      //  console.log('val', val);
      if (!this.isMultpile) {
        this.changeEvent(val)
        return;
      }

      let taxNoList = [];
      let orgIdList = [];
      let orgInfoList = [];

      this.$_.each(val, (valItem) => {
        let findOrg = this.$_.find(this.orgList, (item) => {
          return valItem === item.id;
        });

        if (findOrg) {
          taxNoList.push(findOrg.taxRegistrationNumber);
          orgIdList.push(findOrg.id);
          orgInfoList.push(findOrg);
        }

      });

      this.$emit('update:orgId', orgIdList);
      this.$emit('update:orgInfo', orgInfoList);
      this.$emit('update:taxNo', taxNoList);

      //   this.$emit('update:taxNoList', taxNoList);
      //   this.$emit('update:orgIdList', orgIdList);
      //   this.$emit('update:orgInfoList', orgInfoList);

    },
    initData () {
      this.getAllActiveOrgList();
    }
    // //触发父层事件
    // triggerParentEvent (res) {
    //   console.log('this', this);
    //   let _events = this._events;
    //   _events['callBack'] && this.$emit('callBack', res);
    // }
  },
};
</script>
