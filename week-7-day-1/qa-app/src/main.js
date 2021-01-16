import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/app.css";
// GLOBAL Component Registration
import appHeader from "@/components/appShared/appHeader";
import appLoading from "@/components/appShared/appLoading";

// Editor..
import { quillEditor } from "vue3-quill";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(quillEditor);
app.component("appHeader", appHeader);
app.component("appLoading", appLoading);
app.mount("#app");

// https://www.npmjs.com/package/vue3-quill
