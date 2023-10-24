import { createApp } from 'vue'
import App from './App.vue'
import VueTransitions from '@morev/vue-transitions';

import '@morev/vue-transitions/styles';
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
    .use(VueTransitions)

app.mount('#app')
