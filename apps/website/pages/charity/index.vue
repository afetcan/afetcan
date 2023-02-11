<script setup lang="ts">
const { data } = await useAsyncData(() => queryContent<any>('charity/country').findOne())
const {
  toggle,
  setCustomAttributes,
} = useChatWoot()

const { t, locale } = useI18n()

onMounted(() => {
  setCustomAttributes({
    add_new_country: 'true',
    language: locale.value,
  })
})
</script>

<template>
  <NuxtLayout name="charity">
    <MainContent>
      <div class="flex justify-center items-center w-full max-w-xl mx-auto">
        <div class="px-4">
          <h1 class="text-2xl font-medium my-2">
            {{ t('charity.allCountries') }}
          </h1>
          <ContentRenderer :value="data">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-y">
              <div
                v-for="item in data.country" :key="item.slug"
                :class="item.level >= 3 ? 'col-span-full bg-red-100 shadow-lg hover:bg-red-200 shadow-red-200' : 'col-span-2 bg-gray-200 hover:bg-gray-400'"
                class="rounded mb-20"
              >
                <NuxtLink :key="item" :to="`/charity/${item.slug}`" class="py-4 px-4 flex items-center relative justify-between">
                  <span
                    v-if="item.level >= 3"
                    class="animate-ping absolute top-5 right-5 inline-flex h-5 w-5 rounded-full bg-red-500"
                  />
                  <div class="flex flex-col">
                    <div :class="item.icon" class="w-8 h-8 mb-2" />
                    <h3 class="mb-2">
                      {{ item.name }}
                    </h3>
                    <p class="text-sm opacity-75">
                      {{ locale === 'en' ? item.descriptionEN : item.descriptionTR }}
                    </p>
                  </div>
                  <div class="icon-[ph--caret-right-bold] w-8 h-8 mb-2 flex flex-none text-red-600" />
                </NuxtLink>
              </div>
              <button
                v-for="item in data.country" :key="item.slug" class="rounded  col-span-2 bg-gray-200 hover:bg-gray-400"
                @click="toggle('open')"
              >
                <div class="p-4 flex items-center relative justify-between">
                  <div class="flex flex-col">
                    {{ t('country.add') }}
                  </div>
                </div>
              </button>
            </div>
          </ContentRenderer>
        </div>
      </div>
    </MainContent>
  </NuxtLayout>
</template>
