import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory} from "vue-router"
import home from "./view/home.vue"
import introduce from "./view/01base/introduce.vue"
import application from "./view/01base/application.vue"
 
const VueRouter = createRouter({
    history:createWebHashHistory(),
    routes:[
      {
        path: '/',
        component: home
      },
      {
          name: "introduce",
          path: "/introduce",
          component: introduce
      },
      {
          name: "application",
          path: "/application",
          component: application
      }
    ]
  })
const app = createApp(App);
app.use(VueRouter)
app.mount('#app')
