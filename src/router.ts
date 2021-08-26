// @ts-ignore
import {createRouter , createWebHistory} from 'vue-router'
import Home from './Home.vue'
import NewPost from './NewPost.vue'
import ShowPost from './ShowPost.vue'
import EditPost from './EditPost.vue'
import {store} from "@/store";
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home,
            meta:{
                auth: false
            }
        },
        {
            name: 'ShowPost',
            path: '/posts/:id',
            component: ShowPost,
            meta:{
                auth: false
            }
        },
        {
            name: 'EditPost',
            path: '/posts/:id/edit',
            component: EditPost,
            meta:{
                auth: true
            }
        },
        {
            name: 'NewPost',
            path: '/posts/new',
            component: NewPost,
            meta:{
                auth: true
            }
        }
    ]
})
router.beforeEach((to,from,next)=>{
    if(to.meta.auth && !store.getState().authors.currentUserId){
        next({
            name:"Home"
        })
    } else {
        next()
    }
})