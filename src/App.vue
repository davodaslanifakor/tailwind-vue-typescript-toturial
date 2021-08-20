<template>
  <div
      :class="{'scale-100': showModal , 'scale-0': !showModal}"
      class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-blue-500 bg-opacity-50 transform  transition-transform duration-300">
    <!-- Modal content -->
    <div class="bg-white w-1/2 h-1/2 p-12">
      <!--Close modal button-->
      <button @click="modal.hideModal()" type="button" class="focus:outline-none">
        <!-- Hero icon - close button -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </button>
      <!-- Test content -->
      <div id="modal">
      </div>
    </div>
  </div>
  <div>
    <AppNavbar/>
    <router-view/>
  </div>
</template>
<script lang="ts">
import {computed, defineComponent} from "vue";
import AppNavbar from "@/components/Navbar.vue";
import {useModal} from "@/components/useModal";
import {provideStore} from "@/store";

export default defineComponent({
  components: {AppNavbar},
  setup() {
    provideStore()
    const modal = useModal()
    const showModal = computed(() => modal.visible.value)
    return {
      modal,
      showModal
    }
  }
})
</script>