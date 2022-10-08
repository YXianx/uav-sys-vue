const user = () => import('@/view/main/system/user/User.vue')

export default {
    path: '/main/system/user',
    name: 'user',
    meta: { title: '个人信息' },
    component: user,
    children: []
}