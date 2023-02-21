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

const { selectedCountry } = storeToRefs(useAppStore())
const appStore = useAppStore()

const { data } = await useFetch('/api/earthquake', { method: 'GET' })
</script>

<template>
  <WebMainContent back-on-small-screen>
    <template #title>
      <div text-lg font-bold flex items-center gap-2 @click="$scrollToTop">
        <span>{{ $t('global.home') }}</span>
      </div>
    </template>
    <div class="flex flex-col justify-center items-center w-full max-w-xl mx-auto">
      <div class="mt-4 w-full">
        <div v-if="selectedCountry" class="w-full flex flex-col">
          <div class="flex justify-between items-center w-full">
            <div> {{ $t('home.selectedCountry') }}:</div>
            <div>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="appStore.resetSelectedCountry()">
                {{ $t('global.change') }}
              </button>
            </div>
          </div>
          <div class="text-black w-full bg-gray-200 mt-4 rounded-lg h-10 flex items-center justify-center text-lg">
            <div :class="selectedCountry.icon" class="w-8 h-8 mr-4" />
            {{ selectedCountry.name }}
          </div>
        </div>

        <WebTemHome v-else />
        <div class="mt-10">
          <h1 class="text-xl font-bold mb-4">
            {{ $t('home.earthquakeList') }}
          </h1>
          <div v-for="item in data?.data.data" :key="item.id">
            <MonoTemEarthquakeItem :item="item" />
          </div>
        </div>
      </div>
    </div>
  </WebMainContent>
</template>
