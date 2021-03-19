<template>
  <el-dialog :title="ModalTitle"
    :visible="isShowModal"
    :before-close="handleClose"
    :close-on-click-modal="false"
    @open="beforeOpen"
    custom-class="dialog-ck gudong-dialog gudong-112"
    :append-to-body="true">
    上传文件
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
  constructor(type) {
    // ...
    this.type = type;
  }

  toString () {
    // ...
    console.log('this.type', this.type)
  }

  toValue () {
    // ...
    //console.log('tovalue');
  }
}

class Dog extends Animal {
  constructor(type) {
    super(type);
    // ...
    this.type = type;

  }
}

let AnimalClass = {
  Animal,
  Dog
};


class DynamicClass {
  constructor(className, opts) {
    return new AnimalClass[className](opts);
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

    };
  },
  components: {

  },
  methods: {
    uploadFactory(){
      
    },
    createInstance () {
      var instance = new DynamicClass(this.className, 'animal');
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
