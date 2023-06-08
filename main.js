import App from "./App.vue"
// import './tailwind.css'

// init
initConfigInLib()

import { createSSRApp } from 'vue'
import {initConfigInLib} from "./config/config";
export function createApp() {
  const app = createSSRApp(App)
  app.config.productionTip = false
  return {
    app
  }
}
