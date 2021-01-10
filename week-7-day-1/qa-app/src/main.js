import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/app.css";
// GLOBAL Component Registration
import appHeader from "@/components/appShared/appHeader";
import appLoading from "@/components/appShared/appLoading";

const app = createApp(App);
app.use(store);
app.use(router);
app.component("appHeader", appHeader);
app.component("appLoading", appLoading);
app.mount("#app");
