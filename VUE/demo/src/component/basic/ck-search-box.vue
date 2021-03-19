<template>
  <el-input v-model="searchText"
    prefix-icon="el-icon-search"
    clearable
    @keyup.enter.native="refresh()" />
</template>

<style scoped>
</style>

<script>


export default {
  name: "ck-search-box",
  props: {
    refreshData: {
      type: Function,
    },
    orgFilterText: {
      type: String
    }
  },

  data () {
    return {
      searchText: this.orgFilterText,
      oldSearchText: ''
    };
  },
  created () {
  },
  methods: {
    refresh () {
      let _this = this;
      if (_this.oldSearchText == _this.searchText) {
        console.log('same value not trigger');
        return;
      }
      console.log('orgFilterText searched', this.searchText);
      setTimeout(function () {
        _this.oldSearchText = _this.searchText;
        _this.$emit('refreshData', _this.searchText);
      }, 2000)
    },
    handleClick () {
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
