<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  where: 'web',
  middleware: ['web'],
})
const router = useRouter()
const { selectedCountry } = storeToRefs(useAppStore())
const appStore = useAppStore()
onMounted(() => appStore.onInit())

const changeCountry = async () => {
  await appStore.resetSelectedCountry()
  setTimeout(() => {
    router.push('/')
  }, 300)
}
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
        <!-- Actions panel -->
        <section aria-labelledby="quick-links-title">
          <div class="grid grid-cols-1 gap-4">
            <h2 id="quick-links-title" class="sr-only">
              Quick links
            </h2>

            <MonoMolListItem
              :title="t('settings.selectLanguage')"
              icon="icon-[ph--translate]"
              :subtitle="t('settings.bottomChangeLanguage')"
              icon-right="icon-[ph--arrow-bend-left-down]"
            >
              <WebTemSettingsLanguageChange />
            </MonoMolListItem>

            <MonoMolListItem
              v-if="selectedCountry"
              class="cursor-pointer "
              header-class="hover:bg-zinc-300 bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              clickable
              :title="t('country.change')"
              :icon="selectedCountry.icon"
              :subtitle="t('settings.bottomChangeLanguage')"
              @click="changeCountry"
            />

            <MonoMolListItem
              class="mt-14"
              :title="t('settings.aboutUs')"
              icon="icon-[ph--globe-stand-duotone]"
              :subtitle="t('settings.aboutUsDescription')"
              icon-right="icon-[ph--arrow-bend-left-down]"
            >
              <div class="bg-zinc-200 dark:bg-zinc-600 p-4">
                <div class="grid grid-cols-4 place-items-center">
                  <a href="https://github.com/afetcan" class="hover:text-green-500 w-full h-full text-center" target="_blank">
                    Github
                  </a>
                  <a href="https://twitter.com/afetcanapp" target="_blank" class="hover:text-green-500 w-full h-full text-center">
                    Twitter
                  </a>
                  <a href="https://instagram.com/afetcanapp" target="_blank" class="hover:text-green-500 w-full h-full text-center">
                    Instagram
                  </a>
                  <a href="https://discord.afetcan.com" target="_blank" class="hover:text-green-500 w-full h-full text-center">
                    Discord
                  </a>
                </div>
              </div>
            </MonoMolListItem>
          </div>
        </section>
      </div>
    </WebMainContent>
  </NuxtLayout>
</template>
