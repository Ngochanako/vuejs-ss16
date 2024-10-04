import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; // Import MDI icons
const app = createApp(App)

app.use(router)
const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi", // Use Material Design Icons
  },
  components,
  directives,
});

app.use(vuetify).mount("#app");
