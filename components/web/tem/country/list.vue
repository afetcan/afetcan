<script setup lang="ts">
const country = ref()
const { data } = await useAsyncData(() => queryContent<any>('charity/country').findOne())

useInfiniteScroll(
  window,
  async () => {
    console.log('load more')
    await country.value.loadMore()
  },
  { distance: 200 },
)
</script>

<template>
  <MonoTemCountries ref="country" :data="data.data" />
</template>
