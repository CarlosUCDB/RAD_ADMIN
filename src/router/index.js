/* eslint-disable eol-last */
/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import adm from '@/components/adm'
import verifica from '@/components/verifica'
import Login from '@/components/login'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'adm',
            component: adm
        }, {
            path: '/verifica',
            name: 'verifica',
            component: verifica
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})