import Home from "@/views/Home.vue";
import Movies from "@/views/Movies.vue";
import Series from "@/views/Series.vue";
import Premieres from "@/views/Premieres.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/movies", name: "Movies", component: Movies },
  { path: "/series", name: "Series", component: Series },
  { path: "/premieres", name: "Premieres", component: Premieres },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
