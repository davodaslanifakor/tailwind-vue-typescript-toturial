import {createApp} from 'vue'
import {router} from "@/router";
import App from './App.vue'
import './assets/main.css'
import {todayPost, monthPost, weekPost} from "@/mocks/mocks";
import axios from 'axios'

const delay = (ms: number) => (new Promise(res => setTimeout(res, ms)))

// @ts-ignore
axios.get = async (url: string) => {
    if (url === '/posts') {
        await delay(1000)
        return  Promise.resolve({
            data: [todayPost, monthPost, weekPost]
        })
    }
}

const app = createApp(App)
app.use(router)
app.mount('#app')
