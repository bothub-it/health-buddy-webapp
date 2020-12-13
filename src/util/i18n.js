import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from '../locales/en.json';
import ptbr from '../locales/pt_br.json';
import ru from '../locales/ru.json';
import elgr from '../locales/el_GR.json';
import es from '../locales/es.json';
import kaz from '../locales/kaz.json';
import it from '../locales/it.json';
import mk from '../locales/mk.json';
import tr from '../locales/tr.json';
import bg from '../locales/bg.json';
import ro from '../locales/ro.json';
import hu from '../locales/hu.json';
import hy from '../locales/hy.json';
import kg from '../locales/kg.json';
import sq from '../locales/sq.json';
import mkSq from '../locales/mk_sq.json';
import vo from '../locales/vo.json';

Vue.use(VueI18n);

const languages = {
  'en-US': en,
  'ru': ru,
  'pt-BR': ptbr,
  'el-GR': elgr,
  'es': es,
  'kaz': kaz,
  'it': it,
  'mk': mk,
  'tr': tr,
  'bg': bg,
  'ro': ro,
  'hu': hu,
  'hy': hy,
  'kg': kg,
  'sq': sq,
  'mk_sq': mkSq,
  'vo': vo,
};

const messages = Object.assign(languages);

const i18n = new VueI18n({
  locale: navigator.language || navigator.userLanguage,
  fallbackLocale: 'en-US',
  messages,
});

export default i18n;
