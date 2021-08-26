<template>
  <router-link :to="{name:'ShowPost',params: {id:post.id}}" data-test="post"
       class="shadow-md rounded p-6 mb-4"
      >
    <p class="font-weight-bold text-gray-500" data-test="title-post">{{ post.title }}</p>
    <p class="font-weight-normal text-gray-400">    {{ post.created.format('Do MM') }}</p>
  </router-link>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Post} from "@/type"
export default defineComponent({
  name: "TimelinePost",
  props:{
    post: {
      type: Object as () => Post,
      require: true
    }
  }

})
</script>
