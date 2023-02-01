import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// import Button from "./components/Button/Button";

const app = createApp(App);

// global component (reusable) should stay here. See example below
// app.component("Button", Button);

app.mount("#app");
