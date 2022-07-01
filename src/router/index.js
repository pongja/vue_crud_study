import { createRouter, createWebHashHistory } from 'vue-router';
import ToHome from '@/views/ToHome.vue';
import ToAbout from '@/views/ToAbout.vue';

const routes = [
  {
    path: '/',
    component: ToHome,
  },
  {
    path: '/about',
    component: ToAbout,
  },
];

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
});

export default router;
