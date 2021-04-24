import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../pages/login/index'
import Main from '../pages'
import Register from '../pages/register/register'
import noFound from '../components/404'
import noPerm from '../components/403'

import personalInfo from '../pages/personalInfo/personalInfo'
// children
import baseInfo from '../pages/personalInfo/baseInfo/baseInfo'
import stuChange from '../pages/personalInfo/stuChange/stuChange'

import teacher from '../teacher'
import teacherHome from '../teacher/home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            title: '登录页'
        },
    },
    {
        path: '/register',
        component: Register,
        meta: {
            title: '注册页'
        }
    },
    {
        path: '/403',
        component: noPerm
    },
    {
        path: '/',
        name: 'index',
        component: Main,
        meta: {
            title: '首页',
            // perm: true //设置权限(测试)
        },
        children: [
            // 个人信息
            {
                path: '/personalInfo',
                name: 'personalInfo',
                component: personalInfo,
                meta: {
                    title: '个人信息'
                }
            },
            {
                path: '/personalInfo/stuChange/:id?',
                name: 'stuChange',
                component: stuChange,
                meta: {
                    title: ''
                }
            },
            {
                path: '/employService',
                name: 'employService',
                meta: {
                    perm: true //设置权限(测试)
                },
                component: employService
            },
        ]
    },
    {
        path: '/teacher',
        name: 'teacher',
        component: teacher,
        meta: {
            title: '主页'
        },
        children: [{
                path: '/teacherHome',
                name: 'teacherHome',
                component: teacherHome,
                meta: {
                    title: '首页'
                },
            },
            // 匹配不存在的路径页面
            {
                path: '*',
                component: noFound
                // 重定向
                // redirect: '/'
                // redirect: {
                //     path: '/'
                // }
                // 动态设置重定向的目标,to目标路由对象，就是访问的路径的路由信息
                // redirect:(to)=>{
                //     // if(to.path == '/123'){
                //     //     return '/'
                //     // }else if(to.path == '456'){
                //     //     return { path: '/first' }
                //     // }else {
                //     //     return { name: 'index' }
                //     // }
                //     return '/'
                // }
            },
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    // linkActiveClass: 'is-active',//当前激活的路由的class名字 
    scrollBehavior(to, from, savePotion) {
        if (savePotion) {
            return savePotion
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

// meta里可以定义一些自己想要的数据
// 测试权限
// 进入导航之前的钩子
// 写上next()路由才会跳转
// 可以拦截登录，如果meta里配置了需要登录，则重定向到'/login'页面
router.beforeEach((to, from, next) => {
    if (to.meta.perm) {
        // next('/403')
        next('/login')
    } else {
        next()
    }
})

export default router