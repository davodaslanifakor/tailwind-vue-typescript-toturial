<template>
  <ul class="flex items-center justify-center">
    <li class="border border-gray-500 text-gray-400 rounded">
      <router-link to="/posts/new" class="p-3 block">
        new post
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AppNavbar"
}
</script>
