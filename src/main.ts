import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const foo = document.createElement("div");
const classes = [...(foo.classList || [])];
console.log(classes);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
