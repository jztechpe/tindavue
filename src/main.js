import Vue from 'vue'
import App from './App.vue'
import { checkEmail } from './filters'

Vue.filter('isEmail', checkEmail)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
