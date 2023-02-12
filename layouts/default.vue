<script setup lang="ts">
const {
  toggleBubbleVisibility,
} = useChatWoot()
onMounted(() => {
  toggleBubbleVisibility('hide')
})
</script>

<template>
  <slot />
  <div class="sticky left-0 right-0 bottom-0 w-full z-10 bg-base" :style="{ paddingBottom: `env(safe-area-inset-bottom)` }">
    <MolNavBottom class="sm:hidden" />
  </div>
</template>
