<template>
  <el-button class="ck-normal-btn" @click="handleClick" v-bind="$attrs" :loading="loadingStatus">
    <slot></slot>
  </el-button>
</template>

<style scoped>

</style>

<script>
export default {
  name: "normalButton",
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
        this.loadingStatus = false;
      })
    },

  }
};
</script>
