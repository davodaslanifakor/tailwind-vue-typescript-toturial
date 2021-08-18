<template>
  <div>
    <a v-for="period in periods" :key="period" data-test="period-item">
      {{period}}
    </a>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Periods} from "@/type";

export default defineComponent({
  name: 'Timeline',
  setup(){
    const periods : Periods[] = ['today','this week', 'this month']
    return {
      periods
    }
  }

})
</script>

