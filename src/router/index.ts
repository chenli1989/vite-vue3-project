import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ViewHome',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/vuex',
    name: 'ViewVuex',
    component: () => import('@/views/Vuex.vue'),
  },
  {
    path: '/axios',
    name: 'ViewAxios',
    component: () => import('@/views/Axios.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
