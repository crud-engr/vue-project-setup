import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

/**
 * DO NOT TOUCH
 *
 * Check if user is authenticated to go to the next view
 * If user is not authenticated, redirect to login view
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (!store.state.token) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
