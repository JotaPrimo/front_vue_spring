import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/views/HomePage.vue';
import Login from '@/views/LoginPage.vue';

const routes = [
  { path: '/', name: 'Home',component: Home },
  { path: '/login', name: 'Login', component: Login }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router