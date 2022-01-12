import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

function toRem(val) {
    return val / 16;
}

createApp(App).use(store).use(router).mount('#app')
