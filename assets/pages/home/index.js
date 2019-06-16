import Vue from 'vue';
import App from './App.vue';
import './index.sass';

console.log('Hello world, from home page!');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
});
