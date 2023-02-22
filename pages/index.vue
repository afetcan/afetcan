<script setup lang="ts">
const { toggle, toggleBubbleVisibility } = useChatWoot()

onMounted(() => {
  toggleBubbleVisibility('hide')
})

const { t } = useI18n()

const { selectedCountry } = storeToRefs(useAppStore())
const appStore = useAppStore()

const { data } = await useFetch('/api/earthquake', { method: 'GET' })

definePageMeta({
  where: 'web',
  middleware: ['web'],
})

onMounted(() =>
  appStore.onInit(),
)

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
        <WebTemHome v-if="!selectedCountry" />

        <!-- Actions panel -->
        <section v-if="selectedCountry" aria-labelledby="quick-links-title">
          <div class="grid grid-cols-1 gap-4">
            <h2 id="quick-links-title" class="sr-only">
              Quick links
            </h2>

            <MonoMolListItem
              header-class="bg-green-100 text-green-600"
              :title="$t('home.selectedCountry')"
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
              <div v-for="item in data?.data.data.slice(0, 3)" :key="item.id">
                <MonoTemEarthquakeItem :item="item" />
              </div>
            </MonoMolListItem>
          </div>
        </section>
      </div>
    </WebMainContent>
  </NuxtLayout>
</template>
