<template>
  <ul class="flex items-center justify-center">
    <li class="border border-gray-500 text-gray-400 rounded">
      <router-link to="/posts/new" class="p-3 block">
        new post
      </router-link>
    </li>
    <li>
      <button @click="modal.showModal"
              data-test="sing-up"
              class="bg-green-500 rounded text-white text-xs p-3 font-bold capitalize ml-6"
      >
        Sing Up
      </button>
    </li>
  </ul>
  <teleport to="#modal" v-if="modal.visible">
    <SingUp />
  </teleport>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useModal} from "@/components/useModal";
import SingUp from "@/components/SingUp.vue";

export default defineComponent({
  name: "AppNavbar",
  components: {SingUp},
  setup() {
    return {
      modal:useModal(),
    }
  }
})
</script>
