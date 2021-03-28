<template>
  <div>
    <el-button @click="openUploadFileModal">上传文件</el-button>
    <el-button @click="uploadCustomerFile">上传商品文件</el-button>
    <el-button @click="uploadProductFile">上传客户文件</el-button>

    <upload-file-modal :isShowModal.sync="isShowUploadFileModal"
      :className="'Dog'"></upload-file-modal>
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
</style>
<script>


import uploadFileModal from "../component/file-upload-download";

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
    "upload-file-modal": uploadFileModal,
  },
  data () {
    return {
      isShowUploadFileModal: true,
      uploadFileType: '',
    };
  },
  watch: {
    // toChildrenObj: {
    //   handler (val) {
    //     console.log('parent val', val)
    //   },
    //   immediate: true,
    //   deep: true
    // }
  },
  created () {


  },
  mounted () {
    //(this.$refs.tree, this.nodes)
  }
  ,
  methods: {
    openUploadFileModal () {
      this.isShowUploadFileModal = true;
    },
    uploadCustomerFile () {
      this.uploadFileType = "Animal";
      this.openUploadFileModal();
      // var p = new DynamicClass('Animal', 'animal');
      // p.toString();
    },
    uploadProductFile () {
      this.uploadFileType = "Dog";

      this.openUploadFileModal();
    }
  },
};
</script>