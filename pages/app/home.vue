<script setup lang="ts">
import type { OverlayEventDetail } from '@ionic/core/components'
import type { Country } from '~/types'

export interface earthquake {
  type: string
  metadata: Metadata
  features?: (FeaturesEntity)[] | null
}
export interface Metadata {
  totalCount: number
}
export interface FeaturesEntity {
  geometry: Geometry
  type: string
  id: string
  properties: Properties
}
export interface Geometry {
  type: string
  coordinates?: (number)[] | null
}
export interface Properties {
  lastupdate: string
  magtype: string
  evtype: string
  lon: number
  auth: string
  lat: number
  depth: number
  mag: number
  time: string
  source_id: string
  source_catalog: string
  flynn_region: string
  unid: string
}

const { selectedCountry } = storeToRefs(useAppStore())
const dataa = ref<earthquake>()
const loading = ref(false)
const getData = async () => {
  loading.value = true
  const { data } = await useFetch('https://www.seismicportal.eu/fdsnws/event/1/query', {
    params: {
      format: 'json',
      limit: 20,
      orderby: 'time',
      latitude: selectedCountry.value.latitude,
      longitude: selectedCountry.value.longitude,
      minradius: 0,
      maxradius: 10,
    },
  })
  dataa.value = data.value as earthquake
  loading.value = false
}

watch(selectedCountry, async () => {
  await getData()
})

onMounted(async () => {
  await getData()
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

const depthColor = (value: number) => {
  if (value < 4 && value > 0)
    return 'bg-blue-100 text-blue-900'
  if (value < 5 && value > 4)
    return 'bg-green-100 text-green-900'
  if (value < 6 && value > 5)
    return 'bg-yellow-100 text-yellow-900'
  if (value < 7 && value > 6)
    return 'bg-orange-100 text-orange-900'
  if (value < 8 && value > 7)
    return 'bg-red-100 text-red-900'
}
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          {{ t('global.home') }}
        </IonTitle>
        <IonButtons slot="end">
          <IonButton @click="getData()">
            <div class="icon-[ph--gear-duotone] w-6 h-6" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div v-if="loading">
        <IonSpinner />
      </div>
      <div v-else class="grid grid-cols-1 gap-6 p-2">
        <div v-for="item in dataa?.features" :key="item.id" class="flex bg-gray-100 rounded">
          <div class="flex flex-col flex-1 p-4">
            <div>
              Mag:  {{ item.properties.mag }}
            </div>
            <div class="text-sm">
              Time:  {{ item.properties.time }}
            </div>
            <div class="text-sm">
              Update: {{ item.properties.lastupdate }}
            </div>
          </div>
          <div class="text-2xl font-extrabold w-14 flex justify-center items-center flex-none" :class="depthColor(item.properties.mag)">
            {{ item.properties.mag }}
          </div>
        </div>
      </div>

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
