import Vue from 'vue'
import Router from 'vue-router'

import rootApp from '@/view/rootApp'
import hello from '@/view/hello'
import world from '@/view/world'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: rootApp
    },{
      path: '/hello',
      component: hello
    },{
      path: '/world',
      component: world
    }
  ]
})