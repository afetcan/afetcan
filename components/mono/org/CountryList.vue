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
    :class="[item.level >= 3 ? 'col-span-full' : 'col-span-2', item.status ? 'bg-white border hover:bg-gray-200 dark:bg-gray-700' : 'opacity-50']"
    class="border rounded mb-4 cursor-pointer"
    @click="select(item)"
  >
    <MonoMolListItem
      :title="item.name"
      :icon="item.icon"
      :subtitle="item.i18n[0].description"
    />
  </div>
</template>
