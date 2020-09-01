import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Privacy from '@/views/Privacy';
import About from '../views/About';


Vue.use(Router);

export default new Router({
  mode: 'history',
  // eslint-disable-next-line no-unused-vars
  scrollBehavior: function (to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (to.hash) {
          resolve({ selector: to.hash });
        } else {
          resolve({ x: 0, y: 0 })
        }
      }, 0);
    });
  },
  routes: [
    {
      path: '/',
      beforeEnter: async (to, from, next) => {
        next('index');
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Home,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
