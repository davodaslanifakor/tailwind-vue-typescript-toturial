<template>
  <div class="container mx-auto mt-12">
    <div class="shadow-md flex items-center my-4 justify-center space-x-6">
      <a v-for="period in periods" :key="period" data-test="period-item" class="font-sans capitalize cursor-pointer"
         @click="selectPeriod(period)"
         :class="{'is-active text-blue-500 border-b border-blue-500': selectedPeriod === period}">
        {{ period }}
      </a>
    </div>
    <TimelinePost  v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";
import {Periods} from "@/type";
import {todayPost, monthPost, weekPost} from "@/mocks/mocks";
import moment from "moment";
import TimelinePost from "@/components/TimelinePost.vue";

export default defineComponent({
  name: 'Timeline',
  components: {TimelinePost},
  setup() {
    const periods: Periods[] = ['today', 'this week', 'this month']
    const selectedPeriod = ref<Periods>('today')
    const posts = computed(()=> [todayPost, weekPost, monthPost].filter(post => {
      if (selectedPeriod.value === 'today' &&
          post.created.isAfter(moment().subtract(1, 'day'))
      ) {
        return true
      }
      if (selectedPeriod.value === 'this week' &&
          post.created.isAfter(moment().subtract(7, 'day'))
      ) {
        return true
      }
      if (selectedPeriod.value === 'this month' &&
          post.created.isAfter(moment().subtract(1, 'month'))
      ) {
        return true
      } else {
        return false
      }
    }))
    const selectPeriod = (period: Periods) => selectedPeriod.value = period
    return {
      periods,
      selectedPeriod,
      selectPeriod,
      posts
    }
  }
})
</script>

