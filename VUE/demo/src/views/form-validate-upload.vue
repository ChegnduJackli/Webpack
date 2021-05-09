
<template>
  <el-form :model="ruleForm"
    :rules="getRules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm">
    <el-form-item label="活动名称"
      prop="name">
      <el-input v-model="ruleForm.name"
        :maxlength="200"
        show-word-limit></el-input>
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

    <!-- 多选 -->
    <el-form-item label="select file"
      style="margin-bottom: 0;"
      v-if="multipleFile"
      prop="fileList"
      ref="uploadRef">
      <el-upload ref="upload"
        drag
        multiple
        action=""
        :http-request="addAttachment"
        :before-upload="onBeforeUpload"
        :on-remove="remove"
        :file-list="fileList"
        :auto-upload="false"
        :show-file-list="false"
        :on-change="fileChangeEvent"
        width="100%">
        <i class="el-icon-upload" />
        <div class="el-upload__text">select file</div>

      </el-upload>

      <ul>
        <li v-for="file in fileList">
          <div style="display:flex">
            {{file.name}}
            <div style="margin-left:auto;margin-right:20px">

              <span style="color:red"
                @click="deleteFile(file)">X </span>

            </div>
          </div>
        </li>
      </ul>
      <!-- <el-input placeholder="select file"
        v-model="ruleForm.fileName"
        v-show="false" /> -->

    </el-form-item>

    <!-- 单选 -->
    <el-form-item label="select file"
      v-if="!multipleFile"
      style="margin-bottom: 0;"
      prop="fileName"
      ref="fileList">
      <el-upload ref="upload"
        action=""
        :show-file-list="false"
        :before-upload="onBeforeUpload"
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

export default {
  components: {

    orgPermission,

  },
  data () {
    return {
      multipleFile: true,
      formData: new FormData(),
      fileList: [{ name: '111' }, { name: '222' }],
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

        fileName: '',
      },
    }
  },
  watch: {
    fileList: {
      handler (oldval, newVal) {
        console.log('fileList', newVal);
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    // fileListListener () {
    //   return this.$refs.upload.$children[0].fileList;
    // },
    getRules () {
      return {
        name: [
          {
            required: true,
            message: 'inputName',
            trigger: "change",
            validator: (rule, value, callback) => {
              if (!value || value.length == 0) {
                return callback(
                  new Error(rule.message)
                );
              }
              else {
                console.log(value);
                callback();
              }
            }
          }
        ],
        region: [
          {
            required: true, message: "请选择活动区域",
            trigger: "change",
            validator: (rule, value, callback) => {
              if (!value || value.length == 0) {
                return callback(
                  new Error(rule.message)
                );
              }
              else {
                console.log(value);
                callback();
              }
            }
          },
        ],
        //单选文件的时候
        // fileName: [
        //   {
        //     required: true,// !this.multipleFile,
        //     message: 'please select file',
        //     trigger: "change",
        //   }
        // ],
        //文件选中的时候，这个value总是为空，不知道为啥
        fileList: [
          {
            required: this.multipleFile,
            // message: 'please select at lease  file',
            trigger: "change",
            validator: (rule, value, callback) => {
              if (!value || value.length == 0) {
                return callback(
                  new Error('select file')
                );
              }
              else {
                console.log(value);
                callback();
              }
            },

          }
        ]

      }
    }
  },

  methods: {
    searchEnterFun () {
      return false;
    },
    submitForm (formName) {

      this.formData = new FormData();
      let fileList = this.$refs.upload.$children[0].fileList;
      if (fileList.length > 0) {
        console.log('fileList', fileList);
      }
      else {
        console.log("please select file!");
      }

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
    //:auto-upload="true"才会触发
    onBeforeUpload (file) {
      console.log('onBeforeUpload');
    },
    deleteFile (file) {
      let dl = this.fileList.indexOf(file);
      this.fileList.splice(dl, 1);
      if (this.fileList == 0) {
        this.$refs.ruleForm.validateField("fileList");
      }
    },
    remove (file, fileList) {
      if (fileList.length == 0) {
        this.ruleForm.fileName = null;
        this.fileList = [];
      }
      else {
        let dl = this.fileList.indexOf(file);
        this.fileList.splice(dl, 1);
      }
    },

    validateFile (file) {
      try {
        let allowSize = 3;
        let accept = ".pdf";
        const fileSize = file.size / 1024 / 1024; //多少MB

        //验证文件格式
        let fileExt = file.name.substring(file.name.lastIndexOf(".")); //.xlsx

        if (accept.lastIndexOf(fileExt.toLowerCase()) < 0) {
          // let errorMsg = this.$t('common.uploadFile.FileFormatError').parseExpr(this.optionConfig.maximumSizeStr);
          // this.$mb.error(errorMsg);
          return false;
        }

        //验证文件大小
        if (fileSize > allowSize) {
          // let errorMsg = this.$t('common.uploadFile.FileOverMaxSize').parseExpr(this.optionConfig.maximumSizeStr);
          // this.$mb.error(errorMsg);
          return false;
        }
      }
      catch (e) {
        console.error(e);
      }
      return true;
    },

    fileChangeEvent (file, fileList) {
      //let fileType = file.raw.type;
      // console.log('fileChangeEvent', file);
      // let result = this.validateFile(file);
      // if (!result) {
      //   return false;
      // }
      let result = this.validateFile(file);
      if (!result) {
        console.error('文件不合法');
        return false;
      }

      if (file) {
        this.ruleForm.fileName = file.name;
        this.$refs.ruleForm.clearValidate("fileList");
      }

      else {
        this.ruleForm.fileName = null;

        // this.$refs.uploadRef.validateField()
      }
      // console.log(fileList);

      this.fileList.push(file);
      // this.$refs.ruleForm.validateField("fileList");
    },
  },
};
</script>