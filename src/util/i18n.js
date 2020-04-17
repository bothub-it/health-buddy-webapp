import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from '../locales/en.json';
import ptbr from '../locales/pt_br.json';
import ru from '../locales/ru.json';
import elgr from '../locales/el_GR.json';
import es from '../locales/es.json';

Vue.use(VueI18n);

const languages = {
  'en-US': en,
  'ru': ru,
  'pt-BR': ptbr,
  'el-GR': elgr,
  'es': es

};

const messages = Object.assign(languages);

const i18n = new VueI18n({
  locale: navigator.language || navigator.userLanguage,
  fallbackLocale: 'en-US',
  messages,
});

export default i18n;
