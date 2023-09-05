import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';

//Primevue components
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProgressSpinner from 'primevue/progressspinner';
import Chart from 'primevue/chart';
import Image from 'primevue/image';
import ToastService from 'primevue/toastservice';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Button from "primevue/button"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue);
app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ProgressSpinner', ProgressSpinner);
app.component('Chart', Chart);
app.component('Image', Image);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);

app.use(router)
app.use(VueAxios, axios)
app.use(ToastService);

app.mount('#app')
