<script setup lang="ts">
import type { OverlayEventDetail } from '@ionic/core/components'
import type { Country } from '~/types'

const { data } = await useFetch('https://www.seismicportal.eu/fdsnws/event/1/query', {
  params: {
    format: 'json',
    start: '2023-01-01T00:00:00Z',
    end: '2023-03-01T23:59:59Z',
    offset: 0,
    limit: 10,
  },
})

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
          {{ t('global.home') }}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      {{ data }}
      <IonButton id="open-modal" expand="block">
        Open
      </IonButton>

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
              <IonButton :strong="true" @click="confirm()">
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
