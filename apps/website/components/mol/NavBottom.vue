<script setup lang="ts">
// only one icon can be lit up at the same time
const moreMenuVisible = ref(false)
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
    class="after:content-none after:h-[calc(100%+0.5px)] bg-gray-200 text-black overflow-y-hidden overscroll-none h-14 grid grid-cols-3"
  >
    <NuxtLink
      to="/" class="flex flex-row items-center place-content-center h-full flex-1" @click="$scrollToTop"
    >
      <div i-ri:hashtag />
      {{ t('global.home') }}
    </NuxtLink>
    <button class="flex flex-col col-span-2 flex-row items-center place-content-center h-full flex-1" @click="open()">
      <div i-ri:group-2-line />
      {{ t('global.help') }}
    </button>
  </nav>
</template>
