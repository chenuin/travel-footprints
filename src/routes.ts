import {createWebHashHistory, createRouter} from 'vue-router';
import Home from '@/pages/HomePage.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/explore',
        name: 'explore',
        component: () => import('@/pages/ExploreMap.vue'),
    },
    {
        path: '/bucket-list',
        name: 'bucket-list',
        component: () => import('@/pages/BucketList.vue'),
    },
];
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
