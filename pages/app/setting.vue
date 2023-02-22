<script setup lang="ts">
import type { OverlayEventDetail } from '@ionic/core'
import type { Country } from '~~/types'

definePageMeta({
  layout: 'app',
})
const { t } = useI18n()

const modal = ref<{
  $el: HTMLIonModalElement
}>()

function cancel() {
  modal.value?.$el.dismiss(null, 'cancel')
}
function confirm(_ev: Country) {
  modal.value?.$el.dismiss(name, 'confirm')
}
function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
  if (ev.detail.role === 'confirm')
    console.log('Confirm', ev.detail.data)
}
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          {{ t('global.settings') }}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <button id="open-modal" expand="block">
        Change Country
      </button>
      <IonModal ref="modal" trigger="open-modal" @will-dismiss="onWillDismiss">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton @click="cancel()">
                {{ t('global.cancel') }}
              </IonButton>
            </IonButtons>
            <ion-title>Welcome</ion-title>
            <IonButtons slot="end">
              <IonButton :strong="true" @click="confirm($event)">
                Confirm
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
          <AppTemCountryList @select="confirm($event)" />
        </IonContent>
      </IonModal>
    </IonContent>
  </IonPage>
</template>
