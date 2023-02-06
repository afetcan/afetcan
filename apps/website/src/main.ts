import { createApp } from 'vue'
import './style.css'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const pinia = createPinia()
const head = createHead()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(head)
app.mount('#app')
