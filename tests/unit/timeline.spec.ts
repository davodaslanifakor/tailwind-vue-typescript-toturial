import {mount} from '@vue/test-utils'
import Timeline from "@/components/Timeline.vue";

describe('Timeline', () => {
  it('renders 3 times periods', () => {
    const wrapper = mount(Timeline)
    expect(wrapper.findAll('[data-test="period-item"]')).toHaveLength(3)
  })
})
