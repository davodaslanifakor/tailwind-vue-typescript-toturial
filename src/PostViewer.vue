<template>
  <div>

    showPost
    title : {{post.title}}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRoute} from "vue-router";
import {useStore} from "@/store";
export default defineComponent({
  name: "PostViewer",
  async  setup(){
    const route = useRoute()
    const store = useStore()
    const id = route.params.id as string
    if(!store.getState().posts.loaded){
      await store.fetchPosts()
    }
    const post = store.getState().posts.all[id]
    return {
      post
    }
  }
})
</script>



