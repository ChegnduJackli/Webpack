<template>
  <el-dialog :title="ModalTitle"
    :visible="isShowModal"
    :before-close="handleClose"
    :close-on-click-modal="false"
    @open="beforeOpen"
    custom-class="dialog-ck gudong-dialog gudong-112"
    :append-to-body="true">

    <el-upload class="upload-demo"
      drag
      multiple
      ref="upload"
      action
      :auto-upload="false"
      :http-request="addAttachment">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        <!-- {{ $t("common.dragFileToHere") }}，{{ $t("common.or") }}
        <em>{{ $t("common.clickToUpload") }}</em> -->
      </div>
      <div class="el-upload__tip"
        slot="tip">
        只能上传excel,文件
      </div>
    </el-upload>

    <span slot="footer"
      class="dialog-footer">

      <ck-btn @click="handleClose">
        取消
      </ck-btn>
      <ck-btn type="primary"
        :auto-loading="true"
        @click="saveData($event, 'orgForm')">
        上传
      </ck-btn>
    </span>
  </el-dialog>
</template>

<style lang="scss" scoped>
.content {
  width: 80%;
}
//控制子层的样式
</style>

<script>


class Animal {
  constructor() {
    // ...

  }

  toString () {
    // ...
    console.log('this.type', this.type)
  }

  toValue () {
    // ...
    console.log('tovalue');
  }
}

class Dog extends Animal {
  constructor() {
    super();
    // ...


  }
}

let AnimalClass = {
  Animal,
  Dog
};


class DynamicClass {
  constructor(className) {
    return new AnimalClass[className];
  }
}




export default {
  name: "fileDownloadUpload",
  //props: ['title'],
  //每个 prop 都有指定的值类型
  props: {
    isShowModal: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
    }
  },
  data () {
    return {
      msg: "base button",
      ModalTitle: '文件上传',
      entityModal: {
        orgID: null,
      },

      orgList: [{ name: '1', value: '1', id: '1' },
      { name: '2', value: '2', id: '2' }],

    };
  },
  components: {

  },
  methods: {
    addAttachment () { },
    uploadFactory () {

    },
    createInstance () {
      var instance = new DynamicClass(this.className);
      instance.toString();
    },
    beforeOpen () {
      console.log('className', this.className);
      this.createInstance();
    },
    handleClose () {
      this.$emit('update:isShowModal', false);

    },
    saveData (done) {
      setTimeout(() => {
        done();
        this.handleClose();
      }, 2000)
    }
  },
};
</script>
