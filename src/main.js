import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/style.css'
import '@/assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Container, Header, Main, Aside, Footer, Menu, MenuItem, Button,
  Popover, Tabs, TabPane, Input, Radio, RadioGroup, Form, FormItem,
  Message, Steps, Step
} from 'element-ui'

Vue.config.productionTip = false
Vue.prototype.$message = Message

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Aside)
Vue.use(Button)
Vue.use(Popover)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Steps)
Vue.use(Step)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
