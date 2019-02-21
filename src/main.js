import 'babel-polyfill';
import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
import './style/common.less';
import 'iview/dist/styles/iview.css';

import router from './router'

Vue.use(iView);

var app = new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App
  },
  router
})