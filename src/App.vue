<template>
  <AppNavbar />
  <router-view />
</template>
<script lang="ts">
import {defineComponent} from "vue";
import AppNavbar from "@/components/Navbar.vue";

export default defineComponent ({
  components: {AppNavbar}
})
</script>