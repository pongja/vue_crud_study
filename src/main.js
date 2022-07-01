import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 스타일
import 'bootstrap-icons/font/bootstrap-icons.css'; //부트스트랩 아이콘
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

createApp(App).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.js'; //부트스트랩.js
