/*入口js*/

import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer.js'
import loading from './common/imgs/loading.gif'
//注册全局组件标签
Vue.component(Button.name,Button)//<mt-button>
Vue.use(VueLazyload, {//内部自定义一个指令lazy

  loading

})

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
