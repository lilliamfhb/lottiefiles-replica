import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage'
import MainLayout from '../layouts/MainLayout'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
            meta: {layout: MainLayout}
        }
    ]
})

export default router