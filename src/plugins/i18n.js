import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'ua',
  fallbackLocale: 'en',
  messages: {
    ua: {
      main: 'Головна',
      testMessage: 'Інфозахист Головний компонент :)))))))))))',
    },
    en: {
      main: 'Main',
      testMessage: 'InfozahystMain component :)))))))))))',
    },
  }
})
