import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import store from './store';
import VueI18n from 'vue-i18n';
import i18n from './util/i18n';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueI18n);

new Vue({
  render: h => h(App),
  i18n,
  store,
}).$mount('#app')
