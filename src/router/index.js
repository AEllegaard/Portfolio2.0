import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../components/homeview.vue';
import AboutView from '../components/aboutview.vue';
import WorkView from '../components/workview.vue';
import ContactView from '../components/contactview.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/work', component: WorkView },
  { path: '/contact', component: ContactView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
