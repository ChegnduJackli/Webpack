<template>
    <div>
        <input id="name" v-model="a" />
        <p>{{ message }}</p>
        <button @click="updateMessage()">update message</button>
    </div>
</template>

<script>
export default {
    mixins: [],
    data() {
        return {
            a: "3",
            message: "jack"
        };
    },
    methods: {
        delete() {},
        addItem(item) {
            this.items.push(item);
        },
        updateMessage: function() {
            this.message = "已更新";
            console.log(this.$el.textContent); // => '未更新'
            this.$nextTick(function() {
                console.log(this.$el.textContent); // => '已更新'
            });
        }
    },
    created() {
        alert(document.getElementById("name"));
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
};
</script>

<style></style>
