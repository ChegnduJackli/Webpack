export default {
    data() {
        return {
            mixin: "test mixin"
        };
    },
    methods: {
        hello: function() {
            console.log("hello from mixin!");
        },
        comTest: function() {
            console.log("common test function called");
        }
    },
    created() {
        //alert('Created')
        this.hello();
        console.log('混入对象的钩子被调用')
    }
};
