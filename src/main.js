import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n/'

import { Input, Table, TableColumn, Button, Tooltip, MessageBox, Drawer, Dialog, Tabs, TabPane } from 'element-ui'
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Tooltip)
Vue.use(Drawer)
Vue.use(Dialog)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
