<template>
  <div>
    <div>
      <label>
        new post
        <input type="text" v-model="title" class="border border-gray-500 rounded p-2">
      </label>
    </div>
    <div class="flex w-full">
      <div class="flex w-full">
        <div contenteditable ref="contentEditable" id="markdown" class="w-full h-screen border border-blue-500 rounded"
             @input="handleEdit"/>
      </div>
      <div class="w-full">
        <div v-html="html">

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

export default defineComponent({
  name: "PostWriter",
  props: {
    post: {
      type: Object as () => Post,
      require: true
    }
  },
  setup(props) {
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
    watch(() => markdown.value, (value) => {
      html.value = parse(value,options)
    }, {immediate: true})
    onMounted(() => {
      // @ts-ignore
      contentEditable.value.innerText = markdown.value
    })
    return {
      title,
      contentEditable,
      handleEdit,
      markdown,
      html
    }
  }
})
</script>
