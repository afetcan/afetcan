<script lang="ts" setup>
import { useGeolocation } from '@vueuse/core'

const { coords, locatedAt, error, resume, pause, isSupported } = useGeolocation()
</script>

<template>
  <div class="grid grid-cols-1 gap-6">
    Telefonun konum desteği var mı ? {{ isSupported }}

    Latitude: {{ coords.longitude }}
    Longitude: {{ coords.latitude }}
  </div>
</template>
