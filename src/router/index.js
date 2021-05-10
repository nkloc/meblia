import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Products from "../views/Products.vue";
import Contact from "../views/Contact.vue";
import Product from "../views/Product.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/Products",
    name: "Products",
    component: Products,
  },
  {
    path: "/Product/cuure",
    name: "Product",
    component: Product,
    meta: {
      title: "Cuure",
      titleProjet: "Le projet cuure...",
      toolUsed: {
        figma: {
          descriptionProduct:
            "Description de l'utilisation de l'outil au sein du poste",
        },
        illustrator: {
          descriptionProduct:
            "Description de l'utilisation de l'outil au sein du poste",
        },
      },
      imgPath: "cuure",
      imgNumber: 4,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
