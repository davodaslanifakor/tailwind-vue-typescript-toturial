import {mount} from "@vue/test-utils";
import PostWriter from "@/PostWriter.vue";
import {basePost} from "@/mocks/mocks";
describe('PostWriter',()=>{
    it('compost a post and emit new data',(done)=>{
        const wrapper = mount(PostWriter,{
            props:{
                post: {
                    ...basePost
                }
            }
        })
        wrapper.find('[data-test="title"]').setValue('new post title')
        wrapper.find<HTMLDivElement>('[data-test="markdown"]').element.innerText = '### content'
        wrapper.find<HTMLDivElement>('[data-test="markdown"]').trigger('input')
        setTimeout(()=>{
            wrapper.find('[data-test="save-post"]').trigger('click')
            // @ts-ignore
            expect(wrapper.emitted().save[0][0].title).toBe('new post title')
            // @ts-ignore
            expect(wrapper.emitted().save[0][0].markdown).toBe('### content')
            // @ts-ignore
            expect(wrapper.emitted().save[0][0].html).toBe('<h3 id="content">content</h3>\n')
            console.log(wrapper.emitted().save)
            done()
        },550)
    })
})