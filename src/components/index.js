// Import vue component
import loader from './loader.vue';

// Declare install function executed by Vue.use()
export default {
    install: (app) => {
        app.component('loader', loader)
    },
};