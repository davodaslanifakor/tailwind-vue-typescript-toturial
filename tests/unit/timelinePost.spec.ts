import {shallowMount} from '@vue/test-utils'
import TimelinePost from "@/components/TimelinePost.vue";
import moment from "moment";

describe('TimelinePost', () => {
  it('renders mount', () => {
    const post = {
      title: 'post',
      created: moment()

    }
    const wrapper = shallowMount(TimelinePost, {
      props: { post }
    })
    expect(wrapper.find("[data-test='title-post']").text()).toMatch(post.title)
  })
})
