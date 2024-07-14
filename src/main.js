import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/quiz-styles.css"; // Assure-toi que ce chemin est correct

createApp(App).use(router).mount("#app");
