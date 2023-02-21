<script setup lang="ts">
const {
  toggleBubbleVisibility,
} = useChatWoot()
onMounted(() => {
  toggleBubbleVisibility('hide')
})
</script>

<template>
  <div class="flex justify-between px-4 py-2 bg-gray-200">
    <div>
      <NuxtLink to="/" class="flex items-center justify-center" @click="$scrollToTop">
        <MonoMolLogo class="h-10 w-32" />
      </NuxtLink>
    </div>
    <div>
      <slot name="actions" />
      <div class="pr-2">
        <label space-y-2>
          <WebTemSettingsLanguage select-settings />
        </label>
      </div>
    </div>
  </div>
  <slot />
  <div class="sticky left-0 right-0 bottom-0 w-full z-10 bg-base" :style="{ paddingBottom: `env(safe-area-inset-bottom)` }">
    <WebMolNavBottom class="sm:hidden" />
  </div>
</template>
