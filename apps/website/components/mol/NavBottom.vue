<script setup lang="ts">
// only one icon can be lit up at the same time
const { t } = useI18n()
const {
  toggle,
} = useChatWoot()
const open = () => {
  toggle('open')
}
</script>

<template>
  <nav
    class="after:content-none after:h-[calc(100%+0.5px)] bg-gray-200 text-black overflow-y-hidden overscroll-none h-14 grid grid-cols-2 shadow-lg border-t-2 border-gray-300"
  >
    <NuxtLink
      to="/" class="flex text-sm flex-col items-center place-content-center h-full flex-1" @click="$scrollToTop"
    >
      <div class="icon-[ph--house-simple-fill] w-6 h-6" />
      {{ t('global.home') }}
    </NuxtLink>
    <button class="flex text-sm flex-col items-center place-content-center h-full flex-1" @click="open()">
      <div class="icon-[ph--shield-plus-fill] w-6 h-6" />
      {{ t('global.help') }}
    </button>
  </nav>
</template>
