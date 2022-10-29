import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact-us',
        name: 'Contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contact-us" */ '../views/ContactUs.vue')
    },
    {
        path: '/machinery',
        name: 'Machinery',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "machinery" */ '../views/Machinery.vue')
    },
    {
        path: '/machinery/{id}',
        name: 'Machine',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "machine" */ '../views/Machine.vue')
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
