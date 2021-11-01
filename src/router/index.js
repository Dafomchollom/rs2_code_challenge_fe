import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/store",
    name: "Store",
    component: () => import("../views/Store.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
