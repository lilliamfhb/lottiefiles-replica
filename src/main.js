import { createApp } from 'vue'
import App from './App.vue'
import Store from './store'
import router from './router'
import './assets/styles/main.scss'

createApp(App).use(Store).use(router).mount('#app')
