<script setup lang="ts">
const { data } = await useAsyncData(() => queryContent<any>('charity/country').findOne())
const {
  setCustomAttributes,
} = useChatWoot()

const { t, locale } = useI18n()

onMounted(() => {
  setCustomAttributes({
    add_new_country: 'true',
    language: locale.value,
  })
})

definePageMeta({
  where: 'web',
  middleware: ['web'],
  layout: 'web',
})
</script>

<template>
  <NuxtLayout name="charity">
    <WebMainContent>
      <div class="flex justify-center items-center w-full max-w-xl mx-auto">
        <WebTemCountryList />
      </div>
    </WebMainContent>
  </NuxtLayout>
</template>
