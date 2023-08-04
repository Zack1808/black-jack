import { createApp } from "vue";

// Importing the App component
import App from "./components/App.vue";

// Importing the store
import store from "./store";

// Rendering the App component
createApp(App).use(store).mount("#app");
