import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../views/Login'
import Home from '../views/Home'
import Welcome from "../components/Welcome";
import OrderY from "../components/mine/OrderY";
import OrderN from "../components/mine/OrderN";
import MyGym from "../components/gym/MyGym";
import ExpGym from "../components/gym/ExpGym";
import MyCoach from "../components/coach/MyCoach";
import ExpCoach from "../components/coach/ExpCoach";

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
            component: Home,
            redirect:'/welcome',
            children:[
                {path:'/welcome',component:Welcome},
                {path:'/orderY',component:OrderY},
                {path:'/orderN',component:OrderN},
                {path:'/mygym',component:MyGym},
                {path:'/expgym',component:ExpGym},
                {path:'/mycoach',component:MyCoach},
                {path:'/expcoach',component:ExpCoach},

            ]
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
