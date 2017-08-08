import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => require(['@/pages/home/Home'], resolve),
  },
];

const router = new Router({
  routes,
});

export default router;
