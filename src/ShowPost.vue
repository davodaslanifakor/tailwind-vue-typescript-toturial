<template>
  <div>
    <Suspense>
      <template #default>
        <PostViewer />
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
import {defineComponent} from "vue";
import PostViewer from "@/PostViewer.vue";
export default defineComponent({
  name: "ShowPost",
  components: {PostViewer},
})
</script>


