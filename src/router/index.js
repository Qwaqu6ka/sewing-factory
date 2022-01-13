import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import Materials from '../views/Materials.vue'
import Accessories from '../views/Accessories.vue'
import Orders from '../views/Orders.vue'
import Profile from '../views/Profile.vue'
import OrderDetails from '../views/OrderDetails.vue'
import AccessoriesDetail from '../views/AccessoriesDetail.vue'
import MaterialDetail from '../views/MaterialDetail.vue'


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
        path: '/nomenclature/materials/:id',
        name: 'Materials details',
        component: MaterialDetail
    },
    {
        path: '/nomenclature/accessories',
        name: 'Accessories',
        component: Accessories
    },
    {
        path: '/nomenclature/accessories/:id',
        name: 'Accessories detail',
        component: AccessoriesDetail
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    },
    {
        path: '/orders/:id',
        name: 'Orders details',
        component: OrderDetails
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
