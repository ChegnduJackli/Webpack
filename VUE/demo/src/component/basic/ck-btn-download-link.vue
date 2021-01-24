<template>
  <el-link class="ck-download-icon-btn" @click="handleClick()" icon="el-icon-download" v-bind="$attrs" :loading="loadingStatus">
    <slot></slot>
  </el-link>

</template>

<style scoped>
</style>

<script>
export default {
  name: "DownloadButtonIcon",
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
