<script setup lang="ts">
import type { Country } from '~~/types'

const emit = defineEmits(['select'])

const { data, app } = $defineProps<{
  data: Country[]
  app: boolean
}>()

const shortLevel = (level: number) => {
  switch (level) {
    case 1:
      return '🟢'
    case 2:
      return '🟡'
    case 3:
      return '🔴'
    default:
      return '🟢'
  }
}

const getLevel = (level: number) => {
  switch (level) {
    case 1:
      return 'bg-green-100 text-green-900'
    case 2:
      return 'bg-yellow-100 text-yellow-900'
    case 3:
      return 'bg-red-100 text-red-900'
    default:
      return 'bg-gray-100 text-gray-900'
  }
}

const select = (item: Country) => {
  if (item.status)
    emit('select', item)
}
</script>

<template>
  <div
    v-for="item in data"
    v-bind="$attrs" :key="item.slug"
    :class="[item.level >= 3 ? 'col-span-full' : 'col-span-2', item.status ? 'bg-white border hover:bg-gray-200' : 'opacity-50']"
    class="border rounded mb-4"
    @click="select(item)"
  >
    <div
      :key="item.name"
      :class="!item.status ? 'cursor-not-allowed' : ''"
      class="py-2 px-4 flex items-center relative justify-between"
    >
      <span
        v-if="item.level >= 3"
        class="animate-ping absolute top-5 right-5 inline-flex h-5 w-5 rounded-full bg-red-500"
      />
      <div class="flex flex-col w-full">
        <div class="flex items-end h-12 w-full">
          <div v-if="item.icon" class="border rounded flex-none flex items-center justify-center">
            <div :class="item.icon" class="w-8 h-8" />
          </div>
          <div class="text-gray-900 ml-2">
            <h3 class="text-sm font-semibold">
              {{ item.name }}
            </h3>
          </div>
        </div>
        <div class="flex flex-col my-2 w-full">
          <div class="grid grid-cols-4 gap-2 w-full">
            <span class="rounded bg-gray-100 w-full flex items-center justify-center py-1">
              {{ shortLevel(item.level) }}
            </span>
            <div
              :class="getLevel(item.level)"
              class="rounded w-full flex items-center justify-center py-1 text-sm text-gray-900"
            >
              <div class="icon-[ph--activity] mr-1 w-5 h-5" />
              {{ item.level }}
            </div>
          </div>
        </div>
        <p v-if="item.i18n.length > 0" class="text-sm text-gray-900 opacity-75">
          {{ item.i18n[0].description }}
        </p>
      </div>

      <div v-if="item.status" class="icon-[ph--caret-right-bold] w-6 h-6 flex flex-none text-red-600" />
    </div>
  </div>
</template>
