import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory} from "vue-router"

// import Vue from "vue";
// import backtop from "./components/backtop.vue";
// Vue.use(backtop);
 
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
          name: "event",
          path: "/event",
          component: () => import('./view/01base/09event.vue')
      },
      {
          name: "form",
          path: "/form",
          component: () => import('./view/01base/10form.vue')
      },
      {
          name: "module",
          path: "/module",
          component: () => import('./view/01base/11module.vue')
      },
      {
          name: "register",
          path: "/register",
          component: () => import('./view/02module/01register.vue')
      },
      {
          name: "props",
          path: "/props",
          component: () => import('./view/02module/02props.vue')
      },
      {
          name: "attribute",
          path: "/attribute",
          component: () => import('./view/02module/03attribute.vue')
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
