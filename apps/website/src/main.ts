import { createApp } from 'vue'
import './style.css'
import { createHead } from '@vueuse/head'
import { createPlausible } from '@huntersofbook/plausible-vue'
import App from './App.vue'
import router from './router'

const plausible = createPlausible({
  init: {
    domain: 'acildeprem.com',
    apiHost: 'https://rapor.acildeprem.com',
    trackLocalhost: false,
  },
  settings: {
    enableAutoOutboundTracking: true,
    enableAutoPageviews: true,
  },
  partytown: false,
})

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const pinia = createPinia()
const head = createHead()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(head)
app.use(plausible)
app.mount('#app')
