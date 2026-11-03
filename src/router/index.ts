import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',

            component: () => import('@/modules/landing/pages/AboutPage.vue'),
        },
        {
            path: '/contact',
            name: 'contact',

            component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
    ],
});

export default router;
