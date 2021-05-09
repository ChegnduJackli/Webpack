<template>
  <div class="form-content">
    <el-form :model="entityModal"
      :inline="true"
      :rules="formRules"
      ref="ruleForm"
      size='mini'
      label-width="120px"
      class="form-mini">
      <el-form-item label="子组件名字"
        prop='childName'>
        <el-input v-model="entityModal.childName"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script> 
export default {
  name: '',
  props: {
    entityModal: {
      type: Object,
      default: function () {
        return {
        }
      }
    }
  },
  data () {
    //这里存放数据
    return {
      formRules: {
        childName: [{
          required: true,
          message: '请输入子组件名称',
          trigger: 'blur'
        }]
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //过滤器
  filters: {},
  //方法集合
  methods: {
    //子组件校验，传递到父组件
    validateForm () {
      let flag = null;
      debugger;
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          flag = true
        } else {
          flag = false
        }
      })
      return flag
    },
    resetForm () {
      this.$refs['ruleForm'].resetFields();
    }
  }
}

</script>

