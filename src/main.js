import { createApp } from 'vue'
import App from './App.vue'
import Store from './store'
import router from './router'
import { Icon } from '@iconify/vue';
import './assets/styles/main.scss'

createApp(App).component('Icon', Icon).use(Store).use(router).mount('#app')
