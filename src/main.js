import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import store from './store';
import VueI18n from 'vue-i18n';
import i18n from './util/i18n';
import VueRouter from 'vue-router';
import router from './router';
import { getValidBrowserLanguage } from '@/util/browser';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  i18n,
  store,
  router,
}).$mount('#app');

store.dispatch('setLanguage', localStorage.getItem('language') || getValidBrowserLanguage() || 'en');

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
