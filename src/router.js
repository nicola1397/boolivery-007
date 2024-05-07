import { createRouter, createWebHistory } from "vue-router";

import AppMain from "./pages/AppMain.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppMain,
    },
  ],
});

export { router };
