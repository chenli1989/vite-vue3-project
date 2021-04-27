import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ViewHome',
    component: () => import('@/views/Home.vue'),
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
  history: createWebHistory(),
  routes,
});

export default router;
