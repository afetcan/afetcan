<script setup lang="ts">
import type { InfiniteScrollCustomEvent } from '@ionic/vue'
const country = ref()
const { data } = await useAsyncData(() => queryContent<any>('charity/country').findOne())

const ionInfinite = async (ev: InfiniteScrollCustomEvent) => {
  await country.value.loadMore()
  setTimeout(() => ev.target.complete(), 1500)
}
</script>

<template>
  <MonoTemCountries ref="country" :data="data.data" app />
  <IonInfiniteScroll threshold="400px" @ion-infinite="ionInfinite">
    <IonInfiniteScrollContent />
  </IonInfiniteScroll>
</template>
