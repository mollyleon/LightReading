import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import Home from 'containers/Home'
import List from 'containers/List'
import Collect from 'containers/Collect'
import Add from 'containers/Add'
import Update from 'containers/Update'

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    }, {
      path: '/list',
      component: List
    },
    {
      path: '/collect',
      component: Collect
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/update/:id',
      component: Update
    },
    {
      path: '*',
      redirect: '/home'
    }
  ],
  linkActiveClass:'active'
})
