import { createApp } from "vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// createApp(App).use(autoAnimatePlugin).mount("#app");
createApp(App).use(store).use(router).use(autoAnimatePlugin).mount("#app");
