import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

const Vue = createApp(App).use(router);
Vue.mount("#app");

console.log("%cHello there, looking for something?", "font-size: x-large");
