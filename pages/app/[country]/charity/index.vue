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

const { selectedCountry } = storeToRefs(useAppStore())

definePageMeta({
  layout: 'app',
})
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton :default-href="`/app/${selectedCountry}`" :text="t('global.back')" />
        </IonButtons>
        <IonTitle>
          {{ t('charity.allCountries') }}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <WebTemCharityCountries :data="data" app />
    </IonContent>
  </IonPage>
</template>
