<template>
  <el-link class="ck-delete-icon-btn" @click="handleClick()" icon="el-icon-delete" v-bind="$attrs" :loading="loadingStatus">
    <slot></slot>
  </el-link>

  <!-- <button style="color:red;font-size:10">
    <slot></slot>
  </button> -->

</template>

<style scoped>
</style>

<script>
export default {
  name: "DeleteButtonIcon",
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
