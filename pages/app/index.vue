<script setup lang="ts">
import type { OverlayEventDetail } from '@ionic/core/components'
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
function confirm() {
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
          {{ t('global.home') }}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      OnBoarding
      <ion-button id="open-modal" expand="block">
        Open
      </ion-button>

      <IonModal ref="modal" trigger="open-modal" @will-dismiss="onWillDismiss">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="cancel()">
                {{ t('global.cancel') }}
              </ion-button>
            </ion-buttons>
            <ion-title>Welcome</ion-title>
            <ion-buttons slot="end">
              <ion-button :strong="true" @click="confirm()">
                Confirm
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <AppTemCountryList />
        </ion-content>
      </IonModal>
    </IonContent>
  </IonPage>
</template>
