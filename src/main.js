import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import prismjs from 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css'

//import 'prismjs/themes/prism-coy.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
