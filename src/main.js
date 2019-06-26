import Vue from 'vue'
import App from './App.vue'
import { router, i18n } from './plugins'

import './styles/global.scss'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
