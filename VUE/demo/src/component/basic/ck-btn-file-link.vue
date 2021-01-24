<template>
  <!-- <el-button class="ck-file-icon-btn" @click="handleClick" v-bind="$attrs" :loading="loadingStatus">
    <slot></slot>
  </el-button> -->

  <el-link class="ck-file-icon-btn" @click="handleClick()" icon="el-icon-files" v-bind="$attrs" :loading="loadingStatus">
    <slot></slot>
  </el-link>

</template>

<style scoped>
</style>

<script>
export default {
  name: "FileIconButton",
  props: {
    autoLoading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      loadingStatus: false
    };
  },
  methods: {
    handleClick() {
      if (this.autoLoading) {
        this.loadingStatus = true
      }
      this.$emit('click', () => {
        this.loadingStatus = false
      })
    },

  }
};
</script>
