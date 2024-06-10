import { createWebHistory, createRouter } from "vue-router";
import { useMainStore } from "./store/MainStore";
import { createPinia, setActivePinia } from 'pinia';

// Ensure Pinia is properly set up
const pinia = createPinia();
setActivePinia(pinia);

const routes = [
    { path: '/', component: () => import('./view/Home.vue'), name: 'home' },
    { path: '/login', name: 'login', component: () => import('./view/Login.vue') },
    { path: '/view-exam', 
      name: 'view-exam', 
      component: () => import('./view/ViewExam.vue'),
      beforeEnter: async (to, from, next) => {
          const mainStore = useMainStore();
          if (mainStore.user.role === 'user') {
              next();
          } else {
              next({ name: 'home' }); // Redirect to login if the user is not authorized
          }
      }
    },
    { path: '/register', name: 'register', component: () => import('./view/Register.vue') },
    { path: '/create-exam', name: 'create-exam', component: () => import('./view/CreateExam.vue') }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
