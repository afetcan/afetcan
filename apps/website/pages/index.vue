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
</script>

<template>
  <MainContent back-on-small-screen>
    <template #title>
      <div text-lg font-bold flex items-center gap-2 @click="$scrollToTop">
        <span>{{ $t('global.home') }}</span>
      </div>
    </template>
    <div class="flex justify-center items-center w-full max-w-xl mx-auto">
      <div class="grid grid-cols-1 gap-6 p-4">
        <div class="grid grid-cols-1 gap-10">
          <button class="h-20 flex items-center bg-red-600 hover:bg-red-800 p-4 text-white rounded text-2xl" to="/charity" @click="toggle('open')">
            <span>
              {{ t('home.emergencyHelp') }}
            </span>
            <div class="icon-[ph--caret-right-bold] w-8 h-8 ml-auto flex flex-none text-white" />
          </button>
          <NuxtLink class="h-20 flex items-center bg-green-600 hover:bg-green-800 text-white rounded text-2xl p-4" to="/charity">
            <span>
              {{ t('home.charities') }}
            </span>
            <div class="icon-[ph--caret-right-bold] w-8 h-8 ml-auto flex flex-none text-white" />
          </NuxtLink>

          <NuxtLink class="h-20 cursor-not-allowed p-4 flex items-center bg-gray-200 opacity-50 text-gray-700 rounded text-2xl" to="#">
            <span>
              {{ t('home.soonFeatures') }}
            </span>
          </NuxtLink>
        </div>
        <div class="my-20 grid grid-cols-1 gap-6">
          <div class="text-base ">
            <div v-html="t('home.description')" />

            <p class="mt-8">
              {{ t('home.description2') }}
            </p>
          </div>
          <AtomACButton block tag="a" href="https://twitter.com/acildepremcom" target="_blank">
            Twitter
          </AtomACButton>
          <AtomACButton block tag="a" href="https://github.com/acildeprem" target="_blank">
            Github
          </AtomACButton>
          <AtomACButton block tag="a" href="https://discord.acildeprem.com" target="_blank">
            Discord
          </AtomACButton>
        </div>
      </div>
    </div>
  </MainContent>
</template>
