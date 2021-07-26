<template>
  <div>
    <el-button @click="openUploadFileModal">上传文件</el-button>
    <el-button @click="uploadCustomerFile">上传商品文件</el-button>
    <el-button @click="uploadProductFile">上传客户文件</el-button>

    <el-button @click="selectOrg">selectOrg</el-button>

    {{search.orgIds}}
    <upload-file-modal :isShowModal.sync="isShowUploadFileModal"
      :className="'Dog'"></upload-file-modal>

    <!-- :value.sync="search.orgIds" -->

    <ck-select-all :value.sync="search.orgIds"
      @change="changeEvent"
      filterable
      multiple
      collapse-tags
      ky="id"
      placeHolder="xxxx"
      label="name"
      style="width: 100%"
      :options="orgArray">
    </ck-select-all>

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
      isShowUploadFileModal: false,
      uploadFileType: '',
      search: {
        orgIds: [],
      },
      orgArray: [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
        { id: 5, name: '5' },
      ]
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
    changeEvent (val) {
      console.log('out changeEvent', val);
    },
    selectOrg () {
      this.search.orgIds = [3, 4, 5]
    },
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