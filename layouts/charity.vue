<script setup lang="ts">
const {
  toggleBubbleVisibility,
} = useChatWoot()
onMounted(() => {
  toggleBubbleVisibility('hide')
})
const { t } = useI18n()
</script>

<template>
  <slot />

  <div class="flex justify-center items-center w-full max-w-xl mx-auto px-4">
    <div class="mt-20 text-sm text-gray-600">
      <p class="text-sm mb-10">
        {{ t('charity.description') }}
      </p>
      <p>
        {{ t('home.description2') }}
      </p>
      <div class="mt-8 grid sm:grid-cols-3 gap-6 mb-20">
        <a href="https://twitter.com/acildepremcom" class="bg-gray-200 rounded p-2" target="_blank">
          Github
        </a>
        <a href="https://twitter.com/acildepremcom" class="bg-gray-200 rounded p-2" target="_blank">
          Twitter
        </a>
        <a class="bg-gray-200 rounded p-2" href="https://discord.acildeprem.com" target="_blank">
          Discord
        </a>
      </div>
    </div>
  </div>
</template>
