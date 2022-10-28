//Importando Vue-router
import { createRouter, createWebHistory } from 'vue-router'

//Rotas

import Historia from '@/views/Historia/Historia.vue'
import Home from '@/views/Home/Home.vue'
import Maragogi from '@/views/Maragogi/Maragogi.vue'
import oQueFazer from '@/views/oQueFazer/oQueFazer.vue'
import Reserva from '@/views/Reserva/Reserva.vue'

const routes = [

    {
        path: '/historia', //localhost:8080/historia
        component: Historia
    },
    
    {
        path: '/', //localhost:8080 (Rota raíz da aplicação)
        component: Home
    },

    {
        path: '/maragogi', //localhost:8080/maragogi
        component: Maragogi
    },

    {
        path: '/o-que-fazer', //localhost:8080/o-que-fazer
        component: oQueFazer
    },

    {
        path: '/reserva', //localhost:8080/reserva
        component: Reserva
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
