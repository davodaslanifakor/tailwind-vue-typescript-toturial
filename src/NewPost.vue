<template>
   <div>
    <PostWriter :post="post" @save="save"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
// @ts-ignore
import PostWriter from "@/PostWriter";
import {Post} from "@/type";
import moment from "moment";
import {useStore} from "@/store";
import {useRouter} from "vue-router";
export default defineComponent ({
  name: "NewPost",
  components: {PostWriter},
  setup(){
    const  post: Post = {
      id: -1,
      title: 'new post ',
      markdown: '## new post\nEnter your post hear',
      html: '',
      created: moment(),
      authorId: 0
    }
    const store = useStore()
    const router = useRouter()
    const save = async (post:Post) =>{
      await store.createPost(post);
      router.push('/')
    }
    return {
      save,
      post
    }
  }
})
</script>
