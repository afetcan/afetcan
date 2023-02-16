<script setup lang="ts">
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
          {{ t('global.home') }}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      settings
    </IonContent>
  </IonPage>
</template>
