import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import Project from '../views/Project.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/project/cuure',
    name: 'Project',
    component: Project,
    meta: { 
      title: 'Cuure', 
      titleProjet: "Le projet cuure...",
      toolUsed: {
        figma:{
          descriptionProject: "Description de l'utilisation de l'outil au sein du poste"
        },
        illustrator:{
          descriptionProject: "Description de l'utilisation de l'outil au sein du poste"
        },
      },
      imgPath: 'cuure', 
      imgNumber: 4,
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
