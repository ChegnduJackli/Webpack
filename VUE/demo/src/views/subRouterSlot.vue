<template>
  <div>
    <div>slot demo</div>
    <el-divider></el-divider>
    <aler-box-slot> </aler-box-slot>
    <aler-box-slot> Something bad happened.</aler-box-slot>
    <base-layout-slot></base-layout-slot>
    <el-divider></el-divider>
    <base-layout-slot>
      <template v-slot:header>
        <h1>header Here might be a page title</h1>
      </template>
      <template v-slot:default>
        <p>main container A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:footer>
        <p>footer Here's some contact info</p>
      </template>
    </base-layout-slot>
    <div>插槽的缩写#</div>
    <base-layout-slot>
      <template #header>
        <h1>header Here might be a page title</h1>
      </template>
      <template #default>
        <p>main container A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template #footer>
        <p>footer Here's some contact info #</p>
      </template>
    </base-layout-slot>


    <el-divider></el-divider>
    <user-slot></user-slot>
    <div>父组件访问子组件的slot数据</div>
    <user-slot v-slot="slotProps">{{
      slotProps.user.firstName
    }}</user-slot>

    <div>下面写法跟上面一样</div>
    <user-slot>
      <template v-slot:userInfo="slotProps">
        {{ slotProps.user.firstName }}
      </template></user-slot
    >
    <div>下面写法跟上面一样，解构传值</div>
        <user-slot>
      <template v-slot:userInfo="{user}">
        {{ user.firstName }}
      </template></user-slot
    >
  </div>
</template>

<script>
// Vue.component('alert-box', {
//   template: `
//     <div class="demo-alert-box">
//       <strong>Error!</strong>
//       <slot></slot>
//     </div>
//   `
// })
import alerBoxSlot from "../component/alerBoxSlot";
import baseLayoutSlot from "../component/baseLayoutSlot";
import userSlot from "../component/userSlot";

export default {
  name: "subRouter2",
  //props: ['title'],
  //每个 prop 都有指定的值类型
  components: {
    alerBoxSlot,
    baseLayoutSlot,
    userSlot,
  },
  props: {
    title: String,
    age: Number,
    isPublished: Boolean,
  },
  data() {
    return {
      msg: "base button",
    };
  },
};
</script>
