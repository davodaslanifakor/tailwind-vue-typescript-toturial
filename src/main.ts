import {createApp} from 'vue'
import {router} from "@/router";
import App from './App.vue'
import './assets/main.css'
import {todayPost, monthPost, weekPost} from "@/mocks/mocks";
import axios from 'axios'
import 'highlight.js/styles/arta.css'
import {Post} from "@/type";
const random = require('lodash.random');

const delay = (ms: number) => (new Promise(res => setTimeout(res, ms)))
// @ts-ignore
axios.get = async (url: string) => {
    if (url === '/posts') {
        await delay(1000)
        return Promise.resolve({
            data: [todayPost, monthPost, weekPost]
        })
    }
}
// @ts-ignore
axios.post = async (url: string, payload: Post) => {
    if (url === '/posts') {
        await delay(1000)
        const id = random(100, 10000)
        return Promise.resolve({
            // @ts-ignore
            data: {id, ...payload}
        })
    }
}

const app = createApp(App)
app.use(router)
app.mount('#app')
