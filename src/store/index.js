import { createStore } from 'vuex'
import login from './login/login'

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

// 加载store数据
export function setupStore () {
  // 加载用户数据
  store.dispatch('login/setupLoginState')
}

export default store
