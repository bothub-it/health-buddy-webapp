import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Privacy from '@/views/Privacy';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: Privacy,
        },
    ],
});