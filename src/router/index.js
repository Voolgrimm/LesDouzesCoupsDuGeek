import { createRouter, createWebHistory } from "vue-router";
import QuizComponent from "../components/QuizComponent.vue";
import LoginComponent from "../components/LoginComponent.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginComponent,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: QuizComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
