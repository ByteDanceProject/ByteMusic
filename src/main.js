// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import Axios from 'axios'
import api from './api'
import "./assets/css/common.css"
//全局组件
import Pagination from '@/components/Pagination'
Vue.component("Pagination", Pagination)
import Searchsuggest from "@/pages/Search/Searchsuggest";
Vue.component("Searchsuggest", Searchsuggest)


Vue.prototype.$axios = Axios;
Vue.prototype.HOST = "/api"
Vue.prototype.$api = api;
Vue.config.productionTip = false

//按需引入elementui
import '@/plugin/element'

//图片懒加载的配置
import load from '@/assets/pic/lazy.gif'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, { loading: load })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
