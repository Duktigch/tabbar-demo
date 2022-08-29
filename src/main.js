import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import "./assets/fonts/iconfont.css"
// 1.引入axios模块包 赋给axios方法
// main.js - 全局绑定属性 (确保任意.vue文件可以都访问到这个axios方法)
import axios from 'axios'

// 2.设置基础地址
axios.defaults.baseURL = "https://www.escook.cn"

// 2.axios方法添加到Vue的原型上
// $axios自定义变量
Vue.prototype.$axios = axios
// 全局指令
Vue.directive("focus", {
  inserted(el){
    el.focus()
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
