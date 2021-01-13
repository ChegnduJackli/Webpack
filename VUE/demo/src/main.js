import Vue from 'vue';
import router from './router';
import App from './App.vue';
import animate from 'animate.css';
 import './asset/base.scss';
 import { setToken } from './utils/js-cookie-lib';

 //token 
 setToken('Basic U0FQSk9CQVBJQUNDT1VOVDpTQVBKT0JBUElBQ0NPVU5U');

Vue.use(animate);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
