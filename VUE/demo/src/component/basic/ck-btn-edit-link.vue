<template>
  <el-link class="ck-edit-icon-btn" @click="handleClick()" icon="el-icon-edit" v-bind="$attrs" :loading="loadingStatus">
    <slot></slot>
  </el-link>

</template>

<style scoped>
</style>

<script>
export default {
  name: "EditButtonIcon",
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
