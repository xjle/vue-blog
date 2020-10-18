import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/style.css'
import '@/assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import { Container, Header, Main, Aside, Footer, Menu, MenuItem, Button, Popover } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Aside)
Vue.use(Button)
Vue.use(Popover)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
