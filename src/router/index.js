import {createWebHistory, createRouter} from 'vue-router'
import PageRecargas from '@/views/PageRecargas.vue'
import Main from '@/views/Main.vue'
import RecargasPagos from '@/views/RecargasPagos.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/RecargasPagos',
        name: 'RecargasPagos',
        component: RecargasPagos
    },
    {
        path: '/PageRecargas',
        name: 'PageRecargas',
        component: PageRecargas
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;