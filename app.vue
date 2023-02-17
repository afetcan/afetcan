<script setup lang="ts">
setupPageHeader()

const { locale, t } = useI18n()
useHead({
  meta: [
    { property: 'og:image', content: `https://afetcan.com.com/afetcan-og-${locale.value}.png` },
    { property: 'og:description', content: t('app.description') },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
