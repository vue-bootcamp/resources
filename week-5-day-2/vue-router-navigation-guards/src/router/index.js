import Home from "@/views/Home";
import About from "@/views/About";
import Settings from "@/views/UserSettings";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/settings",
    component: Settings,
  },
  {
    path: "/settings/:id",
    component: Settings,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
