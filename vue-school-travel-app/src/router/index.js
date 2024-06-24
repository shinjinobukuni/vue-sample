import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import sourceData from '@/data.json'

const routes =  [
    {path: '/', name: 'Home', component: Home},
    {path: '/home', redirect: {name: "Home"}},
    {
        path: '/protected', name: 'protected', 
        component: ()=>import('@/views/Protected.vue'),
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/invoices', name: 'invoices',
        component: ()=> import(`@/views/Invoices.vue`),
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: ()=>import('@/views/Login.vue')
    },
    {
        path: '/destination/:id/:slug', 
        name: 'destination.show', component: ()=>import('@/views/DestinationShow.vue'),
        props: route => ({
            ...route.params,
            id: parseInt(route.params.id)
        }),
        beforeEnter(to, from) {
            const exists = sourceData.destinations.find(x => x.id === parseInt(to.params.id))
            console.log(to.path)
            console.log(to.path.split('/'))
            console.log(to.path.split('/').slice(1))
            if (!exists) return {
                name: 'NotFound',
                // パスを変えないように制御する
                params: { pathMatch: to.path.split('/').slice(1) },
                query: to.query,
                hash: to.hash
            }
        },
        children: [
            {
                path: ':experienceSlug', 
                name: 'experience.show', component: ()=>import('@/views/ExperienceShow.vue'),
                props: route => ({
                    ...route.params,
                    id: parseInt(route.params.id)
                })
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savePosition) {
        return savePosition || { top: 0 }
    }
})
router.beforeEach((to, from) =>{
    if(to.meta.requireAuth && !window.user) {
        // need to login if not already logged in
        return {name: 'login', query: { redirect: to.fullPath }}
    }
})
export default router