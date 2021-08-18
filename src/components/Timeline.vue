<template>
  <div class="shadow-md flex items-center justify-center space-x-6">
    <a v-for="period in periods" :key="period" data-test="period-item" class="font-sans capitalize cursor-pointer"
       @click="selectPeriod(period)"
      :class="{'text-blue-500 border-b border-blue-500': selectedPeriod === period}">
      {{period}}
    </a>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {Periods} from "@/type";

export default defineComponent({
  name: 'Timeline',
  setup(){
    const periods : Periods[] = ['today','this week', 'this month']
    const selectedPeriod = ref<Periods>('today')
    const selectPeriod =(period: Periods)=> selectedPeriod.value = period
    return {
      periods,
      selectedPeriod,
      selectPeriod
    }
  }
})
</script>

