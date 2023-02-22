<script setup lang="ts">
import type { Earthquake } from '~~/types/earthquake'

const { toggle, toggleBubbleVisibility } = useChatWoot()

onMounted(() => {
  toggleBubbleVisibility('hide')
})

const { t } = useI18n()

const { selectedCountry } = storeToRefs(useAppStore())
const appStore = useAppStore()

const { data, refresh } = await useFetch<{
  data: Earthquake[]
}>(computed(() => `/api/earthquake/${selectedCountry.value?.slug}`), { method: 'GET', lazy: true, immediate: false })

definePageMeta({
  where: 'web',
  middleware: ['web'],
})

onMounted(async () => {
  appStore.onInit()
  if (selectedCountry.value)
    await refresh()
})

useHead({
  title: 'afetcan',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Afet durumlarının hızlı bir şekilde yönetilmesi, önceden bilgilendirme ve koordinasyon süreçlerinin sağlanması için bir yazılım projesi geliştirdik. Bu projede, afet durumlarını anlık olarak takip eden ve paylaşan ilgili kurumlarla birlikte çalışıyoruz.',
    },
  ],
})
</script>

<template>
  <NuxtLayout name="web">
    <WebMainContent>
      <template #title>
        <div text-lg font-bold flex items-center gap-2 @click="$scrollToTop">
          <span>{{ $t('global.home') }}</span>
        </div>
      </template>

      <div class="grid grid-cols-1 gap-4 lg:col-span-2">
        <WebTemSelectCountry v-if="!selectedCountry" />

        <!-- Actions panel -->
        <section v-if="selectedCountry" aria-labelledby="quick-links-title">
          <div class="grid grid-cols-1 gap-4">
            <h2 id="quick-links-title" class="sr-only">
              Quick links
            </h2>

            <MonoMolListItem
              header-class="bg-green-100 text-green-600"
              :title="selectedCountry.name"
              :icon="selectedCountry.icon"
              :subtitle="selectedCountry.name"
              :href="selectedCountry.slug"
            />

            <MonoMolListItem
              header-class="bg-red-100 text-red-600 opacity-60"
              :title="$t('home.emergencyHelp')"
              icon="icon-[ph--phone-disconnect-bold]"
              :subtitle="t('global.soon')"
            />

            <MonoMolListItem
              header-class="bg-zinc-300 text-zinc-600"
              :title="$t('home.earthquakeList')"
              icon="icon-[wi--earthquake]"
              dark
            >
              <div v-if="data && data.data">
                <div v-for="item in data?.data.slice(0, 3)" :key="item.id">
                  <MonoTemEarthquakeItem :item="item" />
                </div>
              </div>
              <p v-if="data?.data && data?.data.length === 0">
                Suanda bu ulke icin veri bulunmamaktadir.
              </p>
            </MonoMolListItem>
          </div>
        </section>
      </div>
    </WebMainContent>
  </NuxtLayout>
</template>
