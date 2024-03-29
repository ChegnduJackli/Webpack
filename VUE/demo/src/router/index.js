import Vue from 'vue'
import Router from 'vue-router'

import 'element-ui/lib/theme-chalk/index.css'

import Home from '../views/Home.vue';
import helloworld from '../views/hellworld.vue';
import elementUIDemo from '../views/element-ui-demo.vue';

import ComputedDemo from '../views/ComputedDemo.vue'
import LifeCircleDemo from '../views/LifeCircleDemo.vue'
import NotFound from '../views/NotFound.vue'
import ToDoList from '../views/ToDoList.vue'
import animation from '../views/animation.vue';
import subRouter from '../views/subRouter.vue';
import subRouter1 from '../views/subRouter1.vue';
import subRouter2 from '../views/subRouter2.vue';
import subRouter3_vuex from '../views/subRouter3-vuex.vue';
import async from '../views/async.vue';

import element_table_demo from '../views/element-table-demo';
import pageslide from '../views/element-pageslide-demo';

import dynamicComponetDemo from '../views/dynamic-componet-demo.vue';

//import { LoginCallback } from '@okta/okta-vue'
import Protected from '../component/Protected'
import login from '../views/login'
import auth from '../utils/auth'
//console.log('LoginCallback', LoginCallback);

import LoginCallback from '../component/LoginCallback'
Vue.use(Router);


function requireAuth (to, from, next) {
    if (!auth.loggedIn()) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    } else {
        next()
    }
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',

        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/logout',
            beforeEnter (to, from, next) {
                console.log('before log out');
                auth.logout()
                next('/')
            }
        },
        {
            path: '/home',
            name: 'home',
            beforeEnter: requireAuth,
            component: Home,
            //meta: { keepAlive: true },
        },
        {
            path: '/login/callback',
            name: 'callback',
            component: LoginCallback,

        },
        {
            path: '/protected',
            component: Protected,
            meta: {
                requiresAuth: true
            }
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
            meta: { keepAlive: true },
        },
        {
            path: '/toDo',
            name: 'toDo',
            component: ToDoList,
            meta: { keepAlive: true },
        },
        {
            path: '/helloworld', //path必须要跟app.vue中的routerLink 完全一致
            name: 'helloworld2',
            component: helloworld,
            meta: { keepAlive: true },
        },
        {
            path: '/elementUIDemo', //path必须要跟app.vue中的routerLink 完全一致
            name: 'elementUIDemo',
            component: elementUIDemo,
            meta: { keepAlive: true },
            children: [
                {
                    path: 'table',
                    component: element_table_demo,
                    name: 'elementUIDemo.table',
                    meta: { keepAlive: true },
                },
                {
                    path: 'pageSlide',
                    // component: () => import('../views/element-pageslide-demo'),
                    component: pageslide,
                    name: 'elementUIDemo.pageSlide',
                    meta: { keepAlive: true },
                },
                {
                    path: 'ckDialog',
                    name: 'elementUIDemo.ckDialog',
                    //component:async,
                    //// 这个动态导入会返回一个 `Promise` 对象。
                    component: () => import('../views/element-ui-dialog'),
                    meta: { keepAlive: true },
                },
                {
                    path: 'classStudy',
                    name: 'elementUIDemo.classStudy',
                    //component:async,
                    //// 这个动态导入会返回一个 `Promise` 对象。
                    component: () => import('../views/class-study'),
                    meta: { keepAlive: true },
                },
                {

                    path: 'formValidate',
                    component: () => import('../views/form-validate'),
                    // component:pageslide,
                    name: 'elementUIDemo.formValidate',
                    meta: { keepAlive: true },
                },

                {

                    path: 'formValidateUpload',
                    component: () => import('../views/form-validate-upload'),
                    // component:pageslide,
                    name: 'elementUIDemo.formValidateUpload',
                    meta: { keepAlive: true },
                },
                {


                    path: 'commonTest',
                    component: () => import('../views/common-test'),
                    // component:pageslide,
                    name: 'elementUIDemo.commonTest',
                    meta: { keepAlive: true },
                },
                {

                    path: 'elementMenu',
                    component: () => import('../views/element-ui-menu'),
                    // component:pageslide,
                    name: 'elementUIDemo.elementMenu',
                    meta: { keepAlive: true },
                },
                {

                    path: 'parentChild',
                    component: () => import('../views/parent-child-tongxin'),
                    // component:pageslide,
                    name: 'elementUIDemo.parentChild',
                    meta: { keepAlive: true },
                },
                {

                    path: 'uploadFileTemplate',
                    component: () => import('../views/upload-file-template'),
                    // component:pageslide,
                    name: 'elementUIDemo.uploadFileTemplate',
                    meta: { keepAlive: true },
                },
                {

                    path: 'searchCodeGenerate',
                    component: () => import('../views/source-code-generate'),
                    // component:pageslide,
                    name: 'elementUIDemo.searchCodeGenerate',
                    meta: { keepAlive: true },
                },

            ]

        },
        {
            path: '/animation',
            name: 'animation',
            component: animation,
            meta: { keepAlive: true },
        },
        {
            path: '/subRouter',
            name: 'subRouter',
            component: subRouter,
            meta: { keepAlive: true },
            children: [
                {
                    path: 'subRouter1',
                    name: 'subRouter1',
                    component: subRouter1,
                    meta: { keepAlive: true },
                },
                {
                    path: 'subRouter2',
                    name: 'subRouter2',
                    component: subRouter2,
                    meta: { keepAlive: true },
                },
                {
                    path: 'subRouter3_vuex',
                    name: 'subRouter3_vuex',
                    component: subRouter3_vuex,
                    meta: { keepAlive: true },
                },
                {
                    path: 'dynamicComponetDemo',
                    name: 'dynamicComponetDemo',
                    component: dynamicComponetDemo,
                    meta: { keepAlive: true },
                },
                {
                    path: 'async',
                    name: 'async',
                    component: async,
                    meta: { keepAlive: true },
                },

                {
                    path: 'slot',
                    name: 'slot',
                    //component:async,
                    //// 这个动态导入会返回一个 `Promise` 对象。
                    component: () => import('../views/subRouterSlot'),
                    meta: { keepAlive: true },
                },

                {
                    path: 'helloTs',
                    name: 'helloTs',
                    //component:async,
                    //// 这个动态导入会返回一个 `Promise` 对象。
                    component: () => import('../views/helloTs'),
                    meta: { keepAlive: true },
                },
            ]
        },
        {
            path: '/apiTest',
            name: 'apiTest',
            component: () => import('../views/apiTest'),
            meta: { keepAlive: true },
        },
        {
            path: '*',
            name: '404',
            component: NotFound,
            meta: { keepAlive: true },
        }
    ]
});