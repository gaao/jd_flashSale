import { createApp } from 'vue'
import App from './App.vue'
import { Button, Progress } from 'vant'
import '../mock/mock'

createApp(App)
  .use(Button)
  .use(Progress)
  .mount('#app')
