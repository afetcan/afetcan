<script setup lang="ts">
defineProps({
  app: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const { selectedCountry } = storeToRefs(useAppStore())

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
  <div class="grid grid-cols-1 gap-6 p-4">
    <div class="grid grid-cols-1 gap-10">
      <NuxtLink
        class="h-20 flex items-center bg-green-600 hover:bg-green-800 text-white rounded text-2xl p-4"
        :to="!app ? '/charity' : `/app/${selectedCountry.slug}/charity`"
      >
        <span>
          {{ t('home.charities') }}
        </span>
        <div class="icon-[ph--caret-right-bold] w-8 h-8 ml-auto flex flex-none text-white" />
      </NuxtLink>

      <NuxtLink
        class="h-20 cursor-not-allowed p-4 flex items-center bg-gray-200 dark:bg-gray-700 opacity-50 text-gray-700 rounded text-2xl"
        to="#"
      >
        <span>
          {{ t('home.soonFeatures') }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
