<template>
  <div>
    <label :for="name">
      {{name}}
      <br>
      <input
          class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          @input="handleInput" :type="type" :name="name" :id="name">
    </label>
    <p class="text-red-500 text-xs" v-if="error">{{error}}</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "FormInput",
  props:{
    error:{
      type: String,
    },
    name:{
      type: String,
      require:true
    },
    type:{
      type: String,
      default: 'text',
    },
    modelValue:{
      type: String,
      require:true
    }
  },
  setup(props,ctx){
    const handleInput = (event: any) => {
      ctx.emit('update:modelValue',event.target.value)
    }
    return{
      handleInput
    }
  }

})
</script>

