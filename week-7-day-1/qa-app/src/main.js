import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/app.css";
// GLOBAL Component Registration
import appHeader from "@/components/appShared/appHeader";

createApp(App)
  .use(store)
  .use(router)
  .component("appHeader", appHeader)
  .mount("#app");
