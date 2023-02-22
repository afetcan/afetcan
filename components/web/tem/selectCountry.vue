<script setup lang="ts">
definePageMeta({
  where: 'web',
  middleware: ['web'],
  layout: 'web',
})
</script>

<template>
  <div class="flex justify-center items-center w-full max-w-xl mx-auto">
    <WebTemCountryList />
  </div>
</template>
