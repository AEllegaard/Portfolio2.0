<script setup>
import homeview from './components/homeview.vue'
</script>

<template>
  <header class="flex w-full">
    <div class="d">
      <button></button>
      <button></button>
    </div>
    <div class="h-12 bg-linear-to-t from-grey-200 to-grey-100 flex items-center justify-end px-9 w-full">
      <button class="bg-linear-to-t from-grey-300 to-grey-100 drop-shadow-sm px-4 m-4 rounded-md">About</button>
      <button class="bg-linear-to-t from-grey-300 to-grey-100 drop-shadow-sm px-4 m-4 rounded-md">Work</button>
      <button class="bg-linear-to-t from-grey-300 to-grey-100 drop-shadow-sm px-4 ml-4 rounded-md">Contact</button>
    </div>
  </header>

  <main>
    <homeview />
  </main>
</template>

<style>

</style>
