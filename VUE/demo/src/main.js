import Vue from 'vue';
//from router/index.js
import router from './router/index';
import App from './App.vue';
import animate from 'animate.css';
import './asset/base.scss';
import Vuex from 'vuex';
import _ from 'lodash';
import {store} from './utils/vuexStore';
import {
    setToken
} from './utils/js-cookie-lib'

//常量作为函数名称
import {
    SOME_MUTATION
} from './constant/mutation-type'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

// import ckButton from "./component/basic/ck-button";

// Vue.component('ck-button',ckButton)


const requireComponent = require.context(
    // 其组件目录的相对路径
    './component/basic',
    // 是否查询其子目录
    false
    // 匹配基础组件文件名的正则表达式
    // /Base[A-Z]\w+\.(vue|js)$/
  )
  
  requireComponent.keys().forEach(fileName => {
    // 获取组件配置
  
    const componentConfig = requireComponent(fileName)
  
    // 获取组件的 PascalCase 命名
    const componentName = upperFirst(
      camelCase(
        // 获取和目录深度无关的文件名
        fileName
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    )
    console.log('componentName',componentName);
  
    // 全局注册组件
    Vue.component(
      componentName,
      // 如果这个组件选项是通过 `export default` 导出的，
      // 那么就会优先使用 `.default`，
      // 否则回退到使用模块的根。
      componentConfig.default || componentConfig
    )
  })
  
  


//token 
//setToken('Basic U0FQSk9CQVBJQUNDT1VOVDpTQVBKT0JBUElBQ0NPVU5U');

Object.defineProperty(Vue.prototype, '$_', {
    value: _
})


Vue.use(animate);
Vue.use(Vuex);

// const store = new Vuex.Store({
//     state: {
//         count: 0,
//         todos: [{
//                 id: 1,
//                 text: 'jack',
//                 done: true
//             },
//             {
//                 id: 2,
//                 text: 'rose',
//                 done: false
//             }
//         ],
//         Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',

//     },
//     getters: {
//         doneTodos: state => {
//             return state.todos.filter(todo => todo.done)
//         },
//         getTodoById: (state) => (id) => {
//             return state.todos.find(todo => todo.id === id)
//         }
//     },
//     mutations: {
//         //修改token
//         changeLogin(state, user) {
//           console.log('store user',user);
//             state.Authorization = user.Authorization;
//             localStorage.setItem('Authorization', user.Authorization);
//             setToken( user.Authorization);
//         },

//         increment(state) {
//             state.count++
//         },
//         incrementPayload(state, payLoad) {
//             state.count += payLoad.amount;
//         },
//         incrementPayloadMount(state, amount) {
//             state.count += amount;
//         },
//         [SOME_MUTATION](state, payLoad) {
//             state.count += payLoad.amount;
//         },
//         decrement: state => state.count--,

//     }
// });



new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
