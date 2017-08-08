// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import vmodal from 'vue-js-modal';

Vue.config.productionTip = false;
Vue.use(vmodal);
/* eslint-disable no-new */
let v = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
});
