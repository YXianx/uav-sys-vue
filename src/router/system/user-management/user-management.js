const userManagement = () => import('@/view/main/system/user-management/UserManagement.vue')

export default {
    name: 'usermanagement',
    path: '/main/system/usermanagement',
    meta: { title: '用户管理' },
    component: userManagement,
    childrend: []
}