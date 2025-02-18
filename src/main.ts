
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
console.log(import.meta.env, 'import.meta.env')
app.use(createPinia())
app.use(router)


app.mount('#app')
