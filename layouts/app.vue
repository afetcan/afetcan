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
  a
  <slot />
</template>
