import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AxiosPlugin from "./plugin/axios";

const app = createApp(App);

app.use(router);
app.use(AxiosPlugin, { baseUrl: import.meta.env.BASE_URL });
app.mount("#app");
