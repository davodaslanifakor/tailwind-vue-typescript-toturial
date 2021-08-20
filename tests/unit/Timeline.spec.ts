import {defineComponent, h, Suspense} from 'vue'
import {mount} from '@vue/test-utils'
import Timeline from "@/components/Timeline.vue";
import flushPromises from 'flush-promises'
import Home from "@/Home.vue";
import {todayPost, monthPost, weekPost} from "@/mocks/mocks";

const mountSuspense = async (component, options) => {
    const wrapper = mount(defineComponent({
        render() {
            return h(Suspense, null, {
                default: h(component),
                fallback: h('div', 'fallback')
            })
        }
    }), options)

    await flushPromises()
    return wrapper
}

jest.mock('axios', () => ({
    get: (url: string) => ({
        data: [todayPost, monthPost, weekPost]
    })
}))
describe('Timeline', () => {
    it('render a loader', async () => {
        // @ts-ignore
      const wrapper = mount(Home)
      expect(wrapper.find('[data-test="loading-post"]').exists()).toBe(true)
    })
    it('renders 3 times periods', async () => {
        // @ts-ignore
        const wrapper = await mountSuspense(Timeline)
        expect(wrapper.findAll('[data-test="period-item"]')).toHaveLength(3)
    })
    it('update period when clicked', async () => {
        // @ts-ignore
        const wrapper = await mountSuspense(Timeline)
        const $today = wrapper.findAll('[data-test="period-item"]')[0]
        expect($today.classes()).toContain('is-active')
        const $week = wrapper.findAll('[data-test="period-item"]')[1]
        await $week.trigger('click')
        expect($today.classes()).not.toContain('is-active')
        expect($week.classes()).toContain('is-active')
    })
    it('render post today by default', async () => {
        // @ts-ignore
        const wrapper = await mountSuspense(Timeline)
        expect(wrapper.findAll('[data-test="post"]')).toHaveLength(1)

        const $month = wrapper.findAll('[data-test="period-item"]')[2]
        await $month.trigger('click')
        expect(wrapper.findAll('[data-test="post"]')).toHaveLength(3)

        const $week = wrapper.findAll('[data-test="period-item"]')[1]
        await $week.trigger('click')
        expect(wrapper.findAll('[data-test="post"]')).toHaveLength(2)


    })
})
