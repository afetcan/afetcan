<script setup lang="ts">
const {
  toggleBubbleVisibility,
} = useChatWoot()
onMounted(() => {
  toggleBubbleVisibility('hide')
})

const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <Teleport to="body">
    <MonoOrgNotificationProvider />
  </Teleport>
  <div class="grid grid-cols-3 mx-auto gap-5 max-w-lg h-16 px-4 mt-2">
    <NuxtLink to="/" class="bg-zinc-100 dark:bg-zinc-700 rounded-lg w-full flex items-center justify-center" @click="$scrollToTop">
      <MonoMolLogoSqure class="h-12 w-12" />
    </NuxtLink>

    <div class="bg-zinc-100 dark:bg-zinc-700 rounded-lg w-full hover:bg-zinc-200">
      <button class="w-full h-full" @click="toggleDark()">
        <div class="h-8 w-8" :class="colorMode.value === 'dark' ? 'text-yellow-300 icon-[ph--moon-fill]' : 'text-gray-900 icon-[ph--sun]'" />
      </button>
    </div>
    <NuxtLink to="/settings" class="bg-zinc-100 dark:bg-zinc-700 rounded-lg w-full flex items-center justify-center">
      <div class="h-8 w-8 icon-[ph--gear]" />
    </NuxtLink>
  </div>

  <div class="h-full">
    <slot />
  </div>
  <div class="sticky left-0 right-0 bottom-0 w-full z-10" :style="{ paddingBottom: `env(safe-area-inset-bottom)` }">
    <WebMolNavBottom class="sm:hidden" />
  </div>
</template>
