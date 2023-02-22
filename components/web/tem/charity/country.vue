<script setup lang="ts">
defineProps({
  app: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const route = useRoute()
const getSlug = computed(() => {
  return route.params.country
})
const { data } = await useAsyncData(() => queryContent<any>(`charity/${getSlug.value}`).find())

const { t } = useI18n()
</script>

<template>
  <div>
    <div v-if="!app" class="pt-4">
      <NuxtLink
        :to="`/${getSlug}`"
        class="bg-gray-200 hover:bg-gray-400 h-10 px-4 rounded flex items-center w-full"
      >
        <div class="icon-[ph--caret-left-bold] w-5 h-5 mr-1" />
        {{ t('charity.allCountries') }}
        <div class="icon-[ph--map-pin-duotone] w-5 h-5 ml-auto" />
      </NuxtLink>
    </div>

    <h1 v-if="!app" class="text-2xl font-medium mt-10">
      {{ t('charity.allCharities') }}
    </h1>
    <ContentRenderer :value="data">
      <div class="grid grid-cols-1 gap-x divide-y-2 bg-gray-100 rounded overflow-hidden">
        <MonoMolListItem
          v-for="item in data" :key="item"
          :title="item.name"
          :href="`/${getSlug}/charity/${item.slug}`"
        />
      </div>
    </ContentRenderer>
    <NuxtLink :to="`/${getSlug}/charity/new`" class="bg-gray-200 p-4 rounded flex hover:bg-gray-400 opacity-75 mt-10">
      {{ t('charity.addCharity') }}
    </NuxtLink>
  </div>
</template>
