
<template>
  <el-form :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-position="right"
    label-width="150px"
    class="demo-ruleForm">
    <el-form-item label="活动名称"
      prop="name">
      <el-input v-model="ruleForm.name"
        :maxlength="200"
        show-word-limit />
    </el-form-item>

    <el-form-item label="percent"
      prop="percent">
      <el-input v-model="ruleForm.percent"></el-input>
    </el-form-item>

    <el-form-item label="活动区域"
      prop="region">
      <el-select v-model="ruleForm.region"
        placeholder="请选择活动区域"
        clearable>
        <el-option label="区域一"
          value="shanghai"></el-option>
        <el-option label="区域二"
          value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间"
      required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker type="date"
            placeholder="选择日期"
            v-model="ruleForm.date1"
            style="width: 100%"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line"
        :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker type="fixed-time"
            placeholder="选择时间"
            v-model="ruleForm.date2"
            style="width: 100%"></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送"
      prop="delivery">
      <el-switch v-model="ruleForm.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质"
      prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="美食/餐厅线上活动"
          name="type"></el-checkbox>
        <el-checkbox label="地推活动"
          name="type"></el-checkbox>
        <el-checkbox label="线下主题活动"
          name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光"
          name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源"
      prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式"
      prop="desc">
      <el-input type="textarea"
        v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <!-- 
    <org-permission multiple
      :taxNo.sync="taxNo"></org-permission> -->

    <!-- <el-form-item label="子组件税号"
      prop="taxNo">
      <org-permission multiple
        :taxNo.sync="taxNo"></org-permission>
    </el-form-item> -->

    <!-- <child-form ref="childRules"
      :entityModal="ruleForm"> </child-form> -->
    <!-- 
    <el-form-item label="金额组件">
      <ck-number-box :value.sync="amountFrom"></ck-number-box>
    </el-form-item> -->
    <!-- 
    <el-form-item label="金额组件范围">
      <ck-number-box-range :value.sync="amountFrom"></ck-number-box-range>
    </el-form-item> -->

    <el-form-item label="日期组件范围">
      <ck-date-range :dateFrom.sync="ruleForm.dateFrom"
        :dateTo.sync="ruleForm.dateTo"></ck-date-range>
    </el-form-item>

    <el-form-item label="select file"
      style="margin-bottom: 0;"
      prop="fileName"
      ref="fileList">
      <el-upload ref="upload"
        action=""
        :show-file-list="false"
        :http-request="addAttachment"
        :file-list="ruleForm.fileList"
        :auto-upload="false"
        :on-change="fileChangeEvent"
        width="100%">

        <el-input placeholder="select file"
          v-model="ruleForm.fileName"
          :readonly="true"
          v-on:click.prevent="searchEnterFun">
          <template slot="append"
            style="height:36px">
            <el-button slot="trigger"
              size="small">
              浏览
            </el-button>
          </template>
        </el-input>

      </el-upload>
    </el-form-item>
    <el-row style="margin-top:30px">
      <el-col>
        <el-form-item>
          <el-button type="primary"
            @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>

import orgPermission from "../component/org-permission";
import childForm from "../component/child-form";

export default {
  components: {

    orgPermission,
    childForm
  },
  data () {
    return {

      ruleForm: {
        name: "",
        percent: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        taxNo: null,
        childName: null,
        amountFrom: null,
        fileList: [],
        fileName: '',
        dateFrom: '',
        dateTo: '',
      },
      rules: {
        percent: [
          {
            required: true,
            message: "请输入百分数",
            trigger: "blur",
          },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
        fileName: [
          {
            required: true,
            message: "请至少选择一个文件",
            trigger: "change",
          },
        ],
      },
    };
  },
  mounted () {
    var defaultJsonStr = '{"dataGridColumn":[{"dataField":"invoiceCode","index":10},{"dataField":"invoiceNumber","index":202},{"dataField":"status","index":30},{"dataField":"verifyStatus","index":40},{"dataField":"period","index":50},{"dataField":"invoiceType","index":60},{"dataField":"invoiceEntityType","index":70},{"dataField":"sellerName","index":80},{"dataField":"sellerTaxNumber","index":90},{"dataField":"buyerName","index":100},{"dataField":"buyerTaxNumber","index":110},{"dataField":"amount","index":120},{"dataField":"taxAmount","index":130},{"dataField":"totalPrice","index":140},{"dataField":"invoiceDate","index":150},{"dataField":"checkCode","index":160},{"dataField":"ponumber","index":170},{"dataField":"expenseAccountNo","index":180},{"dataField":"voucherNumber","index":190},{"dataField":"productType","index":200},{"dataField":"uploadType","index":210},{"dataField":"updateUserName","index":220},{"dataField":"updateTime","index":230}]}';
    var defaultJson = JSON.parse(defaultJsonStr);
    var overJsonStr = '{"dataGridColumn":[{"dataField":"invoiceCode","index":10,"hidden":true},{"dataField":"purchaseBy","index":300},{"dataField":"purchaseContent","index":301}]}';
    var overviewJson = JSON.parse(overJsonStr);
    console.log(overviewJson);
    //合并

    var defaultColumns = defaultJson.dataGridColumn;
    var viewColumns = overviewJson.dataGridColumn;

    var valid = this.getConfigValue(defaultColumns, viewColumns, 'dataField');

    console.log('mergeJson', valid);

    debugger;
  },
  methods: {
    getConfigValue (defaultColumns, customColumns, fieldKey) {

      var targetCols = [];

      //如果有默认值
      if (defaultColumns && defaultColumns.length > 0) {
        for (let i = 0; i < defaultColumns.length; i++) {
          var col = defaultColumns[i];

          var hasFind = this.$_.find(customColumns, (item) => {
            return item[fieldKey] == col[fieldKey];
          });
          if (hasFind) {
            var obj = {};
            Object.assign(obj, col, hasFind);
            targetCols.push(obj);
          }
          else {
            targetCols.push(col);
          }
        }
      }

      for (let i = 0; i < customColumns.length; i++) {
        var col = customColumns[i];
        var hasFind = this.$_.find(targetCols, (item) => {
          return item[fieldKey] == col[fieldKey];
        });
        if (!hasFind) {
          targetCols.push(col);
        }
      }

      targetCols = this.$_.sortBy(targetCols, (item) => {
        return item.index;
      })

      for (let i = 0; i < targetCols.length; i++) {
        if (targetCols[i].hidden) {
          targetCols[i].visible = false;
        }
        else {
          targetCols[i].visible = true;
        }
      }

      return targetCols;

    },
    searchEnterFun () {
      return false;
    },
    submitForm (formName) {
      console.log(this.ruleForm);
      return;
      let fileList = this.$refs.upload.$children[0].fileList;
      if (fileList.length > 0) {
        console.log('fileList', fileList);
      }
      else {
        alert("please select file!");
      }
      let flag = this.$refs['childRules'].validateForm();
      // if (!flag) {
      //   return false;
      // }

      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
      this.$refs['childRules'].resetForm();
    },
    addAttachment (file) {
      this.formData.append("file", file.file);
      this.formData.append("files", file.file);
    },
    fileChangeEvent (file, fileList) {
      //let fileType = file.raw.type;
      // console.log('fileChangeEvent', file);
      // let result = this.validateFile(file);
      // if (!result) {
      //   return false;
      // }


      if (file) {
        this.ruleForm.fileName = file.name;
        this.$refs.ruleForm.clearValidate("fileList");
      }

      else {
        this.ruleForm.fileName = null;

        //this.$refs.uploadRef.validateField()
      }

    },
  },
};
</script>