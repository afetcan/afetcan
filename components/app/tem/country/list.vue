<script setup lang="ts">
import type { InfiniteScrollCustomEvent } from '@ionic/vue'
import type { Country } from '~~/types'

const emit = defineEmits(['select'])
const router = useRouter()
const country = ref()
const { getCountry } = useAppStore()

const { data } = await useAsyncData(() => queryContent<any>('charity/country').findOne())

const ionInfinite = async (ev: InfiniteScrollCustomEvent) => {
  await country.value.loadMore()
  setTimeout(() => ev.target.complete(), 1500)
}

const select = async (ev: Country) => {
  router.replace(`/app/${ev.slug}`)
  await getCountry(ev.slug)
  emit('select', ev)
}
</script>

<template>
  <MonoTemCountries ref="country" :data="data.data" app @select="select" />
  <IonInfiniteScroll threshold="400px" @ion-infinite="ionInfinite">
    <IonInfiniteScrollContent />
  </IonInfiniteScroll>
</template>
