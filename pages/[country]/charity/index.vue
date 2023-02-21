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
    <WebMainContent>
      <div class="flex flex-col w-full max-w-xl mx-auto px-4 sm:px-0">
        <WebTemCharityCountry />
      </div>
    </WebMainContent>
  </NuxtLayout>
</template>
