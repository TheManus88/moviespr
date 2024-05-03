import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "./plugin/axios.ts";
const app = createApp(App);

app.use(router)
app.use(axios.install(app, { baseUrl: import.meta.env.BASE_URL }))
app.mount("#app");
