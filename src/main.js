import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import { ApiService } from '@/api';
import store from './store/index.js';
import common from './utils/common.js';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.prototype.common = common;
let apiService = new ApiService();
Vue.prototype.$api = apiService;
console.log(process);
console.log(process.env);
axios.defaults.baseURL = process.env.BASE_URL;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
