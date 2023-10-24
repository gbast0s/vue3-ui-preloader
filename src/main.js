import { createApp } from 'vue'
import App from './App.vue'
import VueTransitions from '@morev/vue-transitions';
import Toast, { useToast } from "vue-toastification"


import '@morev/vue-transitions/styles';
import 'bootstrap/dist/css/bootstrap.css'
import "vue-toastification/dist/index.css"


const toast = useToast();

const options = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 5,
  newestOnTop: true,
  position: "top-right",
  timeout: 3500,
  closeOnClick: false,
  pauseOnFocusLoss: false,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false
};


const app = createApp(App)
    .use(VueTransitions)
    .use(Toast, options)

app.config.globalProperties.$toast = toast;

app.mount('#app')
