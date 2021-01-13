import Vue from 'vue';
import router from './router';
import App from './App.vue';
import animate from 'animate.css';
 import './asset/base.scss';
 import Vuex from 'vuex';



 const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  });

Vue.use(animate);
Vue.use(Vuex);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
