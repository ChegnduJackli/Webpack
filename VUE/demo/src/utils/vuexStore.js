import Vue from 'vue';
import Vuex from 'vuex';
import {
    setToken
} from '../utils/js-cookie-lib';

import createPersistedState from 'vuex-persistedstate';

//常量作为函数名称
import {
    SOME_MUTATION
} from '../constant/mutation-type'

Vue.use(Vuex);

const vuexKey = 'jack' + '_vuex'

const moduleA = {
    namespaced: true,
    state: () => ({ count: 10, }),
    mutations: {
        increment(state) {
            // 这里的 `state` 对象是模块的局部状态
            state.count++
        },
        incrementPayloadMount(state, amount) {
            state.count += amount;
        },
    },
    actions: {
        incrementIfOddOnRootSum({ state, commit, rootState }) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
            }
            else{
                commit('incrementPayloadMount',11);
            }
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2
        }
    }
}

const moduleB = {
     namespaced: true,
    state: () => ({ count: 0, }),
    mutations: {
        increment(state) {
            // 这里的 `state` 对象是模块的局部状态
            state.count++
        },
        incrementPayloadMount(state, amount) {
            state.count += amount;
        },
    },
    actions: {
        incrementIfOddOnRootSum({ state, commit, rootState }) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
            }
            else{
                commit('incrementPayloadMount',10);
            }
        }
    }
}


export const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    },
    plugins: [createPersistedState({
        key: vuexKey
    })],

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
            console.log('store user', user);
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
            setToken(user.Authorization);
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
    actions: {
        increment(context) {
            console.log('content', context);
            context.commit('increment')
        },
        //参数解构
        increment1({ commit }) {
            console.log('content', commit);

            commit('increment')

        },
        //支持异步操作
        incrementAsync({ commit }) {
            setTimeout(() => {
                commit('increment')
                console.log('睡眠1秒后执行');
            }, 1000)
            console.log('exec aysnc');
        },
        incrementPayloadAsync({ commit }, payLoad) {
            commit('incrementPayload', payLoad)
            console.log('incrementPayloadAsync', payLoad);
        },
        incrementSyncPromise({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('increment')
                    resolve(true)
                }, 1000)
            });
        }
    }
});
