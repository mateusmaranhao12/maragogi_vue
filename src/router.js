//Importando Vue-router
import { createRouter, createWebHistory } from 'vue-router'

//Rotas

import BaresERestaurantes from '@/components/BaresERestaurantes/BaresERestaurantes.vue'
import Compras from '@/components/Compras/Compras.vue'
import Historia from '@/views/Historia/Historia.vue'
import Home from '@/views/Home/Home.vue'
import Maragogi from '@/views/Maragogi/Maragogi.vue'
import Mergulho from '@/components/Mergulho/Mergulho.vue'
import Noite from '@/components/Noite/Noite.vue'
import PaginaNaoEncontrada from '@/components/PaginaNaoEncontrada/PaginaNaoEncontrada.vue'
import Passeios from '@/components/Passeios/Passeios.vue'
import PasseiosDeBuggy from '@/components/PasseiosDeBuggy/PasseiosDeBuggy.vue'
import PiscinasNaturais from '@/components/PiscinasNaturais/PiscinasNaturais.vue'
import Praia from '@/components/Praia/Praia.vue'
import oQueFazer from '@/views/oQueFazer/oQueFazer.vue'
import Reserva from '@/views/Reserva/Reserva.vue'
import Sucesso from '@/components/Sucesso/Sucesso.vue'

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
        component: oQueFazer,
        children: [
            { path: 'bares-e-restaurantes', component: BaresERestaurantes },
            { path: 'compras', component: Compras },
            { path: 'mergulho', component: Mergulho },
            { path: 'noite', component: Noite },
            { path: 'passeios', component: Passeios },
            { path: 'passeios-de-buggy', component: PasseiosDeBuggy },
            { path: 'piscinas-naturais', component: PiscinasNaturais },
            { path: 'praia', component: Praia }
        ]
    },

    {
        path: '/reserva', //localhost:8080/reserva
        component: Reserva,
        children: [
            { path: 'sucesso', component: Sucesso }
        ]
    },

    //{ path: '/:catchAll(.*)*', redirect: '/' } //vue2 = *
    { path: '/:catchAll(.*)*', component: PaginaNaoEncontrada } //vue2 = *

]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        //return { left: 0, top: 150 } //left = eixo x, top = eixo y

        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) {
            return { el: to.hash } //to.hash deve corresponder a um Id de elemento Html
        }

        return { left: 0, top: 0 }
    },
    routes //routes: routes
})

export default router
