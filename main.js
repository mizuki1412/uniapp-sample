import App from "./App.vue"
// import "./index.css"

import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.config.productionTip = false
  return {
    app
  }
}
