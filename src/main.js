import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory} from "vue-router"
import home from "./view/home.vue"
 
const VueRouter = createRouter({
    history:createWebHashHistory(),
    routes:[
      {
        path: '/',
        component: home
      }
    ]
  })
const app = createApp(App);
app.use(VueRouter)
app.mount('#app')
