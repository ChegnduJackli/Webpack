<template>
<div>
    <input type="text" v-model="itemToAdd">
    <button @click="addItem()">Add</button>
    <div v-for="item in items" :key="item.content">
        {{item}}
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            itemToAdd:'',
            items:[
            ]
        }
    },
    methods: {
      addItem() {
          this.items.push(this.itemToAdd);
      }
    },
    created() {

    },
    destroyed() {

    },
    mounted() {

    }
}
</script>

<style>

</style>
