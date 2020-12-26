import HomePage from "@/views/HomePage";
import ContactRequests from "@/views/ContactRequests";
import MyContacts from "@/views/MyContacts";
import NotFoundPage from "@/views/NotFoundPage";

import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/contact-requests",
    component: ContactRequests
  },
  {
    path: "/contacts",
    component: MyContacts
  }
  // {
  //   path: "*",
  //   component: NotFoundPage
  // }
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes
});

export default router;
