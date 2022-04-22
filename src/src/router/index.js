import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeContainer.vue";
import AboutView from "../components/AboutContainer.vue";
import GsapView from "../components/GsapContainer.vue";

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView,
    },
    {
        path: '/gsap',
        name: 'GsapView',
        component: GsapView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;