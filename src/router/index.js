import {createRouter,createWebHistory} from 'vue-router'
import userRoute from '@/router/system/user/user'
import userManagementRoute from '@/router/system/user-management/user-management'
import examinessRoute from '@/router/exam/examinee/examinee'

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        meta: {
            title: '无人机考评系统 - 登陆'
        },
        component: ()=>import('@/view/login/Login.vue')
    },
    {
        path: '/main',
        meta: {
            title: '无人机考评系统 - 首页'
        },
        component: ()=>import('@/view/main/Main.vue'),
        children: [
            userRoute,
            userManagementRoute,
            examinessRoute
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    // 更换页面标题
    document.title = to.meta.title
    // 判断用户是否已经登陆，无则跳转登陆页
    // if(to.path != '/login') {
    //     const token = localCache.getCache('token')
    //     if(!token) {
    //         return '/login'
    //     }
    // }
})

export default router