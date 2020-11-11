import Vue from 'vue';
import router from './router';
import App from './App.vue';
import animate from 'animate.css';
 import './asset/base.scss';


Vue.use(animate);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
