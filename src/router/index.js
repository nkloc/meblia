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
    path: "/services",
    name: "Services",
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
    path: "/kursii",
    name: "Kursii",
    component: Product,
    meta: {
      product: "Kursii",
      title: "Chaise Kursii",
      price: "439 €",
      imgPath: "Kursii",
      desc: `Les segments minutieusement cousus sur l'assise et le dossier, ainsi que le passepoil sur tout le pourtour confèrent à la chaise le look intemporel du Mid-Century.
      Le fauteuil Retrostar Lounge Chair en velours recyclé offre un grand confort grâce à son assise et son dossier généreusement rembourrés, légèrement incurvés et dotés d'une suspension en acier.`,
      details: `Pas d'info`,
      dimensions: `Pas d'info`,
    },
  },
  {
    path: "/karsa",
    name: "Karsa",
    component: Product,
    meta: {
      product: "Karsa",
      title: "Chaise Karsa",
      price: "357 €",
      imgPath: "Karsa",
      desc: `Le fauteuil Karsa offre une version contemporaine et unique de l'artisanat traditionnel recyclé. Surprenant mais subtil, il incarne l'esthétique de la simplicité et de la sophistication.
      Sa silhouette distinctive, inspirée du rythme des pagodes japonaises, crée une expérience ergonomique agréable et constitue un accessoire magnifique et luxueux pour la maison moderne.`,
      details: `Pas d'info`,
      dimensions: `Pas d'info`,
    },
  },
  {
    path: "/misbah",
    name: "misbah",
    component: Product,
    meta: {
      product: "misbah",
      title: "Lampe Misbah",
      price: "407 €",
      imgPath: "misbah",
      desc: `La lampe Kaskad - Small est une suspension en céramique aux tons bruts et au look moderne. Sa surface texturée et rainurée est conçue pour imiter l'eau qui coule et les vagues, ajoutant un calme terrestre à votre espace. 
      Chaque lampe est coulée à la main et fabriquée par des experts, et elle est aussi belle en solo qu'en groupe.`,
      details: `Pas d'info`,
      dimensions: `Pas d'info`,
    },
  },
  {
    path: "/musanad",
    name: "Musanad",
    component: Product,
    meta: {
      product: "Musanad",
      title: "Pouf Musanad",
      price: "100 €",
      imgPath: "Musanad",
      desc: `Intemporel, confortable et pratique - ce sont les caractéristiques essentielles du pouf classique Sternzeit. 
      Les magnifiques pieds en bois de hêtre massif recyclé sont fabriqués de manière artisanale, puis teintés et laqués transparents. Le rembourrage confortable est soutenu par une solide suspension métallique. `,
      details: `Pas d'info`,
      dimensions: `Pas d'info`,
    },
  },
  {
    path: "/tawila",
    name: "tawila",
    component: Product,
    meta: {
      product: "tawila",
      title: "Table Tawila",
      price: "362 €",
      imgPath: "tawila",
      desc: `Le membre de taille moyenne de la famille Tawila de Woodendot n'est pas seulement une table basse en bois recyclé ; il comprend un petit espace de rangement où vous pouvez garder les petits objets essentiels du quotidien hors de la vue et organisés. 
      Alliant avec goût tradition et modernité, la Tawila s'adapte à la dynamique de son espace de vie.`,
      details: `Pas d'info`,
      dimensions: `Pas d'info`,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
