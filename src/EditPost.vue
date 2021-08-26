<template>
  <div>
    <Suspense>
      <template #default>
        <PostEditor />
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
import PostEditor from "@/PostEditor.vue";
export default defineComponent({
  name: "EditPost",
  components: {PostEditor},
})
</script>
