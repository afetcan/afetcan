<script setup lang="ts">
const {
  toggle,
  toggleBubbleVisibility,
} = useChatWoot()

onMounted(() => {
  toggleBubbleVisibility('hide')
})
useHead({
  title: 'Acil Deprem',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Acil deprem deprem bilgilerini toplayıp anlandırıp yetkilelerle paylaşan bir site.',
    },
  ],
})
const { t } = useI18n()

definePageMeta({
  where: 'web',
  middleware: ['web'],
})
</script>

<template>
  <WebMainContent back-on-small-screen>
    <template #title>
      <div text-lg font-bold flex items-center gap-2 @click="$scrollToTop">
        <span>{{ $t('global.home') }}</span>
      </div>
    </template>
    <div class="flex justify-center items-center w-full max-w-xl mx-auto">
      <WebTemHome />
    </div>
  </WebMainContent>
</template>
