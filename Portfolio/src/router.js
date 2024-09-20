import { createRouter, createWebHistory } from 'vue-router';


import Home from './components/AppHome.vue';
import ContactForm from './components/ContactForm.vue';
import NotFound from './components/NotFound.vue';
import AboutMe from './components/AppAboutMe.vue';



const routes = [

  { path: '/', component: Home },
  { path: '/contact', component: ContactForm },
  { path: '/about', component: AboutMe },  
  { path: '/:pathMatch(.*)*', component: NotFound },  // 404 fallback for any undefined routes
    
]; 

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;