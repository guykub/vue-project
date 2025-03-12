import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { createStore } from 'vuex';
import MyHome from './components/MyHome.vue';
import BasicPage from './components/BasicPage.vue';
import CSSpage from './components/CSSpage.vue';
import ComponentsPage from './components/ComponentsPage.vue';
import Router from './components/Router.vue';
import APIpage from './components/APIpage.vue';
import StateandVuex from './components/StateandVuex.vue';
import ProjectStructure from './components/ProjectStructure.vue';
import InstallationComponent from './components/InstallationComponent.vue';
import GreetingComponent from './components/GreetingComponent.vue';
import CounterComponent from './components/CounterComponent.vue';
import ChildComponent from './components/ChildComponent.vue';
import FullName from './components/FullName.vue';
const routes = [
  { path: '/', component: MyHome },
  { path: '/MyHome', component: MyHome },
  { path: '/InstallationComponent', component: InstallationComponent },
  { path: '/ProjectStructure', component: ProjectStructure },
  { path: '/BasicPage', component: BasicPage },
  { path: '/CSSpage', component: CSSpage },
  { path: '/ComponentsPage', component: ComponentsPage },
  { path: '/Router', component: Router },
  { path: '/APIpage', component: APIpage },
  { path: '/StateandVuex', component: StateandVuex },
  { path: '/Greeting', component: GreetingComponent },
  { path: '/Counter', component: CounterComponent },
  { path: '/Child', component: ChildComponent },
  { path: '/FullName', component: FullName }
];

const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    }
  },
  getters: {
    count: (state) => state.count
  }
});
const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(store).use(router).mount('#app');





