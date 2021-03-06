// require('./bootstrap');

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();



// import {createApp} from "vue";

// import router from './router'
// import CompaniesIndex from './components/companies/CompaniesIndex'

// createApp(
//     {
//         components:{
//             CompaniesIndex
//         }
//     }
//     ).use(router).mount('#app');



require('./bootstrap');

require('alpinejs');

import { createApp } from "vue";
import router from './router'
import CompaniesIndex from './components/companies/CompaniesIndex'

createApp({
    components: {
        CompaniesIndex
    }
}).use(router).mount('#app')