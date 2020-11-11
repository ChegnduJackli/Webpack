<template>
<div>
    <h1>hello world {{ msg }}</h1>

    <h3>引入子组件,参数传递</h3>
    <input v-model="myTitle" />

    <base-button :title="myTitle" :age="12" :is-published="true"></base-button>
    <el-row>
        <el-col :span="12">
            <div :style="{ fontSize: postFontSize + 'em' }">
                <blog-post v-for="post in posts" v-bind:key="post.id" v-bind:post="post" v-on:enlarge-text="postFontSize += 0.1" v-on:small-text="postFontSize -= 0.1"></blog-post>
            </div>
        </el-col>

        <el-col :span="12">
            <div class="header">
                通过子组件向父级传递参数，使用事件抛出一个值
                https://cn.vuejs.org/v2/guide/components.html?
            </div>
            <div :style="{ fontSize: postFontSize + 'em' }">
                <blog-post3 v-for="post in posts" v-bind:key="post.id" v-bind:post="post" v-on:enlarge-text="onEnlargeText" v-on:small-text="postFontSize -= 0.1"></blog-post3>
            </div>
        </el-col>
    </el-row>
    <hr />
    <el-row>
        <el-col :span="12">
            <base-checkbox v-model="lovingVue"></base-checkbox>
            <current-user>
                <template v-slot:user="slotProps">
                    {{ slotProps.user.firstName }}
                    <div>
                        现在在父级作用域中，我们可以使用带值的 v-slot
                        来定义我们提供的插槽 prop 的名字：
                    </div>
                </template>
                <template #blog="slotBlog">
                    {{ slotBlog.blog.age }}
                    <div>具名插槽的缩写</div>
                </template>
            </current-user>
        </el-col>
        <el-col :span="12">
            <base-layout>
                <template v-slot:header>
                    <h1>Here might be a page title</h1>
                </template>
                <template v-slot:default>
                    <p>A paragraph for the main content.</p>
                    <p>And another one.</p>
                </template>
                <template v-slot:footer>
                    <p>Here's some contact info</p>
                </template>
            </base-layout>
        </el-col>
    </el-row>
    <hr />
    <el-row>
        <el-col :span="12">
            <my-com :show.sync="valueChild" @closeDiv="closeDivFromParent" style="padding: 30px 20px 30px 5px;border:1px solid #ddd;margin-bottom: 10px;"></my-com>
            <button @click="changeValue">toggle</button>
        </el-col>
    </el-row>
    <hr />
    <el-row>
        <el-col :span="12">
            <anchored-heading :level="1">Hello world!</anchored-heading>
            <anchored-heading :level="2">Hello world!</anchored-heading>
        </el-col>
        <el-col :span="12"> </el-col>
    </el-row>
    <button v-on:click="submitform">submit</button>
</div>
</template>

<style scoped>
.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #464647;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>

<script>
import baseButton from "./baseButton.vue";
var blog_post = {
    props: ["post"],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')"> 
        Enlarge text
      </button>
     <button v-on:click="$emit('small-text')"> 
        Smaller text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
};

var blog_post3 = {
    props: ["post"],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text',0.2)"> 
        Enlarge text
      </button>
     <button v-on:click="$emit('small-text')"> 
        Smaller text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
};

var myCom = {
    template: `<div v-if="show">
                    <p>默认初始值是{{show}}，所以是显示的</p>
                    <button @click.stop="closeDiv">关闭</button>
                 </div>`,
    props: ["show"],
    methods: {
        closeDiv() {
            this.$emit("update:show", false); //触发 input 事件，并传入新值
            // this.$emit('closeDiv'); //下面方法可以实现同样的功能
        }
    }
};

//自定义组件的 v-model
var base_checkbox = {
    model: {
        prop: "checked",
        event: "change"
    },
    props: {
        checked: Boolean
    },
    template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
};

var baseLayout = {
    template: `
    <div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

    `
};

//为了让 user 在父级的插槽内容中可用，我们可以将 user 作为 <slot> 元素的一个 attribute 绑定上去：
var currentUser = {
    template: `
<span>
  <slot name="user" v-bind:user="user">{{ user.lastName }}</slot>
  <slot name="blog" v-bind:blog="blog">{{ blog.name }}</slot>
</span>
`,
    data() {
        return {
            user: {
                firstName: "jack",
                lastName: "rose"
            },
            blog: {
                name: "blog",
                age: 120
            }
        };
    }
};


//渲染函数
var getChildrenTextContent = function (children) {
    return children.map(function (node) {
        return node.children ?
            getChildrenTextContent(node.children) :
            node.text
    }).join('')
}
var anchoredHeading = {
    render: function (createElement) {
        debugger;
        // return createElement(
        //     "h" + this.level, // 标签名称
        //     this.$slots.default // 子节点数组
        // );
        // 创建 kebab-case 风格的 ID
        var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, "-")
            .replace(/(^-|-$)/g, "");
        return createElement("h" + this.level, [
            createElement(
                "a", {
                    attrs: {
                        name: headingId,
                        href: "#" + headingId
                    }
                },
                this.$slots.default
            )
        ]);
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
};

export default {
    name: "hellojack",
    components: {
        baseButton, //缩写
        "blog-post": blog_post,
        "blog-post3": blog_post3,
        "base-checkbox": base_checkbox,
        "my-com": myCom,
        "base-layout": baseLayout,
        "current-user": currentUser,
        "anchored-heading": anchoredHeading
    },
    data() {
        return {
            msg: "jack",
            myTitle: "",
            postFontSize: 1,
            lovingVue: true,
            valueChild: true,
            posts: [{
                    id: 1,
                    title: "My journey with Vue",
                    content: "good job1"
                },
                {
                    id: 2,
                    title: "Blogging with Vue",
                    content: "good job2"
                },
                {
                    id: 3,
                    title: "Why Vue is so fun",
                    content: "good job3"
                }
            ]
        };
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount;
        },
        submitform: function () {
            var evens = [1, 2, 3, 4, 5, 6, 7, 8];
            var odds = evens.map(v => v + 1);
            var nums = evens.map((v, i) => v + i);

            //  this 对象
            var bob = {
                _name: "Bob",
                _friends: [1, 2, 3, 4],
                printFriends() {
                    this._friends.forEach(f =>
                        console.log(this._name + " knows " + f)
                    );
                }
            };
            bob.printFriends();

            debugger;
        },

        changeValue: function () {
            this.valueChild = !this.valueChild;
        },
        closeDivFromParent: function () {
            console.log("closeDivFromParent");
            this.valueChild = !this.valueChild;
        }
    }
};
</script>
