import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Installation from './components/Installation.vue';
import Basics from './components/Basics.vue';
import CSS from './components/CSS.vue';
import Components from './components/Components.vue';
import Router from './components/Router.vue';
import API from './components/API.vue';
import StateandVuex from './components/StateandVuex.vue';
import Deploy from './components/Deploy.vue';

const routes = [
  { path: '/Home', component: Home },
  { path: '/Installation', component: Installation },
  { path: '/Basics', component: Basics },
  { path: '/CSS', component: CSS },
  { path: '/Components', component: Components },
  { path: '/Router', component: Router },
  { path: '/API', component: API },
  { path: '/StateandVuex', component: StateandVuex },
  { path: '/Deploy', component: Deploy }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app');





