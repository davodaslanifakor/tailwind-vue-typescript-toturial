import {reactive, readonly} from 'vue'
import {Post} from "@/type";
import axios from 'axios'

interface PostState {
    ids: string[]
    all: Record<string, Post>
    loaded: boolean
}

interface State {
    posts: PostState
}

const initialPostState = (): PostState => ({
    all: {},
    ids: [],
    loaded: false
})

const initialState = (): State => ({
    posts: initialPostState()
})

class Store {
    protected state: State

    constructor(initialState: State) {
        this.state = reactive(initialState)
    }

    public getState(): State {
        // @ts-ignore
        return readonly(this.state)
    }

    async fetchPosts() {
        const response = await axios.get<Post[]>('/posts')
        const ids: string[] = []
        const all: Record<string, Post> = {}
        for (const post of response.data) {
            ids.push(post.id.toString())
            all[post.id] = post
        }
        this.state.posts ={
            ids,
            all,
            loaded: false
        }
    }
}

const store = new Store(
    initialState()
)
store.getState()

export const useStore = () =>  store