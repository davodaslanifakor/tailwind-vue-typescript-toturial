<template>
  <div>
    <Suspense>
      <template #default>
        <Timeline />
      </template>
      <template #fallback>
        <div data-test="loading-post">
          loading.....
        </div>
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts">
import Timeline from "@/components/Timeline.vue";
import {defineComponent} from "vue";

export default defineComponent ({
  name: 'Home',
  components: {Timeline}
})
</script>