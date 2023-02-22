<script lang="ts" setup>
import { useGeolocation } from '@vueuse/core'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'

const { coords, error, isSupported }
  = useGeolocation()

const map: Ref<L.Map> = ref()
const mapInit = ref(false)
const viewOpt = reactive({
  coords: [39.1667, 35.6667],
  zoom: 5,
})
const data = reactive({
  latitude: null,
  longitude: null,
  address: null,
  name: null,
  telephone: null,
  message: null,
} as any)
type helpImageType = 'android' | 'ios'

const showHelpModal = ref(false)
const helpImage = ref<helpImageType>('android')

watch(coords, (val) => {
  if (val.longitude && val.latitude) {
    data.longitude = val.longitude
    data.latitude = val.latitude
    initMap(val.longitude, val.latitude)
  }
})

onMounted(() => {
  const _data = localStorage.getItem('data')
  // read data if saved
  if (_data !== null) {
    const savedData = JSON.parse(_data)
    console.log(savedData)
    data.address = savedData.address
    data.name = savedData.name
    data.telephone = savedData.telephone
    data.message = savedData.message
    localStorage.removeItem('data')
  }
})

function openHelpModal(value: helpImageType) {
  helpImage.value = value
  showHelpModal.value = true
}

function retryGetLocation() {
  localStorage.setItem('data', JSON.stringify(data))
  window.location.reload()
}

function initMap(longitude: number, latitude: number) {
  if (!mapInit.value) {
    map.value = L.map('mapObj').fitWorld()
    map.value.locate({ setView: true, maxZoom: 16 })

    map.value.setView(viewOpt.coords, viewOpt.zoom)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)
    mapInit.value = true
  }

  viewOpt.coords = [latitude, longitude]
  viewOpt.zoom = 30
  map.value.setView(viewOpt.coords, viewOpt.zoom)
  L.marker(viewOpt.coords).addTo(map.value)
}

function send() {
  console.log(data)
}
</script>

<template>
  <div class="grid grid-cols-1 gap-6 m-3">
    <form @submit.prevent="send">
      <n-space vertical>
        <div class="pt-3">
          <n-input v-model:value="data.name" type="text" placeholder="Ad Soyad (Zorunlu)" :input-props="{ required: 'true' }" />
        </div>
        <div class="pt-3">
          <n-input v-model:value="data.telephone" type="text" placeholder="Telefon (Zorunlu)" :input-props="{ required: 'true' }" />
        </div>
        <div class="pt-3">
          <n-input
            v-model:value="data.address"
            type="textarea"
            placeholder="Adres (Zorunlu)"
            :input-props="{ required: 'true' }"
          />
        </div>
        <div class="pt-3">
          <n-input
            v-model:value="data.message"
            type="textarea"
            placeholder="Adres (Zorunlu)"
            :input-props="{ required: 'true' }"
          />
        </div>
        <div class="pt-3">
          <NButton size="large" type="primary" block attr-type="submit" class="mt-3">
            Paylaş
          </NButton>
        </div>
        <div class="pt-1">
          <div v-if="isSupported">
            <div v-if="error">
              <div class="geolocation-error">
                Hata: {{ error.message }}
              </div>
              <div>
                Konumu nasıl açabilirim:
                <span class="cursor-pointer text-blue-600 visited:text-blue-300" @click="openHelpModal('android')">Android</span>,
                <span class="cursor-pointer	text-blue-600 visited:text-blue-300" @click="openHelpModal('ios')">iPhone</span>
              </div>
              <div class="cursor-pointer text-blue-600 visited:text-blue-300" @click="retryGetLocation()">
                Tekrar Dene
              </div>
            </div>
            <div v-else>
              <div v-if="coords.longitude === Infinity || coords.latitude === Infinity">
                <p>Konum Aranıyor...</p>
                <NSpin size="large" />
              </div>
              <div v-else>
                <p>Enlem: {{ coords.longitude }} Boylam: {{ coords.latitude }}</p>
              </div>
            </div>
          </div>
          <div class="map-container pb-3">
            <div id="mapObj" class="px-3 map" />
          </div>
        </div>
      </n-space>
    </form>
  </div>
  <n-modal v-model:show="showHelpModal">
    <img v-if="helpImageType === 'android'" src="/images/android-konum.png" class="w-1/3 h-auto" alt="help-image">
    <img v-else-if="helpImageType === 'iPhone'" src="/images/ios-konum.jpeg" class="w-1/3 h-auto" alt="help-image">
  </n-modal>
</template>

<style scoped>
.map {
  width: 100vw;
  height: 250px;
}

.map-container {

}

.geolocation-error {
  color: red
}
</style>
