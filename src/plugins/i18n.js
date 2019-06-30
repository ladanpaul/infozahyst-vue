import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../lib/lang/en.yml'
import ua from '../lib/lang/ua.yml'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'ua',
  // fallbackLocale: 'en',
  messages: { ua, en }
})
