import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory} from "vue-router"
 
const VueRouter = createRouter({
    history:createWebHashHistory(),
    routes:[
      {
        path: '/',
        component: () => import('./view/home.vue')
      },
      {
          name: "introduce",
          path: "/introduce",
          component: () => import('./view/01base/01introduce.vue')
      },
      {
          name: "application",
          path: "/application",
          component: () => import('./view/01base/02application.vue')
      },
      {
          name: "grammar",
          path: "/grammar",
          component: () => import('./view/01base/03grammar.vue')
      },
      {
          name: "property",
          path: "/property",
          component: () => import('./view/01base/04property.vue')
      },
      {
          name: "listener",
          path: "/listener",
          component: () => import('./view/01base/05listener.vue')
      },
      {
          name: "classstyle",
          path: "/classstyle",
          component: () => import('./view/01base/06classstyle.vue')
      },
      {
          name: "condition",
          path: "/condition",
          component: () => import('./view/01base/07condition.vue')
      },
      {
          name: "render",
          path: "/render",
          component: () => import('./view/01base/08render.vue')
      },
      {
          name: "build",
          path: "/build",
          component: () => import('./view/build.vue')
      }
    ]
  })
const app = createApp(App);
app.use(VueRouter)
app.mount('#app')
