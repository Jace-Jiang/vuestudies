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
          name: "build",
          path: "/build",
          component: () => import('./view/build.vue')
      },
      {
          name: "common/async-form",
          path: "/async-form",
          component: () => import('./view/common/async-form.vue')
      }
    ]
  })
const app = createApp(App);
app.use(VueRouter)
app.mount('#app')
