import { requestAccountLogin, requestUserInfoById, requestUserMenus } from '@/service/login/login'
import localCache from '@/utils/LocalCache'
import router from '@/router/index'
const loginModule = {
    namespaced: true,
    state: {
        token: '',
        userInfo: {},
        userMenus: []
    },
    getters: {},
    mutations: {
        changeToken(state, payload) {
            state.token = payload
        },
        changeUserInfo(state, payload) {
            state.userInfo = payload
        },
        changeUserMenus(state, payload) {
            state.userMenus = payload
        }
    },
    actions: {
        async accountLoginAction({commit}, payload) {
            // 1、账号登陆
            const loginResult = await requestAccountLogin(payload)
            // 2、获取用户信息
            const userInfo = loginResult.data
            localCache.setCache('userInfo',userInfo)
            commit('changeUserInfo', userInfo)

            // 3、获取用户菜单树
            const userMenusResult = await requestUserMenus()
            const userMenus = userMenusResult.data
            console.log(userMenus);
            localCache.setCache('userMenus', userMenus)
            commit('changeUserMenus', userMenus)

            // 4、跳转首页
            router.push('/main')
        },

        // 从缓存获取用户登陆信息加载到vuex
        setupLoginState({commit}) {
            const userInfo = localCache.getCache('userInfo')
            // const userMenus = localCache.getCache('userMenus')
            if (userInfo) {
                commit('changeUserInfo',userInfo)
            }
            // if (userMenus) {
            //     commit('changeUserMenus',userMenus)
            // }
        }
    }
}

export default loginModule