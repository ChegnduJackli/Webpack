<template>
    <div>
        <h1>hello world {{ msg }}</h1>

        <h3>引入子组件,参数传递</h3>
        <input v-model="myTitle" />

        <base-button :title="myTitle"></base-button>
        <div :style="{ fontSize: postFontSize + 'em' }">
            <blog-post
                v-for="post in posts"
                v-bind:key="post.id"
                v-bind:post="post"
                v-on:enlarge-text="postFontSize += 0.1"
                v-on:small-text="postFontSize -= 0.1"
            ></blog-post>
        </div>

        <div class="header">
            通过子组件向父级传递参数，使用事件抛出一个值
            https://cn.vuejs.org/v2/guide/components.html?
        </div>
        <div :style="{ fontSize: postFontSize + 'em' }">
            <blog-post3
                v-for="post in posts"
                v-bind:key="post.id"
                v-bind:post="post"
                v-on:enlarge-text="onEnlargeText"
                v-on:small-text="postFontSize -= 0.1"
            ></blog-post3>
        </div>
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

export default {
    name: "hellojack",
    components: {
        baseButton,
        "blog-post": blog_post,
        "blog-post3": blog_post3
    },
    data() {
        return {
            msg: "jack",
            myTitle: "",
            postFontSize: 1,
            posts: [
                { id: 1, title: "My journey with Vue", content: "good job1" },
                { id: 2, title: "Blogging with Vue", content: "good job2" },
                { id: 3, title: "Why Vue is so fun", content: "good job3" }
            ]
        };
    },
    methods: {
        onEnlargeText: function(enlargeAmount) {
            this.postFontSize += enlargeAmount;
        },
        submitform: function() {
            var evens = [1, 2, 3, 4, 5, 6, 7, 8];
            var odds = evens.map(v => v + 1);
            var nums = evens.map((v, i) => v + i);

            //  this 对象
            var bob = {
                _name: "Bob",
                _friends: [1,2,3,4],
                printFriends() {
                    this._friends.forEach(f =>
                        console.log(this._name + " knows " + f)
                    );
                }
            };
            bob.printFriends();

            debugger;
        }
    }
};
</script>
