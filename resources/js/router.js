import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/404',
        name: 'not-found',
        component: () => import('./views/NotFound.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router