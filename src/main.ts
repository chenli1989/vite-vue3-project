import { createApp } from 'vue';
import './styles/index.scss';
import ElementPlus from 'element-plus';
import App from './App.vue';

import router from './router/index';
import store from './store/index';

import { worker } from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker?.start();
}

createApp(App).use(router).use(store).use(ElementPlus).mount('#app');
