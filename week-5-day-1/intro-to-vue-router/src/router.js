import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact";

import { createRouter, createWebHistory } from "vue-router";
const myRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
