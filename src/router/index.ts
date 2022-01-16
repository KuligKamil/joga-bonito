import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import Player from '../views/Player.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Games',
        component: Home
    },
    {
        path: '/players/:playerID',
        name: 'player',
        component: Player
    },
    {
        path: '/players',
        name: 'players',
        component: Player
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
