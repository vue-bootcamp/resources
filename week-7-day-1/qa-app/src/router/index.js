import { createRouter, createWebHashHistory } from "vue-router";
import appHeader from "@/components/appShared/appHeader";
import { isObject, isArray } from "util";
import store from "../store";

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
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/User/Register")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/User/Login")
  },
  {
    path: "/account",
    name: "Account",
    components: {
      default: () => import("../views/User/Authenticated/Account.vue"),
      appHeader
    }
  },
  {
    path: "/my-questions",
    name: "MyQuestions",
    components: {
      default: () => import("../views/User/Authenticated/MyQuestions.vue"),
      appHeader
    }
  },
  {
    path: "/favorites",
    name: "Favorites",
    components: {
      default: () => import("../views/User/Authenticated/Favorites.vue"),
      appHeader
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  let user = null;
  const authenticatedPages = [
    "Account",
    "Favorites",
    "MyQuestions",
    "NewQuestion"
  ];
  // LocalStorage üzerinde User var mi?
  if (localStorage?.user) user = JSON.parse(localStorage?.user);
  // LocalStorage üzerinde User varsa Store'u güncelle
  if (isObject(user) && !isArray(user)) store.commit("users/setUser", user);
  // isAuthenticated bilgisini Store üzerinden al..
  const isAuthenticated = store.getters["users/isAuthenticated"];

  if (isAuthenticated) store.dispatch("users/setFavorites");

  // Rules...
  // Eğer Giriş yapmamışsa ve User ile ilgili bölümlere girmek istiyorsa.. Engelle ve Login sayfasına yönlendir..
  if (!isAuthenticated && authenticatedPages.indexOf(to.name) > -1)
    next({ name: "Login" });

  if (isAuthenticated && (to.name === "Login" || to.name === "Register"))
    next({ name: "Home" });

  next();
});

export default router;
