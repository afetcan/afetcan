<script setup lang="ts">
const route = useRoute()
const getSlug = computed(() => {
  return route.params.country
})

const { t } = useI18n()
</script>

<template>
  <NuxtLayout name="web">
    <WebMainContent>
      <div>
        <WebTemCharityCountry />
      </div>
    </WebMainContent>
  </NuxtLayout>
</template>
