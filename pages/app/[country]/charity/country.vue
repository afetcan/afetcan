<script setup lang="ts">
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
  layout: 'app',
})
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/app/home" :text="t('global.back')" />
        </IonButtons>
        <IonTitle>
          {{ t('charity.allCountries') }}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div class="px-4">
        <AppTemCountryList />
      </div>
    </IonContent>
  </IonPage>
</template>
