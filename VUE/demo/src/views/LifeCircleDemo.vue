<template>
<div>
    <input id="name" v-model="a">
</div>
</template>

<script>
export default {
    mixins: [],
    data() {
        return {
            a: '3'
        }
    },
    methods: {
        delete() {

        },
        addItem(item) {
            this.items.push(item);
        }
    },
    created() {
        alert(document.getElementById('name'));
       //alert('Created');
    },
    destroyed() {
       // alert('destroyed');
    },
    mounted() {
       // alert(document.getElementById('name'));
    },
    updated() {
        //alert('updated');
    }
}
</script>

<style></style>
