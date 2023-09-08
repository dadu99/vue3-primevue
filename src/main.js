import './assets/main.css'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

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
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import Chips from 'primevue/chips';
import Checkbox from 'primevue/checkbox';
import Editor from 'primevue/editor';
import InputMask from 'primevue/inputmask';
import Listbox from 'primevue/listbox';
import RadioButton from 'primevue/radiobutton';
import Rating from 'primevue/rating';
import Slider from 'primevue/slider';

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
app.component('Textarea', Textarea);
app.component('Dropdown', Dropdown);
app.component('Dialog', Dialog);
app.component('Chips', Chips);
app.component('Checkbox', Checkbox);
app.component('Editor', Editor);
app.component('InputMask', InputMask);
app.component('Listbox', Listbox);
app.component('RadioButton', RadioButton);
app.component('Rating', Rating);
app.component('Slider', Slider);

app.use(router)
app.use(VueAxios, axios)
app.use(ToastService);

app.mount('#app')
