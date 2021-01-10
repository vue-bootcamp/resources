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
    path: "/question/:id",
    name: "QuestionDetail",
    components: {
      default: import(
        /* webpackChunkName: "about" */ "../views/QuestionDetail.vue"
      ),
      appHeader
    }
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
