import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { setupStore } from './store/index'

const app = createApp(App)
app.use(store)
setupStore()
app.use(router)
app.mount('#app')