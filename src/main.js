import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/bootstrap-vue'
import VueRouter from "vue-router";
import App from './App.vue'
import router from './routes';
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
