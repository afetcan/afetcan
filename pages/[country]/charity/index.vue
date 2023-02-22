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
      <section aria-labelledby="quick-links-title">
        <div class="grid grid-cols-1 gap-4 lg:col-span-2">
          <WebTemCharityCountry />
        </div>
      </section>
    </WebMainContent>
  </NuxtLayout>
</template>
