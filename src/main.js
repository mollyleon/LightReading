import Vue from 'vue'
import App from './App'
import router from './router'
import 'assets/index.less'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller);
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad);

new Vue({
  el: '#app',
  router,
  ...App
});
