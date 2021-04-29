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
          name: "build",
          path: "/build",
          component: () => import('./view/build.vue')
      }
    ]
  })
const app = createApp(App);
app.use(VueRouter)
app.mount('#app')
