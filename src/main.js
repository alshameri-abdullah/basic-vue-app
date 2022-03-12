import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";
import i18n from "./i18n";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(createPinia());
app.use(i18n);
app.use(router);
app.mount("#app");
