import Vue from 'vue'
import App from './App.vue'
import { checkEmail } from './filters'

Vue.filter('isEmail', checkEmail)

import vco from "v-click-outside";

Vue.use(vco);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
