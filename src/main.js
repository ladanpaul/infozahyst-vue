import Vue from 'vue'
import App from './App.vue'
import { router, i18n } from './plugins'
import { Sticky } from './lib/directives'

import './styles/index.scss'

Vue.directive(Sticky)
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
