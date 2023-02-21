<script setup lang="ts">
const { toggle, toggleBubbleVisibility } = useChatWoot()

onMounted(() => {
  toggleBubbleVisibility('hide')
})
useHead({
  title: 'Acil Deprem',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Acil deprem deprem bilgilerini toplayıp anlandırıp yetkilelerle paylaşan bir site.',
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
onMounted(() => appStore.onInit())
const { data } = await useFetch('/api/earthquake', { method: 'GET' })
</script>

<template>
  <NuxtLayout name="web">
    <WebMainContent>
      <template #title>
        <div text-lg font-bold flex items-center gap-2 @click="$scrollToTop">
          <span>{{ $t('global.home') }}</span>
        </div>
      </template>
      <div>
        <div class="grid grid-cols-1 gap-4 lg:col-span-2">
          <WebTemHome v-if="!selectedCountry" />

          <button class="bg-gray-900 h-10 text-white" @click="appStore.changeCountry">
            {{ t('country.change') }}
          </button>

          <!-- Actions panel -->
          <section v-if="selectedCountry" aria-labelledby="quick-links-title">
            <div class="overflow-hidden rounded-lg bg-gray-200 shadow grid grid-cols-1 gap-px divide-y-0">
              <h2 id="quick-links-title" class="sr-only">
                Quick links
              </h2>

              <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                <div>
                  <span class="rounded-lg inline-flex p-3 bg-red-50 text-red-700 ring-4 ring-white">
                    <div :class="selectedCountry.icon" class="h-6 w-6 " />
                  </span>
                </div>
                <div class="mt-8">
                  <h3 class="text-lg font-medium">
                    <NuxtLink :to="selectedCountry.slug" class="focus:outline-none">
                      <!-- Extend touch target to entire panel -->
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ $t('home.selectedCountry') }}: {{ selectedCountry.name }}
                    </NuxtLink>
                  </h3>
                  <p class="mt-2 text-sm text-gray-500">
                    {{ selectedCountry.level }}
                  </p>
                </div>
                <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-red-600" aria-hidden="true">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>

              <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500 opacity-60">
                <div>
                  <span class="rounded-lg inline-flex p-3 bg-red-50 text-red-700 ring-4 ring-white">
                    <div class="icon-[ph--caret-right-bold] w-6 h-6" />
                  </span>
                </div>
                <div class="mt-8">
                  <h3 class="text-lg font-medium">
                    <a href="#" class="focus:outline-none">
                      <!-- Extend touch target to entire panel -->
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ t('home.emergencyHelp') }}
                    </a>
                  </h3>
                  <p class="mt-2 text-sm text-gray-500">
                    {{ t('global.soon') }}
                  </p>
                </div>
                <span v-if="false" class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-red-600" aria-hidden="true">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>

              <div class="relative group bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                <div class="p-6">
                  <span class="rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-white">
                    <div class="icon-[ph--caret-right-bold] w-6 h-6" />
                  </span>
                </div>
                <div class="mt-2">
                  <div class="w-full">
                    <div class="mt-2">
                      <h1 class="text-lg font-medium px-6">
                        <a href="#" class="focus:outline-none">
                          <!-- Extend touch target to entire panel -->
                          <span class="absolute inset-0" aria-hidden="true" />
                          {{ $t('home.earthquakeList') }}
                        </a>
                      </h1>

                      <div class="mt-2">
                        <div v-for="item in data?.data.data.slice(0, 3)" :key="item.id">
                          <MonoTemEarthquakeItem :item="item" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-red-600" aria-hidden="true">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </WebMainContent>
  </NuxtLayout>
</template>
