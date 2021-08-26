<template>
  <ul class="flex items-center justify-center">
    <li class="border border-gray-500 text-gray-400 rounded">
      <router-link to="/posts/new" class="p-3 block">
        new post
      </router-link>
    </li>
    <template v-if="!auth">
      <li>
        <button @click="signup"
                data-test="sing-up"
                class="bg-green-500 rounded text-white text-xs p-3 font-bold capitalize ml-6"
        >
          Sing Up
        </button>
      </li>
      <li>
        <button @click="signin"
                data-test="sing-up"
                class="bg-green-500 rounded text-white text-xs p-3 font-bold capitalize ml-6"
        >
          Sing In
        </button>
      </li>
    </template>
  </ul>
  <teleport to="#modal" v-if="modal.visible">
    <component :is="component"/>

  </teleport>
</template>

<script lang="ts">
import {computed, defineComponent, markRaw} from "vue";
import {useModal} from "@/components/useModal";
import SingUp from "@/components/SingUp.vue";
import {useStore} from "@/store";

export default defineComponent({
  name: "AppNavbar",
  components: {SingUp},
  setup() {
    const store = useStore()
    const auth = computed(()=>store.getState().authors.currentUserId)
    const modal = useModal()
    const signin = () =>{
      modal.showModal()
      // modal.component.value = SingIn
    }
    const signup = () =>{
      modal.showModal()
      modal.component.value = markRaw(SingUp)

    }
    return {
      component: modal.component,
      signin,
      signup,
      auth,
      modal,
    }
  }
})
</script>
