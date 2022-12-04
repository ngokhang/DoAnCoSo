import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Body/Home.vue';
import Exam from '../components/Body/Exam.vue';
import Ranking from '../components/Body/Ranking.vue';
import Contact from '../components/Body/Contact.vue';
import Error from '../components/Body/Error.vue';
import Login from '../components/Body/Login.vue';
import Register from '../components/Body/Register.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/Home',
        component: Home
    },
    {
        path: '/Exam',
        component: Exam
    },
    {
        path: '/Ranking',
        component: Ranking
    },
    {
        path: '/Contact',
        component: Contact
    },
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/Register',
        component: Register
    },
    {
        path: '/:pathMatch(.*)*',
        component: Error
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;