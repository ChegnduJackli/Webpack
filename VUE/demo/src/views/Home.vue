<template>
    <div class="parent">
        <h1>Welcome {{ name }}</h1>
        <span v-bind:title="message">
            鼠标悬停几秒钟查看此处动态绑定的提示信息！
        </span>
        <p>Reversed message: "{{ reversedMessage }}"</p>
      
        <p>
            Ask a yes/no question:
            <input v-model="question" />
        </p>
        <p>{{ answer }}</p>
        <hr />
        <button @click="comTest()">调用混入</button>
        <input v-focus />
        <div id="dynamicexample">
            <h3>Scroll down inside this section ↓</h3>
            <p v-pin:[direction]="200">
                I am pinned onto the page at 200px to the left.
            </p>
        </div>
    </div>
</template>

<script>
import DemoMixin from "../Mixins/DemoMixin";
import _ from "lodash";
import axios from "axios";

export default {
    mixins: [DemoMixin],
    data() {
        return {
            items: ["item1", "item2", "item3"],
            value: "",
            name: "jack 2",
            message: "页面加载于 " + new Date().toLocaleString(),
            message2: "hello",
            question: "",
            answer: "I cannot give you an answer until you ask a question!",
            direction: "left"
        };
    },
    methods: {
        delete() {},
        addItem(item) {
            this.items.push(item);
        },
        // reversedMessage: function() {
        //     return this.message2
        //         .split("")
        //         .reverse()
        //         .join("");
        // }

        getAnswer: function() {
            if (this.question.indexOf("?") === -1) {
                this.answer = "Questions usually contain a question mark. ;-)";
                return;
            }
            this.answer = "Thinking...";
            var vm = this;
            axios
                .get("https://yesno.wtf/api")
                .then(function(response) {
                    vm.answer = _.capitalize(response.data.answer);
                })
                .catch(function(error) {
                    vm.answer = "Error! Could not reach the API. " + error;
                });
        }
    },
    computed: {
        // 计算属性的 getter，计算属性是基于它们的响应式依赖进行缓存的，只在相关响应式依赖发生改变时它们才会重新求值
        reversedMessage: function() {
            // `this` 指向 vm 实例
            return this.message2
                .split("")
                .reverse()
                .join("");
        }
    },
    watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        question: function(newQuestion, oldQuestion) {
            this.answer = "Waiting for you to stop typing...";
            this.debouncedGetAnswer();
        }
    },

    created: function() {
        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
        // 请参考：https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);

        //同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
        console.log("组件钩子被调用");
        console.log("this data", this.$data);
    },
    destroyed() {},
    mounted() {},
    directives: {
        focus: {
            bind: function() {
                console.log("bind called");
            },
            // 指令的定义
            inserted: function(el) {
                el.focus();
            },
            unbind: function() {
                console.log("unbind called");
            }
        },
        pin: {
            bind: function(el, binding, vnode) {
                console.log("binding", binding);
                el.style.position = "fixed";
                var s = binding.arg == "left" ? "left" : "top";
                el.style[s] = binding.value + "px";
            }
        }
    }
};
</script>

<style lang="scss">
@import "../asset/var.scss";
.parent {
    background-color: $header-color;

    & > span {
        color: red;
        font-size: $header-size;
    }
}
</style>
