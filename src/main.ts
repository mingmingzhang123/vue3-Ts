import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vuex
import { store, key } from './store'
// 引入elementui-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(router)
app.use(store, key)
app.use(ElementPlus)
app.mount('#app')

