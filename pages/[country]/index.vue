<script setup lang="ts">
const { t } = useI18n()

const route = useRoute()

const getSlug = computed(() => {
  return route.params.country
})
</script>

<template>
  <WebMainContent back-on-small-screen>
    <div class="flex flex-col w-full max-w-xl mx-auto px-4 sm:px-0">
      <div class="py-4">
        <NuxtLink
          to="/"
          class="bg-gray-200 hover:bg-gray-400 h-10 px-4 rounded flex items-center w-full"
        >
          <div class="icon-[ph--caret-left-bold] w-5 h-5 mr-1" />
          {{ t('global.home') }}
          <div class="icon-[ph--heart-duotone] w-5 h-5 ml-auto" />
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 gap-10">
        <button
          class="h-20 flex items-center bg-red-600 hover:bg-red-800 p-4 text-white rounded text-2xl"
        >
          <span>
            {{ t('home.emergencyHelp') }}
          </span>
          <div class="icon-[ph--caret-right-bold] w-8 h-8 ml-auto flex flex-none text-white" />
        </button>
        <NuxtLink
          class="h-20 flex items-center bg-green-600 hover:bg-green-800 text-white rounded text-2xl p-4"
          :to="`/${getSlug}/charity`"
        >
          <span>
            {{ t('home.charities') }}
          </span>
          <div class="icon-[ph--caret-right-bold] w-8 h-8 ml-auto flex flex-none text-white" />
        </NuxtLink>

        <NuxtLink
          class="h-20 cursor-not-allowed p-4 flex items-center bg-gray-200 opacity-50 text-gray-700 rounded text-2xl"
          to="#"
        >
          <span>
            {{ t('home.soonFeatures') }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </WebMainContent>
</template>
