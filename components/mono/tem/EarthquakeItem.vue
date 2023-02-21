<script setup lang="ts">
import type { Earthquake } from '~~/types/earthquake'

const { item } = defineProps<{
  item: Earthquake
}>()

const styleContainer = {
  1: 'bg-zinc-100 text-zinc-900', // 1-1,9
  2: 'bg-zinc-100 text-zinc-900', // 2-2,9
  3: 'bg-blue-100 text-blue-900', // 3-3,9
  4: 'bg-yellow-100 text-yellow-900', // 4-4,9
  5: 'bg-amber-100 text-amber-900', // 5-5,9
  6: 'bg-orange-100 text-orange-900', // 6-6,9
  7: 'bg-red-100 text-red-900', // 7+
}

const magnitudeFloor = Math.floor(
  item.magnitude,
).toString() as unknown as keyof typeof styleContainer

const address = item.location.split(' ')[0].trim()
let locationCity = item.location.split(' ')[1].trim()
locationCity = locationCity.replace('(', '').replace(')', '')
const { locale } = useI18n()
</script>

<template>
  <div :class="styleContainer[magnitudeFloor]" class="p-4 md:p-6">
    <div class="mx-auto flex max-w-screen-md gap-4 md:gap-6">
      <div class="rounded-xl w-24 flex items-center justify-center bg-black bg-opacity-5 px-2 py-1 text-2xl font-bold tabular-nums md:text-4xl">
        {{ item.magnitude }}
      </div>
      <div class="flex flex-col">
        <h3 class="text-lg font-bold">
          {{ locationCity }}
        </h3>
        <h5 class="opacity-60">
          {{ address }}
        </h5>
        <div class="opacity-60">
          <NuxtTime :datetime="item.date" month="long" day="numeric" hour="numeric" minute="numeric" :locale="locale" />
        </div>
      </div>
    </div>
  </div>
</template>
