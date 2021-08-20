<template>
  <div class="container mx-auto">
  <div>
    <div class="mb-8">

      <label>
        title post
        <br/>
        <input type="text" v-model="title" class="border border-gray-500 rounded p-2" data-test="title">
      </label>
      <button @click="submit"
              data-test="save-post"
              class="bg-green-500 rounded text-white text-xs p-3 font-bold capitalize ml-6"
      >
        submit post
      </button>
    </div>

      <div class="flex w-full space-x-6">
        <div class="flex w-full ">
          <div contenteditable ref="contentEditable" id="markdown" class="w-full h-screen border border-blue-500 rounded p-6"
               data-test="markdown"
               @input="handleEdit"/>
        </div>
        <div class="w-full">
          <div v-html="html" class="p-6">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watch} from "vue";
import {Post} from "./type";
// @ts-ignore
import {parse, MarkedOptions} from 'marked'
import {highlightAuto} from 'highlight.js'
const debounce = require('lodash.debounce');

export default defineComponent({
  name: "PostWriter",
  props: {
    post: {
      type: Object as () => Post,
      require: true
    }
  },
  setup(props,ctx) {
    // @ts-ignore
    const title = ref(props.post.title)
    const contentEditable = ref<null | HTMLDivElement>(null)
    // @ts-ignore

    const markdown = ref(props.post.markdown)
    const html = ref('')
    const options : MarkedOptions = {
      highlight: (code: string) => highlightAuto(code).value
    }
    const handleEdit = () => {
      // @ts-ignore

      markdown.value = contentEditable.value.innerText
    }
    //
    const updateMarkdown= (value:string) => html.value = parse(value,options)
    watch(() => markdown.value, debounce(updateMarkdown, 500), {immediate: true})

    const submit =()=>{
      // @ts-ignore
      const post : Post ={
        ...props.post,
        title: title.value,
        markdown:markdown.value,
        html: html.value
      }
      ctx.emit('save',post)
    }
    onMounted(() => {
      // @ts-ignore
      contentEditable.value.innerText = markdown.value
    })
    return {
      submit,
      title,
      contentEditable,
      handleEdit,
      markdown,
      html
    }
  }
})
</script>

<style>
.content *{
  all: unset;
}
</style>