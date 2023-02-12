<script setup lang="ts">
const route = useRoute()
const getSlug = computed(() => {
  return route.params.country
})
const { data } = await useAsyncData(() => queryContent<any>(`charity/${getSlug.value}`).find())

const { t } = useI18n()

const {
  toggle,
} = useChatWoot()
</script>

<template>
  <NuxtLayout name="charity">
    <MainContent>
      <div class="flex flex-col w-full max-w-xl mx-auto px-4 sm:px-0">
        <div class="pt-4">
          <NuxtLink to="/charity" class="bg-gray-200 hover:bg-gray-400 h-10 px-4 rounded flex items-center w-full">
            <div class="icon-[ph--caret-left-bold] w-5 h-5 mr-1" />
            {{ t('charity.allCountries') }}
            <div class="icon-[ph--map-pin-duotone] w-5 h-5 ml-auto" />
          </NuxtLink>
        </div>

        <h1 class="text-2xl font-medium mt-10">
          {{ t('charity.allCharities') }}
        </h1>
        <ContentRenderer :value="data">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
            <NuxtLink
              v-for="item in data" :key="item" :to="`/charity/${getSlug}/${item.slug}`"
              class="bg-gray-200 p-4 rounded flex hover:bg-gray-400"
            >
              <div class="flex flex-col flex-1">
                <div>
                  {{ item.name }}
                </div>
                <div class="text-sm opacity-60 lin">
                  {{ item.shortDescription }}
                </div>
              </div>
              <div class="w-8 flex flex-col items-center justify-center">
                <div class="icon-[ph--caret-right-bold] w-8 h-8 ml-auto flex flex-none text-black" />
              </div>
            </NuxtLink>
          </div>
        </ContentRenderer>
        <div class="bg-gray-200 p-4 rounded flex hover:bg-gray-400 opacity-75 mt-10" @click="toggle('open')">
          {{ t('charity.addCharity') }}
        </div>
      </div>
    </MainContent>
  </NuxtLayout>
</template>
