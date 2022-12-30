import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import {vueDeviceDetect} from 'vue-device-detect'

const app = createApp(App)
app.use(ElementPlus)
app.use(vueDeviceDetect)
app.mount('#app')
