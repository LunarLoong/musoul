import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../views/Login'
import Home from '../views/Home'

const router =  new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home
        }
    ]
})

router.beforeEach((to,from,next) =>{

    if(to.path === '/login')
        return next()
    const tokenStr = window.sessionStorage.getItem('token')

    if(!tokenStr)
        return next('login')
    next()
})

export default router
