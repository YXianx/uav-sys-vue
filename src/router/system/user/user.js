const user = () => import('@/view/main/system/user/User.vue')

export default {
    name: 'user',
    path: '/main/system/user',
    meta: { title: '个人信息' },
    component: user,
    children: []
}