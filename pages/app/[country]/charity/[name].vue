<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
const { t } = useI18n()

const source = ref('Hello')
const { copy } = useClipboard({ source })

const route = useRoute()
const appStore = useAppStore()

const getCountry = computed(() => {
  return route.params.country
})

const copyAccount = (data: any) => {
  copy(data)
  appStore.dispatchNotification({ title: t('global.success'), content: t('global.successCopy'), type: 'success' })
}

const getSlug = computed(() => {
  return route.params.name
})

const { data } = await useAsyncData(() => queryContent<any>('charity/turkiye').where({ slug: getSlug.value }).find())
</script>

<template>
  <!-- <Teleport to="body">
    <OrgNotificationProvider />
  </Teleport> -->
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/app/" :text="t('global.back')" />
        </IonButtons>
        <IonTitle>
          {{ t('charity.allCountries') }}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div class="flex flex-col w-full max-w-xl mx-auto px-4 sm:px-0">
        <WebTemCharityCountrySlug :data="data" />
      </div>
    </IonContent>
  </IonPage>
</template>
