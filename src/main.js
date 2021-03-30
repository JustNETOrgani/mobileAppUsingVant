import Vue from 'vue'
import Vant from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import 'vant/lib/index.css'
// import Web3 from 'web3'

Vue.config.productionTip = false

// Vue.use(ElementUI, Vant)
Vue.use(ElementUI, Vant, { locale })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
