import Vue from 'vue';
import router from './router';
import App from './App.vue';
import animate from 'animate.css';
 import './asset/base.scss';
 import Vuex from 'vuex';
 import _ from 'lodash'
 import { setToken } from './utils/js-cookie-lib'
 //token 
 setToken('Basic U0FQSk9CQVBJQUNDT1VOVDpTQVBKT0JBUElBQ0NPVU5U');

 Object.defineProperty(Vue.prototype, '$_', { value: _ })
  

 Vue.use(animate);
 Vue.use(Vuex);

 const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      },
      decrement: state => state.count--,
      
    }
  });


  
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
