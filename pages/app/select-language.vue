<script setup lang="ts">
const { t } = useI18n()
const load = ref(false)
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          {{ t('settings.selectLanguage') }}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent color="light">
      <div class="w-full h-full px-4 py-4">
        <AppSelectLang />
        <MonoAtomButton ref="button" class="mt-5" :loading="load" full-width>
          Next
        </MonoAtomButton>
      </div>
    </IonContent>
  </IonPage>
</template>

<style lang="scss" scoped></style>
