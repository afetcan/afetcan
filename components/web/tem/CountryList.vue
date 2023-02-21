<script setup lang="ts">
const country = ref()
const { data } = await useAsyncData(() => queryContent<any>('charity/country').findOne())
const appStore = useAppStore()
const router = useRouter()
useInfiniteScroll(
  window,
  async () => {
    console.log('load more')
    await country.value.loadMore()
  },
  { distance: 200 },
)

const select = (item: any) => {
  router.push(item.slug)
  appStore.changeCountry(item.slug)
}
</script>

<template>
  <MonoTemCountries ref="country" :data="data.data" @select="select($event)" />
</template>
