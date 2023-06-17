<script setup lang="ts">
setupPageHeader()

const { locale, t } = useI18n()
useHead({
  meta: [
    { property: 'og:image', content: `https://afetcan.com.com/afetcan-og-${locale.value}.png` },
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
  <Html :lang="locale" class="w-full min-h-screen">
    <Body class="h-full text-black dark:text-white ">
      <IonApp v-if="app">
        <IonRouterOutlet />
      </IonApp>
      <NuxtLayout v-else>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
