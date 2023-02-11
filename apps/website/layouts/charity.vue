<script setup lang="ts">
const {
  toggleBubbleVisibility,
} = useChatWoot()
onMounted(() => {
  toggleBubbleVisibility('show')
})
const { t } = useI18n()
</script>

<template>
  <div class="max-w-xl mx-auto py-4 px-4 md:px-0">
    <NuxtLink to="/" class="flex items-center justify-center mb-4">
      <MolLogo class="h-20 w-44" />
    </NuxtLink>
    <div class="space-x-4">
      <NuxtLink class="bg-gray-200 h-10 px-4 rounded flex items-center max-w-min hover:bg-gray-400" to="/">
        <div class="icon-[ph--house-simple-duotone] w-5 h-5 mr-1" />
        {{ t('global.home') }}
      </NuxtLink>
    </div>
    <slot />

    <div class="mt-20 text-sm text-gray-600">
      <p class="text-sm mb-10">
        {{ t('charity.description') }}
      </p>
      <p>
        {{ t('home.description2') }}
      </p>
      <div class="mt-8 grid grid-cols-3 gap-6 mb-20">
        <a href="https://twitter.com/acildepremcom" class="bg-gray-200 rounded p-2" target="_blank">
          Github
        </a>
        <a href="https://twitter.com/acildepremcom" class="bg-gray-200 rounded p-2" target="_blank">
          Twitter
        </a>
      </div>
    </div>
  </div>
</template>
