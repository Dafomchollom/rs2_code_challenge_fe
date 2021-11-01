import Vue from "vue";
import VueRouter from "vue-router";
import PageNotFound from "@/views/404.vue";

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
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
