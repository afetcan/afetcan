<script setup lang="ts">
const { t } = useI18n()

const route = useRoute()

const getCountry = computed(() => {
  return route.params.country
})

const getSlug = computed(() => {
  return route.params.name
})

const { data } = await useAsyncData(() => queryContent<any>('charity/turkiye').where({ slug: getSlug.value }).find())
</script>

<template>
  <Teleport to="body">
    <OrgNotificationProvider />
  </Teleport>
  <NuxtLayout name="charity">
    <WebMainContent>
      <div class="flex flex-col w-full max-w-xl mx-auto px-4 sm:px-0">
        <WebTemCharitySlug :data="data">
          <template #header>
            <div class="pt-4">
              <NuxtLink
                :to="`/${getCountry}/charity/`"
                class="bg-gray-200 hover:bg-gray-400 h-10 px-4 rounded flex items-center w-full"
              >
                <div class="icon-[ph--caret-left-bold] w-5 h-5 mr-1" />
                {{ t('charity.allCharities') }}
                <div class="icon-[ph--heart-duotone] w-5 h-5 ml-auto" />
              </NuxtLink>
            </div>
          </template>
        </WebTemCharitySlug>
      </div>
    </WebMainContent>
  </NuxtLayout>
</template>
