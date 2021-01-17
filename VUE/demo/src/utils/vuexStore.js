import Vue from 'vue';
import Vuex from 'vuex';
import {
    setToken
} from '../utils/js-cookie-lib'

//常量作为函数名称
import {
    SOME_MUTATION
} from '../constant/mutation-type'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [{
                id: 1,
                text: 'jack',
                done: true
            },
            {
                id: 2,
                text: 'rose',
                done: false
            }
        ],
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',

    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    mutations: {
        //修改token
        changeLogin(state, user) {
          console.log('store user',user);
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
            setToken( user.Authorization);
        },

        increment(state) {
            state.count++
        },
        incrementPayload(state, payLoad) {
            state.count += payLoad.amount;
        },
        incrementPayloadMount(state, amount) {
            state.count += amount;
        },
        [SOME_MUTATION](state, payLoad) {
            state.count += payLoad.amount;
        },
        decrement: state => state.count--,

    },
    //Action 提交的是 mutation，而不是直接变更状态。
    //Action 可以包含任意异步操作。
    actions:{
        increment (context) {
            console.log('content',context);
            context.commit('increment')
          },
          //参数解构
          increment1 ({commit}) {
            console.log('content',commit);

            commit('increment')

          },
          incrementAsync ({ commit }) {
            setTimeout(() => {
              commit('increment')
              console.log('睡眠1秒后执行');
            }, 1000)
            console.log('exec aysnc');
          }
    }
});
