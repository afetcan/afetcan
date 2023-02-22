<script setup lang="ts">
const { selectedCountry } = storeToRefs(useAppStore())

definePageMeta({
  layout: 'app',
})
const { t } = useI18n()
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          {{ selectedCountry ? selectedCountry.name : '' }}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div v-if="selectedCountry">
        <AppTemHome app />
      </div>
      <div v-else class="p-4">
        {{ t('country.404') }}
        <button @click="() => $router.push('/app')">
          {{ t('global.back') }}
        </button>
      </div>
    </IonContent>
  </IonPage>
</template>
