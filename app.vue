<script setup lang="ts">
setupPageHeader()

const { locale, t } = useI18n()
useHead({
  meta: [
    { property: 'og:image', content: `https://acildeprem.com/acildeprem-og-${locale.value}.png` },
    { property: 'og:description', content: t('app.description') },
  ],
})
const app = ref(false)
onMounted(() => {
  const { isApp } = useWhatPlatform()
  app.value = isApp
})
</script>

<template>
  <IonApp v-if="app">
    <IonRouterOutlet />
  </IonApp>
  <NuxtLayout v-else>
    <NuxtPage />
  </NuxtLayout>
</template>
