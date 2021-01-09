import { createRouter, createWebHashHistory } from "vue-router";
import appHeader from "@/components/appShared/appHeader";

const routes = [
  {
    path: "/",
    name: "Home",
    // component: Home,
    components: {
      default: () => import("../views/Home.vue"),
      appHeader
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/new",
    name: "NewQuestion",
    // component: () => import("../views/NewQuestion.vue"),
    components: {
      default: () => import("../views/NewQuestion.vue"),
      appHeader
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
