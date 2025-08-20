import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';
import './scss/style.scss';
import router from './routes';
import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
});
app.use(router);
app.use(ToastService);

app.mount('#app');
