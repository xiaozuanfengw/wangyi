import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false
import 'lib-flexible/flexible'
// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
new Vue({
  render: h => h(App),
   router
 }).$mount('#app')

/* new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, // 配置路由器
}) */