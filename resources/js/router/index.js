// import {createRouter, createWebHistory} from "vue-router";

// import CompaniesIndex from '../components/companies/CompaniesIndex'
// import CompaniesCreate from '../components/companies/CompaniesCreate'

// const routes = [
//     {
//         path: '/dashboard', //laravel breeze use dashboard
//         name:'companies.index',
//         component: CompaniesIndex
//     },
//     {
//         path: '/companies/create', //laravel breeze use dashboard
//         name:'companies.create',
//         component: CompaniesCreate
//     }
// ]

// export default createRouter(
//     {
//         history: createWebHistory(),
//         routes
//     }
// )

import { createRouter, createWebHistory } from "vue-router";

import CompaniesIndex from '../components/companies/CompaniesIndex'
import CompaniesCreate from '../components/companies/CompaniesCreate'
import CompaniesEdit from '../components/companies/CompaniesEdit'

const routes = [
    {
        path: '/dashboard',
        name: 'companies.index',
        component: CompaniesIndex
    },
    {
        path: '/companies/create',
        name: 'companies.create',
        component: CompaniesCreate
    },
    {
        path: '/companies/:id/edit',
        name: 'companies.edit',
        component: CompaniesEdit,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})