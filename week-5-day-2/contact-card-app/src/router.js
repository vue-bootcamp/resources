import HomePage from "@/views/HomePage";
import ContactRequests from "@/views/ContactRequests";
import MyContacts from "@/views/MyContacts";
import ContactDetails from "@/views/ContactDetails";
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
  },
  {
    path: "/contact-details/:userId",
    component: ContactDetails
  },
  {
    path: "/not-found",
    component: NotFoundPage
  },
  // Vue 2
  // {
  //   path : "*",
  //   component : NotFoundPage
  // },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage
  }
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes
});

export default router;
