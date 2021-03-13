import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";
import Lista from "../views/Lista.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },

  {
    path: "/listaopcoes",
    name: "ListaOpções",
    component: Lista,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
