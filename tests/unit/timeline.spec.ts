import {mount} from '@vue/test-utils'
import Timeline from "@/components/Timeline.vue";

describe('Timeline', () => {
  it.only('render a loader', ()=>{
    const wrapper = mount(Timeline)
    expect(wrapper.findAll('[data-test="loading-post"]')).toHaveLength(1)
  })
  it('renders 3 times periods', () => {
    const wrapper = mount(Timeline)
    console.log(wrapper.html())
    expect(wrapper.findAll('[data-test="period-item"]')).toHaveLength(3)
  })
  it('update period when clicked', async ()=>{
    const wrapper = mount(Timeline)
    const $today = wrapper.findAll('[data-test="period-item"]')[0]
    expect($today.classes()).toContain('is-active')
    const $week = wrapper.findAll('[data-test="period-item"]')[1]
    await $week.trigger('click')
    expect($today.classes()).not.toContain('is-active')
    expect($week.classes()).toContain('is-active')
  })
  it('render post today by default', async ()=>{
    const wrapper = mount(Timeline)
    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(1)

    const $month = wrapper.findAll('[data-test="period-item"]')[2]
    await $month.trigger('click')
    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(3)

    const $week = wrapper.findAll('[data-test="period-item"]')[1]
    await $week.trigger('click')
    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(2)


  })
})
