import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.component('basecard', require('./components/BaseCard.vue').default)
Vue.component('baseloading', require('./components/BaseLoading.vue').default)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
