<script setup lang="ts">
const { t } = useI18n()

const route = useRoute()

const getSlug = computed(() => {
  return route.params.country
})
</script>

<template>
  <NuxtLayout name="web">
    <WebMainContent>
      <div>
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

        <!-- Actions panel -->
        <section aria-labelledby="quick-links-title">
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <MonoMolListItem
              :title="$t('home.charities')"
              :href="`/${getSlug}/charity`"
              :subtitle="t('charity.whySupport')"
            />

            <MonoMolListItem
              class="!bg-yellow-100 text-yellow-600"
              :title="$t('home.soonFeatures')"
              :subtitle="t('global.soon')"
            />
          </div>
        </section>
      </div>
    </WebMainContent>
  </NuxtLayout>
</template>
