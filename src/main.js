import Vue from "vue"
import App from "./App.vue"
import i18n from "./i18n/"
import axios from "axios"

import element from "./element/index"
Vue.use(element)

import { MessageBox, Loading } from "element-ui"

Vue.use(Loading.directive)
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$loading = Loading.service
Vue.prototype.$axios = axios

import("./styles/index.scss")

Vue.config.productionTip = false

new Vue({
  i18n,
  render: (h) => h(App)
}).$mount("#app")
