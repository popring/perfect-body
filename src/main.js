import { createApp } from 'vue'

import 'vant/lib/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'

createApp(App).use(store).use(Vant).use(router).mount('#app')
