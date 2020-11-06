import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Home from '../views/Home.vue';
import helloworld from '../views/hellworld.vue';
import elementUIDemo from '../views/element-ui-demo.vue';

import ComputedDemo from '../views/ComputedDemo.vue'
import LifeCircleDemo from '../views/LifeCircleDemo.vue'
import NotFound from '../views/NotFound.vue'
import ToDoList from '../views/ToDoList.vue'


Vue.use(Router);
Vue.use(ElementUI)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            //meta: { keepAlive: true },
        },
        {
            path: '/computedDemo',
            name: 'computedDemo',
            component: ComputedDemo,
            //meta: { keepAlive: true },
        },
        {
            path: '/lifeCircleDemo',
            name: 'lifeCircleDemo',
            component: LifeCircleDemo,
            //meta: { keepAlive: true },
        },
        {
            path: '/toDo',
            name:'toDo',
            component:ToDoList,
        },
        {
            path:'/helloworld', //path必须要跟app.vue中的routerLink 完全一致
            name:'helloworld2',
            component:helloworld,
        },
        {
            path:'/elementUIDemo', //path必须要跟app.vue中的routerLink 完全一致
            name:'elementUIDemo',
            component:elementUIDemo,
        },
        
        {
            path: '*',
            name: '404',
            component: NotFound,
        }
    ]
});