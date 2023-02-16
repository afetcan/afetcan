<script setup lang="ts">
export interface I18nItem {
  locale: string
  title: string
  description: string
}

export interface CountryItem {
  name: string
  slug: string
  icon: string
  level: number
  i18n: I18nItem[]
  status: boolean
}

const { data, app } = $defineProps<{
  data: CountryItem[]
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
</script>

<template>
  <div
    v-for="item in data"
    v-bind="$attrs" :key="item.slug"
    :class="[item.level >= 3 ? 'col-span-full' : 'col-span-2', item.status ? 'bg-white border hover:bg-gray-200' : 'opacity-50']"
    class="border rounded mb-4"
  >
    <NuxtLink
      :key="item.name"
      :class="!item.status ? 'cursor-not-allowed' : ''"
      :to="item.status ? !app ? `/?country=${item.slug}` : `/app/home?c=${item.slug}`
        : '#'"
      class="py-2 px-4 flex items-center relative justify-between"
    >
      <span
        v-if="item.level >= 3"
        class="animate-ping absolute top-5 right-5 inline-flex h-5 w-5 rounded-full bg-red-500"
      />
      <div class="flex flex-col w-full">
        <div class="flex items-top">
          <div v-if="item.icon" class="w-10 h-10 border rounded flex-none flex items-center justify-center">
            <div :class="item.icon" class="w-8 h-8" />
          </div>
          <h3 class="ml-2 text-sm font-semibold  text-gray-900 mb-1">
            {{ item.name }}
          </h3>
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
    </NuxtLink>
  </div>
</template>
