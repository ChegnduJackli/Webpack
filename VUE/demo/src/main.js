import Vue from 'vue';
import router from './router';
import App from './App.vue';
import animate from 'animate.css';
 import './asset/base.scss';

 //token 
 setToken('Basic U0FQSk9CQVBJQUNDT1VOVDpTQVBKT0JBUElBQ0NPVU5U');


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
