import {mount} from "@vue/test-utils";
import NewPost from "@/NewPost.vue";
import {createStore, initialState} from "@/store";
import {Post} from "@/type";
import {makeRouter} from "@/router";
const store = createStore({
    ...initialState(),
    authors: {
        ...initialState().authors,
        currentUserId: '2'
    }

})
const router = makeRouter()
const options = {
    global: {
        provide: {
            store
        },
        plugin:[router]
    }
}

const mockRoutes: string[] = []
jest.mock('vue-router', () => ({
    useRouter: () => ({
        push: (url: string) => {
            mockRoutes.push(url)
        }
    })
}))
jest.mock('axios',()=>({
    post: (url: string, payload: Post)=>{
        return {data:payload}
    }
}))
describe.only('NewPost',   () => {
    it('create a post and route',async () => {
        const wrapper = mount(NewPost, options)
        expect(store.getState().posts.ids).toHaveLength(0)
        await wrapper.find('[data-test="save-post"]').trigger('click')
        await wrapper.vm.$nextTick()
        expect(store.getState().posts.ids).toHaveLength(1)

        expect(mockRoutes).toEqual(['/'])
    })
})