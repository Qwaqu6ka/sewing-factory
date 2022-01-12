import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import Materials from '../views/Materials.vue'
import Accessories from '../views/Accessories.vue'
import Orders from '../views/Orders.vue'
import Profile from '../views/Profile.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/nomenclature/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/nomenclature/materials',
        name: 'Materials',
        component: Materials
    },
    {
        path: '/nomenclature/accessories',
        name: 'Accessories',
        component: Accessories
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    },
    {
        path: '/profile',
        name: 'Profile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Profile
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router